import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { CustomHeader, CustomInputFeild, CustomBtn } from '../../components';
import { styles } from '../style';
import { constent, Collections, navigationScreen } from '../../shared/constent';
import firestore from '@react-native-firebase/firestore';
const SignIn = ({ navigation }) => {
  const [userEmail, setEmail] = useState();
  const [userPassword, setPassword] = useState();
  const getUser = () => {
    const user = firestore()
      .collection(Collections.Users)
      .doc(userEmail)
      .get()
      .then(documentSnapshot => {
        console.log(documentSnapshot.exists);
        if (user && userPassword === documentSnapshot.data().password) {
          navigation.navigate(navigationScreen.PlayListScreen);
        } else {
          alert(constent.InvalidUser);
        }
      })
      .catch(err => {
        alert(constent.InvalidUser);
      });
  };
  return (
    <>
      <View style={styles.container}>
        <CustomHeader title={constent.SignIn} />
        <View style={styles.containerContent}>
          <View style={styles.inputFieldContainer}>
            <CustomInputFeild
              title={constent.Email}
              setValues={txt => setEmail(txt)}
            />
            <CustomInputFeild
              title={constent.Password}
              setValues={txt => setPassword(txt)}
            />
          </View>
          <View style={styles.btnContainer}>
            <CustomBtn onPress={() => getUser()} title={constent.SignIn} />
          </View>
          <Text
            onPress={() => navigation.navigate(navigationScreen.SignUpScreen)}
          >
            go to sign in
          </Text>
        </View>
      </View>
    </>
  );
};
export default SignIn;
