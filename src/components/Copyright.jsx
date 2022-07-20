import React from 'react';
import reactLogo from '../assets/react_logo.png'

const Copyright = () => {
    return (
        <div className="copyright__wrapper">
        <div className="copyright__upper">
            <p class="copyright">Made With</p>
            <img src={reactLogo} alt="" className="react__logo"/>
        </div>
        <p class="copyright">Copyright &copy; 2022 | Majd Rammal</p>
        </div>
    );
}

export default Copyright;
