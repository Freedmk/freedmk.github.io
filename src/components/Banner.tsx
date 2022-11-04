import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['Developer ', 'UI/UX Designer ', 'Musician '];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(100 - Math.random() * 100);
    const period = 50;

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
            setDelta(320);
        }
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio </span>
                        <h1>
                            {`Hi, I'm Katerina`}
                            <br></br>
                            <div className="wrapper">
                                <div className="words">
                                    <span className="word">Full Stack Developer</span>
                                    <span className="word">UI/UX Designer</span>
                                    <span className="word">Musician</span>
                                </div>
                            </div>
                        </h1>
                        <p className="blurb">
                            I am a graduate from Western Washington Universiy where I earned a Bachelor of Science in Computer Science and a Bachelor of Arts in Music. I am currently looking for a job
                            in software engineering. I am a creative, self-driven programmer motivated to make an impact. Please take a look around to learn more about me and if you're interested in
                            speaking, download my resume, fill in the email form, and connect with me on LinkedIn!
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
