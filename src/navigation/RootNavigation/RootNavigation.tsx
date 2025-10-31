import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useUserStore } from '../../store/useUserStore';
import { Login } from '../../screens/Login';
import { AddTask } from '../../screens/AddTask';
import { EditTask } from '../../screens/EditTask';
import { BottomTabNavigator } from '../BottomTabNavigator';

const Stack = createNativeStackNavigator();

export const RootNavigation = () => {
  const user = useUserStore(state => state.user);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        {!user ? (
          <Stack.Screen name="Login" component={Login} />
        ) : (
          <>
            <Stack.Screen name="MainTabs" component={BottomTabNavigator} />
            <Stack.Screen name="AddTask" component={AddTask} />
            <Stack.Screen name="EditTask" component={EditTask} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
