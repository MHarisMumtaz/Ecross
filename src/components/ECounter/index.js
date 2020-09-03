import React from 'react';
import { Platform, StyleSheet, TouchableOpacity, Pressable, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../commons/Colors';

const ECounter = ({
  value, 
  containerStyle, 
  leftButtonStyle, 
  leftIcon = 'remove-outline', 
  leftIconColor = colors.white,
  rightIconColor = colors.white,
  rightIcon = 'add-outline', 
  rightButtonStyle, 
  textStyle, 
  onPressRight = () => {}, 
  onPressLeft = () => {}}) => {

  return (
     <View style={[styles.container,containerStyle]}>
       <TouchableOpacity style={[styles.removeButton, leftButtonStyle]} onPress={onPressLeft}>
         <Icon name={leftIcon} size={20} color={leftIconColor} />
       </TouchableOpacity>
       <Text style={[styles.text,textStyle]}>{value}</Text>
       <TouchableOpacity style={[styles.addButton, rightButtonStyle]} onPress={onPressRight}>
         <Icon name={rightIcon} size={20} color={rightIconColor} />
       </TouchableOpacity>
     </View>
  )
}


export default ECounter;

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row'
  },
  removeButton:{
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: colors.secondary,
    width: 30,
    height: 30,
    padding: 5,
    elevation: 6,
    shadowColor: colors.grey, // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 3, //IOS
  },
  addButton: {
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: colors.secondary,
    width: 30,
    height: 30,
    padding: 5,
    elevation: 6,
    shadowColor: colors.grey, // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 3, //IOS
  },
  text:{
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10,
    color: colors.secondary,
  }
});