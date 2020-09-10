import React, { useState } from 'react';
import { StyleSheet, ScrollView, SafeAreaView, FlatList, View, Text, Dimensions } from 'react-native';
import colors from '../commons/Colors';
import ETextInput from '../components/ETextInput';
import EIconButton from '../components/EIconButton';
import EModal from '../components/EModal';

import ProductCard from './ProductCard';
import SearchFilters from './SearchFilters';

const windowHeight = Dimensions.get('window').height;

const DATA = [
	{
		id: '1',
		title: 'Mens TShirt all for dress split',
		image: 'https://purepng.com/public/uploads/medium/purepng.com-men-t-shirtclothingmen-t-shirtfashion-dress-shirt-cloth-tshirt-631522326839xqywo.png',
		price: '$400.0',
		totalRating: '2'
	},
	{
		id: '2',
		title: 'Women Dress',
		image: 'https://purepng.com/public/uploads/medium/purepng.com-womens-white-t-shirtt-shirtfabrict-shapegramnetswhiteladies-14215264292663s83a.png',
		price: '$200.0',
		totalRating: '4.1'
	},
	{
		id: '3',
		title: 'Band Cap',
		image: 'https://pngimg.com/uploads/cap/cap_PNG5685.png',
		price: '$20.0',
		totalRating: '5'
	},
	{
		id: '4',
		title: 'Mens TShirt all for dress split',
		image: 'https://purepng.com/public/uploads/medium/purepng.com-men-t-shirtclothingmen-t-shirtfashion-dress-shirt-cloth-tshirt-631522326839xqywo.png',
		price: '$400.0',
		totalRating: '2'
	},
	{
		id: '5',
		title: 'Women Dress',
		image: 'https://purepng.com/public/uploads/medium/purepng.com-womens-white-t-shirtt-shirtfabrict-shapegramnetswhiteladies-14215264292663s83a.png',
		price: '$200.0',
		totalRating: '4.1'
	},
	{
		id: '6',
		title: 'Band Cap',
		image: 'https://pngimg.com/uploads/cap/cap_PNG5685.png',
		price: '$20.0',
		totalRating: '5'
	},
	{
		id: '7',
		title: 'Mens TShirt all for dress split',
		image: 'https://purepng.com/public/uploads/medium/purepng.com-men-t-shirtclothingmen-t-shirtfashion-dress-shirt-cloth-tshirt-631522326839xqywo.png',
		price: '$400.0',
		totalRating: '2'
	},
	{
		id: '8',
		title: 'Women Dress',
		image: 'https://purepng.com/public/uploads/medium/purepng.com-womens-white-t-shirtt-shirtfabrict-shapegramnetswhiteladies-14215264292663s83a.png',
		price: '$200.0',
		totalRating: '4.1'
	},
	{
		id: '9',
		title: 'Band Cap',
		image: 'https://pngimg.com/uploads/cap/cap_PNG5685.png',
		price: '$20.0',
		totalRating: '5'
	},
	{
		id: '10',
		title: 'Mens TShirt all for dress split',
		image: 'https://purepng.com/public/uploads/medium/purepng.com-men-t-shirtclothingmen-t-shirtfashion-dress-shirt-cloth-tshirt-631522326839xqywo.png',
		price: '$400.0',
		totalRating: '2'
	},
	{
		id: '11',
		title: 'Women Dress',
		image: 'https://purepng.com/public/uploads/medium/purepng.com-womens-white-t-shirtt-shirtfabrict-shapegramnetswhiteladies-14215264292663s83a.png',
		price: '$200.0',
		totalRating: '4.1'
	},
	{
		id: '12',
		title: 'Band Cap',
		image: 'https://pngimg.com/uploads/cap/cap_PNG5685.png',
		price: '$20.0',
		totalRating: '5'
	},
	{
		id: '13',
		title: 'Mens TShirt all for dress split',
		image: 'https://purepng.com/public/uploads/medium/purepng.com-men-t-shirtclothingmen-t-shirtfashion-dress-shirt-cloth-tshirt-631522326839xqywo.png',
		price: '$400.0',
		totalRating: '2'
	},
	{
		id: '14',
		title: 'Women Dress',
		image: 'https://purepng.com/public/uploads/medium/purepng.com-womens-white-t-shirtt-shirtfabrict-shapegramnetswhiteladies-14215264292663s83a.png',
		price: '$200.0',
		totalRating: '4.1'
	},
	{
		id: '15',
		title: 'Band Cap',
		image: 'https://pngimg.com/uploads/cap/cap_PNG5685.png',
		price: '$20.0',
		totalRating: '5'
	}
];
const Search = () => {
	const [searchValue, setSearchValue] = useState();
	const [isShowFilter, setIsShowFilter] = useState(false);

	const onSearchChangeText = (value) => {	
		if(value)
			setSearchValue(value);
		else
			setSearchValue(null);
	}

	const onPressClear = () => {
		setSearchValue(null);
	}

	const onPressFilter = () => {
		setIsShowFilter(!isShowFilter);
	}

	const onCloseFilter = () => {
		setIsShowFilter(false);
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
    	<SafeAreaView style={styles.container}>
    		<EModal isShow={isShowFilter} onBackdropPress={onCloseFilter} containerStyle={styles.filter}>
    			<SearchFilters />
    		</EModal>
    		<View style={styles.searchSection}>

	    		<ETextInput
	    			rounded
	    			showShadow
	    			showClearOnEditing
	    			value={searchValue}
	    			placeholder='search'
	    			onTextChange={onSearchChangeText}
	    			onPressClear={onPressClear}
	    			leftIcon='search'/>
	    		<EIconButton 
	    			icon='options-outline'
	    			size={25}
	    			color={colors.grey}
	    			onPress={onPressFilter}
	    		/>
    		</View>
    		<View style={styles.searchItems}>
    			<FlatList
		    	 data={DATA}
		    	 numColumns={2}
		    	 renderItem={renderItem}
		    	 showsVerticalScrollIndicator={false}
		    	/>
    		</View>
    		
    	</SafeAreaView>
    );
}

export default Search;

const styles = StyleSheet.create({
	container:{
		padding: 10,
		paddingBottom: 0,
		backgroundColor: colors.backgroundColor
	},
	searchSection:{
		flexDirection: 'row',
		padding: 12
	},
	searchItems:{
		height: windowHeight / 1.3,
		alignItems: 'center'
	},
	productBox:{
		padding: 10
	},
	filter:{
		height: 600
	}
})