import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, Dimensions, Platform } from 'react-native';
import colors from '../commons/Colors';

import ESwipeableList from '../components/ESwipeableList';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DATA = [
	{
		id: '1',
		createdAt: '2019/04/03 19:00AM',
		title: 'Jem None',
		text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
	},
	{
		id: '2',
		createdAt: '2019/04/03 19:00AM',
		title: 'Jem None',
		text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
	},
	{
		id: '3',
		createdAt: '2019/04/03 19:00AM',
		title: 'Jem None',
		text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
	},
	{
		id: '4',
		createdAt: '2019/04/03 19:00AM',
		title: 'Jem None',
		text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
	},
	{
		id: '5',
		createdAt: '2019/04/03 19:00AM',
		title: 'Jem None',
		text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
	},
	{
		id: '6',
		createdAt: '2019/04/03 19:00AM',
		title: 'Jem None',
		text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
	},
	{
		id: '7',
		createdAt: '2019/04/03 19:00AM',
		title: 'Jem None',
		text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
	},
	{
		id: '8',
		text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
	},
	{
		id: '9',
		text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
	},
	{
		id: '10',
		text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
	},
	{
		id: '11',
		text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
	},
	{
		id: '12',
		text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
	},
	{
		id: '13',
		text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
	},
	{
		id: '14',
		text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
	},
	{
		id: '15',
		text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
	}
];

const Notifications = () => {

	const [notificationList, setNotificationList] = useState(DATA);

    const onItemSwiped = (id) => {
      const result = notificationList.filter(item => item.id !== id);
      setNotificationList(result);
    }

	const renderListItem = (item, index) => {
		return (
			<View key={index} style={styles.listItem}>
				<View style={styles.listItemTitleSection}>
					<Text style={styles.listItemTitle}>
						{item.title}
					</Text>
					<Text style={styles.listItemCreatedAt}>
						{item.createdAt}
					</Text>
				</View>
				<Text style={styles.listItemText}>{item.text}</Text>
			</View>
		);
	}

    return (
    	<View style={[styles.container,  Platform.OS === 'ios' ? styles.padTop : {}]}>
    		<View style={[styles.header, Platform.OS === 'ios' ? styles.padBottom : {} ]}>
    			<Text style={styles.screenTitle}>Notifications</Text>
    		</View>
    		<SafeAreaView style={styles.listContainer}>
    			<ESwipeableList 
    				data={notificationList} 
    				renderListItem={renderListItem}
    				onItemSwiped={onItemSwiped}
    			/>
	    	</SafeAreaView>
		</View>
    );
}

export default Notifications;
const styles = StyleSheet.create({
  container: {
    padding:10,
    flex: 1,
    backgroundColor: colors.backgroundColor
  },
  padTop:{
  	paddingTop: 40
  },
  listContainer:{
  	flex: 1,
  },
  padBottom:{
  	paddingBottom: 10
  },
  header:{
  	flexDirection : 'row',
  	justifyContent: 'space-between',
  	paddingLeft: 10,
  	paddingBottom: 10
  },
  screenTitle:{
  	fontSize: 18,
  	fontWeight: 'bold',
  	color: colors.grey,
  	marginTop: 10
  },
  listItem:{
  	flex: 1,
  	padding: 10
  },
  listItemTitleSection:{
  	flexDirection: 'row', 
  	justifyContent:'space-between'
  },
  listItemTitle:{
  	color: colors.primary, 
  	fontSize: 18, 
  	fontWeight: 'bold', 
  	paddingBottom: 5
  },
  listItemCreatedAt:{
  	color: colors.grey, 
  	fontSize: 10, 
  	paddingBottom: 5, 
  	paddingRight: 5
  },
  listItemText:{
  	color: colors.grey, 
  	fontSize: 12, 
  	width: windowWidth/1.1
  }
});