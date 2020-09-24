import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, Image, ImageBackground, View, Text, Dimensions, Pressable } from 'react-native';
import SegmentedControl from '@react-native-community/segmented-control';
import Icon from 'react-native-vector-icons/Ionicons';
import colors, { ColorsCollection } from '../commons/Colors';
import ECarousal from '../components/ECarousal';
import ESelectableList from '../components/ESelectableList';
import ERating from '../components/ERating';
import EIconButton from '../components/EIconButton';
import ETextButton from '../components/ETextButton';
import ECommentCard from '../components/ECommentCard';
import ECounter from '../components/ECounter';

const windowHeight = Dimensions.get('window').height;
const data = [
	{
		url: 'https://purepng.com/public/uploads/medium/purepng.com-men-t-shirtclothingmen-t-shirtfashion-dress-shirt-cloth-tshirt-631522326839xqywo.png'
	},
	{
		url: 'https://purepng.com/public/uploads/medium/purepng.com-womens-white-t-shirtt-shirtfabrict-shapegramnetswhiteladies-14215264292663s83a.png'
	},
	{
		url: 'https://pngimg.com/uploads/cap/cap_PNG5685.png'
	}
]
const productColors = [
	{
		color: '#C2BBEA',
		selected: false
	},
	{
		color: '#E5F1FF',
		selected: false
	},
	{
		color: '#B6EA7D',
		selected: false
	},
	{
		color: '#FFC34D',
		selected: false
	},
	{
		color: '#324AB2',
		selected: false
	}
];

const productSizes = [
	{
		text: 'S'
	},
	{
		text: 'XS'
	},
	{
		text: 'M'
	},
	{
		text: 'L'
	},
	{
		text: 'XL'
	},
	{
		text: 'XXL'
	}
]

const productReviews = [
	{
		id: 1,
		comment:   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
		userImage: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
		createdAt: 'March 23 2020 09:39 PM',
		userName:  'Jhon Papa'
	},
	{
		id: 2,
		comment:   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
		userImage: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
		createdAt: 'August 24 2020 10:00 PM',
		userName:  'Jhon Mama'
	},
	{
		id: 3,
		comment:   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
		userImage: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
		createdAt: 'Sep 15 2020 09:00 AM',
		userName:  'Bam nami'
	},
]

