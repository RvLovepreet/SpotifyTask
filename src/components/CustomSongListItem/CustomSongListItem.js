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
  onPlay,
  onPause,
  addFav,
  removeFav,
  addPlayList,
  removeSongPlayList,
  price,
  curPlay,
}) => {
  console.log(curPlay, 'i am playing');
  return (
    <>
      <TouchableOpacity onPress={onPlay}>
        <View style={styles.SongListItemContainer}>
          <View style={styles.imgAndContent}>
            <Image style={styles.SongImage} source={src} />
            <View style={styles.SongContent}>
              <Text style={styles.SongTitle}>{title}</Text>
              <Text style={styles.Lyrics}>{lyrics}</Text>
              <Text>
                {onPlay ? (
                  <TouchableOpacity onPress={onPlay}>
                    <Text style={styles.funBtn}>Play</Text>
                  </TouchableOpacity>
                ) : null}
                {onPause ? (
                  <TouchableOpacity onPress={onPause}>
                    <Text style={styles.funBtn}>pause</Text>
                  </TouchableOpacity>
                ) : null}
                {addPlayList ? (
                  <TouchableOpacity onPress={addPlayList}>
                    <Text style={styles.funBtn}>add playlist</Text>
                  </TouchableOpacity>
                ) : null}
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

                {removeSongPlayList ? (
                  <TouchableOpacity onPress={removeSongPlayList}>
                    <Text style={styles.funBtn}>Remove song</Text>
                  </TouchableOpacity>
                ) : null}
              </Text>
            </View>
          </View>
          {curPlay ? <Text>i am Playing </Text> : null}
          {price ? (
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Text style={styles.funBtn}>
                {Icons.Dollar} {price}
              </Text>
            </View>
          ) : null}
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
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: hp('1%'),

    flexWrap: 'nowrap',
  },
  imgAndContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  SongImage: {
    width: wp('15%'),
    height: hp('8%'),
  },
  SongContent: {
    width: wp('70%'),
    paddingLeft: wp('2%'),
  },
  SongTitle: { color: '#111', fontSize: hp('2.5%'), fontWeight: '800' },
  Lyrics: { color: '#111', fontSize: hp('2%'), fontWeight: '400' },
  funBtn: {
    marginLeft: wp('1%'),
    color: color.firstColor,
    fontSize: hp('2%'),
  },
});
