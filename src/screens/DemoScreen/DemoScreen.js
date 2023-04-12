import React, { useEffect } from 'react';

import { View, Image, Text, SafeAreaView } from 'react-native';
const DemoScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>hello</Text>
        <Image
          /* accessible={true}
          accessibilityLabel={'hello world'} */
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          alt={'hello1'}
          style={{ width: 50, height: 50 }}
          fadeDuration={5000}
          onError={err => console.log('hello')}
          onProgress={() => console.log('i am in on Progress')}
          blurRadius={32}
        />
      </View>
    </SafeAreaView>
  );
};
export default DemoScreen;
