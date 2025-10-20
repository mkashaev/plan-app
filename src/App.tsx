/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { enableScreens } from 'react-native-screens';

enableScreens();

import { StyleSheet, View } from 'react-native';
import {
  EdgeInsets,
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
// import { RootNavigator } from './navigators/RootNavigator';

// const getSafeArea = (safeAreaInsets: EdgeInsets) => {
//   return {
//     paddingTop: safeAreaInsets.top,
//     paddingBottom: safeAreaInsets.bottom,
//     paddingLeft: safeAreaInsets.left,
//     paddingRight: safeAreaInsets.right,
//   };
// };

function AppContent() {
  // const safeAreaInsets = useSafeAreaInsets();

  return (
    <View>
      <View>Hello world</View>
    </View>
  );
}

function App() {
  return (
    <SafeAreaProvider>
      <AppContent />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
