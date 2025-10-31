import { enableScreens } from 'react-native-screens';

enableScreens();

import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { RootNavigation } from './navigation/RootNavigation';

function AppContent() {
  return <RootNavigation />;
}

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" />
      <AppContent />
    </SafeAreaProvider>
  );
}

export default App;
