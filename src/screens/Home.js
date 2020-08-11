import React, {Component} from 'react';
import { StyleSheet, SafeAreaView, FlatList, View, Text } from 'react-native';
import HorizontalCategories from './HorizontalCategories';


class Home extends Component {
	render() {
	    return (
	    	<View style={styles.container}>
	    		<HorizontalCategories />
	    	</View>
	    );
	}
}

export default Home;
const styles = StyleSheet.create({
  container: {
    padding:10
  }
});