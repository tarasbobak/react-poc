import React from 'react';
import appConfig from '../../config/appConfig';
import styles from './Home.module.scss';
import CounterContainer from './components/CounterContainer/CounterContainer';
import Users from './components/Users/Users';
import greetingService from '../../services/greetingService';
import { RouteComponentProps } from '@reach/router';

const Home: React.SFC<RouteComponentProps> = () => {
  return (
    <div>
      <h1>This is home page</h1>
      <h3>Bootstrap grid system</h3>
      <div className={`${styles.row} row`}>
        <div className="col-6 col-sm-3">.col-6 .col-sm-3</div>
        <div className="col-6 col-sm-6">.col-6 .col-sm-6</div>
        <div className="col-6 col-sm-3">.col-6 .col-sm-3</div>
      </div>
      <h3>{greetingService.getGreeting()}</h3>
      <h3>From config: {appConfig.baseUrl}</h3>
      <CounterContainer />
      <div className={`${styles.row} ${styles['row-center']} row`}>
        <Users />
      </div>
    </div>
  );
};

export default Home;
