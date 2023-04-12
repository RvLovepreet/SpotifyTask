import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, FlatList } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import TrackPlayer from 'react-native-track-player';
import { CustomSongListItem } from '../../components';
import { Collections } from '../../shared/constent';
import { useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';

const SongHistory = ({ navigation }) => {
  const userEmail = useSelector(data => data.user.email);
  const [histroyList, setHistoryList] = useState();
  /*   useEffect(() => {
    const subcribe = navigation.addListener('focus', () => {
      console.log('histroy i am in history');
      console.log('histroy i am in history');
      getHistory();
    });
    return subcribe;
  }, [navigation]); */

  useFocusEffect(
    useCallback(() => {
      console.log('history 1');
      getHistory();
    }, []),
  );
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
