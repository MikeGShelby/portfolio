import React from 'react';
import NavBanner from '../NavBanner';
import Nav from '../Nav';
import HeaderImage from '../../assets/images/galaxy-bg.jpg';


function Header() {
  return (
        <header className="header-section bg-dark">
              <Nav></Nav>
              <div className="header-subtitle text-left bg-dark-card round-borders">
                <h2>Full Stack Web Developer,</h2>
                <h2>Health Care Professional,</h2>
                <h2>Problem Solver</h2>
                <a href="#contact" className="btn-grad">LET'S WORK TOGETHER!</a>
              </div>

        </header>
  );
}

export default Header;