import React from 'react';

function ConnectLinks() {
  return (
    <ul className="contact-links-list">
        <li>
            <a href="mailto:mikegshelby@gmail.com" rel="noopener noreferrer">
            <i class="fas fa-envelope-open-text">
            </i>
            </a>
        </li>
        <li>
            <a href="https://github.com/MikeGShelby" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-github">
            </i></a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/mikeshelby/" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-linkedin-in">
            </i></a>
        </li>
    </ul>
  );
}

export default ConnectLinks;