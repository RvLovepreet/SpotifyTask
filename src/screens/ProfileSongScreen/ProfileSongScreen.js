import React from 'react';
import { View, Text } from 'react-native';
import { CustomHeader } from '../../components';
import SongsNavigation from '../../navigators/SongsNavigation';
const ProfileSongScreen = () => {
  return (
    <>
      <View>
        <CustomHeader title="Profile" />
        {/* <SongsNavigation /> */}
      </View>
    </>
  );
};
export default ProfileSongScreen;
