import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Icons } from '../../shared/constent';
const CustomSongListItem = ({
  title,
  lyrics,
  src,
  onPlay,
  onPause,
  addFav,
  removeFav,
  addPlayList,
  removeSongPlayList,
}) => {
  return (
    <>
      <TouchableOpacity>
        <View style={styles.SongListItemContainer}>
          <Image style={styles.SongImage} source={src} />
          <View style={styles.SongContent}>
            <Text style={styles.SongTitle}>{title}</Text>
            <Text style={styles.Lyrics}>{lyrics}</Text>
            <Text>
              <Text onPress={onPlay}>Play</Text>
              <Text onPress={onPause}>pause</Text>
              {addFav ? <Text onPress={addFav}>Add Fav</Text> : null}
              {removeFav ? <Text onPress={removeFav}>remove Fav</Text> : null}
              {addPlayList ? (
                <Text onPress={addPlayList}>add playlist</Text>
              ) : null}
              {removeSongPlayList ? (
                <Text onPress={removeSongPlayList}>Remove song</Text>
              ) : null}
            </Text>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Text style={{ alignSelf: 'center' }}>{Icons.FilledHeart}</Text>
            <Text style={{ alignSelf: 'center' }}>{Icons.Add}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};
export default CustomSongListItem;
const styles = StyleSheet.create({
  SongListItemContainer: {
    width: wp('96%'),
    height: hp('8%'),
    display: 'flex',
    flexDirection: 'row',
    marginTop: hp('1%'),
  },
  SongContent: { display: 'flex', paddingLeft: wp('2%') },
  SongImage: {
    width: wp('15%'),
    height: hp('8%'),
  },
  SongTitle: { color: '#fff', fontSize: hp('2.5%'), fontWeight: '800' },
  Lyrics: { color: '#fff', fontSize: hp('2%'), fontWeight: '400' },
});
