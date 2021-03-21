import React from 'react';

function Footer() {
  return (
    <footer className="contact-section">
        <div className="contact-links">
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
    </footer>
  );
}

export default Footer;