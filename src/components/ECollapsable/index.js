import React, { useState } from 'react';
import { Platform, SafeAreaView, StyleSheet, TouchableOpacity, Pressable, FlatList, View, Text, LayoutAnimation, UIManager } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../commons/Colors';

const ECollapsable = ({containerStyle, nonExpandedIcon = 'chevron-forward', expandedIcon = 'chevron-down', expandedIconColor=colors.primary, name, icon, iconSize = 20, iconColor = colors.primary, data, childComponent}) => {

  const [expanded, setExpanded] = useState(false);
  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    setExpanded(!expanded);
  }

  return (
     <View style={[styles.container]}>
        <TouchableOpacity style={[styles.row,containerStyle]} onPress={()=>toggleExpand()}>
            {icon && <Icon name={icon} size={iconSize} color={iconColor} />}
            <Text style={[styles.title, styles.font]}>{name}</Text>
            { (data && data.length>0) && <Icon name={expanded ? expandedIcon : nonExpandedIcon} size={20} color={expandedIconColor} />}
        </TouchableOpacity>
        {!expanded && <View style={styles.parentHr}/>}
        {
          expanded &&
         <View style={{}}>
           {
             data.map((item,index)=> 
               (childComponent ? <childComponent key={index} item={item} /> :
                <View key={index}>
                    <TouchableOpacity style={[styles.childRow]} onPress={()=>this.onClick(index)}>
                        {item.icon && <Icon name={item.icon} size={item.iconSize} color={item.iconColor} />}
                        <Text style={[styles.childText]} >{item.name}</Text>
                    </TouchableOpacity>
                </View>))
           }
          </View>
        }
     </View>
  )
}


export default ECollapsable;

const styles = StyleSheet.create({
  container:{
  },
  title:{
    fontSize: 14,
    fontWeight:'bold',
    color: colors.primary,
  },
  childText:{
    color: colors.white,
    fontSize: 16
  },
  parentHr:{
    height:1,
    color: colors.white,
    width:'100%'
  },
  itemActive:{
      fontSize: 12,
      color: colors.primary,
  },
  btnActive:{
      borderColor: colors.primary,
  },
  btnInActive:{
      borderColor: colors.grey,
  },
  row:{
      flexDirection: 'row',
      justifyContent:'space-between',
      height:56,
      paddingLeft:25,
      paddingRight:18,
      alignItems:'center',
      backgroundColor: colors.lightGrey,
  },
  childRow:{
      flexDirection: 'row',
      justifyContent:'space-between',
      backgroundColor: colors.grey,
      width:'100%',
      height:45,
      alignItems:'center',
      paddingLeft:65,
  }
});