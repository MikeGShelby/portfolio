import React from 'react';
import Subnav from '../Subnav';
import TitleLogo from '../TitleLogo';
import NavLogo from '../NavLogo';

function Nav() {
    return (
            <nav className="navigation">
                <NavLogo></NavLogo>

                <ul className="nav-links">
                    <li>
                        <a href="#about">ABOUT</a>
                    </li>

                    <li>
                        <a href="#projects">PROJECTS</a>
                    </li>

                    <li>
                        <a href="/src/assets/documents/resume.pdf">RESUME</a>
                    </li>

                    <li>
                        <a href="#contact">CONTACT</a>
                    </li>
                </ul>
            </nav>
    );
}

export default Nav;