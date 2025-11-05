import { StyleSheet } from 'react-native';
import { theme } from '../../utils/theme';

export const s = StyleSheet.create({
  pressable: {
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.color.primary.yellow,
  },

  pressableFull: {
    width: '100%',
  },

  pressableBig: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    height: 50,
  },

  pressableMedium: {
    paddingVertical: 11,
    paddingHorizontal: 18,
    height: 36,
  },

  textBig: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.color.base.black,
  },

  textMedium: {
    fontSize: 12,
    fontWeight: 'bold',
    color: theme.color.base.black,
  },
});
