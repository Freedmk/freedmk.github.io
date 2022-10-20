import React, { FC, useState } from 'react';
type CardProps = {
    company: string;
    front: string;
    back: string;
};

const Card: FC<CardProps> = ({ company, front, back }) => {
    const [flip, setFlip] = useState(false);
    return (
        <div className={`card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>
            <div className="front">
                <h1>{company}</h1>
                <br></br>
                <p>{front}</p>
            </div>
            <div className="back">{back}</div>
        </div>
    );
};

export default Card;
