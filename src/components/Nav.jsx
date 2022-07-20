import React from 'react';
import { Link } from 'react-router-dom';
import mainLogo from '../assets/MR-logo.png'

const Nav = ({ contactOpen, contactClose }) => {

    function contactOpen() {
        document.body.classList += " contact__open"
    }

    let isNavOpen = false
    function navBarOpen() {
        if (!isNavOpen) {
            document.body.classList += ' nav__bar--open'
            isNavOpen = !isNavOpen
        }
        else {
            document.body.classList.remove('nav__bar--open')
            isNavOpen = !isNavOpen
        }
    }

    return (
        <nav>
            <div class="nav__left">
                <Link to="/">
                    <img src={mainLogo} alt="" class="nav__logo"></img>
                </Link>
            </div>
            <div class="nav__right">
                <ul class="nav__links">
                    <Link to="/" class="nav__link">Home</Link>
                    <Link to="/About" class="nav__link">About</Link>
                    <Link to="/stack" class="nav__link">Tech Stack</Link>
                    <Link to="/Projects" class="nav__link">Projects</Link>
                    <button class="button nav__link--button" onClick={contactOpen}>Contact</button>
                </ul>
                <div class="nav__bar" onClick={navBarOpen}>
                    <hr class="nav__bar--icon"></hr>
                    <hr class="nav__bar--icon"></hr>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
