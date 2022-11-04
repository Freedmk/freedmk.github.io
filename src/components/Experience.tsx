import { Row, Col } from 'react-bootstrap';
import WorkCards from './Card';
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
                    <WorkCards company="Omnidian" role="Full Stack Software Engineer Intern" url="https://www.omnidian.com/" />
                </Col>
                <Col>
                    <WorkCards company="Verathon" role="Embedded Software Engineer Intern" url="https://www.verathon.com/" />
                </Col>
                <Col>
                    <WorkCards company="PACCAR" role="Desktop Support Intern" url="https://www.paccar.com/" />
                </Col>
            </Row>
        </section>
    );
};
