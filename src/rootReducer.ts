import { combineReducers } from 'redux';
import home from './app/Home/homeReducer';
import todo from './reducers/todo';

const rootReducer = combineReducers({
  home,
  todo
});

export default rootReducer;
