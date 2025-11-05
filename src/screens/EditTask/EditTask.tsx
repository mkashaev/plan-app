import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { Task, useTaskStore } from '../../store/useTaskStore';
import { TaskEditor } from '../../features/TaskEditor';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootNavigation/types';

type Params = {
  id: string;
};

type EditTaskNavigationProp = StackNavigationProp<
  RootStackParamList,
  'EditTask'
>;
type EditTaskRouteProp = RouteProp<{ EditTask: Params }, 'EditTask'>;

export const EditTask = () => {
  const navigate = useNavigation<EditTaskNavigationProp>();
  const route = useRoute<EditTaskRouteProp>();
  const { id } = route.params;
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
