import React, { useEffect, useState } from 'react';
import TrackPlayer from 'react-native-track-player';
import { View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Collections } from '../../shared/constent';
import { CustomSongListItem } from '../../components';
import firestore from '@react-native-firebase/firestore';
import { styles } from '../style';
const FavSong = ({ navigation }) => {
  const user = useSelector(data => data.user);
  const favSongName = user.favSong;
  const userEmail = user.email;
  const [favSongList, setFavSongList] = useState();
  const [favSongTitle, setFavSongTitle] = useState(favSongName);
  /*  useEffect(() => {
    getFavouriteSong();
  }, []); */
  /*  useEffect(() => {
    /*  getFavouriteSong();
  }, [favSongList]);
  useEffect(() => {}, [favSongTitle]); */
  useEffect(() => {
    const addList = navigation.addListener('focus', e => {
      console.log('I am rendering fav ');
      getFavouriteSong();
      setList();
      console.log('Ii am rendering fav');
    });
    return addList;
  }, [navigation]);
  const setList = async () => {
    console.log('1 am in setList');
    /*   console.log(favSongList.length, 'fav song List'); */
    try {
      const data = await TrackPlayer.getQueue();
      console.log(favSongList, 'check 1');
      console.log('no of Songs fav song 1: ', data.length);
      await TrackPlayer.reset();
      const data1 = await TrackPlayer.getQueue();
      console.log('no of song fav song 2', data1.length);
      await TrackPlayer.add(favSongList);
      const data3 = await TrackPlayer.getQueue();
      console.log('no of song fav song 3', data3.length);
    } catch (er) {
      console.log(er);
    }
  };
  const getFavouriteSong = async () => {
    console.log(favSongName, 'check for updata favsong');
    try {
      const songInfo = await firestore().collection(Collections.SongList).get();
      const songs = songInfo._docs;
      const list = songs.map(ele => ele._data);
      const result = favSongName.map(favSong =>
        list.filter(ele => ele.title == favSong),
      );
      const newList = [];
      result.forEach(ele => newList.push(ele[0]));
      await TrackPlayer.reset();
      const data = TrackPlayer.getQueue();
      console.log(data, 'fav song');
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
      console.log('removed song ');
      getFavouriteSong();
      setList();
    } catch (err) {
      console.log(err);
    }
  };
  /*
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
  */
  const dispatch = useDispatch();
  return (
    <>
      <View style={styles.container}>
        {/*   <Text onPress={() => getFavouriteSong()}>play</Text> */}
        <FlatList
          data={favSongList}
          renderItem={({ item, index }) => (
            <>
              <CustomSongListItem
                onPlay={async () => {
                  /* console.log('play 1');
                  const data = await TrackPlayer.getQueue();
                  console.log(data);
                  await TrackPlayer.reset();
                  await TrackPlayer.add(favSongList); */
                  await TrackPlayer.skip(index);
                  await TrackPlayer.play();
                  console.log('play 2');
                }}
                onPause={() => TrackPlayer.pause()}
                removeFav={() => removeFav(item.title)}
                title={item.title}
                lyrics={item.artist}
                src={{ uri: item.artwork }}
              />
            </>
          )}
        />
      </View>
    </>
  );
};
export default FavSong;
