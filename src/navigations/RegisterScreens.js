import React from 'react';
import { Navigation } from 'react-native-navigation';
import Screens from './Screens';

import Home from '../screens/Home';
import LeftSideMenu from '../screens/LeftSideMenu';
import MenuButton from '../components/MenuButton';
import EIconButton from '../components/EIconButton';

const registerScreens = () => {
  Navigation.registerComponent(Screens.Home, () => Home);
  Navigation.registerComponent(Screens.EIconButton, () => EIconButton);
  Navigation.registerComponent(Screens.MenuButton, () => MenuButton);
  Navigation.registerComponent(Screens.LeftSideMenu, () => LeftSideMenu);
}

export { registerScreens };