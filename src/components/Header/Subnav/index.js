import React from 'react';

function Subnav() {
    return (
            <div className="menu-wrap">
                <input type="checkbox" className="toggler"></input>
                <div className="hamburger"><div></div></div>
                <nav className="menu">
                    <div>
                        <div>
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
                        </div>
                    </div>
                </nav>
            </div>
    );
}

export default Subnav;