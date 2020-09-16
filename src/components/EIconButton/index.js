import React from 'react';
import { Platform, StyleSheet, Text, Pressable, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../commons/Colors';

const EIconButton = ({icon, size = 20, color = 'black', onPress = () => {}, style, androidRippleRadius, androidRippleColor}) => {

  const iosButton = () => {
    return (
       <TouchableOpacity 
         onPress={onPress}
         style={[
          styles.container,
          style,
          {
            width: (style && style.width) ? style.width : 50,
            height: (style && style.height) ? style.height : 50
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
            width: (style && style.width) ? style.width : 50,
            height: (style && style.height) ? style.height : 50
          }
        ]} 
        onPress={onPress} 
        android_ripple={{
          color: androidRippleColor ? androidRippleColor : colors.lightGrey,
          radius: androidRippleRadius ? androidRippleRadius : 12,
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