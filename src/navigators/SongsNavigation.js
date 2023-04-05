import React from 'react';
import { View, Text } from 'react-native';
import { SongListScreen, FavSong, PlayList } from '../screens';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CustomBtn from '../components/CustomBtn/CustomBtn';
import CustomHeader from '../components/CustomHeader/CustomHeader';

const Tab = createMaterialTopTabNavigator();
const SongsNavigation = ({ navigation }) => {
  return (
    <>
      <CustomHeader title="Profile" />
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 18, color: '#fff', fontWeight: '700' },
          tabBarStyle: { backgroundColor: '#16274a' },
        }}
      >
        <Tab.Screen name="Lastest Song" component={SongListScreen} />
        <Tab.Screen name="Favourite Song" component={FavSong} />
        <Tab.Screen name="Play List" component={PlayList} />
      </Tab.Navigator>
    </>
  );
};
export default SongsNavigation;
