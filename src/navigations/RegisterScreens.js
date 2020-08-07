import React from 'react';
import { Navigation } from 'react-native-navigation';
import Screens from './Screens';

import Home from '../screens/Home';
import LeftSideMenu from '../screens/LeftSideMenu';
import Search from '../screens/Search';
import WishList from '../screens/WishList';

import AppIconButton from '../components/AppIconButton';
import MenuButton from '../components/MenuButton';
import EIconButton from '../components/EIconButton';



const registerScreens = () => {
  Navigation.registerComponent(Screens.Home, () => Home);
  Navigation.registerComponent(Screens.AppIconButton, () => AppIconButton);
  Navigation.registerComponent(Screens.EIconButton, () => EIconButton);
  Navigation.registerComponent(Screens.MenuButton, () => MenuButton);
  Navigation.registerComponent(Screens.LeftSideMenu, () => LeftSideMenu);
  Navigation.registerComponent(Screens.Search, () => Search);
  Navigation.registerComponent(Screens.WishList, () => WishList);
}

export { registerScreens };