import { enableScreens } from 'react-native-screens';

enableScreens();

import { StatusBar, StyleSheet, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { getSafeArea } from './utils/getSafeArea';
import { theme } from './utils/theme';
import { RootNavigation } from './navigation/RootNavigation';

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View style={[styles.container, getSafeArea(safeAreaInsets)]}>
      <RootNavigation />
    </View>
  );
}

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" />
      <AppContent />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.primary.purple,
  },
});

export default App;
