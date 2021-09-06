import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css';

import ScrollToTop from './components/ScrollToTop';

import Nav from './components/Header/Nav';
import Footer from './components/Footer';

import Home from './components/Home';
import AboutDetails from './components/About/AboutDetails';
import Projects from './components/Projects';
import ResumeDetails from './components/Resume/ResumeDetails';
import Contact from './components/Contact'

function App() {
  return (
    <React.Fragment>
        <ScrollToTop />
        <Nav></Nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={AboutDetails} />
            <Route exact path="/projects" render={() => <Projects projectPage="all" />} />
            <Route exact path="/resume" component={ResumeDetails} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
