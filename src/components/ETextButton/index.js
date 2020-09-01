import React from 'react';
import { Platform, StyleSheet, Pressable, TouchableOpacity, View, Text } from 'react-native';
import colors from '../../commons/Colors';

const ETextButton = ({children, androidRippleColor, androidRippleRadius, containerStyle, onPress = () => {}}) => {

  const iosButton = () => {
    return (
       <TouchableOpacity 
         onPress={onPress}
         style={[
          styles.container,
          containerStyle,
          {
            width: (containerStyle && containerStyle.width) ? containerStyle.width : 100,
            height: (containerStyle && containerStyle.height) ? containerStyle.height : 50
          }
        ]}
       >
          {children}
       </TouchableOpacity>
     )
  }

  const androidButton = () => {
    return (
      <Pressable 
        style={[
          styles.container,
          containerStyle,
          {
            width: (containerStyle && containerStyle.width) ? containerStyle.width : 100,
            height: (containerStyle && containerStyle.height) ? containerStyle.height : 50
          }
        ]} 
        onPress={onPress} 
        android_ripple={{
          color: androidRippleColor ? androidRippleColor : colors.grey,
          radius: androidRippleRadius ? androidRippleRadius : 16
        }}>
          {children}
      </Pressable>
    )
  }

  return (
     Platform.OS === 'ios' ? iosButton() : androidButton()
  )
}
export default ETextButton;

const styles = StyleSheet.create({
  container: {
     justifyContent: 'center',
     backgroundColor: colors.primary
  },
  text:{
    textAlign: 'center',
    color: colors.white
  }
});
