import React, { useEffect, useState, useCallback } from 'react';
import TrackPlayer from 'react-native-track-player';
import { View, FlatList, InteractionManager } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Collections } from '../../shared/constent';
import { CustomSongListItem } from '../../components';
import firestore from '@react-native-firebase/firestore';
import { styles } from '../style';
import { useFocusEffect } from '@react-navigation/native';
import { playSong, addinHistory } from '../../shared/sharedFunction/addHistory';
const FavSong = ({ navigation }) => {
  const user = useSelector(data => data.user);
  const userEmail = user.email;
  const [favSongList, setFavSongList] = useState();
  /*
  useEffect(() => {
    console.log('I am rendering fav  outside the addlistener');
    const addList = navigation.addListener('focus', e => {
      console.log('I am rendering fav ');
      getFavouriteSong2();
      setList();
      console.log('Ii am rendering fav');
    });
      return addList;
  }, [navigation]); */
  useFocusEffect(
    useCallback(() => {
      const task = InteractionManager.runAfterInteractions(() => {
        setList();
        getFavouriteSong2();
      });
      return () => task.cancel();
    }, []),
  );
  /* const playSong = async (title, index) => {
    await TrackPlayer.skip(index);
    await TrackPlayer.play();
    addinHistory(Collections.Users, userEmail, title);
  };*/
  const setList = async () => {
    try {
      await TrackPlayer.reset();
      await TrackPlayer.add(favSongList);
    } catch (er) {
      console.log(er);
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
      const songInfo = await firestore().collection(Collections.SongList).get();
      const songs = songInfo._docs;
      const list = songs.map(ele => ele._data);
      const result = favSongName.map(favSong =>
        list.filter(ele => ele.title == favSong),
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
