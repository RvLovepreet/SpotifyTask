import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CustomInputFeild = ({
  title,
  required,
  setPassword,
  setCheck,
  validationType,
  check,
  onDataChange,
  setValues,
}) => {
  const [focus, setFocus] = useState(false);

  const validation = (checktype, value) => {
    console.log(checktype);
    switch (checktype) {
      case 'Password' || 'password' || 'PASSWORD':
        let reg1 =
          /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
        if (reg1.test(value) === false) {
          setPassword(value);
          setCheck(false);
          console.log('create Strong Password');
        } else {
          setPassword(value);
          setCheck(true);
        }
        break;
      default:
        break;
    }
  };
  return (
    <>
      <View style={styles.customInputFeildContainer}>
        <Text style={styles.customInputFeildLable}>
          {title}
          {required ? <Text style={styles.requiredSign}>*</Text> : null}
        </Text>
        <TextInput
          onFocus={() => setFocus(true)}
          onBlur={
            txt => setFocus(false)
            /*   if(validationType){
              validation(validationType,txt)
            } */
          }
          style={[
            focus
              ? styles.customInputFeildFocus
              : styles.customInputFeildOnBlur,
            styles.customInputFeild,
          ]}
          onChangeText={txt => setValues(txt)}
        />
      </View>
    </>
  );
};
export default CustomInputFeild;
const styles = StyleSheet.create({
  customInputFeildContainer: {
    position: 'relative',
    width: '100%',
    height: hp('10%'),
    display: 'flex',
    marginTop: hp('2%'),
    justifyContent: 'space-between',
    /*     borderColor: '#fff',
    backgroundColor: '#fff', */
  },
  customInputFeildLable: {
    color: '#fff',
    fontSize: hp('2.5%'),
  },
  requiredSign: {
    color: 'red',
    fontSize: hp('3%'),
  },
  customInputFeildOnBlur: {
    borderWidth: 0,
  },
  customInputFeildFocus: {
    borderWidth: 1,
    borderColor: '#6ffcba',
  },
  customInputFeild: {
    backgroundColor: '#3c4159',
    height: hp('0'),
    fontSize: hp('3%'),
    paddingLeft: wp('3%'),
    color: '#fff',
    flex: 1,
    alignItems: 'center',
    borderRadius: 4,
  },
  validationText: {
    color: 'red',
    fontSize: hp('2%'),
  },
});
