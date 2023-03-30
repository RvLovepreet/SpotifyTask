import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { View, Text, StyleSheet } from 'react-native';

const CustomHeader = ({ title }) => {
  return (
    <>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
    </>
  );
};
export default CustomHeader;

const styles = StyleSheet.create({
  headerContainer: {
    width: wp('100%'),
    height: hp('10%'),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: wp('2%'),
    paddingLeft: wp('2%'),
    paddingRight: wp('2%'),
    backgroundColor: '#16274a',
  },
  headerTitle: {
    fontSize: hp('4%'),
    color: '#fff',
    fontWeight: '900',
  },
});
