import React from 'react';

import Header from '../Header';
import About from '../About';
import Projectsfeatured from '../Projects/ProjectsFeatured';
import Resume from '../Resume';
import Contact from '../Contact';

function Home() {
  return (
    <React.Fragment>
        <Header></Header>
      <main>
        <About></About>
        <Projectsfeatured></Projectsfeatured>
        <Resume></Resume>
        <Contact></Contact>
      </main>
    </React.Fragment>
  );
}

export default Home;