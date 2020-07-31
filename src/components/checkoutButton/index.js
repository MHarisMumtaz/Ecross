import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CheckoutButton = () => {
    return (
    	<Pressable  style={styles.container} onPress={()=>console.log("me press")} android_ripple={{
    		color:'grey'
    	}}>
    		<Icon name="pin" size={20} color="black" />
    	</Pressable>
    )
}

export default CheckoutButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    color: 'red',
    backgroundColor: "red",
    padding: 10,
    elevation: 2,
    borderRadius: 10
  },
   wrapperCustom: {
    borderRadius: 8,
    padding: 6
  },
})