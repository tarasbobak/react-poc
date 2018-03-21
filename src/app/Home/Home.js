import React from 'react';
import PropTypes from 'prop-types';
import appConfig from '../../config/appConfig';
import styles from './Home.scss';
import NotifyButton from './components/NotifyButton/NotifyButton';
import CounterContainer from './components/CounterContainer/CounterContainer';
import Users from './components/Users/Users';
import withWire from '../common/hocs/withWire';

const notification = {
  title: 'Test',
  message: 'Now you can see how easy it is to use notifications in React!'
};

function Home(props) {
  return (
    <div>
      <h1>This is home page</h1>
      <h3>Bootstrap grid system</h3>
      <div className={`${styles.row} row`}>
        <div className="col-6 col-sm-3">.col-6 .col-sm-3</div>
        <div className="col-6 col-sm-6">.col-6 .col-sm-6</div>
        <div className="col-6 col-sm-3">.col-6 .col-sm-3</div>
      </div>
      <h3>{props.dumbService.getHelloPhrase()}</h3>
      <h3>{props.greetingService.writeGreet()}</h3>
      <h3>From config: {appConfig.baseUrl}</h3>

      <div className="row">
        <div className="col-3">
          <NotifyButton notification={notification} level="info">
            info
          </NotifyButton>
        </div>
        <div className="col-3">
          <NotifyButton notification={notification} level="success">
            success
          </NotifyButton>
        </div>
        <div className="col-3">
          <NotifyButton notification={notification} level="warning">
            warning
          </NotifyButton>
        </div>
        <div className="col-3">
          <NotifyButton notification={notification} level="error">
            error
          </NotifyButton>
        </div>
      </div>

      <CounterContainer />
      <div className={`${styles.row} ${styles['row-center']} row`}>
        <Users />
      </div>
    </div>
  );
}

Home.propTypes = {
  dumbService: PropTypes.shape({
    getHelloPhrase: PropTypes.func
  }).isRequired,
  greetingService: PropTypes.shape({
    writeGreet: PropTypes.func
  }).isRequired
};

export default withWire(
  Home,
  ['dumbService', 'greetingService'],
  (dumbService, greetingService) => (
    { dumbService, greetingService }
  )
);
