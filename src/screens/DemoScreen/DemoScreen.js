import React, { useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
/* import database from '@react-native-firebase/database'; */

const DemoScreen = () => {
  /*  useEffect(() => {
    console.log('check for UseEffect');
    getdata();
    console.log('check for UseEffect2');
  }, []);
  const getdata = async () => {
    try {
     const reference = await database().ref('/users/userId').once("value");
     console.log(reference)

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
