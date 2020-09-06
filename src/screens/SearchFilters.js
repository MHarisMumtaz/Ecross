import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Text, Dimensions } from 'react-native';
import Slider from '@react-native-community/slider';
import colors from '../commons/Colors';

const SearchFilters = () => {
	const priceRange = {
		minValue: 10,
		maxValue: 10000
	};

	const [seletecPriceRange,setSelectedPriceRange] = useState({min:10, max:10000});

	const onMinPriceChange = (val) => {
		setSelectedPriceRange({...seletecPriceRange,min: val});
	}

	const onMaxPriceChange = (val) => {
		if(seletecPriceRange.min < val)
			setSelectedPriceRange({...seletecPriceRange, max: val});	
	}

    return (
		<View style={styles.container}>
			<View style={styles.priceSection}>
				<Text style={styles.priceLabel}>Price: <Text style={styles.priceRange}>$0 - $10000</Text></Text>
				<View style={styles.sliderSection}>
					<Text style={styles.minLabel}>Min: <Text style={styles.priceRange}>${seletecPriceRange.min}</Text></Text>
					<Slider
						style={{width: 220, height: 40}}
						minimumValue={priceRange.minValue}
						maximumValue={priceRange.maxValue}
						minimumTrackTintColor={colors.primary}
						maximumTrackTintColor={colors.grey}
						thumbTintColor={colors.primary}
						onValueChange={onMinPriceChange}
						value={seletecPriceRange.min}
						step={5}
					/>
				</View>
				<View style={styles.sliderSection}>
					<Text style={styles.minLabel}>Max: <Text style={styles.priceRange}>${seletecPriceRange.max}</Text></Text>
					<Slider
						style={{width: 220, height: 40}}
						minimumValue={priceRange.minValue}
						maximumValue={priceRange.maxValue}
						minimumTrackTintColor={colors.primary}
						maximumTrackTintColor={colors.grey}
						thumbTintColor={colors.primary}
						onValueChange={onMaxPriceChange}
						value={seletecPriceRange.max}
						step={5}
					/>
				</View>
			</View>
		</View>
    );
}

export default SearchFilters;

const styles = StyleSheet.create({
	container:{
		padding: 20,
		paddingBottom: 0,
	},
	priceSection:{

	},
	priceLabel: {
		fontSize: 16,
		fontWeight: 'bold'
	},
	priceRange:{
		color: colors.grey
	},
	minLabel: {
		top: 7,
		fontWeight: 'bold'
	},
	sliderSection:{
		flexDirection: 'row'
	}
});