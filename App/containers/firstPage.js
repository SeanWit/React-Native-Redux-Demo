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
import { increment, decrement, switchSound, switchVibration } from '../actions/actionCreator.js';
import SecondPage from './secondPage.js';

export default class FirstPage extends Component {
  constructor(props) {
    super(props);
    this.isSoundOn = true;
    this.isVibrationOn = true;

  }

  render() {
    console.log(this.props);
    let counter = this.props.counter;
    let device = this.props.device;
    let sound = 'unknow';
    let vibration = 'unkonw';
    if(device.isSoundOn) {
      sound = 'on';
    } else {
      sound = 'off';
    }
    if(device.isVibrationOn) {
      vibration = 'on';
    } else {
      vibration = 'off';
    }
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {counter}
        </Text>
        <Text style={styles.welcome}>
          Sound: {sound}
        </Text>
        <Text style={styles.welcome}>
          Vibration: {vibration}
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
          style={{fontSize: 20}}
          onPress={() => this._onSwitchSound()}>
          声音
        </Button>
        <Button
          style={{fontSize: 20}}
          onPress={() => this._onSwitchVibration()}>
          振动
        </Button>
        <Button
          style={{fontSize: 20}}
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

  _onSwitchSound() {
    if(this.isSoundOn) {
      this.isSoundOn = false;
      store.dispatch(switchSound(false));
    } else {
      this.isSoundOn = true;
      store.dispatch(switchSound(true));
   }
  }

  _onSwitchVibration() {
    if(this.isVibrationOn) {
      this.isVibrationOn = false;
      store.dispatch(switchVibration(false));
    } else {
      this.isVibrationOn = true;
      store.dispatch(switchVibration(true));
    }
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
