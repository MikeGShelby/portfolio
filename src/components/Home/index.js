import React from 'react';
import homeImage from "../../assets/images/universe-bg.jpg";

function Home() {
  return (
        <section class="hero">
            <img class='hero-image' src={homeImage} alt="home-image"></img>

            <div class="cta">
                <div class="cta-title-text">
                    <h2>FULL STACK WEB DEVELOPER</h2>
                </div>

                <form class="buttons">
                        <button type="button" class="filter-button" id="renal">EMAIL ME</button>
                </form>
            </div>
        </section>
  );
}

export default Home;