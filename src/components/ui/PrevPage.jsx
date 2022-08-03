import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';

const PrevPage = ({ text, link }) => {

    let navigate = useNavigate()

    return (
        <div className="prev__page both__page">
            <h2 className="both__page--text">{text}</h2>
            <FontAwesomeIcon icon="fa-solid fa-circle-arrow-left" onClick={() => navigate(`/${link}`)}/>
        </div>
    );
}

export default PrevPage;
