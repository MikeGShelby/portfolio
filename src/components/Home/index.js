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
                <div className="home-textbox">
                        <h2 className="home-textbox-title">FULL STACK WEB DEVELOPER</h2>
                        <form className="buttons">
                        <button type="button" className="connect-button">CONNECT WITH ME</button>
                        </form>
                </div>
        </div>
  );
}

export default Home;