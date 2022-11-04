import React, { FC, useState } from 'react';
import logo1 from '../assets/img/omnidian-logo.png';

type CardProps = {
    company: string;
    role: string;
    url: string;
};

const Card: FC<CardProps> = ({ company, role, url }) => {
    return (
        <div className="card">
            <a href={url}>
                <h2> {company}</h2>
            </a>
            <p>{role}</p>
        </div>
    );
};

export default Card;
