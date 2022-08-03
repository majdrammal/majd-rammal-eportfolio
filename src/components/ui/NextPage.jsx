import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NextPage = ({ text }) => {

    let navigate = useNavigate()

    return (
        <div className="next__page both__page">
            <h2 className="both__page--text">{text}</h2>
            <FontAwesomeIcon icon="fa-solid fa-circle-arrow-right" onClick={() => navigate(`/${text}`)}/>
        </div>
    );
}

export default NextPage;
