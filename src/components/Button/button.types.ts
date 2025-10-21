import { PressableProps } from 'react-native';

export interface ButtonTypes extends PressableProps {
  size?: 'big' | 'medium';
  width?: 'full' | 'auto';
  isLoading?: boolean;
}
