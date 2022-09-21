import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['Developer ', 'Web Designer ', 'Musician '];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

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
                            <span className="wrap">{text}</span>
                        </h1>
                        <p>
                            I am a graduate from Western Washington Universiy where I earned a Bachelor's in Computer Science and a Bachelor's in Music. I am currently looking for a job in software
                            engineering. Please take a look around to learn more about me and if you're interested in speaking feel free to contact me, connect on LinkedIn, or download my resume!
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
