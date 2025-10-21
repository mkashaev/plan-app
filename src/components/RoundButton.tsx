import { Pressable, StyleSheet } from 'react-native';

type Props = {
  children?: React.ReactNode;
  onPress?: () => void;
};

export const RoundButton = ({ children, onPress }: Props) => {
  return (
    <Pressable style={s.button} onPress={onPress}>
      {children}
    </Pressable>
  );
};

const s = StyleSheet.create({
  button: {
    width: 32,
    height: 32,
    borderRadius: 28,
    backgroundColor: '#F8FAFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
