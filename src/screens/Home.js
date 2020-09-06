import React, { useState } from 'react';
import { Dimensions, StyleSheet, ScrollView, SafeAreaView, FlatList, View, Text, RefreshControl } from 'react-native';
import HorizontalCategories from './HorizontalCategories';
import HorizontalBanners from './HorizontalBanners';
import FeaturedProducts from './FeaturedProducts';
import EFab from '../components/EFab';
import colors from '../commons/Colors';

const windowHeight = Dimensions.get('window').height;
const wait = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

const Home = (props) => {
	
	const [refreshing, setRefreshing] = useState(false);

	const onRefresh = React.useCallback(() => {
	    setRefreshing(true);

	    wait(2000).then(() => setRefreshing(false));
	}, []);

    return (
    	<SafeAreaView style={styles.container}>
	    	<ScrollView 
	    		contentContainerStyle={styles.contentContainer} 
	    		fadingEdgeLength={100}
	    		refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      		>
	    		<HorizontalCategories {...props} />
	    		<HorizontalBanners {...props} />
	    		<FeaturedProducts {...props} />
	    	</ScrollView>
        <EFab icon='cart-outline' size={30} />
    	</SafeAreaView>
    );
}

export default Home;
const styles = StyleSheet.create({
  container: {
    padding:0,
    height: windowHeight / 1.3,
    flex: 1,
    backgroundColor: colors.backgroundColor
  },
  contentContainer: {
    paddingVertical: 20
  }
});