import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const CustomInputFeild = ({
  title,
  required,
  setValues,
  error,
  value,
  icon,
  changeIcon,
  visibility,
  iconsecond,
}) => {
  const [focus, setFocus] = useState(false);
  const [err, setErr] = useState(false);
  const [visible, setVisible] = useState(visibility == true ? false : true);
  const check = () => {
    if (value === undefined) {
      console.log('okk');
    } else {
      value.length ? setErr(false) : setErr(true);
    }
  };
  const visiblePassword = () => {
    setVisible(!visible);
  };
  return (
    <View style={styles.customInputFeildContainer}>
      <Text style={styles.customInputFeildLable}>
        {title}
        {required ? <Text style={styles.requiredSign}>*</Text> : null}
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          onFocus={() => setFocus(true)}
          onBlur={() => {
            setFocus(false);
            check();
          }}
          secureTextEntry={visible}
          style={[
            focus
              ? styles.customInputFeildFocus
              : styles.customInputFeildOnBlur,
            styles.customInputFeild,
          ]}
          onChangeText={txt => {
            setValues(txt);
            setErr(false);
          }}
        />
        {icon ? (
          <TouchableOpacity onPress={visiblePassword} style={styles.iconStyle}>
            <Text>{visible ? iconsecond : icon}</Text>
          </TouchableOpacity>
        ) : null}
      </View>

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
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '98%',
    height: hp('6%'),
  },
  customInputFeildLable: {
    color: '#111',
    fontSize: hp('2.5%'),
  },
  iconStyle: {
    position: 'absolute',
    alignSelf: 'center',
    right: wp('4%'),
  },
  requiredSign: {
    color: 'red',
    fontSize: hp('3%'),
  },
  customInputFeildOnBlur: {
    borderWidth: 1,
  },
  customInputFeildFocus: {
    borderWidth: 1,

    borderColor: '#2960d6',
  },
  customInputFeild: {
    backgroundColor: '#fff',
    height: '100%',
    fontSize: hp('3%'),
    paddingLeft: wp('3%'),
    color: '#111',
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
