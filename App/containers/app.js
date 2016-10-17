'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from 'react-native-button';

import { increment, decrement } from '../actions/actionCreator.js';
import { store } from '../store/index.js';

import FirstPage from './firstPage.js';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let counter = this.props.counter;

    let defaultName = 'FirstPage';
    let defaultComponent = FirstPage;
    return(
      <Navigator
        initialRoute={{ name: defaultName, component: defaultComponent}}
        configureScene={(route) => {
          return Navigator.SceneConfigs.VerticalDownSwipeJump;
        }}
        renderScene={(route, navigator) => {
          let Component = route.component;
          return <Component {...route.params} {...this.props} navigator={navigator} />
        }} />
    );
  }
}

export default connect(
  (state) => ({
    counter: state.counter,
  }),
  (dispatch) => ({
    incrementAction: bindActionCreators(increment, dispatch),
    decrementAction: bindActionCreators(decrement, dispatch),
  })
)(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
