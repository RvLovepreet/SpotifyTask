import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import TrackPlayer from 'react-native-track-player';
import { CustomSongListItem } from '../../components';
import { Collections } from '../../shared/constent';
import { useSelector } from 'react-redux';
const SongHistory = ({ navigation }) => {
  const userEmail = useSelector(data => data.user.email);
  const [histroyList, setHistoryList] = useState();
  useEffect(() => {
    const subcribe = navigation.addListener('focus', () => {
      getHistory();
    });
    return subcribe;
  }, [navigation]);

  const getHistory = async () => {
    const user = await firestore()
      .collection(Collections.Users)
      .doc(userEmail)
      .get();
    const history = user._data.history;
    console.log(history);
    const songInfo = await firestore().collection(Collections.SongList).get();
    const songs = songInfo._docs;
    const list = songs.map(ele => ele._data);
    const result = history.map(favSong =>
      list.filter(ele => ele.title == favSong),
    );
    const newList = [];
    result.forEach(ele => newList.push(ele[0]));
    await TrackPlayer.reset();
    await TrackPlayer.add(newList);
    setHistoryList(newList);
  };
  return (
    <View>
      <FlatList
        data={histroyList}
        renderItem={({ item, index }) => (
          <CustomSongListItem
            onPlay={async () => {
              await TrackPlayer.skip(index);
              await TrackPlayer.play();
              console.log('play 2');
            }}
            onPause={() => TrackPlayer.pause()}
            title={item.title}
            lyrics={item.artist}
            src={{ uri: item.artwork }}
          />
        )}
      />
    </View>
  );
};
export default SongHistory;
