import React from 'react';
import NextPage from './ui/NextPage';
import PrevPage from './ui/PrevPage';
import cssLogo from '../assets/css.webp'
import jsLogo from '../assets/js.webp'
import reactLogo from '../assets/react.webp'

const Stack = () => {
    return (
        <section id="stack">
            <div className="stack__container">
                <h1 className="stack__title">Here is my <span class="blue">Tech Stack</span></h1>
                <div className="stack__techs">
                    <figure className="tech__wrapper">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png" alt="" className="tech__img" />
                        <span className="tech__name">HTML</span>
                    </figure>
                    <figure className="tech__wrapper">
                        <img src={cssLogo} alt="" className="tech__img" />
                        <span className="tech__name">CSS</span>
                    </figure>
                    <figure className="tech__wrapper">
                        <img src={jsLogo} alt="" className="tech__img" />
                        <span className="tech__name">Javascript</span>
                    </figure>
                    <figure className="tech__wrapper">
                        <img src={reactLogo} alt="" className="tech__img" />
                        <span className="tech__name">React</span>
                    </figure>
                    <figure className="tech__wrapper">
                        <img src="https://cdn.worldvectorlogo.com/logos/firebase-1.svg" alt="" className="tech__img" />
                        <span className="tech__name">Firebase</span>
                    </figure>
                </div>
            </div>
            <NextPage text='Projects' />
            <PrevPage text='About' link='About' />
        </section>
    );
}

export default Stack;
