import React from 'react';

function Nav() {
    function pageSelected() {
        window.onclick = e => {
            console.log(e.target.innerText);
        }
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
                    <a href="#about-me" onClick={() => pageSelected()}>About</a>
                </li>

                <li>
                    <a href="#projects" onClick={() => pageSelected()}>Projects</a>
                </li>

                <li>
                    <a href="#skills" onClick={() => pageSelected()}>Skills</a>
                </li>

                <li>
                    <a href="#contact" onClick={() => pageSelected()}>Contact</a>
                </li>
            </ul>
        </nav>
    </header>
  );
}

export default Nav;