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

export function switchSound(isSoundOn) {
	return {
		type: TYPES.SWITCHSOUND,
    isSoundOn: isSoundOn,
	}
}

export function switchVibration(isVibrationOn) {
	return {
		type: TYPES.SWITCHVIBRATION,
    isVibrationOn: isVibrationOn,
	}
}
