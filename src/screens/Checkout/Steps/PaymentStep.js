import React, { useState, useRef } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import PaymentOptions from './PaymentOptions';

import { CHECKOUT_STEPS } from '../../../utils/Constants';
import colors from '../../../commons/Colors';

import ETextInput from '../../../components/ETextInput';
import ETextButton from '../../../components/ETextButton';

const PaymentStep = ({ onComplete = () => {} }) => {
	return (
		<View key="3" style={styles.container}>
          <Text style={styles.heading}>Payment</Text>
          <PaymentOptions />
           <ETextButton
                rounded
                text='Continue'
                containerStyle={styles.continue}
                rightIcon="chevron-forward"
                onPress={() => onComplete(CHECKOUT_STEPS.PAYMENT)}
            />
        </View>
	);
}
export default PaymentStep;

const styles = StyleSheet.create({
  container:{
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 18,
    paddingBottom: 0
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
})
