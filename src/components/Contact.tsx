import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Container } from 'react-bootstrap';

export const Contact = () => {
    const form = useRef();
    const [user_name, setName] = useState('');
    const [user_email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [send, setSend] = useState('Send');

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.sendForm('gmailservice', 'template_oqa8x4q', e.currentTarget, 'PL9DIVQtwtOpbrmr5').then(
            (result) => {
                console.log(result.text);
                setName('');
                setEmail('');
                setMessage('');
                setSend('Message sent!');
            },
            (error) => {
                console.log(error.text);
            }
        );
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <form className="form" onSubmit={sendEmail}>
                    <label>Name</label>
                    <input id="user_name" type="text" name="user_name" onChange={(event) => setName(event.target.value)} value={user_name} />
                    <label>Email</label>
                    <input id="user_email" type="email" name="user_email" onChange={(event) => setEmail(event.target.value)} value={user_email} />
                    <label>Message</label>
                    <textarea id="message" name="message" onChange={(event) => setMessage(event.target.value)} value={message} />
                    <input id="send" name="send" type="submit" onChange={(event) => setSend(event.target.value)} value={send} />
                </form>
            </Container>
        </section>
    );
};
