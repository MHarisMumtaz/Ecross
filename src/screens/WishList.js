import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, FlatList, View, Text, Dimensions, Platform } from 'react-native';
import { PRODUCT_CARD_TYPES, LIST_STYLE_TYPE_ICON } from '../utils/Constants';
import colors from '../commons/Colors';

import ProductCard from './ProductCard';
import EIconButton from '../components/EIconButton';
import ETextButton from '../components/ETextButton';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DATA = [
	{
		id: '1',
		title: 'Mens TShirt all for dress split',
		image: 'https://purepng.com/public/uploads/medium/purepng.com-men-t-shirtclothingmen-t-shirtfashion-dress-shirt-cloth-tshirt-631522326839xqywo.png',
		price: '$400.0',
		description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
		totalRating: '2',
		favorite: true
	},
	{
		id: '2',
		title: 'Women Dress',
		image: 'https://purepng.com/public/uploads/medium/purepng.com-womens-white-t-shirtt-shirtfabrict-shapegramnetswhiteladies-14215264292663s83a.png',
		price: '$200.0',
		description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
		totalRating: '4.1',
		favorite: true
	},
	{
		id: '3',
		title: 'Band Cap',
		image: 'https://pngimg.com/uploads/cap/cap_PNG5685.png',
		price: '$20.0',
		description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
		totalRating: '5',
		favorite: true
	},
	{
		id: '4',
		title: 'Mens TShirt all for dress split',
		image: 'https://purepng.com/public/uploads/medium/purepng.com-men-t-shirtclothingmen-t-shirtfashion-dress-shirt-cloth-tshirt-631522326839xqywo.png',
		price: '$400.0',
		description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
		totalRating: '2',
		favorite: true
	},
	{
		id: '5',
		title: 'Women Dress',
		image: 'https://purepng.com/public/uploads/medium/purepng.com-womens-white-t-shirtt-shirtfabrict-shapegramnetswhiteladies-14215264292663s83a.png',
		price: '$200.0',
		description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
		totalRating: '4.1',
		favorite: true
	},
	{
		id: '6',
		title: 'Band Cap',
		image: 'https://pngimg.com/uploads/cap/cap_PNG5685.png',
		price: '$20.0',
		description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
		totalRating: '5',
		favorite: true
	},
	{
		id: '7',
		title: 'Mens TShirt all for dress split',
		image: 'https://purepng.com/public/uploads/medium/purepng.com-men-t-shirtclothingmen-t-shirtfashion-dress-shirt-cloth-tshirt-631522326839xqywo.png',
		price: '$400.0',
		description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
		totalRating: '2',
		favorite: true
	},
	{
		id: '8',
		title: 'Women Dress',
		image: 'https://purepng.com/public/uploads/medium/purepng.com-womens-white-t-shirtt-shirtfabrict-shapegramnetswhiteladies-14215264292663s83a.png',
		price: '$200.0',
		description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
		totalRating: '4.1',
		favorite: true
	},
	{
		id: '9',
		title: 'Band Cap',
		image: 'https://pngimg.com/uploads/cap/cap_PNG5685.png',
		price: '$20.0',
		description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
		totalRating: '5',
		favorite: true
	},
	{
		id: '10',
		title: 'Mens TShirt all for dress split',
		image: 'https://purepng.com/public/uploads/medium/purepng.com-men-t-shirtclothingmen-t-shirtfashion-dress-shirt-cloth-tshirt-631522326839xqywo.png',
		price: '$400.0',
		description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
		totalRating: '2',
		favorite: true
	},
	{
		id: '11',
		title: 'Women Dress',
		image: 'https://purepng.com/public/uploads/medium/purepng.com-womens-white-t-shirtt-shirtfabrict-shapegramnetswhiteladies-14215264292663s83a.png',
		price: '$200.0',
		description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
		totalRating: '4.1',
		favorite: true
	},
	{
		id: '12',
		title: 'Band Cap',
		image: 'https://pngimg.com/uploads/cap/cap_PNG5685.png',
		price: '$20.0',
		description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
		totalRating: '5',
		favorite: true
	},
	{
		id: '13',
		title: 'Mens TShirt all for dress split',
		image: 'https://purepng.com/public/uploads/medium/purepng.com-men-t-shirtclothingmen-t-shirtfashion-dress-shirt-cloth-tshirt-631522326839xqywo.png',
		price: '$400.0',
		description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
		totalRating: '2',
		favorite: true
	},
	{
		id: '14',
		title: 'Women Dress',
		image: 'https://purepng.com/public/uploads/medium/purepng.com-womens-white-t-shirtt-shirtfabrict-shapegramnetswhiteladies-14215264292663s83a.png',
		price: '$200.0',
		description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
		totalRating: '4.1',
		favorite: true
	},
	{
		id: '15',
		title: 'Band Cap',
		image: 'https://pngimg.com/uploads/cap/cap_PNG5685.png',
		price: '$20.0',
		description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
		totalRating: '5',
		favorite: true
	}
];

