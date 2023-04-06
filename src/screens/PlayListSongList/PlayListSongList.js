import React, { useState, useEffect } from 'react';
import { CustomHeader, CustomBtn, CustomInputFeild } from '../../components';
import TrackPlayer from 'react-native-track-player';
import { View, Text, FlatList } from 'react-native';
import { styles } from '../style';
import { useSelector } from 'react-redux';
import CustomSongListItem from '../../components/CustomSongListItem/CustomSongListItem';
import firestore from '@react-native-firebase/firestore';
import { Collections } from '../../shared/constent';
const PlayListSongList = ({ navigation, route }) => {
  const title = route.params.item;
  console.log(title);
  const useremail = useSelector(data => data.user.email);
  const [playListsong, setPlayListSong] = useState();
  console.log(useremail);
  /*  const obj = {};
  obj[title] = ['chaala', 'ikko'];
  console.log(obj); */

  useEffect(() => {
    const addList = navigation.addListener('focus', () => {
      getUserInfo();
    });
    return addList;
  }, [navigation]);
  const getUserInfo = async () => {
    try {
      const user = await firestore()
        .collection(Collections.Users)
        .doc(useremail)
        .get();
      console.log(title, 'check 1');
      console.log(user._data.playList, 'check for map');
      const playListSongsTitle = user._data.playList[title];

      console.log(playListSongsTitle);
      const songInfo = await firestore().collection(Collections.SongList).get();
      const song = songInfo._docs;
      const list = song.map(ele => ele._data);
      const result = playListSongsTitle.map(playlistSong =>
        list.filter(ele => ele.title == playlistSong),
      );

      const newList = [];
      result.forEach(ele => newList.push(ele[0]));

      await TrackPlayer.reset();

      await TrackPlayer.add(newList);

      setPlayListSong(newList);
    } catch (err) {
      console.log(err);
    }
  };
  const updatePlaylist = async () => {
    try {
      const user = await firestore()
        .collection(Collections.Users)
        .doc(useremail)
        .get();
      console.log(title, 'check 1');
      const obj = user._data.playList;
      console.log(obj, 'object in onclick');
      console.log(obj[title].push('ikko mikke'));
      console.log(obj);
      await firestore().collection(Collections.Users).doc(useremail).update({
        playList: obj,
      });
      console.log('update');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View style={styles.container}>
      <CustomHeader goToBack={() => navigation.goBack()} title={title} />
      <Text onPress={() => updatePlaylist()}> onClick</Text>
      <FlatList
        data={playListsong}
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
export default PlayListSongList;
