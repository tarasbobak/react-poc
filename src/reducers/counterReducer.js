import { INCREMENT_COUNTER, RESET_COUNTER } from '../actions/counterActions';

const initialState = 0;

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;
    case RESET_COUNTER:
      return initialState;
    default:
      return state;
  }
}
