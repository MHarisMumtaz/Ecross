import React, { useEffect } from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Navigation } from 'react-native-navigation';
import EIconButton from '../EIconButton';

const AppIconButton = () => {

  const onButtonPress = () => {
  }

  return (
    <TouchableOpacity onPress={onButtonPress}>
      <Image style={{width:100, height:30}} source={require('../../../assets/ecross-logo.png')} />
    </TouchableOpacity>
     
  )
}
export default AppIconButton;
