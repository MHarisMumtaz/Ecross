import React, {Component} from 'react';
import { StyleSheet, SafeAreaView, FlatList, View, Text, Dimensions } from 'react-native';
import EButtonsList from '../components/EButtonsList';
import colors from '../commons/Colors';
import Screens from '../navigations/Screens';
import { showModal } from '../services/modelService';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DATA = [
	{
		id: '21',
		title: 'Mens Shirt',
		src: 'https://www.shareicon.net/data/2016/07/08/793175_clothing_512x512.png',
	},
	{
		id: '31',
		title: 'Shoes',
		src: 'https://img.icons8.com/cotton/2x/women-shoes.png',
	},
	{
		id: '41',
		title: 'Beauty',
		src: 'https://cdn1.iconfinder.com/data/icons/ecommerce-vol1-filled-outline-bukeicon/32/beauty_cosmetic_lipstick_bukeicon._ecommerce_online-512.png',
	},
	{
		id: '51',
		title: 'Caps',
		src: 'https://icons.veryicon.com/png/o/commerce-shopping/50-e-commerce-product-icons/baseball-cap-4.png',
	},
	{
		id: '61',
		title: 'Apperal',
		src: 'https://cdn4.iconfinder.com/data/icons/mothers-day/512/as_244-512.png',
	},
	{
		id: '71',
		title: 'Electronics',
		src: 'https://cdn1.iconfinder.com/data/icons/online-shop-category-vol-2-electronic-color/64/SHOPPING_CAT.1-ELECTRONIC-EXPANDED-COLOR-64PX_tools_electricity_home_theatre_sound_speaker_loudspeaker-512.png',
	}
]

const AllBoxCategories = () => {
	
	const onPressItem = () => {
		showModal(Screens.ProductList);
	}

    return (
    	<View style={styles.container}>
    		<EButtonsList
    			isHorizontal={false}
    			showBgColor={true}
    			data={DATA}
    			onPressItem={onPressItem}
    			containerStyle={styles.category}
    			titleStyle={styles.categoryTitle}
    		/>
    	</View>
    );
}

export default AllBoxCategories;

const styles = StyleSheet.create({
  container: {
    padding:10
  },
  category:{
  	flexDirection: 'row',
  	borderRadius: 25,
  	backgroundColor: colors.white,
  	elevation: 6,
  	margin: 10,
  	shadowColor: colors.grey, // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 0.6, // IOS
    shadowRadius: 6, //IOS
  },
  categoryTitle:{
  	top: 14,
  	left: 30,
  	fontSize: 18,
  	fontWeight: 'bold'
  }
});