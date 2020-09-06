import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Text, Dimensions } from 'react-native';
import Slider from '@react-native-community/slider';
import colors from '../commons/Colors';

const SearchFilters = () => {
    return (
		<View style={styles.container}>
			<Slider
				style={{width: 200, height: 40}}
				minimumValue={0}
				maximumValue={1}
				minimumTrackTintColor="#FFFFFF"
				maximumTrackTintColor="#000000"
			/>
		</View>
    );
}

export default SearchFilters;

const styles = StyleSheet.create({
	container:{
		padding: 10,
		paddingBottom: 0,
	}
});