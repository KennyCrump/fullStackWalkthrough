import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

import Private from './components/Private/Private'
import Login from './components/Login/Login'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/' component={Login}/>
            <Route path='/private' component={Private} />
          </Switch>


        </Router>
      </div>
    );
  }
}

export default App;
