import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ navBarOpen }) => {

    function barClose() {
        navBarOpen()
    }

    return (
        <div className="nav__bar--page">
            <Link to="/" className="nav__bar--link" onClick={barClose}>Home</Link>
            <Link to="/About" className="nav__bar--link" onClick={barClose}>About</Link>
            <Link to="/Stack" className="nav__bar--link" onClick={barClose}>Tech Stack</Link>
            <Link to="/Projects" className="nav__bar--link" onClick={barClose}>Projects</Link>
            <a href="mailto: majdrammal2001@gmail.com" className="nav__bar--link">Contact</a>
        </div>
    );
}

export default NavBar;
