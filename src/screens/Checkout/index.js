import React, { useState, useRef } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, FlatList, View, Text, TextInput, TouchableOpacity, Dimensions, Image, Platform } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import colors from '../../commons/Colors';
import { CHECKOUT_STEPS } from '../../utils/Constants';

import StepsHeader from './StepsHeader';
import { LoginStep, AddressStep, PaymentStep, ConfirmationStep } from './Steps';

const Checkout = () => {
  const [currentPage, setCurrentPage] = useState(null);
  const viewPager = useRef(ViewPager);

  const nextPage = (completedScreen) => {
    const page = getNextPage(completedScreen);
    setCurrentPage(page);
    viewPager.current.setPage(page);
  }

  const getNextPage = (completedScreen) => {
    switch(completedScreen){
      case CHECKOUT_STEPS.LOGIN:
          return 1;
      case CHECKOUT_STEPS.ADDRESS:
          return 2;
      case CHECKOUT_STEPS.PAYMENT:
          return 3;
      default:
        return 1;
    }
  }

  return (
    <View style={styles.container}>
      
      <StepsHeader currentPage={currentPage} totalPages={4} />

      <ViewPager 
        ref={viewPager} 
        style={styles.viewPager} 
        initialPage={0}
        scrollEnabled={false}
      >
        <LoginStep   key="1" onComplete={nextPage} />
        <AddressStep key="2" onComplete={nextPage} />
        <PaymentStep key="3" onComplete={nextPage} />
        <ConfirmationStep key="4" onComplete={nextPage} />
      </ViewPager>
    </View>
  );
}

export default Checkout;

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    padding: 15,
    backgroundColor: colors.backgroundColor
  },
  viewPager: {
    flex: 1,
    elevation:20, //Android
    shadowColor: colors.grey, // IOS
    shadowOffset: { height: 0, width: 0 }, // IOS
    shadowOpacity: 0.3, // IOS
    shadowRadius: 10, //IOS
  }
})