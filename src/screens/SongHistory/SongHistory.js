import React, { useState, useCallback } from 'react';
import { View, FlatList } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import { CustomSongListItem } from '../../components';
import { useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import { getFilterSongs } from '../../shared/sharedFunction/filterSong';
import { constent } from '../../shared/constent';
const SongHistory = ({ navigation }) => {
  const userEmail = useSelector(data => data.user.email);
  const songs = useSelector(data => data.songs);
  const [histroyList, setHistoryList] = useState();
  useFocusEffect(
    useCallback(() => {
      getHistory();
    }, []),
  );
  const getHistory = async () => {
    try {
      const list = await getFilterSongs(userEmail, songs, constent.History);
      setHistoryList(list);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View>
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
    </View>
  );
};
export default SongHistory;
