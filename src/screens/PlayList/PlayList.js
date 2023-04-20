import React, { useState, useCallback } from 'react';
import firestore from '@react-native-firebase/firestore';
import { useFocusEffect } from '@react-navigation/native';
import { Collections } from '../../shared/constent';
import { View, FlatList } from 'react-native';
import { navigationScreen } from '../../shared/constent';
import { styles } from '../style';
import { useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CustomListItem } from '../../components';
const PlayList = ({ navigation }) => {
  const [myPlayListName, setMyPlayListName] = useState([]);
  const useremail = useSelector(data => data.userSlice.email);
  useFocusEffect(
    useCallback(() => {
      playListName();
    }, []),
  );
  const playListName = async () => {
    try {
      const user = await firestore()
        .collection(Collections.Users)
        .doc(useremail)
        .get();
      const playlist = user._data.playList;
      const nameList = Object.keys(playlist);
      setMyPlayListName(nameList);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={myPlayListName}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(navigationScreen.PlayListSongScreen, {
                  item: item,
                })
              }
            >
              <CustomListItem title={item} />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};
export default PlayList;
