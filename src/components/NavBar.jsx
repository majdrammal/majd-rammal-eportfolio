import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div class="nav__bar--page">
            <Link to="/" class="nav__bar--link">Home</Link>
            <Link to="/About" class="nav__bar--link">About</Link>
            <Link to="/Stack" class="nav__bar--link">Tech Stack</Link>
            <Link to="/Projects" class="nav__bar--link">Projects</Link>
        </div>
    );
}

export default NavBar;
