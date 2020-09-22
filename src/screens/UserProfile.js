import React, { Fragment } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, FlatList, View, Text, TouchableOpacity, Dimensions, Image, Platform } from 'react-native';
import colors from '../commons/Colors';
import ETextInput from '../components/ETextInput';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const UserProfile = ({}) => {
	

    return (
    	<Fragment>
    		<View style={styles.headerbackground}>
    				<Image 
		                style={styles.profileImage}
		                source={{uri: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'}}
		            />
		            <Text style={styles.userName}>Guest</Text>
    		</View>
    		<View style={styles.body}>
    				<ETextInput rounded />
    				<ETextInput rounded />
    		</View>
    	</Fragment>
    );

}

export default UserProfile;

const styles = StyleSheet.create({
	headerbackground:{
		flex: 1,
		padding: 10,
		justifyContent: 'flex-end',
		backgroundColor: colors.primary,
		borderBottomRightRadius: 220,
		elevation: 20,
		shadowColor: colors.grey, // IOS
	    shadowOffset: { height: 1, width: 30 }, // IOS
	    shadowOpacity: 1, // IOS
	    shadowRadius: 5, //IOS
	},
	body:{
		flex: 2,
		justifyContent: 'space-evenly'
	},
	userName: {
		color: colors.white,
		fontSize: 25,
		paddingLeft: 10,
		paddingBottom: 10
	},
	profileImage:{
		position: 'absolute',
		top: Platform.OS === 'ios' ? windowHeight/4.7 : windowHeight/5.7,
		left: windowWidth/1.6,
		width: 110,
		height: 110,
		borderRadius: 200,
		borderWidth: 2,
		borderColor: colors.white,
		backgroundColor: colors.grey
	}
})