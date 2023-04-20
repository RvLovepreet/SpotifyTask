import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Icons } from '../../shared/constent';
import { constent, color } from '../../shared/constent';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CustomBtn from '../CustomBtn/CustomBtn';

const CustomHeader = ({ title, goToBack, onbtnClick }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerContent}>
        {goToBack ? (
          <TouchableOpacity onPress={goToBack}>{Icons.Back}</TouchableOpacity>
        ) : null}
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
      {onbtnClick ? (
        <CustomBtn
          style={styles.logOutBtn}
          title={constent.LogOut}
          onPress={onbtnClick}
        />
      ) : null}
    </View>
  );
};
export default CustomHeader;

const styles = StyleSheet.create({
  headerContainer: {
    width: wp('100%'),
    height: hp('10%'),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: wp('2%'),
    paddingLeft: wp('2%'),
    paddingRight: wp('2%'),
    backgroundColor: '#2960d6',
  },
  headerContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: hp('4%'),
    color: '#fff',
    fontWeight: '900',
  },
  logOutBtn: {
    color: color.firstColor,
    padding: 4,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
});
