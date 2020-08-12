import React from 'react';
import { Navigation } from 'react-native-navigation';
import Screens from './Screens';

import Home from '../screens/Home';
import LeftSideMenu from '../screens/LeftSideMenu';
import Search from '../screens/Search';
import WishList from '../screens/WishList';
import HorizontalCategories from '../screens/HorizontalCategories';
import HorizontalBanners from '../screens/HorizontalBanners';
import ProductCard from '../screens/ProductCard';

import EImageButton from '../components/EImageButton';
import EMenuButton from '../components/EMenuButton';
import EIconButton from '../components/EIconButton';
import EHorizontalButtonsList from '../components/EHorizontalButtonsList';

const registerScreens = () => {
  Navigation.registerComponent(Screens.Home, () => Home);
  Navigation.registerComponent(Screens.EImageButton, () => EImageButton);
  Navigation.registerComponent(Screens.EIconButton, () => EIconButton);
  Navigation.registerComponent(Screens.EMenuButton, () => EMenuButton);
  Navigation.registerComponent(Screens.EHorizontalButtonsList, () => EHorizontalButtonsList);

  Navigation.registerComponent(Screens.LeftSideMenu, () => LeftSideMenu);
  Navigation.registerComponent(Screens.Search, () => Search);
  Navigation.registerComponent(Screens.WishList, () => WishList);
  Navigation.registerComponent(Screens.HorizontalCategories, () => HorizontalCategories);
  Navigation.registerComponent(Screens.HorizontalBanners, () => HorizontalBanners);
  Navigation.registerComponent(Screens.ProductCard, () => ProductCard);
}

export { registerScreens };