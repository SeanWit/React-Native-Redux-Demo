'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
} from 'react-native';
import { connect } from 'react-redux';

import LoginPage from '../pages/login.js';
import MainPage from '../pages/main.js';

export default class Router {
  constructor(navigator) {
    this.navigator = navigator;
  }

  push() {
  }

  pop() {
  }


}
