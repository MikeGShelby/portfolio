import React from 'react';

function Contact() {
  return (
        <section className="section-content contact-section bg-dark">

            <div className="container">
                    <h3 id="contact" class="section-title contact-section-title text-center text-light">Contact Me</h3>

                    <div className="contact-links">
                        <h2 className="email">mikegshelby@gmail.com</h2>
                        <ul>
                            <li>
                                <a href="mailto:mikegshelby@gmail.com">
                                <i class="fas fa-envelope-open-text">
                                </i>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/MikeGShelby" target="_blank">
                                <i class="fab fa-github">
                                </i></a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/mikeshelby/" target="_blank">
                                <i class="fab fa-linkedin-in">
                                </i></a>
                            </li>
                        </ul>
                    </div>

            </div>

        </section>
  );
}

export default Contact;