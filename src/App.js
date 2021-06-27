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
    // <React.Fragment>
    //   <Home></Home>
    // </React.Fragment>

    <Router>
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
                  <Redirect to="/portfolio-react/home"  />
                )
            }}
        />
        <Route
            exact
            path="."
            render={() => {
                return (
                  <Redirect to="/portfolio-react/home"  />
                )
            }}
        />
        <Route
            exact
            path="/portfolio-react/about"
            render={() => {
                return (
                  <Redirect to="/about" />
                )
            }}
        />
        <Route
            exact
            path="/portfolio-react/projects"
            render={() => {
                return (
                  <Redirect to="/projects" />
                )
            }}
        />
        <Route
            exact
            path="/portfolio-react/contact"
            render={() => {
                return (
                  <Redirect to="/contact" />
                )
            }}
        />
          <Route exact path="/portfolio-react/home" component={Home} />
          <Route exact path="/about" component={AboutDetails} />
          <Route exact path="/projects" component={ProjectsAll} />
          <Route exact path="/contact" component={ContactDetails} />
        </Switch>
      </Router>
  );
}

export default App;
