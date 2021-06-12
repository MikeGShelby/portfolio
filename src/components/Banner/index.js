import React from 'react';
import TitleLogo from '../TitleLogo';
import NavBanner from '../NavBanner';


function Banner() {
  return (
          <div className="banner-section">
                <TitleLogo></TitleLogo>
                <div className="banner-textbox">
                        <h2 className="banner-textbox-title">Full Stack Web Developer</h2>
                        <NavBanner></NavBanner>
                </div>
        </div>
  );
}

export default Banner;