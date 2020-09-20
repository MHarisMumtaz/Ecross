import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity, View, Text, Animated, PanResponder, Dimensions, Platform } from 'react-native';
import colors from '../../commons/Colors';

const { width } = Dimensions.get('window');

const ListItem = ({id, children, setScrollEnabled, success, backgroundColor = colors.white}) => {

	const gestureDelay = 35;
	let scrollViewEnabled = true;
	const position = new Animated.ValueXY();

	const panResponder = PanResponder.create({
		onStartShouldSetPanResponder: (evt, gestureState) => true,
		onMoveShouldSetPanResponder: (evt, gestureState) => true,
		onPanResponderTerminationRequest: (evt, gestureState) => false,
		onPanResponderMove: (evt, gestureState) => {
		  if (gestureState.dx < -35) {
		    setScrollViewEnabled(false);
		    let newX = gestureState.dx - gestureDelay;
		    position.setValue({ x: newX, y: 0 });
		  }
		},
		onPanResponderRelease: (evt, gestureState) => {
		  	if (gestureState.dx < -150) {
			    Animated.timing(position, {
			      toValue: {x: width, y: 0},
			      duration: 100,
			      useNativeDriver: false
			    }).start(() => {
			      success(id);
			      setScrollViewEnabled(true);
			    });
		    } else {
			    Animated.timing(position, {
			      toValue: {x: 0, y: 0},
			      duration: 500,
			      useNativeDriver: false
			    }).start(() => {
			      setScrollViewEnabled(true);
			    });
		    }
		},
	});

	const setScrollViewEnabled = (enabled) => {
	    if (scrollViewEnabled !== enabled) {
	      setScrollEnabled(enabled);
	      scrollViewEnabled = enabled;
	    }
	  }

  	return (
	    <View style={styles.listItem}>
	      <Animated.View 
	        style={[position.getLayout()]} 
	        {...panResponder.panHandlers}
	      >
	        <View style={styles.absoluteCell}>
	          <Text style={styles.absoluteCellText}>DELETE</Text>
	        </View>
	        <View style={[styles.innerCell, {backgroundColor: backgroundColor}]}>
	          { children }
	        </View>
	      </Animated.View>
	    </View>
  	);
}

export default ListItem;
const styles = StyleSheet.create({
  listItem: {
    justifyContent: 'center',
    backgroundColor: colors.delete,
    elevation: 10,
    shadowColor: colors.grey, // IOS
    shadowOffset: { height: 5, width: 1 }, // IOS
    shadowOpacity: 0.5, // IOS
    shadowRadius: 10, //IOS
  },
  absoluteCell: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: 100,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  absoluteCellText: {
    margin: 16,
  },
  innerCell: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
});