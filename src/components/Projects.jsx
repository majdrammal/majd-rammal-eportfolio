import React, { useState } from 'react';
import NextPage from './ui/NextPage';
import PrevPage from './ui/PrevPage';
import Project from './ui/Project';
import { data } from '../ProjectsData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Projects = () => {

    function projectOpen(num) {
        for (let i = 0; i < data.length; i++) {
            document.body.classList.remove(`project__open--${i}`)
        }
        document.body.classList += ` project__open--${num}`
    }

    projectOpen(0);

    return (
        <section id="projects">
            <div className="projects__container">
                <h1 className="projects__title">
                    Here are my <span className="blue">Projects</span>
                </h1>
                <ul className="project__list">
                    <Project num={0} />
                    <Project num={1} />
                    <Project num={2} />
                    <Project num={3} />
                    <Project num={4} />
                    <Project num={5} />
                </ul>
                <div className="project__hr--list">
                    <hr className="project__hr project__hr--0" onClick = {() => projectOpen(0)} />
                    <hr className="project__hr project__hr--1" onClick = {() => projectOpen(1)}/>
                    <hr className="project__hr project__hr--2" onClick = {() => projectOpen(2)}/>
                    <hr className="project__hr project__hr--3" onClick = {() => projectOpen(3)}/>
                    <hr className="project__hr project__hr--4" onClick = {() => projectOpen(4)}/>
                    <hr className="project__hr project__hr--5" onClick = {() => projectOpen(5)}/>
                </div>
            </div>
            <PrevPage text="stack" link="stack" />
        </section>
    );
}

export default Projects;
