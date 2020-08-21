import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Image, ImageBackground, View, Text, Dimensions } from 'react-native';
import colors, { ColorsCollection } from '../commons/Colors';
import ECarousal from '../components/ECarousal';
import ESelectableColorList from '../components/ESelectableColorList';

const data = [
	{
		url: 'https://purepng.com/public/uploads/medium/purepng.com-men-t-shirtclothingmen-t-shirtfashion-dress-shirt-cloth-tshirt-631522326839xqywo.png'
	},
	{
		url: 'https://purepng.com/public/uploads/medium/purepng.com-womens-white-t-shirtt-shirtfabrict-shapegramnetswhiteladies-14215264292663s83a.png'
	},
	{
		url: 'https://pngimg.com/uploads/cap/cap_PNG5685.png'
	}
]
const productColors = [
	{
		color: 'red',
		selected: false
	},
	{
		color: 'yellow',
		selected: false
	},
	{
		color: 'brown',
		selected: false
	},
	{
		color: 'green',
		selected: false
	},
	{
		color: 'blue',
		selected: false
	}
]

const ProductDetails = ({}) => {
	const [colorCollection,setColorCollection] = useState([...productColors]);

	const onColorPress = (item, i) => {
		colorCollection[i].selected =! colorCollection[i].selected;
		setColorCollection([...colorCollection]);
	};

    return (
      <SafeAreaView>
      	<ScrollView nestedScrollEnabled={true}>
        	<ECarousal items={data} />
        	<ESelectableColorList colorsCollection={colorCollection} onPress={(item,i)=> onColorPress(item,i)} />
        </ScrollView>
      </SafeAreaView>
    );
}

export default ProductDetails;
const styles = StyleSheet.create({
});