import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { HashRouter as Router } from 'react-router-dom';

import Nav from '../Nav';
import MoonImage from '../../assets/images/header-graphics/moon.png';


function Header() {
  return (
        <header className="header-section bg-dark">
              <Nav></Nav>
              <div className="header-hero bg-dark-card round-borders">
                <div className="header-lines">
                  <h2>Full Stack Web Developer,</h2>
                  <h2>Health Care Professional,</h2>
                  <h2>and Creative Problem Solver</h2>
                </div>

                <HashLink smooth to="/#contact" className="btn-grad btn-cta">
                  LET'S WORK TOGETHER!
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

export default Header;