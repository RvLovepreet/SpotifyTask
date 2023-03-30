import React, { useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
// import firestore from '@react-native-firebase/firestore';
// import { doc, setDoc } from 'firebase/firestore';
const DemoScreen = () => {
  useEffect(() => {
    /*    setData(); */
  });
  /*   const setData = () */
  /*   const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '0b8cec3c0cmsh3ee0462ad69122ap1e08b9jsndeb5aad8e097',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
    },
  }; */

  /*  fetch(
    'https://spotify23.p.rapidapi.com/tracks/?ids=4WNcduiCmDNfmTEz7JvmLv',
    options,
  )
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err)); */
  /*  const getdata = async () => {
    try {
      const data = await firestore()
        .collection('users')
        .doc('wB7OQTteYvTHTB4pK8tZ')
        .get();
      console.log(data._data);
    } catch (err) {
      console.log(err);
    }
  }; */

  return (
    <>
      <SafeAreaView>
        <View>
          <Text>demo Screen</Text>
        </View>
      </SafeAreaView>
    </>
  );
};
export default DemoScreen;
