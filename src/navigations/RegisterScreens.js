import React from 'react';
import { Navigation } from 'react-native-navigation';
import Screens from './Screens';

import Home from '../screens/Home';
import CheckoutButton from '../components/checkoutButton';

const registerScreens = () => {
  Navigation.registerComponent(Screens.Home, () => Home);
  Navigation.registerComponent(Screens.CheckoutButton, () => CheckoutButton);
}

export { registerScreens };