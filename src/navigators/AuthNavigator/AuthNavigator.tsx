import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';
import { Routes } from '../routes';
import { Login } from '../../screens/Login';

const RegisterScreen = () => {
  return <Text>Register Screen</Text>;
};

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

const Stack = createNativeStackNavigator();

export const AuthNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.LOGIN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        options={{ title: 'LOGIN' }}
        name={Routes.LOGIN}
        component={Login}
      />
      <Stack.Screen
        options={{ title: 'REGISTER' }}
        name={Routes.REGISTER}
        component={RegisterScreen}
      />
    </Stack.Navigator>
  );
};
