import React, { useState, useCallback } from 'react';
import { View, FlatList } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import { CustomSongListItem, Loader } from '../../components';
import { useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import { getFilterSongs } from '../../shared/sharedFunction/filterSong';
import { constent } from '../../shared/constent';
import { styles } from '../style';
const SongHistory = ({ navigation }) => {
  const userEmail = useSelector(data => data.userSlice.email);
  const songs = useSelector(data => data.songSlice);
  const [histroyList, setHistoryList] = useState();
  const [showLoader, setShowLoader] = useState(false);
  useFocusEffect(
    useCallback(() => {
      getHistory();
    }, []),
  );
  const getHistory = async () => {
    try {
      setShowLoader(true);
      const list = await getFilterSongs(userEmail, songs, constent.History);
      setHistoryList(list);
    } catch (err) {
      console.log(err);
    } finally {
      setShowLoader(false);
    }
  };
  return (
    <View style={styles.container}>
      {showLoader ? (
        <Loader show={showLoader} />
      ) : (
        <FlatList
          data={histroyList}
          renderItem={({ item, index }) => (
            <CustomSongListItem
              onPlay={async () => {
                await TrackPlayer.skip(index);
                await TrackPlayer.play();
              }}
              onPause={() => TrackPlayer.pause()}
              title={item.title}
              lyrics={item.artist}
              src={{ uri: item.artwork }}
            />
          )}
        />
      )}
    </View>
  );
};
export default SongHistory;
