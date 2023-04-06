import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { CustomSongListItem } from '../../components';
import { Collections } from '../../shared/constent';
import TrackPlayer, { Capability } from 'react-native-track-player';
import firestore from '@react-native-firebase/firestore';
import { styles } from '../style';
import { useSelector, useDispatch } from 'react-redux';
import { addFavSong } from '../../store/userSlice/userSlice';
const SongListScreen = ({ navigation }) => {
  const [songList, setSongList] = useState();
  const user = useSelector(data => data.user.email);
  console.log(user);
  const dispatch = useDispatch();
  useEffect(() => {
    setUpPlayer();
  }, []);
  /*  useEffect(() => {}, [songList]); */
  useEffect(() => {
    const addList = navigation.addListener('focus', () => {
      console.log('I am rendering');
      console.log(songList, 'song list 1');
      setList();
      console.log('Ii am rendering');
      return addList;
    });
  }, [navigation]);

  const setList = async () => {
    console.log('1 am in setList');
    try {
      const song = await getSongList();
      console.log(song, 'song List');
      setSongList(song);
      const data = await TrackPlayer.getQueue();
      console.log(song, 'check 1');
      console.log('no of Songs : ', data.length);
      await TrackPlayer.reset();
      const data1 = await TrackPlayer.getQueue();
      console.log('no of song', data1.length);
      await TrackPlayer.add(song);
      const data3 = await TrackPlayer.getQueue();
      console.log('no of song', data3);
    } catch (er) {
      console.log(er);
    }
  };
  /*  const addFav1 = songTitle => {
    console.log(songTitle);
    console.log('data comes from redux store', user);
    let data = user.favSong;
    data = [...data, songTitle];
    console.log(data);
    user.favSong = data;
    console.log(user);
    //  favSongList.push(songTitle);
   // console.log(favSongList);
    dispatch(addFavSong(user));
  }; */
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
        //   compactCapabilities: [Capability.Play, Capability.Pause],
        // Icons for the notification on Android (if you don't like the default ones)
      });
      await TrackPlayer.add(list);
      const data = await TrackPlayer.getQueue();
      console.log(data, 'song queue');
    } catch (err) {
      console.log(err);
    }
  };

  const getSongList = async () => {
    console.log('i am in getSong list');
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
        {/*   <CustomHeader title={constent.SongList} /> */}

        <FlatList
          data={songList}
          renderItem={({ item, index }) => (
            <>
              <CustomSongListItem
                onPlay={async () => {
                  /*  await TrackPlayer.reset();
                  await TrackPlayer.add(songList);
                  const data = await TrackPlayer.getQueue();
                  console.log(data, 'song queue');
                  console.log('play 1'); */
                  await TrackPlayer.skip(index);
                  await TrackPlayer.play();
                }}
                onPause={() => TrackPlayer.pause()}
                addFav={async () => await addFav(item.title)}
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
export default SongListScreen;
