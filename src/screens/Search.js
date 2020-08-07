import React, {Component} from 'react';
import { SafeAreaView, FlatList, View, Text } from 'react-native';
import EIconButton from '../components/EIconButton';

class Search extends Component {
	render() {
	    return (
	    	<View>
	    		<Text>Search</Text>	
	    		<EIconButton icon="person"/>
	    	</View>
	    );
	}
}

export default Search;