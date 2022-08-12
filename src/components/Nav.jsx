import React from 'react';
import { Link } from 'react-router-dom';
import mainLogo from '../assets/MR-logo.png'

const Nav = ({ navBarOpen }) => {

    function contactOpen() {
        document.body.classList += " contact__open"
    }

    function barOpen() {
        navBarOpen()
    }

    return (
        <nav>
            <div className="nav__left">
                <Link to="/">
                    <img src={mainLogo} alt="" className="nav__logo"></img>
                </Link>
            </div>
            <div className="nav__right">
                <ul className="nav__links">
                    <Link to="/" className="nav__link">Home</Link>
                    <Link to="/about" className="nav__link">About</Link>
                    <Link to="/stack" className="nav__link">Tech Stack</Link>
                    <Link to="/projects" className="nav__link">Projects</Link>
                    <button className="button nav__link--button" onClick={contactOpen}>Contact</button>
                </ul>
                <div className="nav__bar" onClick={barOpen}>
                    <hr className="nav__bar--icon"></hr>
                    <hr className="nav__bar--icon"></hr>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
