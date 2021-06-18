import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './components/Nav';
import Footer from './components/Footer';

import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

// import homeImage from "./assets/images/universe-bg.jpg";

function App() {
  return (
    <React.Fragment>

        <Header></Header>
      <main>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
      </main>

    </React.Fragment>


      // <Router>
      //   <div class='background-image'>
      //     <Nav />
      //       {/* <div className="header-spacer">{`&nbsp;`}</div> */}
      //           <div className="main-content">

      //             <Route exact path="/" component={Home} />
      //             <Route exact path="/about" component={About} />
      //             <Route exact path="/projects" component={Projects} />
      //             <Route exact path="/skills" component={Skills} />
      //             <Route exact path="/contact" component={ContactForm} />
      //           </div>
      //         </div>
      //     <Footer />
      // </Router>
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
