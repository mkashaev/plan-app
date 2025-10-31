import Reactotron from 'reactotron-react-native';
import { Platform } from 'react-native';

const reactotron = Reactotron.configure({
  name: 'PlanApp',
  // For iOS Simulator, use localhost
  // For Android Emulator, use 10.0.2.2
  // For physical device, use your computer's IP address
  host: Platform.OS === 'ios' ? 'localhost' : '10.0.2.2',
})
  .useReactNative({
    asyncStorage: false, // Set to true if you use AsyncStorage
    networking: {
      ignoreUrls: /symbolicate/,
    },
    editor: false,
    errors: { veto: () => false },
    overlay: false,
  })
  .connect();

// Make Reactotron available globally via console.tron
if (__DEV__) {
  console.tron = reactotron;
}

export default reactotron;
