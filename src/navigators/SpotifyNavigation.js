import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { SignIn, SignUp, SongListScreen } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { navigationScreen } from '../shared/constent';
const Stack = createStackNavigator();
const SpotifyNavigation = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <StatusBar />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name={navigationScreen.SignUpScreen}
            component={SignUp}
          />
          <Stack.Screen
            name={navigationScreen.SignInScreen}
            component={SignIn}
          />
          <Stack.Screen
            name={navigationScreen.PlayListScreen}
            component={SongListScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
export default SpotifyNavigation;
