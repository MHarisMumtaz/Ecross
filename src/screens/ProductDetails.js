import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Image, ImageBackground, View, Text, Dimensions } from 'react-native';
import colors, { ColorsCollection } from '../commons/Colors';
import ECarousal from '../components/ECarousal';
import ESelectableList from '../components/ESelectableList';
import ERating from '../components/ERating';

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
	}
]

const ProductDetails = ({}) => {
	const [colorCollection,setColorCollection] = useState([...productColors]);
	const [sizeCollection, setSizeCollection] = useState([...productSizes]);

	const onSizePress = (item, i) => {
		const updatedCollection = sizeCollection.map((obj,index)=>{
			obj.selected = false;
			if(index===i){
				obj.selected =! obj.selected;
			}
			return obj;
		});
		setSizeCollection(updatedCollection);
	};

	const onColorPress = (item, i) => {
		const updatedCollection = colorCollection.map((obj,index)=>{
			obj.selected = false;
			if(index===i){
				obj.selected =! obj.selected;
			}
			return obj;
		});
		setColorCollection(updatedCollection);
	};

    return (
      <SafeAreaView>
      	<ScrollView nestedScrollEnabled={true}>
        	<ECarousal items={data} />
        	<View style={styles.body}>
	        	<View style={styles.titleSection}>
	        		<Text style={styles.productTitle}>Mens T-Shirt </Text>
		        	<View>
			        	<Text style={styles.productOldPrice} > $400.00</Text>
			        	<Text style={styles.productPrice}> $500.00 </Text>
		        	</View>
	        	</View>
		        <ERating rating={1.4} />
	        </View>
        	<ESelectableList collection={colorCollection} onPress={(item,i)=> onColorPress(item,i)} />
        	<ESelectableList collection={sizeCollection} buttonStyle={styles.sizeButton} onPress={(item,i)=> onSizePress(item,i)} />
        </ScrollView>
      </SafeAreaView>
    );
}

export default ProductDetails;
const styles = StyleSheet.create({
	body:{
		padding: 10,
	},
	titleSection: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	productTitle:{
		fontSize:22,
		fontWeight: 'bold',
	},
	productPrice: {
		fontSize: 18,
		fontWeight: 'bold',
		color: colors.primary
	},
	productOldPrice: {
		fontSize: 16,
		fontWeight: 'bold',
		textDecorationLine: 'line-through', 
		textDecorationStyle: 'solid',
		color: colors.secondary
	},
	sizeButton: {
		borderRadius: 0,
		width: 35,
		height: 35,
		elevation: 5
	}
});
