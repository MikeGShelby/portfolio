import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';

import Header from './components/Header';
import About from './components/About';
import AboutDetails from './components/AboutDetails';
import Projects from './components/Projects';
import ProjectDetails from './components/ProjectDetails'
import Skills from './components/Skills';
import Contact from './components/Contact';


function App() {
  return (
    <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={AboutDetails} />
        <Route exact path="/projects" component={ProjectDetails} />
        <Route exact path="/contact" component={Contact} />
      </Router>
  );
}

export default App;
