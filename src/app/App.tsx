import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import Home from './Home/Home';
import Feedback from './Feedback/Feedback';
import NotFound from './NotFound';
import TodoListContainer from './Todo/TodosListContainer';
import styles from './App.module.scss';
import { Router, Link } from '@reach/router';

class App extends Component {
  public render() {
    return (
      <div className={styles.App}>
        <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <h1 className={styles.title}>Welcome to React-POC</h1>
        </header>
        <nav className={styles.nav}>
          <Link to="/" className={styles['header-link']}>
            Home
          </Link>
          <Link to="/feedback" className={styles['header-link']}>
            Feedback
          </Link>
        </nav>
        <main className={styles.main}>
          <Router>
            <Home path="/" />
            <Feedback path="/feedback" />
            <TodoListContainer path="/todo" />
            <NotFound path="*" />
          </Router>
        </main>
      </div>
    );
  }
}

export default App;
