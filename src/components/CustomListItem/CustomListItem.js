import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { View, Text, StyleSheet } from 'react-native';
const CustomListItem = ({ title }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemContent}>{title}</Text>
    </View>
  );
};
export default CustomListItem;
const styles = StyleSheet.create({
  itemContainer: {
    borderWidth: 1,
    borderColor: '#fff',
    paddingTop: hp('1%'),
    paddingBottom: hp('1%'),
    paddingLeft: wp('1%'),
    paddingRight: wp('1%'),
  },
  itemContent: {
    color: '#111',
    fontSize: hp('3%'),
    fontWeight: '700',
  },
});
