import React, {useState, useEffect} from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactForm from './components/Contact';

function App() {
  const [pages] = useState([
    {
      name: 'About'
    },
    {
      name: 'Projects'
    },
    {
      name: 'Resume'
    },
    {
      name: 'Contact'
    }
  ]);
  const [currentPage, setCurrentPage] = useState(pages[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
      <main className="main-container">
        <Nav
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      ></Nav>
        <div className="header-spacer">{`&nbsp;`}</div>
        <div className="main-content">
          <About></About>
          <Projects></Projects>
          <Skills></Skills>
          <ContactForm></ContactForm>
          <Footer></Footer>
        </div>
      </main>
  );
}

export default App;
