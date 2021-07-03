import React from 'react';

import Header from '../Header';
import About from '../About';
import Contact from '../Contact';
import Projectsfeatured from '../Projects/ProjectsFeatured';


function Home() {
  return (
    <React.Fragment>
        <Header></Header>
      <main>
        <About></About>
        <Projectsfeatured></Projectsfeatured>
        <Contact></Contact>
      </main>
    </React.Fragment>
  );
}

export default Home;