import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';
import EIconButton from '../EIconButton';
import { BOTTOM_TAB_STACK_ID } from '../../utils/Constants';
import colors from '../../commons/Colors';

const EMenuButton = () => {

  const onButtonPress = () => {
    Navigation.mergeOptions(BOTTOM_TAB_STACK_ID, {
        sideMenu: {
          left: {
            visible: true
          }
        }
    });
  }

  return (
     <EIconButton icon='ios-menu-outline' color={colors.primary} size={30} onPress={()=>onButtonPress()} />
  )
}
export default EMenuButton;
