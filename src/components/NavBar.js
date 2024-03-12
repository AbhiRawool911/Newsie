import React from 'react';
import { NavLink } from "react-router-dom";
import Newsie_name from './Newsie_name.png'

const NavBar = () => {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid mx-2">
                <NavLink className="navbar-brand" to="/">
                    <img src={Newsie_name} alt="Newsie" style={{width: '90px', height: '40px',  objectFit: 'fill', scale: '1.2'}}/>
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mb-lg-0">
                    <li className="nav-item"><NavLink className="nav-link" aria-current="page" to="/">Home</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="/entertainment">Entertainment</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="/general">General</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="/health">Health</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="/science">Science</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="/sports">Sports</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="/business">Business</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="/technology">Technology</NavLink></li>
                </ul>
                </div>
            </div>
        </nav>
      </div>
    );
}

export default NavBar;
