import React, { useEffect } from 'react';
import { StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { Navigation } from 'react-native-navigation';

const EImageButton = ({ containerStyle, text, imageStyle, opacity=0.3, imageWidth, imageHeight, src, onPress = () => {}}) => {

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
      {text && <Text style={styles.text}> { text }</Text>}
    </TouchableOpacity>
  )
}
export default EImageButton;

const styles = StyleSheet.create({
  container: {
    width: 100,
    height:30,
    alignItems: "center"
  },
  text:{
    
  }
});