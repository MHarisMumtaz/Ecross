import React, { useState, useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, View, Text, TouchableOpacity, Dimensions, Image, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../commons/Colors';

import Line from './Line';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const line_InitialState = {
	line1: null,
	line2: null,
	line3: null
}

const StepsHeader = ({ currentPage, totalPages }) => {
	const [lines, setLines] = useState(line_InitialState);

  useEffect(() => {
    animateLine();
  },[currentPage]);

  const animateLine = () => {
    if(currentPage!=null){
      let newLine = {};
      for (var i = 1; i <= currentPage; i++) {
        newLine[`line${i}`] = 'forward';
      }
      for (var i = currentPage + 1; i < totalPages; i++) {
        newLine[`line${i}`] = 'backward';
      }
      setLines(newLine);
    }
  }

	const { line1, line2, line3 } = lines;
  return (
    <View style={styles.steps}>
    	<View style={styles.stepBox}>
    		<Icon style={styles.icon} name="md-person-circle-outline" size={25} color={colors.primary} />
    		<Text style={styles.stepsText}>Personal</Text>
    	</View>
    	<Line animate={line1} />
    	<View style={styles.stepBox}>
    		<Icon style={styles.icon} name="md-business" size={25} color={line1==='forward' ? colors.primary : colors.grey} />
    		<Text style={styles.stepsText}>Address</Text>
    	</View>
    	<Line animate={line2} />
    	<View style={styles.stepBox}>
    		<Icon style={styles.icon} name="wallet" size={25} color={line2==='forward' ? colors.primary : colors.grey} />
    		<Text style={styles.stepsText}>Payment</Text>
    	</View>
    	<Line animate={line3} />
    	<View style={styles.stepBox}>
    		<Icon style={styles.icon} name="md-rocket" size={25} color={line3==='forward' ? colors.primary : colors.grey} />
    		<Text style={styles.stepsText}>Confirm</Text>
    	</View>
    </View>
  );
}

export default StepsHeader;

const styles = StyleSheet.create({
  steps:{
    marginTop: 5,
    margin: 10,
    flexDirection: 'row'
  },
  stepBox:{
  	justifyContent:'center'
  },
  stepsText:{
  	fontSize: 13,
  	color: colors.secondary
  },
  icon:{
  	alignSelf:'center'
  },
  stepLine:{
  	flex: 1,
  	marginTop: 10,
  	borderTopWidth: 2
  }
})