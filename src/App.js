import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Home from './components/Home';
import Nav from './components/Nav';

import Header from './components/Header';
import HeaderDetails from './components/HeaderDetails';

import AboutDetails from './components/AboutDetails';
import ProjectsAll from './components/ProjectsAll'
import ContactDetails from './components/ContactDetails';

function App() {
  return (
    <React.Fragment>

        {/* <Switch> */}
        {/* <Route
            exact
            path="/portfolio-react"
            render={() => {
                return (
                  <Redirect to="/portfolio-react/home" />
                )
            }}
          />
        */}

          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={AboutDetails} />
          <Route exact path="/projects" component={ProjectsAll} />
          <Route exact path="/contact" component={ContactDetails} />
        {/* </Switch> */}

        </React.Fragment>
      //
  );
}

export default App;
