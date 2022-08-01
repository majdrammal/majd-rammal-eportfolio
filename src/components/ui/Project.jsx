import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Project = ({ data, num }) => {
    return document.getElementsByClassName(".project__list").innerHTML = 
        <li className={`project__${num}`}>
            <div className="project__wrapper">
                <img src={data[num].img} alt="" className="project__img" />
                <div className="project__wrapper--bg"></div>
                <div className="project__description">
                    <h3 className="project__description--title">
                        {data[num].title}
                    </h3>
                    <h4 className="project__description--sub-title">
                        {data[num].tech}
                    </h4>
                    <p className="project__description--para">{data[num].desc}</p>
                    <div className="project__description--links">
                        <a href="/Projects" className="project__description--link">
                            <FontAwesomeIcon icon="fa-solid fa-link" /> 
                        </a>
                    </div>
                </div>
            </div>
        </li>
}

export default Project;

// NOTE: FIX LINK FOR EACH PROJECT - ADD TO PROJECTS DATA
