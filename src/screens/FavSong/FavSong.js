import React, { useState, useCallback } from 'react';
import TrackPlayer from 'react-native-track-player';
import { View, FlatList, InteractionManager } from 'react-native';
import { useSelector } from 'react-redux';
import { constent, Collections } from '../../shared/constent';
import { CustomSongListItem } from '../../components';
import firestore from '@react-native-firebase/firestore';
import { styles } from '../style';
import { useFocusEffect } from '@react-navigation/native';
import { playSong } from '../../shared/sharedFunction/addHistory';
import { getFilterSongs } from '../../shared/sharedFunction/filterSong';

const FavSong = ({ navigation }) => {
  const user = useSelector(data => data.user);
  const userEmail = user.email;
  const songs = useSelector(data => data.songs);
  const [favSongList, setFavSongList] = useState();

  useFocusEffect(
    useCallback(() => {
      setList();
    }, []),
  );

  const setList = async () => {
    try {
      const list = await getFilterSongs(
        userEmail,
        songs,
        constent.FavouriteSong,
      );
      setFavSongList(list);
    } catch (err) {
      console.log(err);
    }
  };

  //new add song
  const getFavouriteSong2 = async () => {
    try {
      const user = await firestore()
        .collection(Collections.Users)
        .doc(userEmail)
        .get();
      const favSongName = user._data.favSong;
      const result = favSongName.map(favSong =>
        songs.filter(ele => ele.title == favSong),
      );
      const newList = [];
      result.forEach(ele => newList.push(ele[0]));
      await TrackPlayer.reset();
      await TrackPlayer.add(newList);
      setFavSongList(newList);
    } catch (err) {
      console.log(err);
    }
  };

  const removeFav = async songTitle => {
    try {
      await firestore()
        .collection(Collections.Users)
        .doc(userEmail)
        .update({
          favSong: firestore.FieldValue.arrayRemove(songTitle),
        });
      getFavouriteSong2();
      setList();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={favSongList}
        renderItem={({ item, index }) => (
          <CustomSongListItem
            onPlay={() =>
              playSong(Collections.Users, userEmail, item.title, index)
            }
            onPause={() => TrackPlayer.pause()}
            removeFav={() => removeFav(item.title)}
            title={item.title}
            lyrics={item.artist}
            src={{ uri: item.artwork }}
          />
        )}
      />
    </View>
  );
};
export default FavSong;
