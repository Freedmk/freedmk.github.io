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
                            <Box></Box> Programmed in ReactJs to develop and maintained features of a full stack internal operations website
                            <br />
                            <Box></Box> Tested and maintained code
                        </p>
                    </Col>
                    <Col>
                        <h3>Embedded Software Engineer Intern</h3>
                        <p>
                            <Box></Box> Repaired several bugs
                            <br />
                            <Box></Box> Programmed public key encryptions for user data
                            <br />
                            <Box></Box> Built a linux environment on a virtual machine
                            <br />
                            <Box></Box> Deployed key UX updates, using C++ and Qt, to a bladder scanner
                            <br />
                            <Box></Box> Tested software on the bladder scanner
                        </p>
                    </Col>
                    <Col>
                        <h3>Desktop Support Intern</h3>
                        <p>
                            <Box></Box> Migrated employees to iPhone 11
                            <br />
                            <Box></Box> Upgraded and Repaired employees computers Operating Systems.
                            <br />
                            <Box></Box> Built scripts to streamline information collection from an AWS database.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
