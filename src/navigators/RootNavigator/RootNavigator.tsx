import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigator } from '../AuthNavigator';
// import { AuthNavigator } from './AuthNavigator';
// import { MainNavigator } from './MainNavigator';
// import { useUser } from '../store/user';

export const RootNavigator: React.FC = () => {
  // const user = null;
  return (
    <NavigationContainer>
      <AuthNavigator />
      {/* {user ? <MainNavigator /> : <AuthNavigator />} */}
    </NavigationContainer>
  );
};
