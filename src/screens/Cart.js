import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, FlatList, View, Text, TouchableOpacity, Dimensions, Image, Platform } from 'react-native';
import colors from '../commons/Colors';
import ECounter from '../components/ECounter';
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
	            </View>
			</View>	
		);
	}

    return (
		<SafeAreaView style={styles.container}>
			<ScrollView
				contentContainerStyle={styles.contentContainer} 
	    		fadingEdgeLength={100}
          		showsVerticalScrollIndicator={false}
			>
			{
				PRODUCT_LIST.map((item,index) => renderItem(item,index))
			}		
			</ScrollView>
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
  	justifyContent: 'center'
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
  }
})