import React, { PropsWithChildren } from 'react';
import { Pressable, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { ButtonTypes } from './button.types';
import { theme } from '../../utils/theme';

export const Button: React.FC<PropsWithChildren<ButtonTypes>> = ({
  isLoading,
  children,
  size,
  width,
  ...rest
}) => {
  return (
    <Pressable
      {...rest}
      style={[
        s.wrapper.base,
        width === 'full' && s.wrapper.full,
        !size && s.wrapper.big,
        size === 'big' && s.wrapper.big,
        size === 'medium' && s.wrapper.medium,
      ]}
    >
      {isLoading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text
          style={[
            !size && s.text.big,
            size === 'big' && s.text.big,
            size === 'medium' && s.text.medium,
          ]}
        >
          {children}
        </Text>
      )}
    </Pressable>
  );
};

export const s = {
  wrapper: StyleSheet.create({
    base: {
      borderRadius: 8,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.color.primary.yellow,
    },
    full: {
      width: '100%',
    },
    big: {
      paddingVertical: 14,
      paddingHorizontal: 24,
      height: 50,
    },
    medium: {
      paddingVertical: 11,
      paddingHorizontal: 18,
      height: 36,
    },
  }),

  text: StyleSheet.create({
    big: {
      fontSize: 18,
      fontWeight: '600',
      color: theme.color.base.black,
    },

    medium: {
      fontSize: 12,
      fontWeight: 'bold',
      color: theme.color.base.black,
    },
  }),
};
