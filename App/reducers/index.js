'use strict';

import { combineReducers } from 'redux';

import { counter, user } from './reducers.js';

export default combineReducers({
  counter: counter,
  user: user,
});
