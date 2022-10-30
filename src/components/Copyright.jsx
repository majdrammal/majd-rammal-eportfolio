import React from 'react';
import cssLogo from '../assets/css.webp'
import jsLogo from '../assets/js.webp'
import reactLogo from '../assets/react.webp'

const Copyright = () => {
    return (
        <div className="copyright__wrapper">
        <div className="copyright__upper">
            <p className="copyright">Built With Love and</p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png" alt="" className="copyright__logo"/>
            <img src={cssLogo} alt="" className="copyright__logo"/>
            <img src={jsLogo} alt="" className="copyright__logo"/>
            <img src={reactLogo} alt="" className="copyright__logo"/>
        </div>
        <p className="copyright">Copyright &copy; 2022 | Majd Rammal</p>
        </div>
    );
}

export default Copyright;
