import React from 'react';

function ContactLinks() {
  return (
    <ul className="contact-links-list">
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
  );
}

export default ContactLinks;