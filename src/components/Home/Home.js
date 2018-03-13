import React from 'react';
import PropTypes from 'prop-types';
import CounterContainer from './CounterContainer/CounterContainer';
import withWire from '../common/hocs/withWire';
import appConfig from '../../config/appConfig';
import './Home.scss';

function Home(props) {
  return (
    <div>
      <h1>This is home page</h1>
      <h3>Bootstrap grid system</h3>
      <div className="row">
        <div className="col-6 col-sm-3">.col-6 .col-sm-3</div>
        <div className="col-6 col-sm-6">.col-6 .col-sm-6</div>
        <div className="col-6 col-sm-3">.col-6 .col-sm-3</div>
      </div>
      <h3>{props.dumbService.getHelloPhrase()}</h3>
      <h3>From config: {appConfig.baseUrl}</h3>
      <CounterContainer />
    </div>
  );
}

Home.propTypes = {
  dumbService: PropTypes.shape({
    getHelloPhrase: PropTypes.func
  }).isRequired
};

export default withWire(Home, ['dumbService'], dumbService => (
  { dumbService }
));
