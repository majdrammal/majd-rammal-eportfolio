import React from 'react';

const Tech = ({ name, img }) => {
    return (
        <figure className="tech__wrapper">
            <img src={img} alt="" className="tech__img" />
            <span className="tech__name">{name}</span>
        </figure>
    );
}

export default Tech;
