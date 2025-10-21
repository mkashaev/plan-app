import React from 'react';
import {
  View,
  TextInput,
  TextInputProps,
  Text,
  StyleSheet,
} from 'react-native';
import { theme } from '../../utils/theme';

interface IProps extends TextInputProps {
  theme?: 'light' | 'dark';
  label?: string;
}

export const Input = ({ label, style, ...props }: IProps) => {
  return (
    <View style={styles.wrapper}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.container}>
        <TextInput {...props} style={[styles.input, style]} />
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },

  label: {
    color: theme.color.base.white,
    fontSize: 14,
    fontWeight: 400,
    marginBottom: 2,
  },

  container: {
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
});
