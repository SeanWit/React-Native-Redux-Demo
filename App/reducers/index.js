'use strict';

import { combineReducers } from 'redux';

import { counter, device } from './reducers.js';

export default combineReducers({
  counter: counter,
  device: device,
});
