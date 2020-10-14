import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import colors from '../../commons/Colors';

const ERadioButtons = props => {


	const [value, setValue] = useState(null);

	const { list } = props;
	return (
		<View>
			{
				list.map(res => {
					return (
						<View key={res.key} style={styles.container}>
	                        <Text style={styles.radioText}>{res.text}</Text>
	                        <TouchableOpacity
	                            style={styles.radioCircle}
	                            onPress={() => setValue(res.key)}>
	                              {value === res.key && <View style={styles.selectedRb} />}
	                        </TouchableOpacity>
	                    </View>
					);
				})
			}
			<Text> Selected: {value} </Text>
		</View>
	);
}

export default ERadioButtons;

const styles = StyleSheet.create({
	container: {
        marginBottom: 35,
        alignItems: 'center',
        flexDirection: 'row',
		justifyContent: 'space-between',
	},
    radioText: {
        marginRight: 35,
        fontSize: 20,
        color: '#000',
        fontWeight: '700'
    },
	radioCircle: {
		height: 30,
		width: 30,
		borderRadius: 100,
		borderWidth: 2,
		borderColor: '#3740ff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	selectedRb: {
		width: 15,
		height: 15,
		borderRadius: 50,
		backgroundColor: '#3740ff',
    },
    result: {
        marginTop: 20,
        color: 'white',
        fontWeight: '600',
        backgroundColor: '#F3FBFE',
    },
});