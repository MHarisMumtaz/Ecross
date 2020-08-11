import React, {Component} from 'react';
import { StyleSheet, SafeAreaView, FlatList, ToucableOpacity, Text, View } from 'react-native';
import colors, { ColorsCollection } from '../commons/Colors';
import EImageButton from '../components/EImageButton';

const DATA = [
	{
		id: '21',
		title: 'Mens Shirt',
		icon: 'shirt-outline',
		src: 'https://www.shareicon.net/data/2016/07/08/793175_clothing_512x512.png',
		color: '#c6dcd9'
	},
	{
		id: '31',
		title: 'Shoes',
		icon: 'shirt-outline',
		src: 'https://img.icons8.com/cotton/2x/women-shoes.png',
		color: 'red'
	},
	{
		id: '41',
		title: 'Beauty',
		icon: 'shirt-outline',
		src: 'https://cdn1.iconfinder.com/data/icons/ecommerce-vol1-filled-outline-bukeicon/32/beauty_cosmetic_lipstick_bukeicon._ecommerce_online-512.png',
		color: 'red'
	},
	{
		id: '51',
		title: 'Caps',
		icon: 'shirt-outline',
		src: 'https://icons.veryicon.com/png/o/commerce-shopping/50-e-commerce-product-icons/baseball-cap-4.png',
		color: 'red'
	},
	{
		id: '61',
		title: 'Apperal',
		icon: 'shirt-outline',
		src: 'https://cdn4.iconfinder.com/data/icons/mothers-day/512/as_244-512.png',
		color: 'red'
	},
	{
		id: '71',
		title: 'Electronics',
		icon: 'shirt-outline',
		src: 'https://cdn1.iconfinder.com/data/icons/online-shop-category-vol-2-electronic-color/64/SHOPPING_CAT.1-ELECTRONIC-EXPANDED-COLOR-64PX_tools_electricity_home_theatre_sound_speaker_loudspeaker-512.png',
		color: 'red'
	}
]

class HorizontalList extends Component {

	renderItem = ({item, index}) => {
		return (
			<View key={item.id} style={styles.boxContainer}>
				<EImageButton src={{uri:item.src}} imageWidth={25} imageHeight={25} containerStyle={[styles.roundBtn, { backgroundColor: ColorsCollection[index] }]}/>
				<Text style={styles.title}>{item.title}</Text>
			</View>
		)
	}

	render() {
	    return (
	    	<SafeAreaView>
		    	<FlatList
		    		data={DATA}
		    		renderItem={this.renderItem}
		    		horizontal={true}
		    		showsHorizontalScrollIndicator={false}
		    	/>
		    </SafeAreaView>
	    );
	}
}

export default HorizontalList;

const styles = StyleSheet.create({
  boxContainer: {
     padding:10
  },
  title: {
  	textAlign: 'center',
  	color: colors.secondary
  },
  roundBtn: {
	borderRadius:120,
	justifyContent: 'center',
	width: 60,
	height: 60,
    padding: 17
  }
});