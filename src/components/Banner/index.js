import React from 'react';
import TitleLogo from '../TitleLogo';
import NavBanner from '../NavBanner';


function Banner() {
  return (
          <header className="header-section">
                <div className="logo-container">
                        <TitleLogo></TitleLogo>
                </div>

                <div className="banner-textbox">
                        <h2 className="banner-textbox-title">Full Stack Web Developer</h2>
                        <NavBanner></NavBanner>
                </div>
        </header>
  );
}

export default Banner;