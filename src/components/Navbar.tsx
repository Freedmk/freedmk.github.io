import React, { useState, useEffect, SetStateAction } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/img/blackCat.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from 'react-router-dom';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const onUpdateActiveLink = (value: SetStateAction<string>) => {
        setActiveLink(value);
    };

    return (
        <Router>
            <Navbar expand="md" className={scrolled ? 'scrolled' : ''}>
                <Container>
                    <img src={logo} alt="Logo" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>
                                Home
                            </Nav.Link>
                            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>
                                Skills
                            </Nav.Link>
                            <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experience')}>
                                Experience
                            </Nav.Link>
                        </Nav>
                        <span className="navbar-text">
                            <div className="social-icon">
                                <a href="https://www.linkedin.com/in/katerina-f-92b417a2/">
                                    <img src={navIcon1} alt="" />
                                </a>
                            </div>
                            <HashLink to="#connect">
                                <button className="vvd">
                                    <span>Let’s Connect</span>
                                </button>
                            </HashLink>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    );
};
