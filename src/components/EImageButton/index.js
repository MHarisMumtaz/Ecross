import React, { useEffect } from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Navigation } from 'react-native-navigation';

const EImageButton = ({ containerStyle, imageStyle, opacity=0.3, imageWidth, imageHeight, src, onPress = () => {}}) => {

  return (
    <TouchableOpacity
      activeOpacity={opacity}
      onPress={onPress} 
      style={containerStyle ? containerStyle : styles.container}
    >
      <Image 
        style={[{
          width: imageWidth ? imageWidth : 100,
          height: imageHeight ? imageHeight : 30
        }, imageStyle]} 
        source={src} 
      />
    </TouchableOpacity>
  )
}
export default EImageButton;

const styles = StyleSheet.create({
  container: {
    width: 100,
    height:30,
    alignItems: "center"
  }
});