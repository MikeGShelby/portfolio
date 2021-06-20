import React from 'react';
import NavBanner from '../NavBanner';
import Nav from '../Nav';


function Header() {
  return (
        <header className="header-section bg-dark">
              <Nav></Nav>
              <div className="header-subtitle text-center bg-dark-card round-borders">
                <h2>Web Developer</h2>
                <h2>Health Care Professional</h2>
                <h2>Problem Solver</h2>
              </div>
        </header>
  );
}

export default Header;