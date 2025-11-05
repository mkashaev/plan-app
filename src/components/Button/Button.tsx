import React, { PropsWithChildren } from 'react';
import { Pressable, Text, ActivityIndicator } from 'react-native';
import { ButtonTypes } from './button.types';
import { s } from './styles';

export const Button: React.FC<PropsWithChildren<ButtonTypes>> = ({
  isLoading,
  children,
  size,
  width,
  ...rest
}) => {
  const pressableStyle = [
    s.pressable,
    width === 'full' && s.pressableFull,
    !size && s.pressableBig,
    size === 'big' && s.pressableBig,
    size === 'medium' && s.pressableMedium,
  ];

  const textStyle = [
    !size && s.textBig,
    size === 'big' && s.textBig,
    size === 'medium' && s.textMedium,
  ];

  return (
    <Pressable {...rest} style={pressableStyle}>
      {isLoading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={textStyle}>{children}</Text>
      )}
    </Pressable>
  );
};
