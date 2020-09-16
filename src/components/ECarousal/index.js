import React, { useState } from 'react';
import { Platform, StyleSheet, ScrollView, TouchableOpacity, View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../commons/Colors';

const ECarousal = ({items, style, itemsPerInterval = 1, onPress = () => {}}) => {

  const [interval, setInterval] = React.useState(1);
  const [intervals, setIntervals] = React.useState(1);
  const [width, setWidth] = React.useState(0);

  const init = (width) => {
    // initialise width
    setWidth(width);
    // get total items present
    const totalItems = items.length;
    // initialise total intervals
    setIntervals(Math.ceil(totalItems / itemsPerInterval));
  }

  const getInterval = (offset) => {
    for (let i = 1; i <= intervals; i++) {
      if(offset === 0){
        return i;
      }
      if (offset < (width / intervals) * i) {
        return i+1;
      }
      if (i == intervals) {
        return i;
      }
    }
  }

  let bullets = [];
  for (let i = 1; i <= intervals; i++) {
    bullets.push(
      <Text
        key={i}
        style={{
          ...styles.bullet,
          opacity: interval === i ? 0.5 : 0.1
        }}
      >
        &bull;
      </Text>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{...styles.scrollView, width: `${100 * intervals}%` }}
        onContentSizeChange={(w, h) => init(w)}
        showsHorizontalScrollIndicator={false}
        onScroll={data => {
          setWidth(data.nativeEvent.contentSize.width);
          setInterval(getInterval(data.nativeEvent.contentOffset.x));
        }}
        scrollEventThrottle={200}
        decelerationRate="fast"
        pagingEnabled
      >
        {
          items.map((item,index)=>{
              return (
                  <Image 
                    key={index}
                    style={styles.image} 
                    source={{uri: item.url}} 
                  />
              )
          })
        }
      </ScrollView>
      <View style={styles.bullets}>
        {bullets}
      </View>
    </View>
  );
}

export default ECarousal;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fbfbfb',
    borderColor: '#ebebeb',
    borderWidth: 1,
    borderRadius: 8,
    shadowColor: '#fcfcfc',
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 5
    },
  },
  scrollView: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  bullets: {
    position: 'absolute',
    top: 200,
    right: 0,
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  bullet: {
    paddingHorizontal: 5,
    fontSize: 40,
  },
  image: {
    flex: 1,
    flexBasis: '100%',
    resizeMode: "contain",
    maxWidth: '100%',
    height: 250,
  }
});

