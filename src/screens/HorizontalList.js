import React, {Component} from 'react';
import { StyleSheet, SafeAreaView, FlatList, ToucableOpacity, Text, View } from 'react-native';
import colors from '../commons/Colors';
import EImageButton from '../components/EImageButton';

const DATA = [
	{
		id: '21',
		title: 'Mens',
		icon: 'shirt-outline',
		src: 'https://picsum.photos/200',
		color: 'red'
	},
	{
		id: '31',
		title: 'Mens',
		icon: 'shirt-outline',
		src: 'https://picsum.photos/200',
		color: 'red'
	},
	{
		id: '41',
		title: 'Mens',
		icon: 'shirt-outline',
		src: 'https://picsum.photos/200',
		color: 'red'
	},
	{
		id: '51',
		title: 'Mens',
		icon: 'shirt-outline',
		src: 'https://picsum.photos/200',
		color: 'red'
	},
	{
		id: '61',
		title: 'Mens',
		icon: 'shirt-outline',
		src: 'https://picsum.photos/200',
		color: 'red'
	},
	{
		id: '71',
		title: 'Mens',
		icon: 'shirt-outline',
		src: 'https://picsum.photos/200',
		color: 'red'
	},
	{
		id: '81',
		title: 'Mens',
		icon: 'shirt-outline',
		src: 'https://picsum.photos/200',
		color: 'red'
	},
	{
		id: '91',
		title: 'Mens',
		icon: 'shirt-outline',
		src: 'https://picsum.photos/200',
		color: 'red'
	},
	{
		id: '11',
		title: 'Mens',
		icon: 'shirt-outline',
		src: 'https://picsum.photos/200',
		color: 'red'
	}
]

class HorizontalList extends Component {

	renderItem = ({item, index}) => {
		return (
			<View key={item.id} style={styles.boxContainer}>
				<EImageButton src={{uri:item.src}} imageWidth={25} imageHeight={25} containerStyle={styles.roundBtn}/>
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
     padding:5
  },
  title: {
  	textAlign: 'center'
  },
  roundBtn: {
	borderRadius:120,
	justifyContent: 'center',
	backgroundColor: 'red',
	width: 60,
	height: 60,
    padding: 17
  }
});