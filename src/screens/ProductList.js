import React, {Component} from 'react';
import { StyleSheet, SafeAreaView, FlatList, View, Text, Dimensions } from 'react-native';
import EHorizontalButtonsList from '../components/EHorizontalButtonsList';
import ProductCard from './ProductCard';
import { PRODUCT_CARD_TYPES } from '../utils/Constants';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DATA = [
	{
		id: '1',
		title: 'Mens TShirt all for dress split',
		image: 'https://purepng.com/public/uploads/medium/purepng.com-men-t-shirtclothingmen-t-shirtfashion-dress-shirt-cloth-tshirt-631522326839xqywo.png',
		price: '$400.0',
		description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
		totalRating: '2'
	},
	{
		id: '2',
		title: 'Women Dress',
		image: 'https://purepng.com/public/uploads/medium/purepng.com-womens-white-t-shirtt-shirtfabrict-shapegramnetswhiteladies-14215264292663s83a.png',
		price: '$200.0',
		description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
		totalRating: '4.1'
	},
	{
		id: '3',
		title: 'Band Cap',
		image: 'https://pngimg.com/uploads/cap/cap_PNG5685.png',
		price: '$20.0',
		description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
		totalRating: '5'
	},
	{
		id: '4',
		title: 'Mens TShirt all for dress split',
		image: 'https://purepng.com/public/uploads/medium/purepng.com-men-t-shirtclothingmen-t-shirtfashion-dress-shirt-cloth-tshirt-631522326839xqywo.png',
		price: '$400.0',
		description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
		totalRating: '2'
	},
	{
		id: '5',
		title: 'Women Dress',
		image: 'https://purepng.com/public/uploads/medium/purepng.com-womens-white-t-shirtt-shirtfabrict-shapegramnetswhiteladies-14215264292663s83a.png',
		price: '$200.0',
		description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
		totalRating: '4.1'
	},
	{
		id: '6',
		title: 'Band Cap',
		image: 'https://pngimg.com/uploads/cap/cap_PNG5685.png',
		price: '$20.0',
		description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
		totalRating: '5'
	},
	{
		id: '7',
		title: 'Mens TShirt all for dress split',
		image: 'https://purepng.com/public/uploads/medium/purepng.com-men-t-shirtclothingmen-t-shirtfashion-dress-shirt-cloth-tshirt-631522326839xqywo.png',
		price: '$400.0',
		description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
		totalRating: '2'
	},
	{
		id: '8',
		title: 'Women Dress',
		image: 'https://purepng.com/public/uploads/medium/purepng.com-womens-white-t-shirtt-shirtfabrict-shapegramnetswhiteladies-14215264292663s83a.png',
		price: '$200.0',
		description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
		totalRating: '4.1'
	},
	{
		id: '9',
		title: 'Band Cap',
		image: 'https://pngimg.com/uploads/cap/cap_PNG5685.png',
		price: '$20.0',
		description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
		totalRating: '5'
	},
	{
		id: '10',
		title: 'Mens TShirt all for dress split',
		image: 'https://purepng.com/public/uploads/medium/purepng.com-men-t-shirtclothingmen-t-shirtfashion-dress-shirt-cloth-tshirt-631522326839xqywo.png',
		price: '$400.0',
		description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
		totalRating: '2'
	},
	{
		id: '11',
		title: 'Women Dress',
		image: 'https://purepng.com/public/uploads/medium/purepng.com-womens-white-t-shirtt-shirtfabrict-shapegramnetswhiteladies-14215264292663s83a.png',
		price: '$200.0',
		description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
		totalRating: '4.1'
	},
	{
		id: '12',
		title: 'Band Cap',
		image: 'https://pngimg.com/uploads/cap/cap_PNG5685.png',
		price: '$20.0',
		description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
		totalRating: '5'
	},
	{
		id: '13',
		title: 'Mens TShirt all for dress split',
		image: 'https://purepng.com/public/uploads/medium/purepng.com-men-t-shirtclothingmen-t-shirtfashion-dress-shirt-cloth-tshirt-631522326839xqywo.png',
		price: '$400.0',
		description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
		totalRating: '2'
	},
	{
		id: '14',
		title: 'Women Dress',
		image: 'https://purepng.com/public/uploads/medium/purepng.com-womens-white-t-shirtt-shirtfabrict-shapegramnetswhiteladies-14215264292663s83a.png',
		price: '$200.0',
		description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
		totalRating: '4.1'
	},
	{
		id: '15',
		title: 'Band Cap',
		image: 'https://pngimg.com/uploads/cap/cap_PNG5685.png',
		price: '$20.0',
		description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
		totalRating: '5'
	}
];

const ProductList = () => {

	 const renderItem = ({item, index}) => {
    	return (
    		<View key={index} style={styles.productBox}>
			<ProductCard
				boxType={PRODUCT_CARD_TYPES.HORIZONTAL}
    			id={item.id} 
    			title={item.title} 
    			imageUrl={item.image} 
    			price={item.price}
    			description={item.description}
    			totalRating= {item.totalRating}
    		/>
		</View>);
    }

    return (
    	<View style={styles.container}>
			<FlatList
	    	 data={DATA}
	    	 renderItem={renderItem}
	    	 showsVerticalScrollIndicator={false}
	    	/>
		</View>
    );
}

export default ProductList;
const styles = StyleSheet.create({
  container: {
    padding:10
  },
  productBox:{
	padding: 10
  },
});