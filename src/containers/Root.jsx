import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App.js';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route path="/contact" component={App} />
        <Route exact path="/" component={App} />
      </Switch>
    </Router>
  );
};

export default Root;
