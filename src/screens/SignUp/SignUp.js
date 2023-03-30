import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
/* import firestore from '@react-native-firebase/firestore'; */
import { constent, navigationScreen, Collections } from '../../shared/constent';
import { CustomHeader, CustomBtn, CustomInputFeild } from '../../components';
import { styles } from '../style';
const SignUp = ({ navigation }) => {
  const [check, setCheck] = useState(true);
  const [username, setName] = useState();
  const [useremail, setEmail] = useState();
  const [usermob, setMob] = useState();
  const [userpassword, setPassword] = useState();
  /*  const goToNext = () => {
    if (setData()) {
      navigation.navigate(navigationScreen.SignInScreen);
    } else {
      alert(constent.UnableCreateUser);
    }
  }; */

  //set data

  /*  const setData = async () => {
    try {
      const data = await firestore()
        .collection(Collections.Users)
        .doc(useremail)
        .set({
          name: username,
          email: useremail,
          password: userpassword,
          phone: usermob,
        });
      return true;
    } catch (err) {
      console.log(err);
      return err;
    }
  }; */

  return (
    <>
      <View style={styles.container}>
        <CustomHeader title={constent.SignUp} />
        <View style={styles.containerContent}>
          <View style={styles.inputFieldContainer}>
            <CustomInputFeild
              title={constent.Name}
              check={check}
              setValues={txt => setName(txt)}
              required
            />
            <CustomInputFeild
              title={constent.Email}
              setValues={txt => setEmail(txt)}
              check={check}
              required
            />
            <CustomInputFeild
              title={constent.MobileNo}
              check={check}
              required
              setValues={txt => setMob(txt)}
            />
            <CustomInputFeild
              title={constent.Password}
              validationType="Password"
              setPassword={setPassword}
              setCheck={setCheck}
              check={check}
              required
              setValues={txt => setPassword(txt)}
            />
          </View>
          <View style={styles.btnContainer}>
            <CustomBtn
              onPress={() => {
                console.log('check 1');
                navigation.navigate(navigationScreen.SignInScreen);
              }}
              title={constent.SignIn}
            />
          </View>
          <View style={styles.alreadyUserContainer}>
            <Text>
              <Text style={styles.alreadyUserContent}>
                {constent.AlreadyUser}
              </Text>
              <Text
                onPress={() => {
                  console.log('check 1');
                  navigation.navigate(navigationScreen.SignInScreen);
                }}
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
