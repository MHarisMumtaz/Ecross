import React, {Component} from 'react';
import { SafeAreaView, FlatList, View, Text } from 'react-native';
import EIconButton from '../components/EIconButton';

class Home extends Component {
	render() {
	    return (
	    	<View>
	    		<Text>Hello World</Text>	
	    		<EIconButton icon="person"/>	
	    	</View>
	    );
	}
}

export default Home;