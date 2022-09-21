import { Container, Row, Col } from 'react-bootstrap';
import { Box } from 'react-bootstrap-icons';

export const Experience = () => {
    return (
        <section className="experience">
            <Container>
                <Row>
                    <Col>
                        <h3>Full Stack Software Engineer Intern</h3>
                        <p>
                            <Box></Box> Maintained SQL database
                            <br />
                            <Box></Box> Worked in ReactJs to develop and maintain features of a full stack internal operations website
                            <br />
                            <Box></Box> Modified and improved a search engine API
                            <br />
                            <Box></Box> Tested and maintained code
                        </p>
                    </Col>
                    <Col>
                        <h3>Embedded Software Engineer Intern</h3>
                        <p>
                            <Box></Box> Worked on several projects in an agile work environment
                            <br />
                            <Box></Box> Developed key encryptions for user data
                            <br />
                            <Box></Box> Built a linux environment on a virtual machine
                            <br />
                            <Box></Box> Deployed key UX updates, using C++ and Qt, to a bladder scanner
                            <br />
                            <Box></Box> Performed user testing on Hardware.
                        </p>
                    </Col>
                    <Col>
                        <h3>Desktop Support Intern</h3>
                        <p>
                            <Box></Box> Migrated employees to iPhone 11’s
                            <br />
                            <Box></Box> Made important updates and repairs to employees computers
                            <br />
                            <Box></Box> Created scripts for fast tracking the process of pulling and organizing information from a AWS database to improve the onboarding process.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
