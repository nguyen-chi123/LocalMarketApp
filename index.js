/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

global.STORAGE_KEY = 'id_token';
global.BASE_URL = 'http://127.0.0.1:8000/api';

AppRegistry.registerComponent(appName, () => App);
