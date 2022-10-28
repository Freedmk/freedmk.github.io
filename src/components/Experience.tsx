import { type } from '@testing-library/user-event/dist/type';
import { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import WorkCards from './Card';

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
                    <WorkCards
                        company="Omnidian"
                        role="Full Stack Software Engineer Intern"
                        infoA="Maintained SQL database"
                        infoB=" Programmed in ReactJs to develop and maintain features of a full stack internal operations website"
                        infoC="Tested and maintained code"
                    />
                </Col>
                <Col>
                    <WorkCards
                        company="Verathon"
                        role="Embedded Software Engineer Intern"
                        infoA="Deployed key UX updates and repaired Repaired several bugs, using C++ and Qt, onto a bladder scanner"
                        infoB="Programmed public key encryptions for user data"
                        infoC="Built a linux environment on a virtual machine"
                    />
                </Col>
                <Col>
                    <WorkCards
                        company="PACCAR"
                        role="Desktop Support Intern"
                        infoA="Migrated employees to iPhone 11’s"
                        infoB="Upgraded and Repaired  employees computers Operating Systems. "
                        infoC="Built scripts for streamlined  information collection from an AWS database"
                    />
                </Col>
            </Row>
        </section>
    );
};
