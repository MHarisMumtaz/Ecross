import React,{ useState } from 'react';
import { StyleSheet, TouchableOpacity, Image, ImageBackground, View, Text, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../commons/Colors';
import EIconButton from '../components/EIconButton';

const windowWidth = Dimensions.get('window').width;

const dummyProductImage = 'https://atlas-content-cdn.pixelsquid.com/stock-images/armchair-arm-chair-6360XZ2-600.jpg';

const ProductCard = ({}) => {

	const [heartName, setHeartName] = useState('heart-outline');

	const onPressHeart = () => {
		if(heartName==='heart-outline'){
			setHeartName('heart');
		}else{
			setHeartName('heart-outline');
		}
	}

    return (
    	<TouchableOpacity
    		style={styles.container}
    		onPress={()=>{}}
    	>
    		<ImageBackground 
    			source={{uri:dummyProductImage}} 
    			style={styles.imageContainer} 
    			imageStyle={styles.image}
    		>
		      <EIconButton 
		      	icon={heartName} 
		      	size={25} 
		      	color={colors.primary} 
		      	style={{padding:0}} 
		      	onPress={onPressHeart}
		      	androidRippleRadius={20} 
		      />
		    </ImageBackground>
    		
    		<Text style={styles.title}>Maria B Clothing</Text>
    		<View style={styles.bottomPart}>
    			<Text style={styles.price}>$12000</Text>
    			<View style={styles.ratingBox}>
    				<Icon name="star" color={colors.golden} style={styles.starIcon}/>
    				<Text style={styles.ratingValue}>5.4</Text>
    			</View>
    		</View>
    	</TouchableOpacity>
    );
}

export default ProductCard;
const styles = StyleSheet.create({
  container: {
	width: windowWidth/2.4,
	height:185,
	borderRadius:10,
	backgroundColor: 'white',
	elevation:10, //Android
	shadowColor: 'gray', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 3, //IOS
    backgroundColor: '#fff'
  },
  imageContainer: {
  	 width: windowWidth / 2.4,
     height: 185 / 1.4,
     flexDirection: 'row',
     justifyContent: 'flex-end',
     paddingTop:5
  },
  image: {
  	borderTopRightRadius:10,
  	borderTopLeftRadius:10,
  },
  title: {
  	color: colors.lightBlack,
  	padding:8,
  	paddingBottom:0
  },
  price: {
  	padding: 8,
  	fontWeight:'bold',
  	fontSize:12
  },
  bottomPart: {
  	flexDirection: 'row',
  	justifyContent: 'space-between'
  },
  ratingBox: { 
  	flexDirection:'row',
  	justifyContent:'space-around',
  	marginRight:5,
  	padding:3,
  	width:45,
  	height:23, 
  	borderRadius:30,
  	backgroundColor:colors.primary
  },
  ratingValue: {
  	color:colors.white,
  	fontSize: 12,
  	fontWeight: 'bold'
  },
  starIcon:{
  	marginTop:1,
  }
});