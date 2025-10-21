import { Pressable, StyleSheet, Text } from 'react-native';
import { theme } from '../../../../utils/theme';

type Props = {
  isActive?: boolean;
  children?: string;
  onPress?: () => void;
};

export const TabButton = ({ children, isActive, onPress }: Props) => {
  return (
    <Pressable
      style={[
        s.base.container,
        isActive && s.active.wrapper,
        !isActive && s.default.wrapper,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          s.base.label,
          isActive && s.active.text,
          !isActive && s.default.text,
        ]}
      >
        {children}
      </Text>
    </Pressable>
  );
};

const s = {
  base: StyleSheet.create({
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
  }),

  active: StyleSheet.create({
    wrapper: {
      backgroundColor: theme.color.primary.purple,
    },
    text: {
      color: theme.color.base.white,
      fontSize: 12,
      fontWeight: 'bold',
    },
  }),

  default: StyleSheet.create({
    wrapper: {
      backgroundColor: theme.color.base.white,
    },
    text: {
      color: theme.color.base.black,
      fontSize: 12,
      fontWeight: 'bold',
    },
  }),
};
