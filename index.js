/**
 * @format
 */
import {enableScreens} from 'react-native-screens'
import {AppRegistry,LogBox} from 'react-native';
import Index from './Screen/Index';
import Login from './Screen/Login';
import Splash from './Screen/Splash';
import AppNavigator from './Screen/AppNavigator';
import React from 'react';
import Register from './Screen/Register';
import {name as appName} from './app.json';
LogBox.ignoreAllLogs();
enableScreens(true)
AppRegistry.registerComponent(appName, () => AppNavigator)