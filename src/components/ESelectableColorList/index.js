import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Dimensions } from 'react-native';
import colors from '../../commons/Colors';

const ESelectableColorList = ({colorsCollection = [], onPress = ()=>{}}) => {
    return (
        <View style={styles.colorContainer}>
            {
                colorsCollection.map((item,i)=>{
                    return <TouchableOpacity 
                                key={i} 
                                style={{
                                    ...styles.colorBox, 
                                    backgroundColor: item.color,
                                    borderWidth: item.selected ? 4 : 1,
                                    width: item.selected ? 18 : 15,
                                    height: item.selected ? 18 : 15
                                }} 
                                onPress={()=> onPress(item, i)}
                            >
                    </TouchableOpacity>
                })
            }
        </View>
    );
}

export default ESelectableColorList;
const styles = StyleSheet.create({
	colorContainer:{
		flex:1,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		padding: 10
	},
	colorBox:{
		width: 15,
		height: 15,
        borderRadius: 40,
        borderColor: colors.grey
	}
});