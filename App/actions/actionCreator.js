'use strict';

import * as TYPES from './types.js';

export function increment() {
  return {
    type: TYPES.INCREMENT,
  };
}

export function decrement() {
  return {
    type: TYPES.DECREMENT,
  };
}
