import React from 'react';
import { View, Text } from 'react-native';
import { SongListScreen, FavSong, PlayList, SongHistory } from '../screens';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CustomBtn from '../components/CustomBtn/CustomBtn';
import CustomHeader from '../components/CustomHeader/CustomHeader';
import { constent, Icons, navigationScreen } from '../shared/constent';
const Tab = createMaterialTopTabNavigator();
const SongsNavigation = ({ navigation }) => {
  const setIcons = (route, color) => {
    let iconname;
    switch (route.name) {
      case 'Songs':
        return Icons.Back;

      default:
        break;
    }
  };
  return (
    <>
      <CustomHeader title="Profile" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarLabelStyle: {
            fontSize: 14,
            color: '#fff',
            fontWeight: '700',
          },
          tabBarStyle: { backgroundColor: '#2960d6' },
          /*   tabBarIcon: ({ color }) => setIcons(route, color), */
        })}
      >
        <Tab.Screen name={navigationScreen.Songs} component={SongListScreen} />
        <Tab.Screen name={navigationScreen.MyFav} component={FavSong} />
        <Tab.Screen name={navigationScreen.PlayList} component={PlayList} />
        <Tab.Screen name={navigationScreen.History} component={SongHistory} />
      </Tab.Navigator>
    </>
  );
};
export default SongsNavigation;
