import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const Generator = () => {
  const safeAreaInsets = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: safeAreaInsets.top }}>
      <Text>Generator Screen</Text>
    </View>
  );
};
