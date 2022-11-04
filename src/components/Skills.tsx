import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import skill1 from '../assets/img/browser.gif';
import skill2 from '../assets/img/flow-chart.gif';
import skill3 from '../assets/img/html.gif';
import skill4 from '../assets/img/music-note.gif';
import skill5 from '../assets/img/rocket.gif';

export const Skills = () => {
    const colors = ['#E6E6FA', '#E6E6FA', '#E6E6FA', '#E6E6FA', '#E6E6FA'];
    const slideImages = [skill1, skill2, skill3, skill4, skill5];
    const text = ['Full Stack Web Development', 'Profficent in Object-Oriented Programming', 'Experience in many programming languages', 'Highly Creative and Collaborative', 'Motivated learner'];
    const [index, setIndex] = React.useState(0);
    const delay = 2500;
    const timeoutRef = React.useRef(0);

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = window.setTimeout(() => setIndex((prevIndex) => (prevIndex === colors.length - 1 ? 0 : prevIndex + 1)), delay);
        return () => {
            resetTimeout();
        };
    }, [index]);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <h1>Some of my Skills</h1>
                        <div className="slideshow">
                            <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                                {colors.map((backgroundColor, index) => (
                                    <div className="slide" key={index} style={{ backgroundColor }}>
                                        <img className="slide-img" src={slideImages[index]}></img>
                                        <div className="slide-text">{text[index]}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="slideshowDots">
                                {colors.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`slideshowDot${index === idx ? ' active' : ''}`}
                                        onClick={() => {
                                            setIndex(idx);
                                        }}
                                    ></div>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
