import React from 'react';
import RedSquare from '../assets/red square.png'
import NextPage from './ui/NextPage';
import PrevPage from './ui/PrevPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => {

    function moreAboutMe() {
        document.body.classList += " about__more--open"
    }

    function moreAboutMeClose() {
        document.body.classList.remove("about__more--open")
    }

    return (
        <section id="about">
            <div className="about__container">
                <div className="about__text">
                    <h1 className="about__title">About Me</h1>
                    <hr className="main__hr about__hr"></hr>
                    <p className="about__para">
                        I'm a 21 year-old Lebanese Software Engineering major with a 
                        passion for developing websites. 
                    </p>
                    <button className="button about__more" onClick={moreAboutMe}>Tell Me More</button>
                </div>
            </div>
            <div className="about__modal">
                <div className="about__modal--container">
                    <FontAwesomeIcon icon="fa-solid fa-x" className="modal__closer" onClick={moreAboutMeClose}/>
                    <h3 className="modal__title about__modal--title">
                        <b>
                            Here's more <span className="blue">About Me</span>
                        </b>
                            
                    </h3>
                    <h3 className="modal__sub-title about__modal--sub-title">
                        I'm a 21 year-old Lebanese Software Engineering major with a passion for developing websites. I'm currently a fourth-year student at the American University of Beirut. 
                    </h3>
                    <h3 className="modal__sub-title about__modal--sub-title">
                        I look forward to becoming a Frontend Software Engineer and solving difficult engineering problems every day with a team of like-minded individuals.
                    </h3>
                </div>
            </div>
            <NextPage text='Stack' />
            <PrevPage text='Home' link='' />
        </section>
    );
}

export default About;