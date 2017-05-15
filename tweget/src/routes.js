// src/routes.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import App from './components/App';
import About from './components/About';
import Investments from './components/Investments';
import Homes from './components/Homes';
import NotFound from './components/NotFound';

export default class Routes extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route path="/about" component={About}/>
          <Route path="/investments" component={Investments}/>
          <Route path="/homes" component={Homes}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </Router>
    );
  }
}