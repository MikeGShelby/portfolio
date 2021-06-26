import React from 'react';
import ContactLinks from '../ContactLinks';

function Contact() {
  return (
        <section className="section-content contact-section bg-dark">

            <div className="container">
                    <h3 id="contact" class="section-title contact-section-title text-center text-light">Contact Me</h3>
                    <h2 className="email">mikegshelby@gmail.com</h2>
                    <div className="contact-links-section">
                        <ContactLinks></ContactLinks>
                    </div>
            </div>
        </section>
  );
}

export default Contact;