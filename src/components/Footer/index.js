import React from 'react';
import ContactLinks from './ContactLinks';

import '../Contact/contact.css';

function Footer() {
  return (
        <section className="section-content contact-section">
            <div className="container">
                    <div className="contact-links-section">
                        <ContactLinks></ContactLinks>
                    </div>
            </div>
        </section>
  );
}

export default Footer;