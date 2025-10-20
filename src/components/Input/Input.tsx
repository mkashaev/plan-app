import React from 'react';
import { View, TextInput, TextInputProps, Text } from 'react-native';
import { styles } from './input.styles';

interface InputProps extends TextInputProps {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ label, style, ...props }) => {
  return (
    <View style={styles.wrapper}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.container}>
        <TextInput {...props} style={[styles.input, style]} />
      </View>
    </View>
  );
};
