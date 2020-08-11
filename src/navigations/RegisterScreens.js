import React from 'react';
import { Navigation } from 'react-native-navigation';
import Screens from './Screens';

import Home from '../screens/Home';
import LeftSideMenu from '../screens/LeftSideMenu';
import Search from '../screens/Search';
import WishList from '../screens/WishList';
import HorizontalList from '../screens/HorizontalList';
import EImageButton from '../components/EImageButton';
import EMenuButton from '../components/EMenuButton';
import EIconButton from '../components/EIconButton';


const registerScreens = () => {
  Navigation.registerComponent(Screens.Home, () => Home);
  Navigation.registerComponent(Screens.EImageButton, () => EImageButton);
  Navigation.registerComponent(Screens.EIconButton, () => EIconButton);
  Navigation.registerComponent(Screens.EMenuButton, () => EMenuButton);
  Navigation.registerComponent(Screens.LeftSideMenu, () => LeftSideMenu);
  Navigation.registerComponent(Screens.Search, () => Search);
  Navigation.registerComponent(Screens.WishList, () => WishList);
  Navigation.registerComponent(Screens.HorizontalList, () => HorizontalList);
}

export { registerScreens };