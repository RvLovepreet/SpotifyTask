import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { navigationScreen } from '../../shared/constent';
import { styles } from '../style';
const PlayList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>PlayList</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(navigationScreen.CreatePlayListScreen)
        }
      >
        <Text>hello</Text>
      </TouchableOpacity>
    </View>
  );
};
export default PlayList;
