import { combineReducers } from 'redux';
import { reducer as notifications } from 'react-notification-system-redux';
import home from './app/Home/homeReducer';

const rootReducer = combineReducers({
  home,
  notifications
});

export default rootReducer;
