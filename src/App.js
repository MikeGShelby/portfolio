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
import ProjectDetails from './components/ProjectDetails'
import Skills from './components/Skills';
import Contact from './components/Contact';


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
          <Route exact path="/portfolio-react/projects" component={ProjectDetails} />
          <Route exact path="/portfolio-react/contact" component={Contact} />
        </Switch>
      </Router>
  );
}

export default App;
