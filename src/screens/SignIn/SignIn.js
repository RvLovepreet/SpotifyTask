import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { CustomHeader, CustomInputFeild, CustomBtn } from '../../components';
import { styles } from '../style';
import { useSignInMutation } from '../../services/modules/users';
import { useDispatch } from 'react-redux';
import { addKey } from '../../store/theme';
import { useSelector } from 'react-redux';
import {
  constent,
  Collections,
  navigationScreen,
  Icons,
} from '../../shared/constent';
//import firestore from '@react-native-firebase/firestore';
// import { getuser } from '../../store/userSlice/userSlice';
const SignIn = ({ navigation }) => {
  const dispatch = useDispatch();
  const email = 'chicmic@gmail.com';
  const [userEmail, setEmail] = useState();
  const [userPassword, setPassword] = useState();
  const [signIn, result] = useSignInMutation();
  const key = useSelector(data => data.theme);
  /* const getUser = () => {
    try {
      if (userEmail.length && userPassword.length) {
        const user = firestore()
          .collection(Collections.Users)
          .doc(userEmail)
          .get()
          .then(documentSnapshot => {
            if (user && userPassword === documentSnapshot.data().password) {
              dispatch(getuser(documentSnapshot.data()));
              console.log(documentSnapshot.data());
              navigation.navigate(navigationScreen.SongsNavigation, {
                user: userEmail,
              });
            } else {
              alert(constent.InvalidUser);
            }
          })
          .catch(err => {
            console.log(err);
            /*  alert(constent.InvalidUser);
          });
      } else {
        alert(constent.RequiredFeild);
      }
    } catch (err) {
      alert(constent.RequiredFeild);
    }
  }; */
  const getUser1 = () => {
    signIn({ phone_number: userEmail, password: userPassword });
    console.log(result, ' i am in getUser function');
    if (result.data?.status) {
      console.log('hello');
      console.log(result.data.token);
      dispatch(addKey(result.data.token));
      navigation.navigate(navigationScreen.SongsNavigation, {
        user: email,
      });
    }
  };
  return (
    <View style={styles.container}>
      <CustomHeader
        title={constent.SignIn}
        goToBack={() => navigation.goBack()}
      />
      <View style={styles.containerContent}>
        <View style={styles.inputFieldContainer}>
          <CustomInputFeild
            title={constent.Email}
            required
            value={userEmail}
            setValues={txt => setEmail(txt)}
            visibility={true}
          />
          <CustomInputFeild
            title={constent.Password}
            value={userPassword}
            required
            setValues={txt => setPassword(txt)}
            icon={Icons.PasswordEye}
            iconsecond={Icons.PasswordEyeClose}
            visibility={false}
          />
        </View>
        <View style={styles.btnContainer}>
          <CustomBtn onPress={() => getUser1()} title={constent.SignIn} />
        </View>
      </View>
    </View>
  );
};
export default SignIn;
