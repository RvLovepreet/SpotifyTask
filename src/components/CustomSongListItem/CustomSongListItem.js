import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Icons, color } from '../../shared/constent';
const CustomSongListItem = ({
  title,
  lyrics,
  src,
  onPlay = () => {},
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
              <TouchableOpacity onPress={onPlay}>
                <Text style={styles.funBtn}>Play</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onPause}>
                <Text style={styles.funBtn}>pause</Text>
              </TouchableOpacity>
              {addFav ? (
                <TouchableOpacity onPress={addFav}>
                  <Text style={styles.funBtn}>Add Fav</Text>
                </TouchableOpacity>
              ) : null}
              {removeFav ? (
                <TouchableOpacity onPress={removeFav}>
                  <Text style={styles.funBtn}>remove Fav</Text>
                </TouchableOpacity>
              ) : null}
              {addPlayList ? (
                <TouchableOpacity onPress={addPlayList}>
                  <Text style={styles.funBtn}>add playlist</Text>
                </TouchableOpacity>
              ) : null}
              {removeSongPlayList ? (
                <TouchableOpacity onPress={removeSongPlayList}>
                  <Text style={styles.funBtn}>Remove song</Text>
                </TouchableOpacity>
              ) : null}
            </Text>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            {/*          <Text style={{ alignSelf: 'center' }}>{Icons.FilledHeart}</Text>
            <Text style={{ alignSelf: 'center' }}>{Icons.Add}</Text> */}
            {/*      <Text style={{ alignSelf: 'center' }}>{Icons.Pause}</Text> */}
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
  SongTitle: { color: '#111', fontSize: hp('2.5%'), fontWeight: '800' },
  Lyrics: { color: '#111', fontSize: hp('2%'), fontWeight: '400' },
  funBtn: {
    marginLeft: wp('1%'),
    color: color.firstColor,
    fontSize: hp('2%'),
  },
});
