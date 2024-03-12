import React from "react";
import { NavLink } from "react-router-dom";
import Newsie_tag from './Newsie_tag.png'

const Footer = () => {
  return (

        <footer className="bottom py-3 text-center text-light footer-container dark bg-dark">
            <div>
            <NavLink className="navbar-brand" to="/">
                    <img src={Newsie_tag} alt="Newsie" style={{width: '350px'}}/>
                </NavLink>
            </div>
          <p>
            Unveiling the world's narratives in a glance. Your go-to for timely
            updates, insightful perspectives
          </p>
          <p>© 2024 Newsie, Inc</p>
        </footer>

  );
};

export default Footer; 
