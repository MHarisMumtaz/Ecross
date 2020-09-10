import React from 'react';
import { Platform, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../commons/Colors';

const EChip = ({text, icon, iconSize = 20, iconColor = colors.white, showCrossButton, onCrossPress = () => {}, onPress = () => {}, style}) => {

  return (
    <TouchableOpacity 
         onPress={onPress}
         style={[style, styles.container]}
       >
       {icon &&  <Icon name={icon} size={iconSize} color={iconColor} />}
       <Text style={styles.text}>{text}</Text>
       { showCrossButton && 
         <TouchableOpacity onPress={onCrossPress}>
           <Icon name='close' size={20} color={colors.lightBlack} />
         </TouchableOpacity>
       }
    </TouchableOpacity>
  );

}


export default EChip;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5,
    borderRadius: 20,
    backgroundColor: colors.lightGrey,
    width: 80
  },
  text:{
    textAlign:'center',
    color: colors.white
  }
});