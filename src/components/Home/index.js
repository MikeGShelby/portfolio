import React from 'react';
import TitleLogo from '../TitleLogo';
import NavBanner from '../NavBanner';


function Home() {
  return (
          <div className="home-section">
                <div className="home-textbox">
                        <TitleLogo></TitleLogo>

                        <h2 className="home-textbox-title">Full Stack Web Developer</h2>
                        <NavBanner></NavBanner>
                </div>
        </div>
  );
}

export default Home;