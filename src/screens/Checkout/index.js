import React, { useState, useRef } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, FlatList, View, Text, TouchableOpacity, Dimensions, Image, Platform } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import colors from '../../commons/Colors';
import StepsHeader from './StepsHeader';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Checkout = () => {
  const [currentPage, setCurrentPage] = useState(null);
  const viewPager = useRef(ViewPager);

  const nextPage = (page) => {
    setCurrentPage(page);
    viewPager.current.setPage(page);
  }

  return (
    <SafeAreaView style={{flex: 1, padding: 15}}>
      
      <StepsHeader currentPage={currentPage} totalPages={4} />

      <ViewPager 
        ref={viewPager} 
        style={styles.viewPager} 
        initialPage={0}
        scrollEnabled={false}
      >
        <View key="1" style={styles.guestLoginView}>
          <Text>Login</Text>
          <TouchableOpacity onPress={()=>nextPage(1)}>
            <Text>next</Text>
          </TouchableOpacity>
        </View>
        <View key="2" style={styles.shippingAddressView}>
          <Text>Shipping Address</Text>
           <TouchableOpacity onPress={()=>nextPage(2)}>
            <Text>next</Text>
          </TouchableOpacity>
        </View>
        <View key="3" style={styles.paymentView}>
          <Text>Payment</Text>
           <TouchableOpacity onPress={()=>nextPage(3)}>
            <Text>next</Text>
          </TouchableOpacity>
        </View>
        <View key="4" style={styles.confirmationView}>
          <Text>Confirmation</Text>
           <TouchableOpacity onPress={()=>nextPage(0)}>
            <Text>next</Text>
          </TouchableOpacity>
        </View>
      </ViewPager>
    </SafeAreaView>
  );
}

export default Checkout;

const styles = StyleSheet.create({
  viewPager: {
    flex: 1
  },
  guestLoginView:{
    flex: 1,
    backgroundColor: colors.golden,
    borderRadius: 20
  },
  shippingAddressView:{
    backgroundColor: colors.primary,
    borderRadius: 20
  },
  paymentView:{
    backgroundColor: colors.secondary,
    borderRadius: 20
  },
  confirmationView:{
    backgroundColor: colors.lightBlack,
    borderRadius: 20
  }
})