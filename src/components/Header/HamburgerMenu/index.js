import React from 'react';

function HamburgerMenu() {
    return (
        <nav className="navigation">

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

export default HamburgerMenu;