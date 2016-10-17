'use strict';

import * as TYPES from '../actions/types.js';

const initialUserState = {
  text:"用户信息"
}
export function counter(state = 0, action) {
  switch(action.type) {
    case TYPES.INCREMENT:
      return state + 1;
    case TYPES.DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

export function user(state = initialUserState, action) {
  switch(action.type) {
    case TYPES.INCREMENT:
      return state + 1;
    case TYPES.DECREMENT:
      return state - 1;
    default:
      return state;
  }
}
