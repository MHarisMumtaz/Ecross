import React, { useState, useRef } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import colors from '../../../commons/Colors';
import { CHECKOUT_STEPS } from '../../../utils/Constants';

import ETextInput from '../../../components/ETextInput';
import ETextButton from '../../../components/ETextButton';

const AddressStep = ({ onComplete = () => {} }) => {
	return (
		 <View style={styles.container}>
          <Text style={styles.heading}>Address</Text>
       
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
                onPress={() => onComplete(CHECKOUT_STEPS.ADDRESS)}
              />
            </ScrollView>
        
        </View>
	);
}
export default AddressStep;

const styles = StyleSheet.create({
  container:{
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 18,
    paddingBottom: 0
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
  input:{
    alignSelf:'center',
    marginBottom: 30
  },
  continue:{
    marginTop: 10
  }
});
