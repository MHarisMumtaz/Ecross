import React from 'react';
import { Platform, StyleSheet, TouchableOpacity, Pressable, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../commons/Colors';

const ECounter = ({
  value,
  shadow,
  vertical,
  containerStyle, 
  leftButtonStyle, 
  leftIcon = 'remove-outline', 
  leftIconColor = colors.grey,
  rightIconColor = colors.grey,
  rightIcon = 'add-outline', 
  rightButtonStyle, 
  textStyle, 
  onPressRight = () => {}, 
  onPressLeft = () => {}}) => {

  return (
     <View style={[vertical ? styles.verticalContainer : styles.container,containerStyle]}>
       <TouchableOpacity 
         style={[
           vertical ? styles.removeButtonVertical : styles.removeButton,
           leftButtonStyle,
           shadow ? styles.shadow : {}
          ]} 
         onPress={onPressLeft}
        >
         <Icon name={leftIcon} size={18} color={leftIconColor} />
       </TouchableOpacity>
       <Text style={[vertical ? styles.textVertical : styles.text,textStyle]}>{value}</Text>
       <TouchableOpacity 
         style={[
           vertical ? styles.addButtonVertical : styles.addButton,
           rightButtonStyle,
           shadow ? styles.shadow : {}
         ]} 
         onPress={onPressRight}
        >
         <Icon name={rightIcon} size={18} color={rightIconColor} />
       </TouchableOpacity>
     </View>
  )
}


export default ECounter;

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colors.lightGrey
  },
  verticalContainer:{
     backgroundColor: colors.white,
     borderRadius: 20,
     borderWidth: 2,
     width: 28,
     borderColor: colors.lightGrey
  },
  shadow:{
    elevation: 5,
    shadowColor: colors.grey, // IOS
    shadowOffset: { height: 0, width: 0 }, // IOS
    shadowOpacity: 0.4, // IOS
    shadowRadius: 3, //IOS
  },
  shadowDown:{
    elevation: 10,
    shadowColor: colors.grey, // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 0.4, // IOS
    shadowRadius: 3, //IOS
  },
  removeButtonVertical:{
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: colors.lightGrey,
    width: 25,
    height: 25,
    padding: 4,
  },
  removeButton:{
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: colors.lightGrey,
    width: 25,
    height: 25,
    padding: 4,
  },
  addButtonVertical:{
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: colors.lightGrey,
    width: 25,
    height: 25,
    padding: 4,
  },
  addButton: {
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: colors.lightGrey,
    width: 25,
    height: 25,
    padding: 4,
  },
  textVertical:{
    fontSize: 18,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 5,
    color: colors.grey,
  },
  text:{
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
    color: colors.grey,
  }
});