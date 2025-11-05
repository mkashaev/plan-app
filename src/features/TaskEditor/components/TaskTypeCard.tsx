import { Pressable, StyleSheet, Text, View } from 'react-native';
import { theme } from '../../../utils/theme';
import Checkbox from 'expo-checkbox';
import { TaskType } from '../../../store/useTaskStore';

type Props = {
  light?: 'red' | 'yellow' | 'green';
  title: string;
  name?: string;
  value?: TaskType;
  onChange?: (value?: TaskType) => void;
};

export const TaskTypeCard = ({
  light = 'red',
  title,
  name,
  value,
  onChange,
}: Props) => {
  const onClick = () => {
    onChange?.(name as TaskType);
  };

  return (
    <Pressable style={s.container} onPress={onClick}>
      <View
        style={[
          s.lightCommon,
          light === 'red' && s.lightRed,
          light === 'yellow' && s.lightYello,
          light === 'green' && s.lightGreen,
        ]}
      />

      <View style={s.checkboxGroup}>
        <Checkbox
          value={value === name}
          style={s.checkbox}
          color={value ? theme.color.primary.purple : undefined}
          onValueChange={onClick}
        />
        <Text style={s.title}>{title}</Text>
      </View>
    </Pressable>
  );
};

const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
    height: 38,
    alignItems: 'center',
    backgroundColor: theme.color.base.white,
    borderRadius: 8,
  },

  lightCommon: {
    height: 26,
    width: 3,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
  },

  lightRed: {
    backgroundColor: '#DF7E8D',
  },
  lightYello: {
    backgroundColor: '#F8D94F',
  },
  lightGreen: {
    backgroundColor: '#77D4BD',
  },

  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },

  checkboxGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  checkbox: {
    marginRight: theme.spacing(1),
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#484C5333',
    backgroundColor: theme.color.base.white,
    height: 16,
    width: 16,
  },
});
