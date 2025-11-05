import { Task, useTaskStore } from '../../store/useTaskStore';
import { useNavigation } from '@react-navigation/native';
import { TaskEditor } from '../../features/TaskEditor';

export const AddTask = () => {
  const addTask = useTaskStore(state => state.addTask);
  const navigation = useNavigation();

  const onSaveTask = (data: Task) => {
    addTask(data);
    navigation.goBack();
  };

  const onBack = () => {
    navigation.goBack();
  };

  const onAddPhoto = () => {
    console.log('Add Photo');
  };

  return (
    <TaskEditor onSave={onSaveTask} onBack={onBack} onAddPhoto={onAddPhoto} />
  );
};
