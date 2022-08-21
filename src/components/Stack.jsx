import React from 'react';
import NextPage from './ui/NextPage';
import PrevPage from './ui/PrevPage';
import cssLogo from '../assets/css.webp'
import jsLogo from '../assets/js.webp'
import typescriptLogo from '../assets/typescript.webp'
import reactLogo from '../assets/react.webp'
import git from '../assets/git.png'
import Tech from './ui/Tech';
import sass from '../assets/sass.png'

const Stack = () => {
    return (
        <section id="stack">
            <div className="stack__container">
                <h1 className="stack__title">Here is my <span className="blue">Tech Stack</span></h1>
                <div className="stack__techs">
                    <Tech name="HTML" img="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png" />
                    <Tech name="CSS" img={cssLogo} />
                    <Tech name="Javascript" img={jsLogo} />
                    <Tech name="React" img={reactLogo} />
                    <Tech name="Typescript" img={typescriptLogo} />
                    <Tech name="Firebase" img="https://cdn.worldvectorlogo.com/logos/firebase-1.svg" />
                    <Tech name="Git" img={git} />
                    <Tech name="Sass" img={sass} />
                </div>
            </div>
            <NextPage text='projects' />
            <PrevPage text='about' link='about' />
        </section>
    );
}

export default Stack;
