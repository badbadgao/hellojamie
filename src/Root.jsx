import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App.js';
import Banner from './banner/Banner.jsx';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={App} />
        <Route path="/contact" component={Banner} />
      </Switch>
    </Router>
  );
};

export default Root;
