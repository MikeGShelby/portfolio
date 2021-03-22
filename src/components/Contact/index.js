import React, { useState } from 'react';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section className="contact-section">
            <div className="section-title-bg">
                <h3 id="contact" className="section-title">CONTACT ME</h3>
            </div>

            <div className="section-content">
                    <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input placeholder="Name" type="text" name="name" defaultValue={name} onChange={handleChange} required />
                        </div>
                        <div>
                            <label htmlFor="email">Email address:</label>
                            <input placeholder="Enter email" type="email" name="email" defaultValue={email} onChange={handleChange} required />
                        </div>
                        <div>
                            <label htmlFor="message">Message:</label>
                            <textarea placeholder="Your message" type="text" name="message" defaultValue={message} onChange={handleChange} rows="5"></textarea>
                        </div>
                        <button classNameName="submit-button" type="submit" value="SUBMIT">SUBMIT</button>
                    </form>
            </div>
        </section>
    )
}

export default ContactForm;