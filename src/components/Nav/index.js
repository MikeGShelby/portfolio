import React from 'react';
import Subnav from '../Subnav';
import TitleLogo from '../TitleLogo';
import NavLogo from '../NavLogo';

function Nav() {
    return (
            <nav className="navigation">
                <NavLogo></NavLogo>

                <ul>
                    <li>
                        <a href="/about">About</a>
                    </li>

                    <li>
                        <a href="/projects">Projects</a>
                    </li>

                    <li>
                        <a href="/skills">Skills</a>
                    </li>

                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </nav>
    );
}

export default Nav;