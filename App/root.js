'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
} from 'react-native';

import App from './containers/app.js';
import { store } from './store/index.js';
import { Provider } from 'react-redux';

export default class Root extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

