import React, {Component} from 'react';
import { StyleSheet, SafeAreaView, FlatList, View, Text } from 'react-native';
import HorizontalCategories from './HorizontalCategories';
import HorizontalBanners from './HorizontalBanners';
import ProductCard from './ProductCard';

class Home extends Component {
	render() {
	    return (
	    	<View style={styles.container}>
	    		<HorizontalCategories />
	    		<HorizontalBanners />
	    		<ProductCard />
	    	</View>
	    );
	}
}

export default Home;
const styles = StyleSheet.create({
  container: {
    padding:0
  }
});