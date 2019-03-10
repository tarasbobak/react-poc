import React from 'react';
import styles from './Counter.module.scss';
import HomeContextConsumer from './HomeContextConsumer/HomeContextConsumer';

interface CounterProps {
  counter: number;
  onIncrementCounter: () => void;
  onResetCounter: () => void;
}

const Counter: React.SFC<CounterProps> = props => {
  return (
    <div className={styles['counter-container']}>
      <h3>{props.counter}</h3>
      <button onClick={props.onIncrementCounter}>Increment</button>
      <button onClick={props.onResetCounter}>Reset</button>
      <hr />
      <HomeContextConsumer />
    </div>
  );
};

export default Counter;
