import React from 'react';
import Subnav from '../Subnav';
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
                        <a href={Resume}>RESUME</a>
                    </li>

                    <li>
                        <a href="#contact">CONTACT</a>
                    </li>
                </ul>
            </nav>
    );
}

export default Nav;