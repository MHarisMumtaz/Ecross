import React, {Component} from 'react';
import { StyleSheet, SafeAreaView, FlatList, View, Text, Dimensions } from 'react-native';
import EButtonsList from '../components/EButtonsList';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DATA = [
	{
		id: '21',
		title: '',
		src: 'https://picsum.photos/300/200',
		text: 'asda'
	},
	{
		id: '31',
		title: '',
		src: 'https://picsum.photos/300/200',
	}
]

class HorizontalBanners extends Component {
	render() {
	    return (
	    	<View style={styles.container}>
	    		<EButtonsList 
	    			data={DATA} 
	    			btnContainerStyle={styles.banner} 
	    			imageStyle={styles.imageStyle} 
	    			imageWidth={windowWidth/1.16} 
	    			imageHeight={200}
	    		/>
	    	</View>
	    );
	}
}

export default HorizontalBanners;
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