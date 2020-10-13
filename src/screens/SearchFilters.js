import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, ScrollView, View, Text, Dimensions } from 'react-native';
import Slider from '@react-native-community/slider';
import colors from '../commons/Colors';
import ESelectableList from '../components/ESelectableList';
import ETextInput from '../components/ETextInput';
import EAutoComplete from '../components/EAutoComplete';
import ETextButton from '../components/ETextButton';
import EChip from '../components/EChip';

const productColors = [
	{
		color: '#C2BBEA',
		selected: false
	},
	{
		color: '#E5F1FF',
		selected: false
	},
	{
		color: '#B6EA7D',
		selected: false
	},
	{
		color: '#FFC34D',
		selected: false
	},
	{
		color: '#324AB2',
		selected: false
	}
];

const productSizes = [
	{
		text: 'S'
	},
	{
		text: 'XS'
	},
	{
		text: 'M'
	},
	{
		text: 'L'
	},
	{
		text: 'XL'
	},
	{
		text: 'XXL'
	},
	{
		text: 'XXXL'
	}
]

const SearchFilters = ({ categories }) => {
	const priceRange = {
		minValue: 10,
		maxValue: 10000
	};
	const [colorCollection,setColorCollection] = useState([...productColors]);
	const [sizeCollection, setSizeCollection] = useState([...productSizes]);
	const [seletecPriceRange,setSelectedPriceRange] = useState({min:10, max:10000});
	const [selectedCategories, setSelectedCategories] = useState([]);
	const [categoryInputValue, setCategoryInputValue] = useState(null);

	const onMinPriceChange = (val) => {
		setSelectedPriceRange({...seletecPriceRange,min: val});
	}

	const onMaxPriceChange = (val) => {
		if(seletecPriceRange.min < val)
			setSelectedPriceRange({...seletecPriceRange, max: val});	
	}

	const onPressSize = (item, i) => {
		const updatedCollection = sizeCollection.map((obj,index)=>{
			obj.selected = false;
			if(index===i){
				obj.selected =! obj.selected;
			}
			return obj;
		});
		setSizeCollection(updatedCollection);
	};

	const onPressColor = (item, i) => {
		const updatedCollection = colorCollection.map((obj,index)=>{
			obj.selected = false;
			if(index===i){
				obj.selected =! obj.selected;
			}
			return obj;
		});
		setColorCollection(updatedCollection);
	};

	const onEndEditingCategory = ({target}) => {

	}

	const onChangeCategory = (value) => {
		if(value)
			setCategoryInputValue(value);
		else
			setCategoryInputValue(null);
	}

    return (
		<View style={styles.container}>
			<View style={styles.categoriesSection}>
				<Text style={styles.label}>Categories</Text>
				<EAutoComplete
					rounded
					listData={categories} 
					value={categoryInputValue}
					onEndEditing={onEndEditingCategory} 
					onChangeText={onChangeCategory}
				/>
				<View style={styles.chips}>
					{
						selectedCategories.map((cat,index)=> <EChip key={inde} text={cat.name} style={styles.chip} />)
					}
				</View>
			</View>
			<View style={styles.priceSection}>
				<Text style={styles.label}>Price: <Text style={styles.priceRange}>$0 - $10000</Text></Text>
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
			
			<View>
				<Text style={styles.label}>Color:</Text>
				<ESelectableList collection={colorCollection} onPress={(item,i)=> onPressColor(item,i)} />
			</View>
			<View>
				<Text style={styles.label}>Size:</Text>
				<ESelectableList collection={sizeCollection} buttonStyle={styles.sizeButton} onPress={(item,i)=> onPressSize(item,i)} />
			</View>
			<View style={{alignSelf: 'flex-end'}}>
				<ETextButton
					rounded
					containerStyle={styles.saveButton}
					text='Apply Filters'
					/>
			</View>
		</View>
    );
}

SearchFilters.propTypes = {
  categories: PropTypes.array,
};
SearchFilters.defaultProps = {
	categories: []
};

export default SearchFilters;

const styles = StyleSheet.create({
	container:{
		padding: 20,
		paddingBottom: 0,
	},
	priceSection:{

	},
	chips:{
		margin: 10,
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	chip:{
		margin: 10
	},
	categoriesSection:{
		paddingBottom: 10
	},
	categoriesInput:{
		height: 40,
		marginBottom: 10
	},
	label:{
		fontSize: 16,
		fontWeight: 'bold',
		color: colors.grey
	},
	priceRange:{
		color: colors.grey
	},
	minLabel: {
		top: 7,
		fontWeight: 'bold',
		color: colors.grey
	},
	sliderSection:{
		flexDirection: 'row'
	},
	sizeButton: {
		width: 35,
		height: 35,
		elevation: 5
	},
	colorsSection:{
		
	},
	sizeSection:{
		flexDirection: 'row'
	},
	saveButton:{
		width: 150,
		borderRadius: 30
	},
	save:{
		fontSize: 18,
		textAlign: 'center',
		color: colors.white
	}
});