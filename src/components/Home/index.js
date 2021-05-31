import React from 'react';
import TitleLogo from '../TitleLogo';
import Nav from '../Nav';



import mountainImage from "../../assets/images/mountain.png";
import grassImage from "../../assets/images/grass.png";
import galaxyImage from "../../assets/images/galaxy-bg.jpg";

function Home() {
  return (
          <div className="home-section">
                <Nav></Nav>
                <div class="home-textbox">
                        <h2 class="home-textbox-title">FULL STACK WEB DEVELOPER</h2>
                        <form class="buttons">
                        <button type="button">EMAIL ME</button>
                        </form>
                </div>
        </div>
  );
}

export default Home;