import React from 'react';
import { Platform, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../commons/Colors';

const EFab = ({icon, size = 20, color = colors.white, onPress = () => {}, style, androidRippleRadius, androidRippleColor}) => {

  const iosButton = () => {
    return (
       <TouchableOpacity 
         onPress={onPress}
         style={[style, styles.fabContainer]}
       >
         <Icon name={icon} size={size} color={color} />
       </TouchableOpacity>
     )
  }

  const androidButton = () => {
    return (
      <Pressable 
        style={[style, styles.fabContainer]}
        onPress={onPress} 
        android_ripple={{
          color: androidRippleColor ? androidRippleColor : colors.white,
          radius: androidRippleRadius ? androidRippleRadius : 26
        }}>
          <Icon name={icon} size={size} color={color} />
      </Pressable>
    )
  }

  return (
     Platform.OS === 'ios' ? iosButton() : androidButton()
  )
}


export default EFab;

const styles = StyleSheet.create({
  fabContainer: {
  	position: 'absolute',
    width:60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
    backgroundColor: colors.orange,
    borderRadius: 50,
    elevation:10, //Android
	  shadowColor: colors.grey, // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 0.6, // IOS
    shadowRadius: 10, //IOS
  },
  container: {
    alignItems: "center",
    padding: 10,
    borderRadius: 10
  }
});