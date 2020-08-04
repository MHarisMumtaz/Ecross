import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';
import EIconButton from '../EIconButton';

const MenuButton = () => {

  const onButtonPress = () => {
    Navigation.mergeOptions('sideMenuCenterStack', {
        sideMenu: {
          left: {
            visible: true
          }
        }
    });
  }

  return (
     <EIconButton icon='ios-menu-outline' color='#ff5d5a' size={30} onPress={()=>onButtonPress()} />
  )
}
export default MenuButton;
