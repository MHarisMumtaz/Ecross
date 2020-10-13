import React, { useState, useRef } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, FlatList, View, Text, TouchableOpacity, Dimensions, Image, Platform } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import colors from '../../commons/Colors';
import StepsHeader from './StepsHeader';
import ETextInput from '../../components/ETextInput';
import ETextButton from '../../components/ETextButton';

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
    <View style={styles.container}>
      
      <StepsHeader currentPage={currentPage} totalPages={4} />

      <ViewPager 
        ref={viewPager} 
        style={styles.viewPager} 
        initialPage={0}
        scrollEnabled={false}
      >
        <View key="1" style={styles.guestLoginView}>
          
          <Text style={styles.heading}>Sign In</Text>
          
          <ETextInput 
            showShadow
            rounded
            containerStyle={styles.email}
            placeholder="Email"
            leftIcon="mail"
            leftIconColor={colors.secondary}
          />

          <ETextButton
            rounded
            text='Login as Guest'
            containerStyle={styles.guestButton}
            rightIcon="chevron-forward"
            onPress={()=>nextPage(1)}
          />

          <TouchableOpacity onPress={()=> console.log('login')}>
            <Text style={styles.alreadyAccount}>already have an account?</Text>
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
  heading:{
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.grey,
    padding: 20,
    paddingLeft: 5
  },
  viewPager: {
    flex: 1,
    elevation:20, //Android
    shadowColor: colors.grey, // IOS
    shadowOffset: { height: 0, width: 0 }, // IOS
    shadowOpacity: 0.3, // IOS
    shadowRadius: 10, //IOS
  },
  guestLoginView:{
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 18
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
  },
  email:{
    alignSelf:'center'
  },
  guestButton:{
    marginTop: 30,
    marginBottom: 30
  },
  alreadyAccount:{
    color: colors.grey, 
    textDecorationLine:'underline'
  }
})