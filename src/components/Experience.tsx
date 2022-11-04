import React from 'react';
import { Row, Col } from 'react-bootstrap';
import logo1 from '../assets/img/omnidian-logo.png';

export const Experience = () => {
    type cards = [
        {
            id: 1;
            company: 'Omnidian';
            role: 'Front';
            info: 'Back';
        },
        {
            id: '2';
            company: 'Verathon';
            role: 'Front1';
            info: 'Back1';
        }
    ];

    return (
        <section className="experience" id="experience">
            <Row>
                <h1>Work Experience</h1>
                <Col>
                    <a href="https://www.omnidian.com/">
                        <button className="buttons">
                            <h2>Omnidian</h2>
                            <p>Full Stack Software Engineer Intern</p>
                        </button>
                    </a>
                </Col>
                <Col>
                    <a href="https://www.verathon.com/">
                        <button className="buttons">
                            <h2>Verathon</h2>
                            <p>Embedded Software Engineer Intern</p>
                        </button>
                    </a>
                </Col>
                <Col>
                    <a href="https://www.paccar.com/">
                        <button className="buttons">
                            <h2>Paccar</h2>
                            <p>Desktop Support Intern</p>
                        </button>
                    </a>
                </Col>
            </Row>
        </section>
    );
};
