import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { CustomHeader, CustomInputFeild, CustomBtn } from '../../components';
import { styles } from '../style';
import { useDispatch } from 'react-redux';
import { constent, Collections, navigationScreen } from '../../shared/constent';
import firestore from '@react-native-firebase/firestore';
import { getuser } from '../../store/userSlice/userSlice';
const SignIn = ({ navigation }) => {
  const dispatch = useDispatch();
  const [userEmail, setEmail] = useState();
  const [userPassword, setPassword] = useState();
  const getUser = () => {
    const user = firestore()
      .collection(Collections.Users)
      .doc(userEmail)
      .get()
      .then(documentSnapshot => {
        if (user && userPassword === documentSnapshot.data().password) {
          dispatch(getuser(documentSnapshot.data()));
          navigation.navigate(navigationScreen.SongsNavigation, {
            user: userEmail,
          });
        } else {
          alert(constent.InvalidUser);
        }
      })
      .catch(err => {
        console.log(err);
        /*  alert(constent.InvalidUser); */
      });
  };

  return (
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
          onPress={() => navigation.navigate(navigationScreen.SongsNavigation)}
        >
          Hello World
        </Text>
      </View>
    </View>
  );
};
export default SignIn;
