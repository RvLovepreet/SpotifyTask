import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const CustomSongListItem = ({ title, lyrics, src }) => {
  return (
    <>
      <TouchableOpacity>
        <View style={styles.SongListItemContainer}>
          <Image style={styles.SongImage} source={src} />
          <View style={styles.SongContent}>
            <Text style={styles.SongTitle}>{title}</Text>
            <Text style={styles.Lyrics}>{lyrics}</Text>
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
  SongContent: { paddingLeft: wp('2%') },
  SongImage: {
    width: wp('15%'),
    height: hp('8%'),
  },
  SongTitle: { color: '#fff', fontSize: hp('2.5%'), fontWeight: '800' },
  Lyrics: { color: '#fff', fontSize: hp('2%'), fontWeight: '400' },
});
