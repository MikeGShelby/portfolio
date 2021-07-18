import React, { useState } from 'react';
import { validateEmail } from '../../../assets/utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
          }

          if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
          }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section className="contact-section">
                <h3 id="contact" className="section-title">CONTACT ME</h3>


            <div className="section-content contact-content">
                    <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
                        <div>
                            <input placeholder="Name" type="text" name="name" defaultValue={name} onBlur={handleChange} required />
                        </div>
                        <div>
                            <input placeholder="Enter email" type="email" name="email" defaultValue={email} onBlur={handleChange} required />
                        </div>
                        <div>
                            <textarea placeholder="Your message" type="text" name="message" defaultValue={message} onBlur={handleChange} rows="5"></textarea>
                        </div>
                        {errorMessage && (
                            <div>
                                <p className="error-text">{errorMessage}</p>
                            </div>
                        )}
                        <button className="submit-button" type="submit" value="SUBMIT">SUBMIT</button>
                    </form>
            </div>
        </section>
    )
}

export default ContactForm;