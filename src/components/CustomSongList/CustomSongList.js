import React from 'react';
import { View, Text, FlatList } from 'react-native';
const CustomSongList = data => {
  console.log(data, 'chdkd');
  return (
    <View>
      <Text>hello</Text>
      <FlatList
        data={data}
        renderItem={({ item, index }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};
export default CustomSongList;
