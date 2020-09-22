import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, FlatList, View, Text, Dimensions } from 'react-native';
import { PRODUCT_CARD_TYPES, LIST_STYLE_TYPE_ICON, PRODUCT_LIST } from '../utils/Constants';
import colors from '../commons/Colors';

import ProductCard from './ProductCard';
import EIconButton from '../components/EIconButton';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ProductList = () => {

	const [listStyle,setListStyle] = useState(LIST_STYLE_TYPE_ICON.LIST);

	const onListStyleChange = () => {
		if(listStyle === LIST_STYLE_TYPE_ICON.GRID){
			setListStyle(LIST_STYLE_TYPE_ICON.LIST);
		}else{
			setListStyle(LIST_STYLE_TYPE_ICON.GRID);
		}
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
    		/>
		</View>);
    }

    return (
    	<View style={styles.container}>
    		<View style={styles.header}>
    			<Text style={styles.category}>Categories</Text>
    			<EIconButton 
    				style={styles.listStyleButton} 
    				icon={listStyle} 
    				color={colors.grey} 
    				size={22}
    				onPress={onListStyleChange}
    			/>
    		</View>
    		<SafeAreaView style={styles.listContainer}>
				<FlatList
				 key={listStyle}
		    	 data={PRODUCT_LIST}
		    	 renderItem={renderItem}
		    	 numColumns={listStyle === LIST_STYLE_TYPE_ICON.GRID ? 2 : 1}
		    	 showsVerticalScrollIndicator={false}
		    	/>
	    	</SafeAreaView>
		</View>
    );
}

export default ProductList;
const styles = StyleSheet.create({
  container: {
    padding:10,
    flex: 1,
    backgroundColor: colors.backgroundColor
  },
  listContainer:{
  	flex: 1
  },
  header:{
  	flexDirection : 'row',
  	justifyContent: 'space-between',
  	paddingLeft: 10
  },
  listStyleButton: {
  	color: colors.grey
  },
  category:{
  	fontSize: 18,
  	fontWeight: 'bold',
  	color: colors.grey,
  	marginTop: 10
  },
  productBox:{
	padding: 10
  },
});