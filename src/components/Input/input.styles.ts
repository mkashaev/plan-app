import { StyleSheet } from 'react-native';
import { theme } from '../../utils/theme';

export const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  container: {
    // width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#8f8f8f',
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 6,
  },
  input: {
    fontSize: 18,
    color: theme.color.base.white,
  },
  label: {
    color: theme.color.base.white,
    fontSize: 14,
    fontWeight: 400,
    marginBottom: 2,
  },
});
