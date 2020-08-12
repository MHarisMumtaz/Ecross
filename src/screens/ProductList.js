import React, {Component} from 'react';
import { StyleSheet, SafeAreaView, FlatList, View, Text, Dimensions } from 'react-native';
import EHorizontalButtonsList from '../components/EHorizontalButtonsList';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DATA = [
	{
		id: '21',
		title: '',
		src: 'https://picsum.photos/300/200',
	},
	{
		id: '31',
		title: '',
		src: 'https://picsum.photos/300/200',
	}
]

class ProductList extends Component {
	render() {
	    return (
	    	<View style={styles.container}>
	    		
	    	</View>
	    );
	}
}

export default ProductList;
const styles = StyleSheet.create({
  container: {
    padding:10
  },
  banner: {
  	width: windowWidth/1.2,
	height: 200,
  },
  imageStyle:{
  	borderRadius: 30
  }
});