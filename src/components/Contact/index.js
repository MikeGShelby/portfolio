import React from 'react';
import ContactLinks from '../Footer/ContactLinks';

import './contact.css';

function Contact() {
  return (
      <section  className="section-content about-section details-section home-section">
              <h3 id="contact" class="section-title contact-section-title text-center text-light">Contact Me</h3>
              <div className="about-textbox about-textbox-details bg-dark-card round-borders">
                  <div className="about-textbox-content about-textbox-content-details">
                      <div className="contact-container">
                        <p>Interested in having me join your team? I'd love to speak to you about the opportunity to collaborate! Please reach out at the below email. I will typically respond within a couple days. I look forward to hearing from you!</p>
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