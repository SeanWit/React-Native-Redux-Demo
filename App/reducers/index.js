'use strict';

import { combineReducers } from 'redux';

import { counter } from './reducers.js';

export default combineReducers({
  counter: counter,
});
