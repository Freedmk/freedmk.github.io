import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['Developer', 'UI/UX Designer', 'Musician'];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(200 - Math.random() * 100);
    const period = 1500;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () => {
            clearInterval(ticker);
        };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta((prevDelta) => prevDelta / 2);
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio </span>
                        <h1>
                            {`Hi I'm Katerina `}
                            <br></br>
                            <span className="wrap">{text}</span>
                            <br></br>
                        </h1>
                        <p>
                            I am a graduate from Western Washington Universiy where I earned a Bachelor of Science in Computer Science and a Bachelor of Arts in Music. I am currently looking for a job
                            in software engineering. Please take a look around to learn more about me and if you're interested in speaking feel free to contact me, connect on LinkedIn, or download my
                            resume!
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
