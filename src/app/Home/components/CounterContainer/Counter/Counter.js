import React from 'react';
import PropTypes from 'prop-types';
import styles from './Counter.scss';

function Counter(props) {
  return (
    <div className={styles['counter-container']}>
      <h3>{props.counter}</h3>
      <button onClick={props.onIncrementCounter}>Increment</button>
      <button onClick={props.onResetCounter}>Reset</button>
    </div>
  );
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  onIncrementCounter: PropTypes.func.isRequired,
  onResetCounter: PropTypes.func.isRequired
};

export default Counter;
