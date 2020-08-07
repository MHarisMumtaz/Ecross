import React, {Component} from 'react';
import { SafeAreaView, FlatList, View, Text } from 'react-native';
import EIconButton from '../components/EIconButton';

class WishList extends Component {
	render() {
	    return (
	    	<View>
	    		<Text>WishList</Text>	
	    		<EIconButton icon="person"/>
	    	</View>
	    );
	}
}

export default WishList;