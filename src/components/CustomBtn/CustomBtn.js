import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
const CustomBtn = ({ title, onPress }) => {
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.CustomBtnContainer}>
          <Text style={styles.btnTitile}>{title}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};
export default CustomBtn;
const styles = StyleSheet.create({
  CustomBtnContainer: {
    padding: hp('2%'),

    backgroundColor: '#2960d6',
    display: 'flex',
    borderWidth: 0,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTitile: {
    color: '#16274a',
    color: '#fff',
    fontSize: hp('2.5%'),
    fontWeight: '600',
  },
});
