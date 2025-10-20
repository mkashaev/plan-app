import { StyleSheet } from 'react-native';
import { theme } from '../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    paddingHorizontal: 16,
    backgroundColor: theme.color.primary.purple,
  },

  title: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 32,
    color: theme.color.base.white,
  },

  input: {
    marginBottom: 16,
  },
});
