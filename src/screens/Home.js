import React, {Component} from 'react';
import { SafeAreaView, FlatList, View, Text } from 'react-native';
import CheckoutButton from '../components/checkoutButton';

class Home extends Component {
	render() {
	    return (
	    	<View>
	    		<Text>Hello World</Text>	
	    		<CheckoutButton/>	
	    	</View>
	    );
	}
}

export default Home;