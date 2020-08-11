import React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View, Text } from 'react-native';
import colors from '../../commons/Colors';

const ETextButton = ({text, androidRippleColor, androidRippleRadius, containerStyle, onPress = () => {}}) => {

  const iosButton = () => {
    return (
       <TouchableOpacity 
         onPress={onPress}
         style={[
          styles.container,
          style,
          {
            width: (containerStyle && containerStyle.width) ? containerStyle.width : 50,
            height: (containerStyle && containerStyle.height) ? containerStyle.height : 50
          }
        ]}
       >
         <Text>{text}</Text>
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
            width: (containerStyle && containerStyle.width) ? containerStyle.width : 50,
            height: (containerStyle && containerStyle.height) ? containerStyle.height : 50
          }
        ]} 
        onPress={onPress} 
        android_ripple={{
          color: androidRippleColor ? androidRippleColor : colors.grey,
          radius: androidRippleRadius ? androidRippleRadius : 16
        }}>
          <Text>{text}</Text>
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
     backgroundColor: colors.secondary
  }
});
