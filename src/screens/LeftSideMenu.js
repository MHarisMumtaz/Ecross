import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, ScrollView, StyleSheet, Button } from 'react-native';

const LeftSideMenu = () => {

  const pushAndClose = () =>
    Navigation.push('SideMenuCenter', {
      component: {
        name: Screens.Pushed,
        options: {
          sideMenu: {
            left: {
              visible: false,
            },
          },
        },
      },
    });

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView contentContainerStyle={[styles.scrollView]}>
        
          <Text>Push</Text>
        
      </ScrollView>
    </SafeAreaView>
  );
};
export default LeftSideMenu;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor:'white'
  },
  scrollView: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 16,
  },
});