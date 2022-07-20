import React from 'react';
import NextPage from './ui/NextPage';
import linkedinLogo from '../assets/linkedin.png'
import githubLogo from '../assets/github logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
    return (
        <section id="home">
            <div className="main">
                <div className="main__container">
                    <div className="social__links">
                        <a href="" className="social__link--anchor">
                            <img src={linkedinLogo} className="social__link"/>
                        </a>
                        <a href="" className="social__link--anchor">
                        <img src={githubLogo} className="social__link"/>
                        </a>
                        <a href="" className="social__link--anchor">
                            <FontAwesomeIcon icon="fa-file-pdf" className="social__link social__link--special" />
                        </a>
                    </div>
                    <div className="main__text">
                        <h1 className="main__title">Majd Rammal</h1>
                        <hr className="main__hr"></hr>
                        <h3 className="main__sub-title">Front-End Developer</h3>
                    </div>
                </div>
            </div>
            <NextPage text='About' />
        </section>
    );
}

export default Home;
