import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';

import Home from './components/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';

import Header from './components/Header';
import HeaderDetails from './components/HeaderDetails';

import About from './components/About';
import AboutDetails from './components/AboutDetails';
import Projects from './components/Projects';
import ProjectsAll from './components/ProjectsAll'
import Skills from './components/Skills';
import Contact from './components/Contact';
import ContactDetails from './components/ContactDetails';


function App() {
  return (
    <Router>
      {/* <HeaderDetails></HeaderDetails> */}
        <Switch>
        <Route
            exact
            path="/portfolio-react"
            render={() => {
                return (
                  <Redirect to="/portfolio-react/home" />
                )
            }}
          />
        <Route
            exact
            path="/"
            render={() => {
                return (
                  <Redirect to="/portfolio-react/home" />
                )
            }}
        />
        <Route
            exact
            path="."
            render={() => {
                return (
                  <Redirect to="/portfolio-react/home" />
                )
            }}
        />
          <Route exact path="/portfolio-react/home" component={Home} />
          <Route exact path="/portfolio-react/about" component={AboutDetails} />
          <Route exact path="/portfolio-react/projects" component={ProjectsAll} />
          <Route exact path="/portfolio-react/contact" component={ContactDetails} />
        </Switch>
      </Router>
  );
}

export default App;
