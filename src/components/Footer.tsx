import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcong from '../assets/img/nav-icong.svg';
import resume from '../assets/img/Resume.pdf';
import { Download } from 'react-bootstrap-icons';

const Footer = () => {
    return (
        <section className="footer">
            <Row>
                <Col>
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/katerina-f-92b417a2/">
                            <img src={navIcon1} alt="" />
                        </a>
                        <a href="https://github.com/Freedmk">
                            <img src={navIcong} alt="" />
                        </a>
                    </div>{' '}
                    <a href={resume} download="KaterinaFreedmanResume">
                        <Download />
                        Download My Resume
                    </a>
                </Col>
            </Row>
        </section>
    );
};

export default Footer;
