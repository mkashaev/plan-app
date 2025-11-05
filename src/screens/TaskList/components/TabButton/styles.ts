import { StyleSheet } from 'react-native';
import { theme } from '../../../../utils/theme';

export const s = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 9,
    paddingHorizontal: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
  },

  activeWrapper: {
    backgroundColor: theme.color.primary.purple,
  },

  activeText: {
    color: theme.color.base.white,
    fontSize: 12,
    fontWeight: 'bold',
  },

  defaultWrapper: {
    backgroundColor: theme.color.base.white,
  },

  defaultText: {
    color: theme.color.base.black,
    fontSize: 12,
    fontWeight: 'bold',
  },
});
