import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, Dimensions, Image } from 'react-native';
import colors from '../../../commons/Colors';

const OPTIONS = [
	{
		icon: require("../../../../assets/cod.png"),
		name: 'Cash on delivery',
		selected: true
	},
	{
		icon: require("../../../../assets/visa.png"),
		name: 'Visa',
		selected: false
	},
	{
		icon: require("../../../../assets/master.png"),
		name: 'Master',
		selected: false
	},
	{
		icon: require("../../../../assets/paypal.png"),
		name: 'Paypal',
		selected: false
	}
];

const PaymentOptions = ({onPress = () => {}}) => {

	const [options, setOptions] = useState(OPTIONS);

	const onBoxPress = (val) => {
		const updated = options.map((op)=> {
			op.name===val ? op.selected = true : op.selected = false;
			return op;
		});
		setOptions(updated);
		onPress(val);
	}

	return (
		<View style={styles.container}>
			<ScrollView 
				contentContainerStyle={styles.contentContainer}
				fadingEdgeLength={200} 
				showsHorizontalScrollIndicator={false}
				horizontal={true}>
				{
					options.map(item=>{
						return (
							<TouchableOpacity 
								key={item.name} 
								style={[
									styles.box,
									styles.shadow,
									item.selected ? styles.selectedBorder : {}
								]} 
								activeOpacity={1}
								onPress={()=>onBoxPress(item.name)}>
					           	<Image source={item.icon} />
					           	<Text style={styles.text}>{item.name}</Text>
					        </TouchableOpacity>
						);
					})
				}
	       </ScrollView>
       </View>
	)
}

export default PaymentOptions;

const styles = StyleSheet.create({
	container:{
	},
	contentContainer:{
		padding: 8,
		paddingHorizontal: 10
	},
	selectedBorder:{
		borderWidth: 1,
		borderColor: colors.primary
	},
	box:{
	   width: 120,
       height: 70,
       marginRight: 20,
       borderRadius: 10,
       backgroundColor: colors.white,
       alignItems: 'center',
	},
	shadow:{
		elevation:8, //Android
		shadowColor: colors.grey, // IOS
	    shadowOffset: { height: 0, width: 0 }, // IOS
	    shadowOpacity: 0.3, // IOS
	    shadowRadius: 6, //IOS
	},
	text:{
		fontSize: 12,
		color: colors.grey
	}
})