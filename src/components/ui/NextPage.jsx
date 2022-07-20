import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NextPage = ({ text }) => {
    return (
        <div class="next__page both__page">
            <h2 class="both__page--text">{text}</h2>
            {
                text === 'Contact' ? ( 
                    <Link to='/' >
                    <FontAwesomeIcon icon="fa-solid fa-circle-envelope" />
                    </Link>
                ) : ( 
            
            <Link to={`/${text}`} >
                <FontAwesomeIcon icon="fa-solid fa-circle-arrow-right" />
            </Link>
            )
            }
        </div>
    );
}

export default NextPage;
