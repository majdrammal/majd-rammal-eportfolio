import React from 'react';
import NextPage from './ui/NextPage';
import linkedinLogo from '../assets/linkedin.png'
import githubLogo from '../assets/github logo.png'
import resume from '../assets/Majd Rammal - CV.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
    return (
        <section id="home">
            <div className="main">
                <div className="main__container">
                    <div className="social__links">
                        <a href="https://www.linkedin.com/in/majd-rammal-637001212/" target="_blank" className="social__link--anchor">
                            <img src={linkedinLogo} className="social__link"/>
                        </a>
                        <a href="https://github.com/majdrammal" target="_blank" className="social__link--anchor">
                        <img src={githubLogo} className="social__link"/>
                        </a>
                        <a href={resume} className="social__link--anchor" target="_blank">
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
            <div className="home__background home__background--1"></div>
            <div className="home__background home__background--2"></div>
            <div className="home__background home__background--3"></div>
            <div className="home__background home__background--4"></div>
            <div className="home__background home__background--5"></div>
            <div className="home__background home__background--6"></div>
            <div className="home__background home__background--7"></div>
            <div className="home__background home__background--8"></div>
            <div className="home__background home__background--9"></div>
            <div className="home__background home__background--10"></div>
        </section>
    );
}

export default Home;
