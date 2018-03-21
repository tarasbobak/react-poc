import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import Switch from 'react-router-dom/Switch';
import logo from '../assets/logo.svg';
import Home from './Home/Home';
import Feedback from './Feedback/Feedback';
import NotFound from './NotFound';
import NotificationContainer
  from './common/components/NotificationContainer/NotificationContainer';
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
        </header>
        <nav className={styles.nav}>
          <Link to="/" className={styles['header-link']}>Home</Link>
          <Link to="/feedback" className={styles['header-link']}>Feedback</Link>
        </nav>
        <main className={styles.main}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/feedback" component={Feedback} />
            <Route path="*" component={NotFound} />
          </Switch>
        </main>
        <NotificationContainer />
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
