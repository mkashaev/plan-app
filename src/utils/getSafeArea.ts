import { EdgeInsets } from 'react-native-safe-area-context';

export const getSafeArea = (safeAreaInsets: EdgeInsets) => {
  return {
    paddingTop: safeAreaInsets.top,
    paddingBottom: safeAreaInsets.bottom,
    paddingLeft: safeAreaInsets.left,
    paddingRight: safeAreaInsets.right,
  };
};
