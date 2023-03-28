import React from 'react';
import { View, Text } from 'react-native';
import { CustomHeader, CustomSongListItem } from '../../components';
import { constent, ImageSource } from '../../shared/constent';
import { AudioPlayer } from 'react-native-simple-audio-player';
import { styles } from '../style';
const SongListScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <CustomHeader title="SongList" />

        <View style={styles.containerContent}>
          {/* <CustomSongListItem
            title="Rutba"
            lyrics="Satinder Sartaj"
            src={ImageSource.SongImg1}
          /> */}
          <AudioPlayer
            url={
              'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
            }
          />
          <CustomSongListItem
            title="Rutba"
            lyrics="Satinder Sartaj"
            src={ImageSource.SongImg1}
          />
        </View>
        <Text onPress={() => navigation.goBack()}>SongListScreen</Text>
      </View>
    </>
  );
};
export default SongListScreen;
