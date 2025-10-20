import { StyleSheet } from 'react-native';
import { theme } from '../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    borderRadius: 8,
    // backgroundColor: '#2ed470',
    backgroundColor: theme.color.primary.yellow,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: theme.color.base.black,
    fontSize: 18,
    fontWeight: '600',
  },
});
