import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import {
  SignIn,
  SignUp,
  ProfileSongScreen,
  PlayListSongList,
} from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { navigationScreen } from '../shared/constent';
import SongsNavigation from './SongsNavigation';

const Stack = createStackNavigator();
const SpotifyNavigation = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <StatusBar />
        <Stack.Navigator screenOptions={{ headerShown: false, lazy: true }}>
          <Stack.Screen
            name={navigationScreen.SignUpScreen}
            component={SignUp}
          />
          <Stack.Screen
            name={navigationScreen.SignInScreen}
            component={SignIn}
          />

          <Stack.Screen
            name={navigationScreen.SongsNavigation}
            component={SongsNavigation}
          />
          <Stack.Screen
            name={navigationScreen.PlayListSongScreen}
            component={PlayListSongList}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
export default SpotifyNavigation;
