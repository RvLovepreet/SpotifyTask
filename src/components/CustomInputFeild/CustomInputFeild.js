import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const CustomInputFeild = ({ title, required, setValues, error, value }) => {
  const [focus, setFocus] = useState(false);
  const [err, setErr] = useState(false);
  const check = () => {
    if (value === undefined) {
      console.log('okk');
    } else {
      value.length ? setErr(false) : setErr(true);
    }
  };
  return (
    <View style={styles.customInputFeildContainer}>
      <Text style={styles.customInputFeildLable}>
        {title}
        {required ? <Text style={styles.requiredSign}>*</Text> : null}
      </Text>
      <TextInput
        onFocus={() => setFocus(true)}
        onBlur={() => {
          setFocus(false);
          check();
        }}
        style={[
          focus ? styles.customInputFeildFocus : styles.customInputFeildOnBlur,
          styles.customInputFeild,
        ]}
        onChangeText={txt => {
          setValues(txt);
          setErr(false);
        }}
      />
      <Text style={{ height: 15 }}>
        {err ? <Text style={styles.checkText}>required</Text> : null}
        <Text style={styles.checkText}>{error}</Text>
      </Text>
    </View>
  );
};
export default CustomInputFeild;
const styles = StyleSheet.create({
  customInputFeildContainer: {
    position: 'relative',
    width: '100%',
    height: hp('12%'),
    display: 'flex',
    marginTop: hp('.5%'),
    marginBottom: hp('.5%'),
    justifyContent: 'space-between',
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
  checkText: {
    color: 'red',
    fontSize: 14,
  },
});
