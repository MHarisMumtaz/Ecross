import React from 'react';
import { StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Image, ImageBackground, View, Text, Dimensions } from 'react-native';
import colors from '../commons/Colors';
import ECarousal from '../components/ECarousal';

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
const ProductDetails = ({}) => {
    return (
      <SafeAreaView>
      	<ScrollView nestedScrollEnabled={true}>
        	<ECarousal items={data} />
        </ScrollView>
      </SafeAreaView>
    );
}

export default ProductDetails;
const styles = StyleSheet.create({
 
});