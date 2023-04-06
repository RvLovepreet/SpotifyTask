import React, { useState } from 'react';
import { View, Text, Keyboard, TouchableWithoutFeedback } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {
  constent,
  emailregex,
  passwordregex,
  mobregex,
  navigationScreen,
  Collections,
} from '../../shared/constent';
import { CustomHeader, CustomBtn, CustomInputFeild } from '../../components';
import { styles } from '../style';
import PlayList from '../PlayList/PlayList';
const SignUp = ({ navigation }) => {
  const [username, setName] = useState();
  const [error, setError] = useState({
    emailErr: '',
    passwordErr: '',
    mobileErr: '',
  });
  const [userFavSong, setFavSong] = useState([]);
  const [useremail, setEmail] = useState();
  const [usermob, setMob] = useState();
  const [userpassword, setPassword] = useState();

  const goToNext = () => {
    try {
      if (
        username.length &&
        useremail.length &&
        usermob.length &&
        userpassword.length
      ) {
        if (
          validation(constent.Password) &&
          validation(constent.Email) &&
          validation(constent.moblie)
        ) {
          if (setData()) {
            navigation.navigate(navigationScreen.SignInScreen);
          }
        } else {
        }
      } else {
        alert(constent.RequiredFeild);
      }
    } catch (err) {
      alert(constent.RequiredFeild);
    }
    /*     navigation.navigate(navigationScreen.SignInScreen); */
    /*   if (setData()) {
    } else {
      alert(constent.UnableCreateUser);
    } */
  };
  const validation = checktype => {
    const check = checktype.toLowerCase();
    switch (check) {
      case constent.psw:
        if (passwordregex.test(userpassword) === false) {
          setError(prestate => ({
            ...prestate,
            passwordErr: constent.createStrongPassword,
          }));
          return false;
        } else {
          setError(prestate => ({
            ...prestate,
            passwordErr: '',
          }));
          return true;
        }
      case constent.email:
        if (emailregex.test(useremail) === false) {
          setError(prestate => ({
            ...prestate,
            emailErr: constent.invalidEmail,
          }));
          return false;
        } else {
          setError(prestate => ({
            ...prestate,
            emailErr: '',
          }));
          return true;
        }
      case constent.mob:
        if (mobregex.test(usermob) === false) {
          setError(prestate => ({
            ...prestate,
            mobileErr: constent.invalidMobile,
          }));
          return false;
        } else {
          setError(prestate => ({
            ...prestate,
            mobileErr: '',
          }));
          return true;
        }
      default:
        break;
    }
  };

  //set data

  const setData = async () => {
    try {
      await firestore().collection(Collections.Users).doc(useremail).set({
        name: username,
        email: useremail,
        favSong: userFavSong,
        playList: {},
        password: userpassword,
        phone: usermob,
      });
      return true;
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  const mangePassword = txt => {
    setPassword(txt);
    setError(prestate => ({
      ...prestate,
      passwordErr: '',
    }));
  };
  const mangeEmail = txt => {
    setEmail(txt);
    setError(prestate => ({
      ...prestate,
      emailErr: '',
    }));
  };
  const mangeMobileNo = txt => {
    setMob(txt);
    setError(prestate => ({
      ...prestate,
      mobileErr: '',
    }));
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <CustomHeader title={constent.SignUp} />
        <View style={styles.containerContent}>
          <View style={styles.inputFieldContainer}>
            <CustomInputFeild
              title={constent.Name}
              setValues={txt => setName(txt)}
              required
              value={username}
            />
            <CustomInputFeild
              title={constent.Email}
              setValues={txt => mangeEmail(txt)}
              required
              value={useremail}
              error={error.emailErr}
            />
            <CustomInputFeild
              title={constent.Password}
              setPassword={setPassword}
              required
              setValues={txt => mangePassword(txt)}
              value={userpassword}
              error={error.passwordErr}
            />

            <CustomInputFeild
              title={constent.MobileNo}
              required
              setValues={txt => mangeMobileNo(txt)}
              value={usermob}
              error={error.mobileErr}
            />
          </View>
          <View style={styles.btnContainer}>
            <CustomBtn
              onPress={() => {
                goToNext();
              }}
              title={constent.SignUp}
            />
          </View>
          <View style={styles.alreadyUserContainer}>
            <Text>
              <Text style={styles.alreadyUserContent}>
                {constent.AlreadyUser}
              </Text>
              <Text
                onPress={() => {
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
    </TouchableWithoutFeedback>
  );
};
export default SignUp;
