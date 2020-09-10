import React from 'react';
import Modal from 'react-native-modal';
import { Platform, Dimensions, StyleSheet, Text, Pressable, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../commons/Colors';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const EModal = ({isShow, onBackdropPress, containerStyle, children }) => {

  return (
	  <Modal
	  	isVisible={isShow} 
	  	onBackdropPress={onBackdropPress}
	  	deviceWidth={windowWidth}
      	deviceHeight={windowHeight}>
	    <View style={[styles.container, containerStyle]}>
	      {children}
	    </View>
	  </Modal>
  );
}


export default EModal;

const styles = StyleSheet.create({
  container: {
  	backgroundColor: colors.white,
  	height: windowHeight
  }
});