import React from 'react';

import Hero from '../Hero';
import About from '../About';
import Projects from '../Projects';
import Resume from '../Resume';
import Contact from '../Contact';

function Home() {
  return (
    <React.Fragment>
      <main>
        <Hero></Hero>
        <About></About>
        <Projects projectPage="featured"></Projects>
        <Resume></Resume>
        <Contact></Contact>
      </main>
    </React.Fragment>
  );
}

export default Home;