const WishList = () => {

	const [listStyle,setListStyle] = useState(LIST_STYLE_TYPE_ICON.LIST);

	const onListStyleChange = () => {
		if(listStyle === LIST_STYLE_TYPE_ICON.GRID){
			setListStyle(LIST_STYLE_TYPE_ICON.LIST);
		}else{
			setListStyle(LIST_STYLE_TYPE_ICON.GRID);
		}
	}

	const onPressFavorite = () => {

	}

	 const renderItem = ({item, index}) => {
    	return (
    		<View key={index} style={styles.productBox}>
			<ProductCard
				boxType={listStyle === LIST_STYLE_TYPE_ICON.GRID ? PRODUCT_CARD_TYPES.VERTICAL : PRODUCT_CARD_TYPES.HORIZONTAL}
    			id={item.id} 
    			title={item.title} 
    			imageUrl={item.image} 
    			price={item.price}
    			description={item.description}
    			totalRating= {item.totalRating}
    			onPressFavorite={onPressFavorite}
    			favorite={item.favorite}
    		/>
		</View>);
    }

    return (
    	<View style={[styles.container,  Platform.OS === 'ios' ? styles.padTop : {}]}>
    		<View style={[styles.header, Platform.OS === 'ios' ? styles.padBottom : {} ]}>
    			<Text style={styles.screenTitle}>WishList</Text>
    		</View>
    		<SafeAreaView style={styles.listContainer}>
				<FlatList
				 key={listStyle}
		    	 data={DATA}
		    	 renderItem={renderItem}
		    	 numColumns={listStyle === LIST_STYLE_TYPE_ICON.GRID ? 2 : 1}
		    	 showsVerticalScrollIndicator={false}
		    	/>
	    	</SafeAreaView>
	    	<View style={styles.footer}>
	    		<ETextButton
	    			rounded
	    			containerStyle={styles.cartButton}
	    			text='Add to cart'
	    			rightIcon='cart'
	    		/>
	        </View>
		</View>
    );
}

export default WishList;
const styles = StyleSheet.create({
  container: {
    padding:10,
    flex: 1,
    backgroundColor: colors.backgroundColor
  },
  padTop:{
  	paddingTop: 40
  },
  listContainer:{
  	flex: 1,
  },
  padBottom:{
  	paddingBottom: 10
  },
  header:{
  	flexDirection : 'row',
  	justifyContent: 'space-between',
  	paddingLeft: 10,
  	paddingBottom: 10
  },
  listStyleButton: {
  	color: colors.grey
  },
  screenTitle:{
  	fontSize: 18,
  	fontWeight: 'bold',
  	color: colors.grey,
  	marginTop: 10
  },
  productBox:{
	padding: 10
  },
  footer:{
  	alignItems: 'center',
  	paddingTop: 5
  },
  cartButton:{
  	width: 200
  }
});