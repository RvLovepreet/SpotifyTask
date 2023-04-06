import React, { useEffect, useState } from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { View, Text, Modal, FlatList } from 'react-native';
import { CustomBtn, CustomInputFeild } from '../../components';
import { Icons } from '../../shared/constent';
import { navigationScreen } from '../../shared/constent';
import { styles } from '../style';
import { useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ModalForCreatList from './utils/ModalForCreatList';
const PlayList = ({ navigation }) => {
  const [myPlayListName, setMyPlayListName] = useState([]);
  const playlist = useSelector(data => data.user.playList);
  const [modalShow, setModalShow] = useState(false);
  const [playlistName, setPlaylistName] = useState('');
  console.log(playlist);

  useEffect(() => {
    setList();
  }, []);
  const nameList = [];
  const setList = () => {
    for (let key in playlist) {
      nameList.push(key);
      console.log(key);
      console.log(playlist[key]);
    }
    console.log(nameList, 'chekc 1');
    setMyPlayListName(nameList);
  };
  console.log(myPlayListName, 'chekc edsf');
  return (
    <View style={styles.container}>
      <Text>PlayList</Text>
      {/*  <ModalForCreatList
        modalShow={modalShow}
        setModalShow={setModalShow}
        setPlaylistName={setPlaylistName}
      /> */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalShow}
        style={{
          height: hp('100%'),
          width: wp('100%'),
          marginTop: '400',
          borderWidth: 1,
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onRequestClose={() => setModalShow(false)}
      >
        <View
          style={{
            width: wp('80%'),
            alignSelf: 'center',
            borderWidth: 1,
            backgroundColor: '#16274a',
            padding: hp('2%'),
            display: 'flex',
          }}
        >
          <Text
            style={{ alignSelf: 'flex-end' }}
            onPress={() => setModalShow(false)}
          >
            {Icons.Close}
          </Text>
          <View>
            <CustomInputFeild
              title="Playlist Name"
              setValues={txt => {
                setPlaylistName(txt);
              }}
              required
            />
          </View>
          <View>
            <CustomBtn
              title="create PlayList"
              onPress={() => setModalShow(false)}
            />
          </View>
        </View>
      </Modal>

      <CustomBtn title="create PlayList" onPress={() => setModalShow(true)} />
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
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <Text onPress={() => console.log(myPlayListName)}>hello 1</Text>
    </View>
  );
};
export default PlayList;
