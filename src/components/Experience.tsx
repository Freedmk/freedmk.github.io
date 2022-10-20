import { type } from '@testing-library/user-event/dist/type';
import { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import WorkCards from './Card';

export const Experience = () => {
    type cards = [
        {
            id: 1;
            company: 'Omnidian';
            front: 'Front';
            back: 'Back';
        },
        {
            id: '2';
            company: 'Verathon';
            front: 'Front1';
            back: 'Back1';
        }
    ];

    return (
        <section className="experience" id="experience">
            <Row>
                <Col>
                    <WorkCards
                        company="Omnidian"
                        front="Full Stack Software Engineer Intern"
                        back="Maintained SQL database,
 Programmed in ReactJs to develop and maintain features of a full stack internal operations website,
Tested and maintained code
"
                    />
                </Col>
                <Col>
                    <WorkCards company="Verathon" front="Embedded Software Engineer Intern" back="backinfo" />
                </Col>
                <Col>
                    <WorkCards company="PACCAR" front="Desktop Support Intern" back="backinfo" />
                </Col>
            </Row>
        </section>
    );
};
