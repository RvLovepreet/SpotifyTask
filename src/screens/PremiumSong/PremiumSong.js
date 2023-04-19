import React, { useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { CustomSongListItem } from '../../components';
const PremiumSongs = () => {
  const songs = useSelector(data => data.songs);
  const [premiumSong, setPremiumSong] = useState(
    songs.filter(ele => ele.price),
  );

  return (
    <View>
      <FlatList
        data={premiumSong}
        renderItem={({ item, index }) => (
          <CustomSongListItem
            title={item.title}
            lyrics={item.artist}
            src={{ uri: item.artwork }}
            price={item.price}
          />
        )}
      />
    </View>
  );
};
export default PremiumSongs;
