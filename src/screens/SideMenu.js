import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, ScrollView, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../commons/Colors';
import ETextButton from '../components/ETextButton';
import ECollapsable from '../components/ECollapsable';

const categories = [
  {
    id: 1,
    name: 'Mens',
    parent: 0
  },
  {
    id: 1,
    name: 'T-Shirts',
    parent: 1
  },
  {
    id: 1,
    name: 'Pants',
    parent: 1
  },
  {
    id: 1,
    name: 'Caps',
    parent: 1
  }
]

const sideMenuData = [
  {
    id: 1,
    name: 'Home',
    icon: 'home-outline',
    iconSize: 18,
    iconColor: colors.primary
  },
  {
    id: 2,
    name: 'Categories',
    data: categories
  },
  {
    id: 5,
    name: 'Notifications',
    icon: 'notifications-outline',
    iconSize: 18,
    iconColor: colors.primary
  },
  {
    id: 3,
    name: 'About us',
    icon: 'alert-circle-outline',
    iconSize: 18,
    iconColor: colors.primary
  },
  {
    id: 4,
    name: 'Contact us',
    icon: 'call-outline',
    iconSize: 18,
    iconColor: colors.primary
  },
  {
    id: 6,
    name: 'Log out',
    icon: 'log-out-outline',
    iconSize: 18,
    iconColor: colors.primary
  }
]

const SideMenu = () => {

  const renderSingleOption = (item) => {
    return (
      <TouchableOpacity key={item.id} style={styles.singleOption} onPress={() => {}}>
        {item.icon && <Icon name={item.icon} size={item.iconSize} color={item.iconColor} />}
        <Text style={styles.title}>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  const getSubCategories = (data,parentId) => {
    return data.filter((item)=> item.parent != parentId);
  }

  const renderCategories = (data) => {
    return data.map((cat, index)=> {
        if(cat.parent === 0){
          const subCategories = getSubCategories(data, cat.parent);
          return <ECollapsable key={index} containerStyle={styles.parentCatgeory} name={cat.name} data={subCategories} />
        }
    });
  }

  const renderMenuOptions = () => {
    return sideMenuData.map((item, i)=>!item.data ? renderSingleOption(item) : renderCategories(item.data))
  }

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView contentContainerStyle={[styles.scrollView]} nestedScrollEnabled={true}>
          <View style={styles.header}>
            <View style={styles.profileSection}>
               <Image 
                style={styles.profileImage}
                source={{uri: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'}}
               />
               <View style={styles.userDetail}>
                 <Text style={styles.userName}>Guest</Text>
                 <Text style={styles.email}>demo@gmail.com</Text>
               </View>
            </View>
          </View>
          { renderMenuOptions() }
      </ScrollView>
    </SafeAreaView>
  );
};
export default SideMenu;

const styles = StyleSheet.create({
  parentCatgeory:{
    backgroundColor: colors.white,
    paddingLeft: 55
  },
  singleOption:{
    flexDirection: 'row',
    height: 56,
    paddingLeft:25,
    alignItems:'center',
    backgroundColor: colors.white,
  },
  title:{
    fontSize: 16,
    fontWeight:'bold',
    color: colors.grey,
    paddingLeft: 10
  },
  root: {
    flex: 1,
    backgroundColor:'white'
  },
  scrollView: {
    flexGrow: 1
  },
  header:{
    backgroundColor: colors.primary,
    padding: 10,
    alignItems: 'center',
  },
  profileSection:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 60,
    borderWidth: 2,
    
    borderColor: colors.white
  },
  userName: {
    color: colors.white,
    fontSize: 22
  },
  userDetail:{
    paddingLeft: 10
  },
  email:{
    fontSize: 16,
    color: colors.white
  },
  loginButton:{
    backgroundColor: colors.white,
    borderRadius: 10,
    alignSelf: 'flex-end'
  },
  loginText:{
    textAlign:'center',
    fontSize: 16,
    color: colors.secondary
  }
});