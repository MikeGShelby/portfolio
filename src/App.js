import React, {useState, useEffect} from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactForm from './components/Contact';
import SelectedPage from './components/SelectedPage';

function App() {

  const [currentPage, setPageSelected] = useState('ProjectsPage');

  return (
      <main className="main-container">
        <Nav
        setCurrentPage={setPageSelected}
        currentPage={currentPage}
        ></Nav>
        <div className="header-spacer">{`&nbsp;`}</div>
        <div className="main-content">
        <SelectedPage currentPage={currentPage}></SelectedPage>
          <About></About>
          <Projects></Projects>
          <Skills></Skills>
          <ContactForm></ContactForm>
          <Footer></Footer>
        </div>
      </main>
  );
}

// const [pages] = useState([
//   {
//     name: 'About'
//   },
//   {
//     name: 'Projects'
//   },
//   {
//     name: 'Resume'
//   },
//   {
//     name: 'Contact'
//   }
// ]);
// const [currentPage, setCurrentPage] = useState(pages[0]);

{/*  */}

export default App;
