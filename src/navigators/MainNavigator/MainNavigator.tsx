import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
// import { HomeScreen } from '../../screens/HomeScreen';
// import { ProfileScreen } from '../../screens/ProfileScreen';

const HomeScreen = () => {
  return <Text>Home Screen</Text>;
};

const ProfileScreen = () => {
  return <Text>Profile Screen</Text>;
};

export type MainTabParamList = {
  Home: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList>();

export const MainNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
