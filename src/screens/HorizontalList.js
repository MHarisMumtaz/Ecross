import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, FlatList, ToucableOpacity, Text, View } from 'react-native';
import colors, { ColorsCollection } from '../commons/Colors';
import EImageButton from '../components/EImageButton';
import EIconButton from '../components/EIconButton';

class HorizontalList extends Component {

	onPressSeeAllBtn = () => {
		this.props.onPressSeeAll && this.props.onPressSeeAll();
	}

	renderItem = ({item, index}) => {
		return (
			<View key={item.id} style={styles.boxContainer}>
				{
					(this.props.showSeeAllBtn && item.id=='seeAll') ? 
					  <EIconButton icon='arrow-forward' color={colors.white} style={styles.seeAll} onPress={this.onPressSeeAllBtn} />
					: <EImageButton src={{uri:item.src}} imageWidth={25} imageHeight={25} containerStyle={[styles.roundBtn, { backgroundColor: ColorsCollection[index] }]}/>
				}
				<Text style={styles.title}>{ item.id=='seeAll' ? item.text : item.title}</Text>
			</View>
		)
	}

	getData = () => {
		if(this.props.data){
			return this.props.showSeeAllBtn ? [...this.props.data,{id:'seeAll',text:'See All'}] : this.props.data;
		}
		return [];
	}

	render() {
	    return (
	    	<SafeAreaView>
		    	<FlatList
		    		data={this.getData()}
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
  seeAll : {
  	backgroundColor:colors.lightGrey,
  	padding:18,
  	borderRadius:120,
  	width:60,
  	height:60
  },
  roundBtn: {
	borderRadius:120,
	justifyContent: 'center',
	width: 60,
	height: 60,
    padding: 17
  }
});