import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, FlatList, Platform } from 'react-native';

import colors from '../../commons/Colors';
import ETextInput from '../ETextInput';

const EAutoComplete = ({
  rounded,
  showShadow,
  value,
  listData,
  listStyle,
  containerStyle,
  renderItem,
  keyExtractor,
  onEndReached,
  onEndReachedThreshold,
  placeholder,
  textInputStyle,
  disabled,
  onEndEditing,
  onChangeText,
  leftIconName,
  rightIconName,
  onItemSelect,
  onStartShouldSetResponderCapture,
}) => {

  const defaultRenderItem = ({ item, index }) => {
    return (
      <TouchableOpacity activeOpacity={0.7} style={styles.item} key={index} onPress={() => onItemSelect(item, index)}>
        <Text key={index} style={styles.itemText}>{item}</Text>
      </TouchableOpacity>
    );
  };
  const renderListItems = () => {
    return (
      <FlatList
        data={listData}
        renderItem={renderItem ? renderItem : defaultRenderItem}
        keyExtractor={keyExtractor}
        onEndReached={onEndReached}
        onEndReachedThreshold={onEndReachedThreshold}
        style={[styles.list, listStyle]}
        nestedScrollEnabled={true}
      />
    );
  };

  return (
    <View style={[Platform.OS === 'ios' ? styles.container : {}, containerStyle]}>
      <View style={[rounded ? styles.round : {}, !showShadow ? styles.border : {}]}>
        <ETextInput
            disabled={disabled}
            rounded={rounded}
            showShadow={showShadow}
            editable={!disabled}
            value={value}
            containerStyle={[styles.textInput, styles.leftPadding, textInputStyle, disabled ? styles.disable : styles.enable]}
            placeholder={placeholder ? placeholder : 'Search'}
            onTextChange={onChangeText}
            onEndEditing={onEndEditing}
            leftIcon={leftIconName}
            rightIcon={rightIconName} />
      </View>
      {listData.length > 0 && (
        <View onStartShouldSetResponderCapture={onStartShouldSetResponderCapture}>{renderListItems()}</View>
      )}
    </View>
  );
};

EAutoComplete.propTypes = {
  disabled: PropTypes.bool,
  rounded: PropTypes.bool,
  showShadow: PropTypes.bool,
  value: PropTypes.string,
  listData: PropTypes.array,
  listStyle: PropTypes.object,
  renderItem: PropTypes.func,
  keyExtractor: PropTypes.func,
  onEndReached: PropTypes.func,
  onEndReachedThreshold: PropTypes.func,
  placeholder: PropTypes.string,
  textInputStyle: PropTypes.object,
  disabled: PropTypes.bool,
  onEndEditing: PropTypes.func,
  onChangeText: PropTypes.func,
  iconName: PropTypes.string,
  onItemSelect: PropTypes.func,
  onStartShouldSetResponderCapture: PropTypes.func,
  containerStyle: PropTypes.object,
  item: PropTypes.object,
  index: PropTypes.number,
};
EAutoComplete.defaultProps = {
  disabled: false,
  rounded: false,
  showShadow: false,
  value: '',
  listData: [],
  keyExtractor: (item, index) => index+'',
  onEndReached: e => {},
  onEndReachedThreshold: e => {},
  placeholder: 'Type here',
  onItemSelect: () => {},
  onEndEditing: e => {},
  onChangeText: val => {},
  onStartShouldSetResponderCapture: () => false,
};
export default EAutoComplete;

const styles = StyleSheet.create({
  textInput: {
    height: 43,
  },
  container: {
    zIndex: 2,
  },
  round:{
    borderRadius: 30,
  },
  border:{
    borderWidth: 1,
    borderColor: colors.grey
  },
  item: {
    backgroundColor: colors.lightGrey,
    padding: 12,
    borderColor: '#f7f7f7',
    borderBottomWidth: 1,
    marginLeft: 5,
    marginRight: 5,
  },
  itemText:{
    fontSize: 15,
    color: colors.white,
  },
  list: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: 150,
    top: -10,
    right: 0,
    left: 0,
  },
  leftPadding: {
    paddingLeft: 10,
  },
  enable: {
    borderColor: 'white',
    backgroundColor: 'white',
  },
  disable: {
    borderColor: '#e8e8e8',
    backgroundColor: '#e8e8e8',
  },
});
