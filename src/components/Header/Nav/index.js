import React from 'react';
import NavLogo from '../NavLogo';
import SubNav from '../Subnav/';

import './nav.css';

function Nav() {
    return (
        <nav className="navigation">
            <NavLogo></NavLogo>
            {/* <SubNav></SubNav> */}

            <ul className="nav-links">
                <li>
                    <a href="#/about">ABOUT</a>
                </li>

                <li>
                    <a href="#/projects">PROJECTS</a>
                </li>

                <li>
                    <a href="#/resume">RESUME</a>
                </li>

                <li>
                    <a href="#/contact">CONTACT</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;