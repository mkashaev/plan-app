import { Pressable, Text } from 'react-native';
import { s } from './styles';

type Props = {
  isActive?: boolean;
  children?: string;
  onPress?: () => void;
};

export const TabButton = ({ children, isActive, onPress }: Props) => {
  const pressableStyles = [
    s.container,
    isActive && s.activeWrapper,
    !isActive && s.defaultWrapper,
  ];

  const textStyles = [
    s.label,
    isActive && s.activeText,
    !isActive && s.defaultText,
  ];
  return (
    <Pressable style={pressableStyles} onPress={onPress}>
      <Text style={textStyles}>{children}</Text>
    </Pressable>
  );
};
