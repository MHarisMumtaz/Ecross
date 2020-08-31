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
                                    borderWidth: item.selected ? 2 : 1,
                                    width: item.selected ? 32 : 25,
                                    height: item.selected ? 32 : 25,
                                    borderColor: colors.white
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
		padding: 10
	},
	colorBox:{
        margin: 10,
		width: 25,
		height: 25,
        borderRadius: 40,
        borderColor: colors.white,
        elevation:5, //Android
        shadowColor: colors.grey, // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 3, //IOS
	}
});