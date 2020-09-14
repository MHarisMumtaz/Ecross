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
		src: 'https://picsum.photos/300/200',
	},
	{
		id: '31',
		title: 'Shoes',
		src: 'https://picsum.photos/300/200',
	},
	{
		id: '41',
		title: 'Beauty',
		src: 'https://picsum.photos/300/200',
	},
	{
		id: '51',
		title: 'Caps',
		src: 'https://picsum.photos/300/200',
	},
	{
		id: '61',
		title: 'Apperal',
		src: 'https://picsum.photos/300/200',
	},
	{
		id: '71',
		title: 'Electronics',
		src: 'https://picsum.photos/300/200',
	}
]

const AllCategoriesList = () => {
	
	const onPressItem = () => {
		showModal(Screens.ProductList);
	}
    return (
    	<View style={styles.container}>
    		<EButtonsList
    			isHorizontal={false} 
    			data={DATA}
    			titleStyle={styles.title}
    			btnContainerStyle={styles.banner} 
    			imageStyle={styles.imageStyle} 
    			imageWidth={windowWidth/1.11} 
    			imageHeight={150}
    			onPressItem={onPressItem}
    		/>
    	</View>
    );
}

export default AllCategoriesList;

const styles = StyleSheet.create({
  container: {
    padding:10
  },
  title:{
  	position: 'absolute',
  	color: colors.white,
  	elevation: 10,
  	top: 50,
  	left: 30,
  	fontSize: 26,
  	fontWeight: 'bold'
  },
  banner: {
  	width: windowWidth/1.2,
	height: 150
  },
  imageStyle:{
  	borderRadius: 20
  }
});