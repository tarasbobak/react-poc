import { combineReducers } from 'redux';
import home from './app/Home/homeReducer';

const rootReducer = combineReducers({
  home
});

export default rootReducer;
