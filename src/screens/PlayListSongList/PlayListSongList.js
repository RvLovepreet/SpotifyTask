import React, { useState, useEffect, useCallback } from 'react';
import { CustomHeader, CustomBtn, CustomInputFeild } from '../../components';
import TrackPlayer from 'react-native-track-player';
import { View, Text, FlatList } from 'react-native';
import { styles } from '../style';
import { useSelector } from 'react-redux';
import CustomSongListItem from '../../components/CustomSongListItem/CustomSongListItem';
import firestore from '@react-native-firebase/firestore';
import { Collections } from '../../shared/constent';
import { useFocusEffect } from '@react-navigation/native';
import { playSong } from '../../shared/sharedFunction/addHistory';
import { getFilterSongs } from '../../shared/sharedFunction/filterSong';
import songSlice from '../../store/songSlice/songSlice';
const PlayListSongList = ({ navigation, route }) => {
  const title = route.params.item;
  console.log(title);
  const useremail = useSelector(data => data.userSlice.email);
  const songs = useSelector(data => data.songSlice);
  const [playListsong, setPlayListSong] = useState([]);

  useFocusEffect(
    useCallback(() => {
      getUserInfo();
    }, []),
  );
  const getUserInfo = async () => {
    try {
      const data = await getFilterSongs(useremail, songs, 'PlayList', title);
      setPlayListSong(data);
    } catch (err) {
      console.log(err);
    }
  };
  const updatePlayList = async index => {
    try {
      const user = await firestore()
        .collection(Collections.Users)
        .doc(useremail)
        .get();
      console.log(title, 'check 1');
      const obj = user._data.playList;
      console.log(obj, 'object in onclick');
      obj[title].splice(index, 1);
      console.log(obj, 'check 111');

      await firestore().collection(Collections.Users).doc(useremail).update({
        playList: obj,
      });
      console.log('update');
      getUserInfo();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View style={styles.container}>
      <CustomHeader goToBack={() => navigation.goBack()} title={title} />
      <FlatList
        data={playListsong}
        renderItem={({ item, index }) => (
          <CustomSongListItem
            onPlay={() =>
              playSong(Collections.Users, useremail, item.title, index)
            }
            onPause={() => TrackPlayer.pause()}
            removeSongPlayList={() => updatePlayList(index)}
            title={item.title}
            lyrics={item.artist}
            src={{ uri: item.artwork }}
          />
        )}
      />
    </View>
  );
};
export default PlayListSongList;
