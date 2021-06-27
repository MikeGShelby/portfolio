import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Home from './components/Home';
import Nav from './components/Nav';

import Header from './components/Header';
import HeaderDetails from './components/HeaderDetails';

import AboutDetails from './components/AboutDetails';
import ProjectsAll from './components/ProjectsAll'
import ContactDetails from './components/ContactDetails';


function App() {
  return (
    // <React.Fragment>
    //   <Home></Home>
    // </React.Fragment>
    <Router>
        <Switch>
        {/* <Route
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
            path="/portfolio-react/"
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
            path="/portfolio-react/home/"
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
                  <Redirect to="/portfolio-react/about" />
                )
            }}
        />
        <Route
            exact
            path="/portfolio-react/projects"
            render={() => {
                return (
                  <Redirect to="/portfolio-react/projects" />
                )
            }}
        />
        <Route
            exact
            path="/portfolio-react/contact"
            render={() => {
                return (
                  <Redirect to="/portfolio-react/contact" />
                )
            }}
        /> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={AboutDetails} />
          <Route exact path="/projects" component={ProjectsAll} />
          <Route exact path="/contact" component={ContactDetails} />
        </Switch>
      </Router>
  );
}

export default App;
