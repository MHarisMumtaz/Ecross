import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity, FlatList, View, Text, Dimensions } from 'react-native';
import colors from '../../commons/Colors';
import ListItem from './ListItem';

const ESwipeableList = ({containerStyle, listStyle, data = [], renderListItem, renderSeparator, onItemSwiped, oddColor = colors.white, evenColor = colors.lightGrey}) => {

    const [enableScroll, setEnableScroll] = useState(true);

    const renderItem = ({item, index}) => {
        return (
          <ListItem
            key={index}
            id={item.id}
            success={onItemSwiped}
            backgroundColor={index%2===0 ? evenColor : oddColor}
            setScrollEnabled={enable => setEnableScroll(enable)}
          >
          { renderListItem(item,index) }
          </ListItem>
        );
    }

    const renderDefaultSeparator = () => {
        return (
          <View style={styles.separatorViewStyle}>
            <View style={styles.separatorStyle} />
          </View>
        );
      }

    return (
        <SafeAreaView style={containerStyle ? containerStyle : styles.container}>
            <FlatList
              style={listStyle}
              data={data}
              ItemSeparatorComponent={renderSeparator ? renderSeparator : renderDefaultSeparator}
              renderItem={renderItem}
              scrollEnabled={enableScroll}
              showsVerticalScrollIndicator={false}
            />    
        </SafeAreaView>
    );
}

export default ESwipeableList;
const styles = StyleSheet.create({
	container:{
	},
    separatorViewStyle: {
        flex: 1,
        backgroundColor: colors.lightGrey
    },
    separatorStyle: {
        height: 1,
        backgroundColor: colors.lightGrey
    },
});