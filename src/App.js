import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './components/Nav';
import Footer from './components/Footer';

import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactForm from './components/Contact';
// import SelectedPage from './components/SelectedPage';

function App() {
  return (
      // <main className="main-container">
      <Router>
          <Nav />
            <div className="header-spacer">{`&nbsp;`}</div>
              <div className="main-content">
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/skills" component={Skills} />
                <Route exact path="/contact" component={ContactForm} />
              </div>
          <Footer />
      </Router>
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
