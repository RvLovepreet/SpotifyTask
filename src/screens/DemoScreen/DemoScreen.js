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

  //4 aprit 2023
  /* useEffect(() => {
    navigation.addListener('focus', () => {
      console.log('I am rendering');
      setList();
      console.log('Ii am rendering');
    });
  }, [navigation]);

  useEffect(() => {}, [songList]);
  const setList = async () => {
    console.log('1 am in setList');
    console.log(songList, 'song List');
    try {
      const data = await TrackPlayer.getQueue();
      console.log(songList, 'check 1');
      console.log('no of Songs : ', data.length);
      await TrackPlayer.reset();
      const data1 = await TrackPlayer.getQueue();
      console.log('no of song', data1.length);
      await TrackPlayer.add(songList);
      const data3 = await TrackPlayer.getQueue();
      console.log('no of song', data3);
    } catch (er) {
      console.log(er);
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
