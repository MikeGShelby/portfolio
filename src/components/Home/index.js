import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../Header';
import About from '../About';
import Projects from '../Projects';
import Skills from '../Skills';
import Contact from '../Contact';

// import homeImage from "./assets/images/universe-bg.jpg";

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