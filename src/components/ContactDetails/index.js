import React from 'react';
import HeaderDetails from '../HeaderDetails';
import ContactLinks from '../ContactLinks';

function ContactDetails() {
  return (
      <React.Fragment>
        <HeaderDetails></HeaderDetails>
        <section  className="section-content about-section contact-section about-section-details section-details-padding-top ">
                <div className="about-textbox about-textbox-details bg-dark-card round-borders">
                    <div className="about-textbox-content about-textbox-content-details">
                        <div className="container">
                            <h3 id="contact" class="section-title contact-section-title text-center text-light">Contact Me</h3>
                            <h2 className="email">mikegshelby@gmail.com</h2>
                            <div className="contact-links-section">
                                <ContactLinks></ContactLinks>
                            </div>
                        </div>

                    </div>
                </div>
        </section>
    </React.Fragment>
  );
}

export default ContactDetails;