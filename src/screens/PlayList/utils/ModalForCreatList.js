import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import { CustomBtn, CustomInputFeild } from '../../../components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const ModalForCreatList = (
  modalShow,
  setModalShow,
  setPlaylistName,
  closeModal,
) => {
  console.log(closeModal, 'chekkcka2');
  return (
    <>
      <Modal
        animationType="fade"
        transparent={false}
        visible={modalShow}
        onRequestClose={closeModal}
        style={styles2.modalContainer}
      >
        <View style={styles2.modalContent}>
          <Text style={{ alignSelf: 'flex-end' }} onPress={setModalShow}>
            Close
          </Text>
        </View>
      </Modal>
    </>
  );
};
export default ModalForCreatList;
const styles2 = StyleSheet.create({
  modalContainer: {
    height: hp('100%'),
    width: wp('100%'),
    marginTop: '400',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    width: wp('80%'),
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#111',
    backgroundColor: '#fff',
    padding: hp('2%'),
    display: 'flex',
  },
  listItem: {
    color: '#111',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 8,
    marginBottom: 8,
  },
});
