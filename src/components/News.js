import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setArticles] = useState ([])
    const [loading, setLoading] = useState (true)
    const [page, setPage] = useState (1)
    const [totalResults, setTotalResults] = useState (0)
    
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {
    props.setProgress(20);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        props.setProgress(50);
        let parsedData = await response.json();
        props.setProgress(70);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    } catch (error) {
        console.error('Error fetching data:', error);
        // Handle the 426 status code specifically
        if (error.message.includes('Status: 426')) {
            // Display a message or perform actions for handling upgrade required
            alert('Upgrade Required: Please switch to a secure connection (HTTPS) or check for API updates.');
        }
        setLoading(false);
    }
};

    useEffect(() => {
        document.title= `${capitalizeFirstLetter(props.category)} - Newsie`;
        updateNews();
        // eslint-disable-next-line
    }, [])
    

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1)
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
      };

    return (
      <>
        <h1 className="text-center" style={{margin: '35px 0px', marginTop: '90px'}}>Newsie - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
        
        <div className="container">
           
        <div className="row">
        {articles.map((element) =>{
           return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title?element.title.slice(0, 65):""} description={element.description?element.description.slice(0, 95):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
        })}
        </div> 
        </div>
        </InfiniteScroll>
      </>
    )
}

News.defaultProps = {
    country:'in',
    pageSize: 8,
    category: 'general',
}

News.defaultProps = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News
