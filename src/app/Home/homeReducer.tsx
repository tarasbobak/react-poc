import { INCREMENT_COUNTER, RESET_COUNTER } from './homeActions';

const initialState = {
  counter: 0
};

export default function home(state = initialState, action: any) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return Object.assign({}, state, { counter: state.counter + 1 });
    case RESET_COUNTER:
      return Object.assign({}, state, { counter: 0 });
    default:
      return state;
  }
}
