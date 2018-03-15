import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import logo from '../logo.svg';
import Home from './Home/Home';
import Feedback from './Feedback/Feedback';
import dependencies, { registerDependencies } from './dependencies';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    registerDependencies();
  }
  getChildContext() {
    return dependencies;
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React-POC</h1>
          <Link to="/" className="App-header-link">Home</Link>
          <Link to="/feedback" className="App-header-link">Feedback</Link>
        </header>
        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/feedback" component={Feedback} />
        </main>
      </div>
    );
  }
}

App.childContextTypes = {
  data: PropTypes.object,
  get: PropTypes.func,
  register: PropTypes.func
};

export default App;
