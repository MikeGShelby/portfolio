import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import './index.css';
// import './assets/css/header.css';
// import './assets/css/about.css';
// import './assets/css/project-cards.css';
// import './assets/css/contact.css';

import ScrollToTop from './components/ScrollToTop';

import Nav from './components/Header/Nav';
import Footer from './components/Footer';

import Home from './components/Home';
import AboutDetails from './components/About/AboutDetails';
import ProjectsAll from './components/Projects/ProjectsAll';
import ResumeDetails from './components/Resume/ResumeDetails';
import ContactDetails from './components/Contact/ContactDetails';

function App() {
  return (
    <React.Fragment>
        <ScrollToTop />
        <Nav></Nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={AboutDetails} />
            <Route exact path="/projects" component={ProjectsAll} />
            <Route exact path="/resume" component={ResumeDetails} />
            <Route exact path="/contact" component={ContactDetails} />
          </Switch>
        <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
