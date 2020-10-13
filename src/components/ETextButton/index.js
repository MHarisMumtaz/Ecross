import React from 'react';
import { Platform, StyleSheet, Pressable, TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../commons/Colors';

const ETextButton = ({
    rounded,
    text, 
    leftIcon,
    leftIconColor = colors.white,
    leftIconSize = 18, 
    rightIcon,
    rightIconColor = colors.white,
    rightIconSize = 18,
    androidRippleColor, androidRippleRadius, containerStyle, onPress = () => {}}) => {

  const iosButton = () => {
    return (
       <TouchableOpacity 
         onPress={onPress}
         style={[
          styles.container,
          containerStyle,
          {
            borderRadius: rounded ? 30 : 0
          }
        ]}
       >
        {leftIcon && <Icon style={styles.leftIcon} name={leftIcon} size={leftIconSize} color={leftIconColor} /> }
        <Text style={styles.text}>{text}</Text>
        {rightIcon && <Icon style={styles.rightIcon} name={rightIcon} size={rightIconSize} color={rightIconColor} />}
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
            
            borderRadius: rounded ? 30 : 0
          }
        ]} 
        onPress={onPress} 
        android_ripple={{
          color: androidRippleColor ? androidRippleColor : colors.lightGrey,
          radius: androidRippleRadius ? androidRippleRadius : 80
        }}>
          {leftIcon && <Icon style={styles.leftIcon} name={leftIcon} size={leftIconSize} color={leftIconColor} /> }
          <Text style={styles.text}>{text}</Text>
          {rightIcon && <Icon style={styles.rightIcon} name={rightIcon} size={rightIconSize} color={rightIconColor} />}
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
     flexDirection: 'row',
     justifyContent: 'center',
     padding: 10,
     backgroundColor: colors.primary
  },
  text:{
    fontSize: 16,
    textAlign: 'center',
    color: colors.white
  },
  leftIcon:{
    top: 1,
    right: 10
  },
  rightIcon:{
    top: 1,
    left: 10
  }
});
