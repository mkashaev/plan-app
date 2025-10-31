import Reactotron from 'reactotron-react-native';

declare global {
  interface Console {
    tron: typeof Reactotron;
  }
}

// Make Reactotron available globally in development
if (__DEV__) {
  console.tron = Reactotron;
}

export {};
