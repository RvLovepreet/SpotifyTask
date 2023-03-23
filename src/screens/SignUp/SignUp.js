import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { constent } from '../../shared/constent';
import { CustomHeader, CustomBtn, CustomInputFeild } from '../../components';
import { styles } from '../style';
const SignUp = ({ navigation }) => {
  const [password, setPassword] = useState(true);
  const [check, setCheck] = useState(true);
  const goToNext = () => {
    navigation.navigate('SignIn');
  };

  return (
    <>
      <View style={styles.container}>
        <CustomHeader title={constent.SignUp} />
        <View style={styles.containerContent}>
          <View style={styles.inputFieldContainer}>
            <CustomInputFeild title={constent.Name} check={check} required />
            <CustomInputFeild
              title={constent.MobileNo}
              check={check}
              required
            />
            <CustomInputFeild
              title={constent.Password}
              validationType="Password"
              setPassword={setPassword}
              setCheck={setCheck}
              check={check}
              required
            />
          </View>
          <View style={styles.btnContainer}>
            <CustomBtn onPress={() => goToNext()} title="Sign Up" />
          </View>
          <View style={styles.alreadyUserContainer}>
            <Text>
              <Text style={styles.alreadyUserContent}>
                {constent.AlreadyUser}
              </Text>
              <Text
                onPress={() => goToNext()}
                style={[styles.alreadyUserContent, styles.alreadyUserSignIn]}
              >
                {constent.SignIn}
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};
export default SignUp;
