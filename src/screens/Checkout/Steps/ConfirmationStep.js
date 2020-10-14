import React, { useState, useRef } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

import colors from '../../../commons/Colors';

import ETextInput from '../../../components/ETextInput';
import ETextButton from '../../../components/ETextButton';

const ConfirmationStep = ({}) => {
	return (
		<View key="3" style={styles.container}>
          <Text style={styles.heading}>Confirm</Text>
    </View>
	);
}
export default ConfirmationStep;

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
