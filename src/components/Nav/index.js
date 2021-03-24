import React, { useEffect } from 'react';
import About from '../About';
import Projects from '../Projects';
import Skills from "../Skills";
import Contact from "../Contact";

const components = {
    AboutPage:About,
    ProjectsPage: Projects,
    SkillsPage: Skills,
    ContactPage: Contact
  };

function Nav(props) {
    function selectPage() {
        console.log(this)
      }

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