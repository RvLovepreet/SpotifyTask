import React, { useState, useEffect, useRef } from 'react';
import { View, Text, FlatList, Modal, StyleSheet } from 'react-native';
import { CustomBtn, CustomInputFeild } from '../../components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Icons } from '../../shared/constent';
import { CustomSongListItem } from '../../components';
import { Collections, constent } from '../../shared/constent';
import TrackPlayer, { Capability } from 'react-native-track-player';
import firestore from '@react-native-firebase/firestore';
import { styles } from '../style';
import { useSelector } from 'react-redux';

const SongListScreen = ({ navigation }) => {
  const [songList, setSongList] = useState();
  const selectedSong = useRef();
  const [modalShow, setModalShow] = useState(false);
  const [showInput, setshowInput] = useState(false);
  const [playlistName, setPlaylistName] = useState('');
  const [playListTitle, setPlayListTitle] = useState();
  const [addSongInPlayList, setAddSongInPlayList] = useState();
  const useremail = useSelector(data => data.user.email);

  useEffect(() => {
    setUpPlayer();
  }, []);

  useEffect(() => {
    const addList = navigation.addListener('focus', () => {
      setList();
      return addList;
    });
  }, [navigation]);

  const setList = async () => {
    console.log('1 am in setList');
    try {
      const song = await getSongList();

      setSongList(song);
      const data = await TrackPlayer.getQueue();
      await TrackPlayer.reset();
      const data1 = await TrackPlayer.getQueue();
      await TrackPlayer.add(song);
      const data3 = await TrackPlayer.getQueue();
    } catch (er) {
      console.log(er);
    }
  };

  const addFav = async songTitle => {
    try {
      const data = await firestore()
        .collection(Collections.Users)
        .doc(useremail)
        .update({ favSong: firestore.FieldValue.arrayUnion(songTitle) });
      console.log('song modified');
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
  //create Playlist
  const createPlaylist = async SongTitle => {
    selectedSong.current = SongTitle;
    try {
      const user = await firestore()
        .collection(Collections.Users)
        .doc(useremail)
        .get();
      const playlist = user._data.playList;
      const nameList = [];
      for (let key in playlist) {
        nameList.push(key);
        console.log(key);
      }
      setPlayListTitle(nameList);
      setModalShow(true);
      setAddSongInPlayList(selectedSong.current);
    } catch (err) {
      console.log(err, '');
    }
  };
  //update
  const updatePlayList = async playlist => {
    console.log(playlist);
    try {
      const user = await firestore()
        .collection(Collections.Users)
        .doc(useremail)
        .get();
      const obj = user._data.playList;
      console.log(obj);
      console.log(playListTitle, 'check 2');
      console.log(obj.myPlaylist, 'check 2');
      console.log(obj[playlist], 'check 1');
      console.log(obj[playlist].push(addSongInPlayList));
      await firestore().collection(Collections.Users).doc(useremail).update({
        playList: obj,
      });
      setModalShow(false);
    } catch (err) {
      console.log(err, 'add to play list');
    }
  };
  //create new playlist
  const createNewPlayList = async () => {
    setshowInput(!showInput);
    if (playlistName.length) {
      try {
        const user = await firestore()
          .collection(Collections.Users)
          .doc(useremail)
          .get();
        const obj = user._data.playList;
        obj[playlistName] = [];
        console.log(obj);
        await firestore().collection(Collections.Users).doc(useremail).update({
          playList: obj,
        });
        createPlaylist(selectedSong.current);
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={songList}
        renderItem={({ item, index }) => (
          <CustomSongListItem
            onPlay={async () => {
              await TrackPlayer.skip(index);
              await TrackPlayer.play();
            }}
            onPause={() => TrackPlayer.pause()}
            addFav={async () => await addFav(item.title)}
            addPlayList={() => {
              createPlaylist(item.title);
            }}
            title={item.title}
            lyrics={item.artist}
            src={{ uri: item.artwork }}
          />
        )}
      />

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalShow}
        style={styles2.modalContainer}
        onRequestClose={() => setModalShow(false)}
      >
        <View style={styles2.modalContent}>
          <Text
            style={{ alignSelf: 'flex-end' }}
            onPress={() => setModalShow(false)}
          >
            {Icons.Close}
          </Text>
          {showInput ? (
            <CustomInputFeild
              title={constent.NewPlayListName}
              setValues={txt => setPlaylistName(txt)}
            />
          ) : null}
          <View>
            <FlatList
              data={playListTitle}
              renderItem={({ item }) => (
                <Text
                  style={styles2.listItem}
                  onPress={() => updatePlayList(item)}
                >
                  {item}
                </Text>
              )}
            />
          </View>

          <CustomBtn
            title={constent.CreateNewPlayList}
            onPress={() => {
              createNewPlayList();
            }}
          />
        </View>
      </Modal>
    </View>
  );
};
export default SongListScreen;
const styles2 = StyleSheet.create({
  modalContainer: {
    height: hp('100%'),
    width: wp('100%'),
    marginTop: '400',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    width: wp('80%'),
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#16274a',
    padding: hp('2%'),
    display: 'flex',
  },
  listItem: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 8,
    marginBottom: 8,
  },
});
