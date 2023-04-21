import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  Modal,
  StyleSheet,
  InteractionManager,
} from 'react-native';
import { CustomBtn, CustomInputFeild } from '../../components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { AppKilledPlaybackBehavior } from 'react-native-track-player';
import { Icons } from '../../shared/constent';
import { CustomSongListItem, Loader } from '../../components';
import { Collections, constent, color } from '../../shared/constent';
import TrackPlayer, { Capability } from 'react-native-track-player';
import firestore from '@react-native-firebase/firestore';
import { styles } from '../style';
import { useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import { playSong } from '../../shared/sharedFunction/addHistory';
import { getSong } from '../../store/songSlice/songSlice';
import { useDispatch } from 'react-redux';
const SongListScreen = ({ navigation }) => {
  const [songList, setSongList] = useState([]);
  const selectedSong = useRef();
  const [modalShow, setModalShow] = useState(false);
  const [showInput, setshowInput] = useState(false);
  const [playlistName, setPlaylistName] = useState('');
  const [playListTitle, setPlayListTitle] = useState();
  const [showActive, setShowActive] = useState(false);
  const [addSongInPlayList, setAddSongInPlayList] = useState();
  const useremail = useSelector(data => data.userSlice.email);

  const dispatch = useDispatch();
  useEffect(() => {
    setUpPlayer();
  }, []);

  useFocusEffect(
    useCallback(() => {
      const task = InteractionManager.runAfterInteractions(() => {
        setList();
      });
      return () => task.cancel();
    }, []),
  );
  const setList = async () => {
    try {
      setShowActive(true);
      const song = await getSongList();
      setSongList(song);
      await TrackPlayer.reset();
      await TrackPlayer.add(song);
    } catch (er) {
      console.log(er);
    } finally {
      setShowActive(false);
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
      console.log('lastest initail song list');
      await TrackPlayer.setupPlayer();
      await TrackPlayer.updateOptions({
        // Media controls capabilities
        android: {
          // This is the default behavior
          appKilledPlaybackBehavior:
            AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
        },
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

      await TrackPlayer.add([list]);
    } catch (err) {
      console.log(err);
    }
  };

  const getSongList = async () => {
    try {
      const songInfo = await firestore().collection(Collections.SongList).get();
      const songs = songInfo._docs;
      const list1 = songs.map(ele => ele._data);
      const normalSong = list1.filter(ele => !ele.price);
      dispatch(getSong(list1));
      return normalSong;
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
      const nameList = Object.keys(playlist);
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
      obj[playlist].push(addSongInPlayList);
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
      {showActive ? (
        <Loader show={showActive} />
      ) : (
        <FlatList
          data={songList}
          renderItem={({ item, index }) => (
            <CustomSongListItem
              onPlay={() => {
                playSong(Collections.Users, useremail, item.title, index);
              }}
              onPause={() => TrackPlayer.pause()}
              addFav={async () => await addFav(item.title)}
              addPlayList={() => {
                createPlaylist(item.title);
              }}
              addPausebtn={async () => {
                const trackIndex = await TrackPlayer.getCurrentTrack();
                const track = await TrackPlayer.getTrack(trackIndex);
              }}
              title={item.title}
              lyrics={item.artist}
              src={{ uri: item.artwork }}
            />
          )}
        />
      )}
      {/*   <ModalForCreatList
        modalShow={modalShow}
        closeModal={() => setModalShow(false)}
      /> */}

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
              visibility={true}
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
    borderColor: '#111',
    backgroundColor: '#fff',
    padding: hp('2%'),
    display: 'flex',
  },
  listItem: {
    color: '#111',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 8,
    marginBottom: 8,
  },
});
