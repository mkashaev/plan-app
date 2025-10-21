import { View, Text, StyleSheet } from 'react-native';
import { Checkbox } from 'expo-checkbox';
import { theme } from '../../../../utils/theme';
import { useState } from 'react';
import { Task } from '../../../../store/useTaskStore';

type Props = {
  data: Task;
};

export const TaskCard = ({ data }: Props) => {
  const [value, setValue] = useState(data.completed);
  return (
    <View style={s.container}>
      <Checkbox
        value={value}
        style={[s.checkbox]}
        color={value ? theme.color.primary.purple : undefined}
        onValueChange={() => setValue(prev => !prev)}
      />
      <Text style={s.text}>{data.title}</Text>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.color.base.white,
    padding: theme.spacing(2),
    borderRadius: 8,
    marginBottom: theme.spacing(2),
  },

  checkbox: {
    marginRight: theme.spacing(1),
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#484C5333',
  },

  text: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
