import React from 'react';
import TitleLogo from '../TitleLogo';
import NavBanner from '../NavBanner';
import Nav from '../Nav';


function Header() {
  return (
        <header className="header-section">
              <Nav></Nav>
                {/* <div className="logo-container">
                </div> */}
                <h2 className="header-subtitle">Full Stack Web Developer</h2>
        </header>
  );
}

export default Header;