import { useNavigation, useRoute } from '@react-navigation/native';
import { Task, useTaskStore } from '../../store/useTaskStore';
import { TaskEditor } from '../../features/TaskEditor';

type Params = {
  id: string;
};

export const EditTask = () => {
  const navigate = useNavigation();
  const route = useRoute();
  const { id } = route.params as Params;
  const task = useTaskStore(state => state.getById(id));
  const editTask = useTaskStore(state => state.editTask);
  const removeTask = useTaskStore(state => state.removeTask);

  const onBack = () => {
    navigate.goBack();
  };

  const onSave = (data: Task) => {
    editTask(id, data);
    navigate.goBack();
  };

  const onAddPhoto = () => {
    console.log('Add Photo');
  };

  const onDelete = () => {
    removeTask(id);
    navigate.goBack();
  };

  return (
    <TaskEditor
      data={task}
      onSave={onSave}
      onBack={onBack}
      onAddPhoto={onAddPhoto}
      onDelete={onDelete}
    />
  );
};
