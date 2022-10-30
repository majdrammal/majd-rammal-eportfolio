import React, { useState, useEffect } from 'react';
import NextPage from './ui/NextPage';
import PrevPage from './ui/PrevPage';
import Project from './ui/Project';
import { data } from '../ProjectsData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Projects = () => {

    let num = -1
    function projectOpen() {
        document.body.classList.remove(`project__open--${num}`)
        if (num == data.length - 1) {
            num = 0
            document.body.classList += ` project__open--${num}`
        }
        else {
            num++
            document.body.classList += ` project__open--${num}`
        }
    }

    function projectPrev() {
        document.body.classList.remove(`project__open--${num }`)
        if (num == 0) {
            num = data.length - 1
            document.body.classList += ` project__open--${num}`
        }
        else {
            num--
            document.body.classList += ` project__open--${num}`
        }
    }

    useEffect(() => { 
        document.body.classList = ""
        projectOpen()
    }, [])

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
                    <Project num={6} />
                    <Project num={7} />
                    <Project num={8} />
                </ul>
                <div className="project__hr--list">
                    <FontAwesomeIcon icon="fa-solid fa-backward" onClick = {() => projectPrev()}/>
                    <FontAwesomeIcon icon="fa-solid fa-forward" onClick = {() => projectOpen()}/>
                    {/* <button className="project__btn" >Back</button>
                    <button className="project__btn" >Next</button> */}
                </div>
            </div>
            <PrevPage text="stack" link="stack" />
        </section>
    );
}

export default Projects;
