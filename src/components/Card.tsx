import React, { FC, useState } from 'react';

type CardProps = {
    company: string;
    role: string;
    infoA: string;
    infoB: string;
    infoC: string;
};

const Card: FC<CardProps> = ({ company, role, infoA, infoB, infoC }) => {
    const [flip, setFlip] = useState(false);
    return (
        <div className={`card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>
            <div className="front">
                <h2>{company}</h2>
                <p>{role}</p>
            </div>
            <div className="description">
                <ul>
                    <li>{infoA}</li>
                    <li>{infoB}</li>
                    <li>{infoC}</li>
                </ul>
            </div>
        </div>
    );
};

export default Card;
