import React from 'react';
import NavLogo from '../NavLogo';
import Resume from '../../assets/documents/resume.pdf';

function Nav() {
    return (
            <nav className="navigation">
                <NavLogo></NavLogo>

                <ul className="nav-links">
                    <li>
                        <a href="/portfolio-react/about">ABOUT</a>
                    </li>

                    <li>
                        <a href="/portfolio-react/projects">PROJECTS</a>
                    </li>

                    <li>
                        <a href={Resume} target="_blank" rel="noopener noreferrer">RESUME</a>
                    </li>

                    <li>
                        <a href="/portfolio-react/contact">CONTACT</a>
                    </li>
                </ul>
            </nav>
    );
}

export default Nav;