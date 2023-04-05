import React from 'react';
import { CustomHeader, CustomBtn, CustomInputFeild } from '../../components';
import { View, Text } from 'react-native';
import { styles } from '../style';
const CreatePlayList = () => {
  return (
    <View style={styles.container}>
      <CustomInputFeild title="Name of Playlist" />
    </View>
  );
};
export default CreatePlayList;
