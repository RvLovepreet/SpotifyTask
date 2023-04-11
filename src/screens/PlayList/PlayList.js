import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { Collections } from '../../shared/constent';
import { View, Text, FlatList } from 'react-native';
import { navigationScreen } from '../../shared/constent';
import { styles } from '../style';
import { useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CustomListItem } from '../../components';
const PlayList = ({ navigation }) => {
  const [myPlayListName, setMyPlayListName] = useState([]);
  const useremail = useSelector(data => data.user.email);
  /*   useEffect(() => {
  /*   console.log('initial useEffect in Play List');
    playListName();
  }, []); */
  useEffect(() => {
    const addlist = navigation.addListener('focus', () => {
      console.log('hello am dfasa');
      playListName();
    });
    return addlist;
  }, [navigation]);

  const playListName = async () => {
    try {
      const user = await firestore()
        .collection(Collections.Users)
        .doc(useremail)
        .get();
      const playlist = user._data.playList;
      const nameList = [];
      for (let key in playlist) {
        nameList.push(key);
        console.log(key);
      }
      setMyPlayListName(nameList);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View style={styles.container}>
      <View>
        {/*    <Text onPress={() => console.log(myPlayListName)}>hello</Text> */}
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
