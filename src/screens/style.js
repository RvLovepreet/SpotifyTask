import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    width: wp('100%'),
    height: hp('100%'),
    backgroundColor: '#16274a',
  },
  containerContent: {
    marginTop: hp('10%'),
    position: 'relative',
    alignSelf: 'center',
    justifyContent: 'center',
    width: wp('100%'),
    paddingTop: hp('2%'),
    paddingBottom: hp('2%'),
    paddingLeft: wp('2%'),
    paddingRight: wp('2%'),
  },
  inputFieldContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnContainer: {
    marginTop: hp('2%'),
    paddingTop: hp('2%'),
  },
  alreadyUserContainer: {
    paddingTop: hp('2%'),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  alreadyUserContent: {
    color: '#3c4159',
    fontSize: hp('2%'),
  },
  alreadyUserSignIn: {
    color: '#6ffcba',
  },
});
