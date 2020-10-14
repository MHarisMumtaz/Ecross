import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import colors from '../../../commons/Colors';
import { CHECKOUT_STEPS } from '../../../utils/Constants';

import ETextInput from '../../../components/ETextInput';
import ETextButton from '../../../components/ETextButton';

const width = Dimensions.get('window').width;

const LoginStep = ({ onComplete = () => {} }) => {

	return (
		<View key="1" style={styles.container}>
          
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
            onPress={() => onComplete(CHECKOUT_STEPS.LOGIN)}
          />

          <TouchableOpacity onPress={()=> console.log('login')}>
            <Text style={styles.alreadyAccount}>already have an account?</Text>
          </TouchableOpacity>

        </View>
	);
}
export default LoginStep;

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
  email:{
  	width: width / 1.2
  },
  guestButton:{
    marginTop: 30,
    marginBottom: 30
  },
  alreadyAccount:{
    color: colors.grey, 
    textDecorationLine:'underline'
  },
})