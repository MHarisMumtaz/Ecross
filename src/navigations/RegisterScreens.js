import React from 'react';
import { Navigation } from 'react-native-navigation';
import Screens from './Screens';

import Home from '../screens/Home';

const registerScreens = () => {
  Navigation.registerComponent(Screens.Home, () => Home);
}

export { registerScreens };