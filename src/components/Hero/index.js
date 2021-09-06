import React from 'react';
import { HashLink } from 'react-router-hash-link';

import '../Header/header.css';
import './hero.css';
import MoonImage from '../../assets/images/header-graphics/moon.png';


function Hero() {
  return (
    <header className="header-section">
        <div className="header-hero round-borders">
            <div className="hero-lines">
                <h2>Full Stack Web Developer,</h2>
                <h2>Health Care Professional,</h2>
                <h2>and Creative Problem Solver</h2>
            </div>

            <HashLink smooth to="/#contact" className="btn-grad btn-cta">
                Let's Work Together
            </HashLink>
        </div>

        <img src={MoonImage} className="moon-image" alt="moon"></img>

        <div className="arrow-link">
            <HashLink smooth to="/#about">
            <i class="fas fa-chevron-down icon-arrow"></i>
            </HashLink>
        </div>
    </header>
  );
}

export default Hero;

