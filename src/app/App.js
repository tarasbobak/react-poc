import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import logo from '../logo.svg';
import Home from './Home/Home';
import Feedback from './Feedback/Feedback';
import dependencies, { registerDependencies } from './dependencies';
import styles from './App.scss';

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
      <div className={styles.App}>
        <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <h1 className={styles.title}>Welcome to React-POC</h1>
          <Link to="/" className={styles['header-link']}>Home</Link>
          <Link to="/feedback" className={styles['header-link']}>
            Feedback
          </Link>
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
