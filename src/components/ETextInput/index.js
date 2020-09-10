import React from 'react';
import { Platform, StyleSheet, Pressable, TouchableOpacity, View, TextInput, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../commons/Colors';
import EIconButton from '../EIconButton';
const windowWidth = Dimensions.get('window').width;

const ETextInput = ({
    value,
    disabled = false,
    inputStyle, 
    leftIcon, 
    leftIconSize = 18, 
    leftIconColor = colors.primary, 
    rightIcon,
    rightIconColor = colors.primary,
    rightIconSize = 18, 
    containerStyle, 
    placeholder, 
    placeholderTextColor = colors.grey,
    showShadow,
    rounded,
    shadowColor = colors.grey,
    showClearOnEditing,
    onTextChange = () => {},
    onPressClear = () => {},
    onEndEditing = () => {}
  }) => {

  return (
     <View style={[styles.container, containerStyle, showShadow && {
        elevation: 4,
        shadowColor: shadowColor ? shadowColor : colors.grey, // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 3, //IOS
     }, rounded && {
       borderRadius: 30,
     }]}>
      {leftIcon && <Icon style={styles.leftIcon} name={leftIcon} size={leftIconSize} color={leftIconColor} />}
      <TextInput
        editable={!disabled}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        underlineColorAndroid="transparent"
        onChangeText={onTextChange}
        onEndEditing={onEndEditing}
        style={[styles.input, inputStyle]} 
      />
      {(showClearOnEditing && value) && <EIconButton icon='close-outline' onPress={onPressClear} />}
      {rightIcon && <Icon style={styles.rightIcon} name={rightIcon} size={rightIconSize} color={rightIconColor} />}
     </View>
  )
}
export default ETextInput;

const styles = StyleSheet.create({
  container: {
    width: windowWidth / 1.25,
    flexDirection: 'row',
    backgroundColor: colors.white,
    height: 40,
  },
  input:{
    flex: 1,
    padding: 12,
    fontSize: 16,
    textDecorationLine: 'none',
    color: colors.grey
  },
  leftIcon:{
    paddingTop:10,
    paddingLeft:10
  },
  rightIcon:{
    paddingTop: 10,
    paddingRight: 8
  }
});
