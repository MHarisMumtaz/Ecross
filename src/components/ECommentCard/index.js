import React from 'react';
import { Platform, StyleSheet, TouchableOpacity, Image, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../commons/Colors';
import ERating from '../ERating';

const ECommentCard = ({imageSource, title, date, rating, comment, containerStyle, onPress = () => {}}) => {

  return (
    <TouchableOpacity style={[styles.card,containerStyle]} onPress={()=>{}}>
      <View style={styles.cardHeader}>
        <Image 
          style={styles.reviwerImage}
          source={imageSource}
         />
         <View style={styles.reviwerTitle}>
           <Text style={styles.reviewerName}>{title}</Text>
           <Text style={styles.reviewerDate}>{date}</Text>
         </View>
         <ERating rating={4} containerStyle={styles.reviewerRating}/>
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.bodyText}>{comment}</Text>
      </View>
    </TouchableOpacity>
  );

}


export default ECommentCard;

const styles = StyleSheet.create({
  card:{
    flex: 1,
    padding: 8
  },
  bodyText: {
    color: colors.grey
  },
  cardHeader:{
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  reviwerTitle:{

  },
  reviewerName:{
    fontSize: 15,
    color: colors.grey,
    fontWeight: 'bold'
  },
  reviewerDate:{
    fontSize: 12,
    color: colors.grey
  },
  reviewerRating:{
  },
  reviwerImage:{
    width: 50,
    height: 50,
    borderRadius: 60
  },
  cardBody:{
    padding:10
  },
});