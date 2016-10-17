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

export default class SecondPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>
          This is SecondPage!
        </Text>
        <Button
          style={{fontSize: 30}}
          onPress={() => this._onBack()}
        >
          Back
        </Button>
      </View>
    );
  }

  _onBack() {
    console.log(this.props);
    const { navigator } = this.props;
    if(navigator) {
      navigator.pop();
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
});
