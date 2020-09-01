import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import EIconButton from '../EIconButton';

import colors from '../../commons/Colors';

const ERating = ({rating, filledIcon = 'md-star', filledColor = colors.golden, blankIcon = 'md-star-outline', halfIcon = 'md-star-half-sharp' , blankColor = colors.golden, maxStars = 5, size = 20, containerStyle, onPress = () => {}}) => {

	const renderStars = () => {
		const stars = [];
		let blankStarsCount = Math.round(rating * 2) / 2;

		for(let i = 0; i < maxStars; i++){
			let iconColor = filledColor;
			let iconName = filledIcon;
			if(blankStarsCount>0 && blankStarsCount<1){
				iconName = halfIcon;
			}else if(blankStarsCount<=0){
				iconName = blankIcon;
				iconColor = blankColor;
			}
		   	stars.push(
			   	<TouchableOpacity key={i} onPress={() => onPress(i)}>
					 <Icon name={iconName} size={size} color={iconColor} />
				</TouchableOpacity>
			);
			blankStarsCount = blankStarsCount - 1;
		}
		return stars;
	}

    return (
        <View style={[styles.container,containerStyle]}>
            {renderStars()}
        </View>
    );
}

export default ERating;
const styles = StyleSheet.create({
	container:{
		flexDirection: 'row'
	}
});