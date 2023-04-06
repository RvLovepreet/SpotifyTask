import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import { CustomBtn, CustomInputFeild } from '../../../components';
const ModalForCreatList = (modalShow, setModalShow, setPlaylistName) => {
  console.log(modalShow);
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalShow}
      style={{
        height: '100%',
        width: '100%',
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
          alignSelf: 'center',
          borderWidth: 1,
        }}
      >
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
        <Text>close</Text>
      </View>
    </Modal>
  );
};
export default ModalForCreatList;
