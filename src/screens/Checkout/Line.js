import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';
import colors from '../../commons/Colors';

const Line = ({colorBefore = colors.secondary, colorAfter = colors.primary, animate}) => {
	const lineAnimation = useRef(new Animated.Value(0)).current;

	const colorInterpolate =  lineAnimation.interpolate({
	    inputRange: [0, 1],
	    outputRange:[colorBefore, colorAfter]
	 });

	useEffect(() => {
		if(animate==='forward'){
			Animated.timing(lineAnimation, {
		      toValue: 1,
		      duration: 1000,
		      useNativeDriver: false
		    }).start();
		}else if(animate==='backward'){
			Animated.timing(lineAnimation, {
		      toValue: 0,
		      duration: 1000,
		      useNativeDriver: false
		    }).start();
		}
	},[animate]);

	return (
		<Animated.View style={[
			styles.line, 
			{ 
				borderColor: colorInterpolate 
			}
		]} />
	);
}

export default Line;

const styles = StyleSheet.create({
  line:{
  	flex: 1,
  	marginTop: 10,
  	borderTopWidth: 2
  }
})