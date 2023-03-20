import React, { useState } from 'react';
import './Contact.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // handle form submission here
    };

    return (
        <>
        <Header />
        <div className="contact-form-container" id='contact'>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <label htmlFor="message">Message:</label>
            <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} />

            <button type="submit">Submit</button>
        </form>
        </div>
        <Footer />
        </>
    );
}

export default ContactForm;
