import React from 'react';
import { AboutPage } from './components/About';
import './Application.css';
import { NavBar } from './components/Navbar';
import { Banner } from './components/Banner';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import 'bootstrap/dist/css/bootstrap.min.css';
// import LayoutComponent from './components/Layout';
//
// import HomePage from './pages/Home';
// import TestPage from './pages/Test';

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
    return (
        <div className="App">
            <NavBar />
            <Banner />
            <AboutPage />
            <Experience />
            <Contact />
        </div>
    );
};

export default Application;
