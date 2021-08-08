import React from 'react';
import ContactLinks from './ContactLinks';

import './contact.css';

function Contact() {
  return (
        // <section className="section-content contact-section bg-dark">

        //     <div className="container">
        //             <h3 id="contact" class="section-title contact-section-title text-center text-light">Contact Me</h3>
        //             <h2 className="email">mikegshelby@gmail.com</h2>
        //             <div className="contact-links-section">
        //                 <ContactLinks></ContactLinks>
        //             </div>
        //     </div>
        // </section>

      <section  className="section-content about-section details-section">
              <h3 id="contact" class="section-title contact-section-title text-center text-light">Contact Me</h3>
              <div className="about-textbox about-textbox-details bg-dark-card round-borders">
                  <div className="about-textbox-content about-textbox-content-details">
                      <div className="contact-container">
                        <p>Interested in working with me on a full stack project? I'd love to hear from you! Please reach out at the below email. I will typically respond within a couple days. </p>
                          <h2 className="email">
                            <i class="fas fa-envelope-open-text"></i> mikegshelby@gmail.com
                          </h2>
                      </div>
                  </div>
              </div>
      </section>
  );
}

export default Contact;