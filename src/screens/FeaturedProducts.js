import React from 'react';
import { StyleSheet, SafeAreaView, FlatList, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import ProductCard from './ProductCard';
import colors from '../commons/Colors';

const DATA = [
	{
		id: '21',
		title: 'Mens TShirt all for dress split',
		image: 'https://purepng.com/public/uploads/medium/purepng.com-men-t-shirtclothingmen-t-shirtfashion-dress-shirt-cloth-tshirt-631522326839xqywo.png',
		price: '$400.0',
		totalRating: '2'
	},
	{
		id: '31',
		title: 'Women Dress',
		image: 'https://purepng.com/public/uploads/medium/purepng.com-womens-white-t-shirtt-shirtfabrict-shapegramnetswhiteladies-14215264292663s83a.png',
		price: '$200.0',
		totalRating: '4.1'
	},
	{
		id: '42',
		title: 'Band Cap',
		image: 'https://pngimg.com/uploads/cap/cap_PNG5685.png',
		price: '$20.0',
		totalRating: '5'
	}
];

const FeaturedProducts = (props) => {
	
	const onPressSeeAll = () => {

	}   

    const renderItem = ({item, index}) => {
    	return (<View key={index} style={styles.productBox}>
    				<ProductCard
		    			id={item.id} 
		    			title={item.title} 
		    			imageUrl={item.image} 
		    			price={item.price}
		    			totalRating= {item.totalRating}
		    		/>
    		</View>);
    }

    return (
    	<SafeAreaView>
    		<View style={styles.labelSection}>
	    		<Text style={styles.featuredLabel}>
	    			Featured
	    		</Text>
	    		<TouchableOpacity style={styles.seeAllBtn} onPress={onPressSeeAll}>
	    			<Text style={styles.seeAllBtnText}>See all</Text>
	    		</TouchableOpacity>
    		</View>
	    	<FlatList
	    	 data={DATA}
	    	 renderItem={renderItem}
	    	 horizontal={true}
	    	 showsHorizontalScrollIndicator={false}
	    	/>
    	</SafeAreaView>
    );

}

export default FeaturedProducts;

const styles = StyleSheet.create({
	productBox:{
		padding: 12
	},
	featuredLabel:{
	  	paddingLeft: 20,
	  	fontSize: 20,
	  	fontWeight:'bold'
	},
	seeAllBtn: {
		paddingRight:20,
	},
	seeAllBtnText: {
		fontSize:15,
		color: colors.primary
	},
	labelSection: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	}
})