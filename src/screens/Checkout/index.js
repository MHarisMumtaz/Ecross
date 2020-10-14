import React, { useState, useRef } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, FlatList, View, Text, TextInput, TouchableOpacity, Dimensions, Image, Platform } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import colors from '../../commons/Colors';

import StepsHeader from './StepsHeader';
import PaymentOptions from './PaymentOptions';

import ETextInput from '../../components/ETextInput';
import ETextButton from '../../components/ETextButton';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const radios = [
  {
    key: 'samsung',
    text: 'Samsung',
  },
  {
    key: 'apple',
    text: 'Apple',
  },
  {
    key: 'motorola',
    text: 'Motorola',
  },
  {
    key: 'lenovo',
    text: 'Lenovo',
  },
];

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
        <View key="1" style={styles.page}>
          
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
        <View key="2" style={styles.page}>
          <Text style={styles.heading}>Address</Text>
          <View style={{flex:1}}>
            <ScrollView 
              contentContainerStyle={styles.contentContainer}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              fadingEdgeLength={100}
              >
              <ETextInput 
                showShadow
                rounded
                containerStyle={styles.input}
                placeholder="Full Name"
                leftIcon="person"
                leftIconColor={colors.secondary}
              />
              <ETextInput 
                showShadow
                rounded
                containerStyle={styles.input}
                placeholder="City"
                leftIcon="home"
                leftIconColor={colors.secondary}
              />
              <ETextInput 
                showShadow
                rounded
                containerStyle={styles.input}
                placeholder="Country"
                leftIcon="md-business"
                leftIconColor={colors.secondary}
              />
              <ETextInput 
                showShadow
                rounded
                multiline
                containerStyle={styles.input}
                placeholder="Street Address"
                textContentType="fullStreetAddress"
                leftIconColor={colors.secondary}
              />
              <ETextButton
                rounded
                text='Continue'
                containerStyle={styles.continue}
                rightIcon="chevron-forward"
                 onPress={()=>nextPage(2)}
              />
            </ScrollView>
          </View>
        </View>
        <View key="3" style={styles.page}>
          <Text style={styles.heading}>Payment</Text>
          <PaymentOptions />
        </View>
        <View key="4" style={styles.page}>
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
  contentContainer:{
    paddingVertical: 30
  },
  heading:{
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.grey,
    paddingTop: 0,
    padding: 18,
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
  page:{
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 18,
    paddingBottom: 0
  },
  input:{
    alignSelf:'center',
    marginBottom: 30
  },
  textArea:{
    height: 40,
    color: colors.grey,
    textAlignVertical: 'top'
  },
  guestButton:{
    marginTop: 30,
    marginBottom: 30
  },
  alreadyAccount:{
    color: colors.grey, 
    textDecorationLine:'underline'
  },
  continue:{
    marginTop: 10
  }
})