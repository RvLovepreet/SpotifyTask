import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { CustomHeader, CustomSongListItem } from '../../components';
import { constent, ImageSource } from '../../shared/constent';
import { AudioPlayer } from 'react-native-simple-audio-player';
import TrackPlayer ,{Capability} from 'react-native-track-player';
import firestore from '@react-native-firebase/firestore';
import { styles } from '../style';

const SongListScreen = ({ navigation }) => {
  const [songList , setSongList] = useState();
  useEffect(() => {
    getSongList();
    setupPlayer();
    /* return () => TrackPlayer.destroy(); */
  }, []);
  const getSongList =() => {
    firestore()
    .collection('songList')
    .get().then(snapshot => console.log(snapshot.data()))

  }
 
  const setupPlayer = async () => {
  try {
    console.log('check 1')
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
      compactCapabilities: [Capability.Play, Capability.Pause],
  
      // Icons for the notification on Android (if you don't like the default ones)
   
  });
  await TrackPlayer.add(songList)
  }catch(e){console.log(e)}
  };
 
  return (
    <>
      <View style={styles.container}>
        <CustomHeader title="SongList" />
        <View style={styles.containerContent}>
          <TouchableOpacity onPress={ () => { 
            try{
              console.log('play song')
              TrackPlayer.play()
              console.log('play song2')
            }catch(er) {
              console.log(er)
            }
          }
            }>
            <Text>Play</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() =>{
             TrackPlayer.pause()
 
          }
           }>
            <Text>Play</Text>
          </TouchableOpacity>
          <CustomSongListItem
            title="Rutba"
            lyrics="Satinder Sartaj"
            src={ImageSource.SongImg1}
          />
        </View>
        <Text onPress={() => navigation.goBack()}>SongListScreen</Text>
      </View>
    </>
  );
};
export default SongListScreen;
