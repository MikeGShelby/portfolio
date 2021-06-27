import React from 'react';

import Header from '../Header';
import About from '../About';
import Projects from '../Projects';
import Contact from '../Contact';


function Home() {
  return (
    <React.Fragment>
        <Header></Header>
      <main>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
      </main>
    </React.Fragment>
  );
}

export default Home;