const ProductDetails = ({}) => {
	const [colorCollection,setColorCollection] = useState([...productColors]);
	const [sizeCollection, setSizeCollection] = useState([...productSizes]);
	const [favoriteIconName, setFavoriteIconName] = useState('heart-outline');
	const [selectedSegmentIndex, setSelectedSegmentIndex] = useState(0);
	const [quantity, setQuantity] = useState(1);

	const onPressSize = (item, i) => {
		const updatedCollection = sizeCollection.map((obj,index)=>{
			obj.selected = false;
			if(index===i){
				obj.selected =! obj.selected;
			}
			return obj;
		});
		setSizeCollection(updatedCollection);
	};

	const onPressColor = (item, i) => {
		const updatedCollection = colorCollection.map((obj,index)=>{
			obj.selected = false;
			if(index===i){
				obj.selected =! obj.selected;
			}
			return obj;
		});
		setColorCollection(updatedCollection);
	};

	const onPressFavorite = () => {
		if(favoriteIconName==='heart-outline'){
			setFavoriteIconName('heart');
		}else{
			setFavoriteIconName('heart-outline');
		}
	};

	const onPressAddQuantity = () => {
		setQuantity(quantity + 1);
	}
	const onPressReduceQuantity = () => {
		setQuantity(quantity - 1);
	}

    return (
      <SafeAreaView>
      	<View style={styles.container}>
	      	<ScrollView 
	      	contentContainerStyle={styles.contentContainer} 
	      	nestedScrollEnabled={true}>
	        	<ECarousal items={data} />
	        	<View style={styles.body}>
		        	<View style={styles.titleSection}>
		        		<Text style={styles.productTitle}>Mens T-Shirt </Text>
			        	<View>
				        	<Text style={styles.productOldPrice}> $400.00</Text>
				        	<Text style={styles.productPrice}> $500.00 </Text>
			        	</View>
		        	</View>
		        	<View style={styles.ratingSection}>
			        	<ERating rating={1.4} />
			        	<ECounter
			        		shadow
			        		value={quantity}
			        		onPressLeft={onPressReduceQuantity} 
			        		onPressRight={onPressAddQuantity} 
			        	/>
			        </View>
		        </View>
	        	<ESelectableList 
	        		collection={colorCollection} 
	        		onPress={(item,i)=> onPressColor(item,i)} 
	        	/>
	        	<ESelectableList 
	        		collection={sizeCollection} 
	        		buttonStyle={styles.sizeButton} 
	        		textStyle={styles.sizeText}
	        		onPress={(item,i)=> onPressSize(item,i)} 
	        	/>
	        	<SegmentedControl
				    values={['Details', 'Reviews']}
				    tintColor={colors.primary}
				    fontStyle={{color: colors.lightBlack}}
				    activeFontStyle={{color: colors.white}}
				    selectedIndex={selectedSegmentIndex}
				    onChange={(event) => {
				      setSelectedSegmentIndex(event.nativeEvent.selectedSegmentIndex);
				    }}
				/>
				{selectedSegmentIndex===0 &&
					<View style={styles.detailSection}>
						<Text style={styles.descriptionHeading}>Description</Text>
						<Text style={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
					</View>
				}
				{selectedSegmentIndex===1 &&
					<View style={styles.reviewsSection}>
						<ScrollView 
							nestedScrollEnabled={true}
							contentContainerStyle={styles.reviewScrollBarContentContainer}>
						{
							productReviews.map((item,index)=>
								<ECommentCard 
									key={index}
									imageSource={{uri: item.userImage}}
									title={item.userName}
									date={item.createdAt}
									comment={item.comment} 
									containerStyle={styles.reviewBox}
								/>
							)
						}
						</ScrollView>
					</View>
				}

	        </ScrollView>
        </View>
        <View style={styles.footer}>
    		<ETextButton 
    			containerStyle={styles.favoriteButton}
    			text='Add to Favorite'
    			rightIcon={'heart'}
    		/>
    		<ETextButton 
    			containerStyle={styles.buyButton}
    			text='Buy Now' 
    			rightIcon={'cart'}
    		/>
        </View>
      </SafeAreaView>
    );
}

export default ProductDetails;
const styles = StyleSheet.create({
	body:{
		padding: 10,
		paddingBottom: 0
	},
	container: {
	    padding:0,
	    height: windowHeight / 1.23,
	    backgroundColor: colors.backgroundColor
	},
	contentContainer: {
    	paddingVertical: 10
  	},
  	reviewsSection:{
		padding:12,
		height: 500
	},
	reviewScrollBarContentContainer:{
		paddingVertical: 10
	},
	titleSection: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	productTitle:{
		fontSize:22,
		maxWidth: 300,
		fontWeight: 'bold',
		color: colors.grey
	},
	productPrice: {
		fontSize: 18,
		fontWeight: 'bold',
		color: colors.primary
	},
	ratingSection:{
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	productOldPrice: {
		fontSize: 16,
		fontWeight: 'bold',
		textDecorationLine: 'line-through', 
		textDecorationStyle: 'solid',
		color: colors.secondary
	},
	sizeButton: {
		width: 37,
		height: 37,
		elevation: 5
	},
	sizeText:{
		fontSize: 12,
		fontWeight: 'bold',
		textAlign: 'center',
		color: colors.grey
	},
	descriptionHeading:{
		fontSize: 18,
		fontWeight: 'bold',
		color: colors.lightBlack,
		padding: 5
	},
	description: {
		color: colors.grey
	},
	detailSection:{
		padding:12
	},
	footer:{
		padding:0,
		flexDirection:'row', 
		justifyContent:'space-between'
	},
	favoriteButton:{
		flex:1,
		backgroundColor: colors.grey
	},
	buyButton:{
		flex:1,
		borderTopRightRadius:50
	},
	reviewBox:{
		marginBottom: 10
	},
	quantityContainer:{
		padding: 5
	}
});
