import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { CustomHeader, CustomSongListItem } from '../../components';
import { constent, Collections } from '../../shared/constent';
import { songStore } from '../../store/songStore/songStore';
import TrackPlayer, { Capability } from 'react-native-track-player';
import firestore from '@react-native-firebase/firestore';
import { styles } from '../style';

const SongListScreen = ({ navigation, route }) => {
  const [songList, setSongList] = useState();
  const { user } = route.params;
  console.log(typeof user);
  useEffect(() => {
    setUpPlayer();
  }, []);
  useEffect(() => {
    console.log(songList, 'check for list in useEffect');
  }, [songList]);
  const addFav = async songTitle => {
    console.log('check 1');
    try {
      const data = await firestore()
        .collection(Collections.Users)
        .doc(user)
        .update({ favSong: firestore.FieldValue.arrayUnion(songTitle) });
      console.log('array modified');
      return true;
    } catch (err) {
      console.log(err);
    }
  };

  const setUpPlayer = async () => {
    try {
      const list = await getSongList();
      setSongList(list);
      await TrackPlayer.setupPlayer();
      await TrackPlayer.updateOptions({
        // Media controls capabilities
        capabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.SkipToNext,
          Capability.SkipToPrevious,
          Capability.Stop,
        ],

        // Capabilities that will show up when the notification is in the compact form on Android
        compactCapabilities: [Capability.Play, Capability.Pause],
        // Icons for the notification on Android (if you don't like the default ones)
      });
      await TrackPlayer.add(list);
    } catch (err) {
      console.log(err);
    }
  };

  const getSongList = async () => {
    try {
      const songInfo = await firestore().collection(Collections.SongList).get();
      const songs = songInfo._docs;
      const list = songs.map(ele => ele._data);
      return list;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <CustomHeader title={constent.SongList} />
        <View style={styles.containerContent}>
          <FlatList
            data={songList}
            renderItem={({ item, index }) => (
              <>
                <CustomSongListItem
                  onPlay={() => {
                    TrackPlayer.skip(index);
                    TrackPlayer.play();
                  }}
                  onPause={() => TrackPlayer.pause()}
                  addFav={() => addFav(item.title)}
                  title={item.title}
                  lyrics={item.artist}
                  src={{ uri: item.artwork }}
                />
              </>
            )}
          />
        </View>
        <Text onPress={() => navigation.goBack()}>SongListScreen</Text>
      </View>
    </>
  );
};
export default SongListScreen;
