/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Main from './components/main';
import store from './store.js'
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Main/>
      </Provider>
    );
  }
}
