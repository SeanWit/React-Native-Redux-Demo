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

import { store } from '../store/index.js';
import { increment, decrement } from '../actions/actionCreator.js';
import SecondPage from './secondPage.js';

export default class FirstPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    let counter = this.props.counter;
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {counter}
        </Text>
        <Button
          style={{fontSize: 30}}
          onPress={() => this._onIncrement()}>
          +
        </Button>
        <Button
          style={{fontSize: 30}}
          onPress={() => this._onDecrement()}>
          -
        </Button>
        <Button
          style={{fontSize: 30}}
          onPress={() => this._onJumpNextPage()}
        >
          Jump
        </Button>
      </View>
    );
  }

  _onIncrement() {
    store.dispatch(increment());
  }

  _onDecrement() {
    store.dispatch(decrement());
  }

  _onJumpNextPage() {
    const { navigator } = this.props;
    let nextPageName = 'SecondPage';
    let nextPageComponent: SecondPage;
    if(navigator) {
      navigator.push({
        name: 'SecondPage',
        component: SecondPage,
      });
    }
  }
}

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
