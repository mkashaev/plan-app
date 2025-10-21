import { Pressable, Text, TextInput, View } from 'react-native';
import { Button } from '../../components';
import { useState } from 'react';
import { useTaskStore } from '../../store/useTaskStore';
import { useNavigation } from '@react-navigation/native';

export const AddTask = () => {
  const navigation = useNavigation();
  const addTask = useTaskStore(state => state.addTask);
  const [title, setTitle] = useState('');

  const onSubmit = () => {
    addTask({ id: Date.now().toString(), title, completed: false });
    setTitle('');
  };

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <View>
      <Pressable onPress={onBack}>
        <Text>Go Back</Text>
      </Pressable>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Task title"
      />

      <Button onPress={onSubmit}>Add Task</Button>
    </View>
  );
};
