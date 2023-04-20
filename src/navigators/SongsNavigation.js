import React from 'react';
import { SongListScreen, FavSong, PlayList, SongHistory } from '../screens';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CustomHeader from '../components/CustomHeader/CustomHeader';
import { navigationScreen } from '../shared/constent';
import PremiumSongs from '../screens/PremiumSong/PremiumSong';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { removeuser } from '../store/userSlice/userSlice';
const Tab = createMaterialTopTabNavigator();
const SongsNavigation = ({ navigation }) => {
  const name = useSelector(data => data.userSlice.name);
  const dispatch = useDispatch();
  const logOutFun = () => {
    dispatch(removeuser(''));
    navigation.reset({
      index: 0,
      routes: [{ name: navigationScreen.SignInScreen }],
    });
  };
  return (
    <>
      <CustomHeader title={name} onbtnClick={() => logOutFun()} />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarLabelStyle: {
            fontSize: 14,
            color: '#fff',
            fontWeight: '700',
          },
          tabBarStyle: { backgroundColor: '#2960d6' },
        })}
      >
        <Tab.Screen name={navigationScreen.Songs} component={SongListScreen} />
        <Tab.Screen name={navigationScreen.MyFav} component={FavSong} />
        <Tab.Screen name={navigationScreen.PlayList} component={PlayList} />
        <Tab.Screen name={navigationScreen.History} component={SongHistory} />
        <Tab.Screen
          name={navigationScreen.PremiumSongs}
          component={PremiumSongs}
        />
      </Tab.Navigator>
    </>
  );
};
export default SongsNavigation;
