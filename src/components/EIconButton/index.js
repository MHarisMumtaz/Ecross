import React from 'react';
import { Platform, StyleSheet, Text, Pressable, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../commons/Colors';

const EIconButton = ({icon, size = 20, color = 'black', onPress, width, height, style, androidRippleRadius, androidRippleColor}) => {

  const onButtonPress = () => {
    onPress && onPress();
  }

  const iosButton = () => {
    return (
       <TouchableOpacity 
         onPress={onButtonPress}
         style={[
          styles.container,
          style,
          {
            width: width ? width : 50,
            height: height ? height : 50
          }
        ]}
       >
         <Icon name={icon} size={size} color={color} />
       </TouchableOpacity>
     )
  }

  const androidButton = () => {
    return (
      <Pressable 
        style={[
          styles.container,
          style,
          {
            width: width ? width : 50,
            height: height ? height : 50
          }
        ]} 
        onPress={onButtonPress} 
        android_ripple={{
          color: androidRippleColor ? androidRippleColor : colors.grey,
          radius: androidRippleRadius ? androidRippleRadius : 16
        }}>
          <Icon name={icon} size={size} color={color} />
      </Pressable>
    )
  }

  return (
     Platform.OS === 'ios' ? iosButton() : androidButton()
  )
}


export default EIconButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 10,
    borderRadius: 10
  }
});