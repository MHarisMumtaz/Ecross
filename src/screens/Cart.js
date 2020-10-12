import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, FlatList, View, Text, TouchableOpacity, Dimensions, Image, Platform } from 'react-native';
import colors from '../commons/Colors';
import ECounter from '../components/ECounter';
import EIconButton from '../components/EIconButton';
import ETextButton from '../components/ETextButton';

import Screens from '../navigations/Screens';
import { showModal } from '../services/modelService';

import { PRODUCT_LIST } from '../utils/Constants';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Cart = () => {
	const [quantity, setQuantity] = useState(1);

	const onPressAddQuantity = (item,index) => {
		setQuantity(quantity + 1);
	}
	const onPressReduceQuantity = (item,index) => {
		setQuantity(quantity - 1);
	}

  const onPressCheckout = () => {
    showModal(Screens.Checkout, 'fullScreen');
  }

	renderItem = (item,index) => {
		return (
			<View key={index} style={styles.cartItem}>
				<Image 
	                style={styles.productImage}
	                source={{uri: item.image}}
	            />
	            <View style={styles.cartItemLeft}>
	            	<Text style={styles.cartTitle}>{item.title}</Text>
	            	<Text style={styles.cartItemPrice}>{item.price}</Text>

	            	{(item.size || item.color) &&
	            		<View>
							{item.size &&
								<Text style={styles.cartItemSize}>Size: <Text style={styles.sizeValue}>{item.size}</Text> </Text>
							}
							{item.color &&
			            		<Text style={styles.cartItemColor}>Color: 
			            			<View style={[styles.colorBox,{backgroundColor : item.color}]}></View>
			            		</Text>	            		
		            		}
		            	</View>
	            	}
	            </View>
	            <View style={styles.cartItemQuantity}>
	            	<ECounter 
	            		vertical 
	            		value={item.quantity}
		        		onPressLeft={ () => onPressAddQuantity(item,index)} 
		        		onPressRight={ () => onPressReduceQuantity(item,index)} 
		        		leftIcon='add-outline'
		        		rightIcon='remove-outline'
	            	/>
	            	<EIconButton icon='trash-bin-outline' color={colors.grey} />
	            </View>
			</View>	
		);
	}

    return (
		<SafeAreaView style={styles.container}>
    
		<View style={{flex: 1}}>
			<ScrollView
				contentContainerStyle={styles.contentContainer}
          		showsVerticalScrollIndicator={false}
			>
      <Text style={styles.heading}>My Cart</Text>
			{
				PRODUCT_LIST.map((item,index) => renderItem(item,index))
			}
			</ScrollView>
			</View>
			<View style={[styles.summarySection,styles.shadow, PRODUCT_LIST.length<=2 ? {flex: 2} : {} ]}>
				<Text style={styles.summaryTitle}>Summary</Text>
				<View style={{alignItems: 'flex-end'}}>
					<View style={styles.summaryItem}>
						<Text style={styles.summaryItemLabel}>SubTotal</Text>
						<Text style={styles.summaryItemValue}>$1000</Text>
					</View>
					<View style={styles.summaryItem}>
						<Text style={styles.summaryItemLabel}>Discount</Text>
						<Text style={styles.summaryItemValue}>$100</Text>
					</View>
					<View style={styles.summaryItem}>
						<Text style={styles.summaryItemLabel}>Tax</Text>
						<Text style={styles.summaryItemValue}>$0</Text>
					</View>
					<View style={[styles.summaryItem,styles.upperBorder]}>
						<Text style={styles.summaryItemLabel}>Total</Text>
						<Text style={styles.summaryItemValue}>$1100</Text>
					</View>
				</View>
				<ETextButton 
	    			containerStyle={styles.checkoutButton}
	    			text='Checkout' 
	    			rightIcon={'chevron-forward'}
            onPress={onPressCheckout}
	    		/>
			</View>	
		</SafeAreaView>
    );
}

export default Cart;

const styles = StyleSheet.create({
  container: {
  	flex: 1,
    padding:0,
    height: windowHeight / 1.3,
    backgroundColor: colors.backgroundColor
  },
  heading:{
    fontSize: 20,
    color: colors.grey,
    fontWeight: 'bold',
    paddingLeft: 15
  },
  contentContainer: {
  	padding: 10,
    paddingVertical: 20,
  },
  cartItem:{
  	flex: 1,
  	flexDirection: 'row',
  	borderRadius: 10,
  	backgroundColor: colors.white,
  	margin: 3
  },
  productImage:{
  	width: windowWidth / 2.8,
    height: 188 / 1.4,
    resizeMode: "contain",
  },
  cartItemLeft:{
  	padding: 10,
  	width: windowWidth/2.2,
  	justifyContent: 'space-between'
  },
  cartTitle:{
  	fontSize: 16,
  	fontWeight: 'bold',
  	color: colors.grey
  },
  cartItemPrice:{
  	fontWeight: 'bold',
  	fontSize: 16,
  	color: colors.primary
  },
  cartItemQuantity:{
  	flex: 1,
  	alignItems: 'center'
  },
  cartItemSize:{
  	fontSize: 12,
  	color: colors.grey
  },
  sizeValue:{
  	fontWeight: 'bold'
  },
  cartItemColor:{
  	fontSize: 12,
  	color: colors.grey,
  },
  colorBox:{
  	width: 15,
  	height: 15,
  	borderRadius: 50
  },
  summarySection:{
  	backgroundColor: colors.white,
  	padding: 10
  },
  summaryTitle:{
  	fontSize: 16,
  	color: colors.lightBlack,
  	fontWeight: 'bold'
  },
  summaryItem:{
  	width: windowWidth/2,
  	flexDirection: 'row',
  	justifyContent: 'space-between'
  },
  summaryItemLabel:{
  	alignSelf: 'flex-start',
  	color: colors.grey
  },
  summaryItemValue:{
  	fontWeight: 'bold',
  	color: colors.lightBlack
  },
  upperBorder:{
  	borderTopWidth: 1,
  	borderColor: colors.borderHighlight
  },
  checkoutButton:{
  	width: windowWidth/2,
	borderTopRightRadius:60,
	borderBottomRightRadius:60
  },
  shadow:{
    elevation:10, //Android
    shadowColor: colors.lightBlack, // IOS
    shadowOffset: { height: 0, width: 0 }, // IOS
    shadowOpacity: 0.3, // IOS
    shadowRadius: 7, //IOS
  },
})