import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useUserStore } from '../../store/useUserStore';
import { Login } from '../../screens/Login';
import { TaskList } from '../../screens/TaskList';
import { AddTask } from '../../screens/AddTask';

const Stack = createNativeStackNavigator();

export const RootNavigation = () => {
  const user = useUserStore(state => state.user);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        {!user ? ( // ✅ Public Routes
          <Stack.Screen name="Login" component={Login} />
        ) : (
          <>
            {/* 🔒 Protected Routes */}
            <Stack.Screen name="TaskList" component={TaskList} />
            <Stack.Screen name="AddTask" component={AddTask} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
