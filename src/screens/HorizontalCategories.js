import React, {Component} from 'react';
import { StyleSheet, SafeAreaView, FlatList, View, Text } from 'react-native';
import EButtonsList from '../components/EButtonsList';
import Screens from '../navigations/Screens';
import { showModal } from '../services/modelService';

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

const HorizontalCategories = () => {

	const onPressItem = () => {
		showModal(Screens.ProductList);
	}

	const onPressSeeAll = () => {
		showModal(Screens.AllCategoriesList);
	}

    return (
    	<View style={styles.container}>
    		<EButtonsList 
    			showSeeAllBtn={true} 
    			showBgColor={true}
    			data={DATA}
    			onPressItem={onPressItem}
    			onPressSeeAll={onPressSeeAll}
    		/>
    	</View>
    );
}

export default HorizontalCategories;
const styles = StyleSheet.create({
  container: {
    padding:10
  },
  category:{

  }
});