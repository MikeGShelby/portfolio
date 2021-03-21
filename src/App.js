import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {

  return (
    <div>
      <main>
        <Nav></Nav>
        <About></About>
        <Projects></Projects>
        <Skills></Skills>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
