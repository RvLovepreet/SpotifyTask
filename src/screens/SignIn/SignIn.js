import React from 'react';
import { View, Text } from 'react-native';
import { CustomHeader, CustomInputFeild, CustomBtn } from '../../components';
import { styles } from '../style';
import { constent } from '../../shared/constent';
const SignIn = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <CustomHeader title={constent.SignIn} />
        <View style={styles.containerContent}>
          <View style={styles.inputFieldContainer}>
            <CustomInputFeild title={constent.Name} />
            <CustomInputFeild title={constent.MobileNo} />
          </View>
          <View style={styles.btnContainer}>
            <CustomBtn
              onPress={() => navigation.goBack()}
              title={constent.SignIn}
            />
          </View>
          <Text onPress={() => navigation.navigate('SignUp')}>Hello World</Text>
        </View>
      </View>
    </>
  );
};
export default SignIn;
