import React from 'react';
import { Platform, StyleSheet, Text, Pressable, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const EIconButton = ({icon, size = 20, color = 'black', onPress, style}) => {

  const onButtonPress = () => {
    onPress && onPress();
  }

  const iosButton = () => {
    return (
       <TouchableOpacity onPress={onButtonPress} style={[style,styles.container]}>
         <Icon name={icon} size={size} color={color} />
       </TouchableOpacity>
     )
  }

  const androidButton = () => {
    return (
      <Pressable 
        style={[style, styles.container]} 
        onPress={onButtonPress} 
        android_ripple={{
          color:'grey'
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
    width:50,
    alignItems: "center",
    padding: 10,
    borderRadius: 10
  }
})