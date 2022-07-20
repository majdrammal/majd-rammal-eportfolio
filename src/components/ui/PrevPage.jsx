import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const PrevPage = ({ text, link }) => {
    return (
        <div class="prev__page both__page">
            <h2 class="both__page--text">{text}</h2>
            <Link to={`/${link}`} >
                <FontAwesomeIcon icon="fa-solid fa-circle-arrow-left" />
            </Link>
        </div>
    );
}

export default PrevPage;
