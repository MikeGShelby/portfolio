import React from 'react';
import NavBanner from '../NavBanner';
import Nav from '../Nav';


function Header() {
  return (
        <header className="header-section bg-dark">
              <Nav></Nav>
              <div className="header-subtitle text-left bg-dark-card round-borders">
                <h2>Web Developer.</h2>
                <h2>Health Care Professional.</h2>
                <h2>Problem Solver.</h2>
                <a href="#projects" className="btn-grad">VIEW MY WORK</a>
              </div>

        </header>
  );
}

export default Header;