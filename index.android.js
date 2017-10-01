import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './src/app';
export default class Redux extends Component {
  render() {
    return (
      <App/>
    );
  }
}

AppRegistry.registerComponent('Redux', () => Redux);
