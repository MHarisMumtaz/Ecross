import React,{ useState } from 'react';
import { StyleSheet, TouchableOpacity, ImageBackground, View, Text, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../commons/Colors';
import EIconButton from '../components/EIconButton';
import Screens from '../navigations/Screens';
import { showModal } from '../services/modelService';
import { PRODUCT_CARD_TYPES } from '../utils/Constants';

const windowWidth = Dimensions.get('window').width;

const ProductCard = ({id, title, favorite, boxType = PRODUCT_CARD_TYPES.VERTICAL, price, imageUrl, description, totalRating, containerStyle, onPressProduct, onPressFavorite = (id) => {}}) => {

	const [heartName, setHeartName] = useState(favorite ? 'heart' : 'heart-outline');

	const onPressHeart = () => {
		if(heartName==='heart-outline'){
			setHeartName('heart');
		}else{
			setHeartName('heart-outline');
		}
		onPressFavorite && onPressFavorite(id);
	}

	const onPress = () => {
		if (onPressProduct) {
			onPressProduct(id);
		}else{
			showModal(Screens.ProductDetails);
		}
	}

  return (
    	<TouchableOpacity
    		style={[
          boxType === PRODUCT_CARD_TYPES.HORIZONTAL ? styles.horizontalContainer : styles.verticalContainer,
          styles.containerRadius,
          styles.containerShadow,
          containerStyle]}
    		onPress={onPress}
    	>
    		<ImageBackground 
    			source={{uri:imageUrl}} 
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
        <View>
          <View style={ boxType === PRODUCT_CARD_TYPES.HORIZONTAL ? styles.horizontalTitleSection : {}}>
        		<Text style={boxType === PRODUCT_CARD_TYPES.HORIZONTAL ? styles.horizontalTitle : styles.title}>{title}</Text>
            {
               boxType === PRODUCT_CARD_TYPES.HORIZONTAL && description && 
              <Text style={boxType === PRODUCT_CARD_TYPES.HORIZONTAL ? styles.horizontalDescription: styles.description}>{description.substr(0, 90)}</Text>
            }
          </View>
      		<View style={boxType === PRODUCT_CARD_TYPES.HORIZONTAL ? styles.horizontalBottom : styles.bottomPart}>
      			<Text style={boxType === PRODUCT_CARD_TYPES.HORIZONTAL ? styles.horizontalPrice : styles.price}>{price}</Text>
      			{ totalRating &&
  	    			<View style={styles.ratingBox}>
  	    				<Icon name="star" color={colors.golden} style={styles.starIcon}/>
  	    				<Text style={styles.ratingValue}>{totalRating}</Text>
  	    			</View>
      			}
      		</View>
       </View>
    	</TouchableOpacity>
    );
}

export default ProductCard;
const styles = StyleSheet.create({
  horizontalContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
  },
  verticalContainer: {
    backgroundColor: colors.white,
  	width: windowWidth/2.4,
  	height:240,
  },
  containerRadius:{
     borderRadius:10, 
  },
  containerShadow:{
    elevation:10, //Android
    shadowColor: colors.lightBlack, // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 0.2, // IOS
    shadowRadius: 3, //IOS
  },
  imageContainer: {
  	 width: windowWidth / 2.4,
     height: 188 / 1.4,
     flexDirection: 'row',
     justifyContent: 'flex-end',
     paddingTop:5,
  },
  image: {
  	borderTopRightRadius:10,
  	borderTopLeftRadius:10,
 	  resizeMode: "contain",
  },
  horizontalTitle:{
    width: windowWidth/2, 
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.grey,
    flexWrap: 'wrap',
    padding:8,
    paddingBottom: 0
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  	color: colors.grey,
	  height:50,
  	padding:8,
  	paddingBottom: 0
  },
  horizontalDescription:{
    fontSize: 12,
    width: windowWidth/2.1,
    color: colors.grey,
    flexWrap: 'wrap',
    padding:8,
    paddingBottom: 0
  },
  description:{

  },
  horizontalTitleSection:{
    flex: 1
  },
  horizontalPrice:{
    fontSize: 18,
    color: colors.primary,
    fontWeight: 'bold'
  },
  price: {
    fontSize: 18,
    color: colors.white,
    paddingLeft: 5,
  	fontWeight:'bold',
    textAlign: 'center',
    backgroundColor: colors.primary,
  },
  bottomPart: {
  },
  horizontalBottom:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  ratingBox: { 
  	flexDirection:'row',
  	justifyContent:'space-around',
    marginTop: 5,
  	marginRight:5,
  	padding:3,
  	width:45,
  	height:23, 
  	borderRadius:30,
  	backgroundColor:colors.grey
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