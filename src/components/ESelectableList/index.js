import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Dimensions } from 'react-native';
import colors from '../../commons/Colors';


const ESelectableList = ({containerStyle, collection = [], buttonStyle, textStyle, onPress = ()=>{}}) => {

    const width = 22;
    const height = 22;

    const setToggle = (selected) => {
        switch(selected){
            case true:{
                if(!buttonStyle){
                    return width + 8;
                }else if(buttonStyle.width){
                    return buttonStyle.width + 8;
                }else if(buttonStyle.height){
                    return buttonStyle.height + 8;
                }
            }
            default:
            case false: {
                 if(!buttonStyle){
                    return width;
                }else if(buttonStyle.width){
                    return buttonStyle.width;
                }else if(buttonStyle.height){
                    return buttonStyle.height;
                }   
            }
            break;
        }
    }

    return (
        <View style={containerStyle ? containerStyle : styles.container}>
            {
                collection.map((item,i)=>{
                    return <TouchableOpacity 
                                key={i} 
                                style={[{
                                    ...styles.box, 
                                    backgroundColor: item.color ? item.color : colors.lightGrey,
                                    borderWidth: item.selected ? 2 : 1,
                                    borderColor: colors.white
                                }, buttonStyle,{
                                    width: setToggle(item.selected),
                                    height: setToggle(item.selected),
                                }]} 
                                onPress={()=> onPress(item, i)}
                            >
                        <Text style={textStyle ? textStyle : styles.text}>{item.text}</Text>
                    </TouchableOpacity>
                })
            }
        </View>
    );
}

export default ESelectableList;
const styles = StyleSheet.create({
	container:{
		flexDirection: 'row',
        flexWrap: 'wrap'
	},
	box:{
        padding: 5,
        margin: 10,
		width: 25,
		height: 25,
        borderRadius: 40,
        borderColor: colors.white,
        elevation:10, //Android
        shadowColor: colors.grey, // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 3, //IOS
	},
    text:{
        fontSize: 12,
        textAlign: 'center'
    }
});