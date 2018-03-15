import { connect } from 'react-redux';
import Counter from './Counter/Counter';
import {
  incrementCounter,
  resetCounter
} from '../../homeActions';

const mapStateToProps = state => ({
  counter: state.home.counter
});

const mapDispatchToProps = dispatch => ({
  onIncrementCounter: () => {
    dispatch(incrementCounter());
  },
  onResetCounter: () => {
    dispatch(resetCounter());
  }
});

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default CounterContainer;
