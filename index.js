/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Index from './Screen/Index';
import Login from './Screen/Login';
import Splash from './Screen/Splash';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Splash);
