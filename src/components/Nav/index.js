import React, { useEffect } from 'react';
import  { capitalizeFirstLetter } from '../../assets/utils/helpers.js';

function Nav(props) {
    const {
        pages = [],
        setCurrentPage,
        currentPage,
      } = props;

      useEffect(() => {
        document.title = capitalizeFirstLetter(currentPage.name);
      }, [currentPage]);

    return (
        <header className="header">
            <a href="/" className="title-link">
                <h1>
                    Mike Shelby &#160; &#160;
                    <span className="subheader-text">Full Stack Developer</span>
                </h1>
            </a>
            <nav className="navigation">
                <ul>
                    <li>
                        <a href="#about-me">About</a>
                    </li>

                    <li>
                        <a href="#projects">Projects</a>
                    </li>

                    <li>
                        <a href="#skills" >Skills</a>
                    </li>

                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;