import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './assets/css/index.css';
import './assets/css/header.css';
import './assets/css/about.css';
import './assets/css/project-cards.css';
import './assets/css/contact.css';

import ScrollToTop from './components/ScrollToTop';

import Home from './components/Home';
import AboutDetails from './components/About/AboutDetails';
import ProjectsAll from './components/Projects/ProjectsAll'
import ContactDetails from './components/Contact/ContactDetails';

function App() {
  return (
    <React.Fragment>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={AboutDetails} />
          <Route exact path="/projects" component={ProjectsAll} />
          <Route exact path="/contact" component={ContactDetails} />
        </Switch>
    </React.Fragment>
  );
}

export default App;
