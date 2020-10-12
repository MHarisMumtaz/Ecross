import React from 'react';
import { Navigation } from 'react-native-navigation';
import Screens from './Screens';

import Home from '../screens/Home';
import SideMenu from '../screens/SideMenu';
import Search from '../screens/Search';
import WishList from '../screens/WishList';
import ProductCard from '../screens/ProductCard';
import ProductDetails from '../screens/ProductDetails';
import ProductList from '../screens/ProductList';
import AllCategoriesList from '../screens/AllCategoriesList';
import AllBoxCategories from '../screens/AllBoxCategories';
import Notifications from '../screens/Notifications';
import UserProfile from '../screens/UserProfile';
import Cart from '../screens/Cart';
import Checkout from '../screens/Checkout';

import EImageButton from '../components/EImageButton';
import EMenuButton from '../components/EMenuButton';
import EIconButton from '../components/EIconButton';

const registerScreens = () => {
  Navigation.registerComponent(Screens.Home, () => Home);
  Navigation.registerComponent(Screens.EImageButton, () => EImageButton);
  Navigation.registerComponent(Screens.EIconButton, () => EIconButton);
  Navigation.registerComponent(Screens.EMenuButton, () => EMenuButton);

  Navigation.registerComponent(Screens.SideMenu, () => SideMenu);
  Navigation.registerComponent(Screens.Search, () => Search);
  Navigation.registerComponent(Screens.WishList, () => WishList);
  Navigation.registerComponent(Screens.ProductDetails, () => ProductDetails);
  Navigation.registerComponent(Screens.ProductList, () => ProductList);
  Navigation.registerComponent(Screens.AllCategoriesList, () => AllCategoriesList);
  Navigation.registerComponent(Screens.AllBoxCategories, () => AllBoxCategories);
  Navigation.registerComponent(Screens.Notifications, () => Notifications);
  Navigation.registerComponent(Screens.UserProfile, () => UserProfile);
  Navigation.registerComponent(Screens.Cart, () => Cart);
  Navigation.registerComponent(Screens.Checkout, () => Checkout);
}

export { registerScreens };