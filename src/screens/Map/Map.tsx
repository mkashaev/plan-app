import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const Map = () => {
  const safeAreaInsets = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: safeAreaInsets.top }}>
      <Text>Map Screen</Text>
    </View>
  );
};
