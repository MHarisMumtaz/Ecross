import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, FlatList, ToucableOpacity, Text, View } from 'react-native';
import colors, { ColorsCollection } from '../../commons/Colors';
import EImageButton from '../EImageButton';
import EIconButton from '../EIconButton';

const EButtonsList = ({isHorizontal = true, showSeeAllBtn, shadowOpacity = 0.5, data, titleStyle, containerStyle, btnContainerStyle, showBgColor, imageStyle, imageWidth, imageHeight, onPressItem = () => {}, onPressSeeAll = () => {}}) => {

	renderItem = ({item, index}) => {
		return (
			<View key={item.id} style={[styles.boxContainer,containerStyle]}>
				{
					(showSeeAllBtn && item.id=='seeAll') ? 
					  <EIconButton 
					  	icon='arrow-forward' 
					  	color={colors.white}
					  	style={styles.seeAll} 
					  	onPress={onPressSeeAll} 
					  />
					: <EImageButton 
						src={{uri:item.src}}
						imageWidth={imageWidth ? imageWidth : 25} 
						imageHeight={imageHeight ? imageHeight : 25} 
						imageStyle={imageStyle}
						containerStyle={[
							btnContainerStyle ? btnContainerStyle : styles.roundBtn,
							{ backgroundColor: showBgColor ? ColorsCollection[index] : 'transparent' },
							styles.btnShadow,
							{ shadowOpacity: shadowOpacity }
						]}
						onPress={onPressItem}
						/>
				}
				<Text style={[styles.title, titleStyle]}>{ item.id=='seeAll' ? item.text : item.title}</Text>
			</View>
		)
	}

	getData = () => {
		if(data){
			return showSeeAllBtn ? [...data,{id:'seeAll',text:'See All'}] : data;
		}
		return [];
	}

    return (
    	<SafeAreaView>
	    	<FlatList
	    		data={getData()}
	    		renderItem={renderItem}
	    		horizontal={isHorizontal}
	    		showsHorizontalScrollIndicator={false}
	    		showsVerticalScrollIndicator={false}
	    	/>
	    </SafeAreaView>
    );
}

export default EButtonsList;

const styles = StyleSheet.create({
  boxContainer: {
     padding:10
  },
  title: {
  	textAlign: 'center',
  	color: colors.secondary
  },
  seeAll : {
  	backgroundColor:colors.grey,
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
  },
  btnShadow:{
	elevation:10, //Android
  	shadowColor: colors.grey, // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowRadius: 3, //IOS
  }
});