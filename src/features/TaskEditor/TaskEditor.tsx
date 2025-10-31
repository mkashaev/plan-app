import { Pressable, StyleSheet, Text, TextInput, useWindowDimensions, View } from 'react-native';
import { Button } from '../../components';
import { useState } from 'react';
import type { Task, TaskType } from '../../store/useTaskStore';
import { theme } from '../../utils/theme';
import TaskImagePlaceholder from '../../assets/TaskImagePlaceholder.svg';
import Checkbox from 'expo-checkbox';
import { TaskTypeCard } from './components/TaskTypeCard';
import { LeftArrowIcon } from '../../components/Icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const aspectRatio = 29 / 10;

type Props = {
  data?: Task;
  onSave?: (data: Task) => void;
  onAddPhoto?: () => void;
  onBack?: () => void;
  onDelete?: (id: string) => void;
};

export const TaskEditor = ({ data, onSave, onBack, onAddPhoto, onDelete }: Props) => {
  const safeAreaInsets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const isNewTask = !data;
  const screenTitle = isNewTask ? 'Add New Task' : 'Edit task';

  const [title, setTitle] = useState(() => {
    return data ? data.title : '';
  });
  const [isLocation, setIsLocation] = useState(!!data?.location);
  const [taskType, setTaskType] = useState<TaskType>(() => {
    return data?.type ? data.type : 'urgent';
  });

  const onSubmit = () => {
    if (!title) {
      return;
    }

    const newTask = {
      id: Date.now().toString(),
      title,
      completed: false,
      type: taskType,
      location: isLocation ? '393 Lewis Ave, Brooklyn, NY 11233' : undefined,
    };
    setTitle('');
    onSave?.(newTask);
  };

  const onChangeTaskType = (value?: TaskType) => {
    setTaskType(value as TaskType);
  };

  const handleDelete = () => {
    if (data?.id) {
      onDelete?.(data.id);
    }
  };

  return (
    <View style={s.container}>
      <View>
        <View style={{ backgroundColor: theme.color.base.white }}>
          <View style={[s.headerBase, { paddingTop: safeAreaInsets.top }]}>
            <View style={s.backWrapper}>
              <Pressable onPress={onBack}>
                <LeftArrowIcon />
              </Pressable>
            </View>

            <Text style={s.headerTitle}>{screenTitle}</Text>
            <View style={s.headerEmpty}>
              {!isNewTask && (
                <Pressable onPress={handleDelete}>
                  <Text style={s.deleteText}>Delete</Text>
                </Pressable>
              )}
            </View>
          </View>
        </View>

        <View style={s.imageContainer}>
          <TaskImagePlaceholder width={width} height={width / aspectRatio} />
          <View style={s.addPhotoButton}>
            <Button onPress={onAddPhoto} size="medium">
              + Add Photo
            </Button>
          </View>
        </View>

        <View style={s.formWrapper}>
          <View style={s.wrapper}>
            <Text style={s.label}>TaskName</Text>
            <View style={s.textInputWrapper}>
              <TextInput style={[s.input]} value={title} onChangeText={setTitle} />
            </View>
          </View>

          <Pressable style={s.locationWrapper} onPress={() => setIsLocation((prev) => !prev)}>
            <Checkbox
              value={isLocation}
              style={[s.checkbox]}
              color={isLocation ? theme.color.primary.purple : undefined}
              onValueChange={setIsLocation}
            />
            <Text style={s.checkboxText}>Add Location</Text>
          </Pressable>

          <View style={s.typeCardWrapper}>
            <TaskTypeCard
              light="red"
              title="Urgent"
              name="urgent"
              value={taskType}
              onChange={onChangeTaskType}
            />
            <TaskTypeCard
              light="yellow"
              title="Regular"
              name="regular"
              value={taskType}
              onChange={onChangeTaskType}
            />
            <TaskTypeCard
              light="green"
              title="Low"
              name="low"
              value={taskType}
              onChange={onChangeTaskType}
            />
          </View>
        </View>
      </View>

      <View style={s.buttonWrapper}>
        <Button onPress={onSubmit}>Save</Button>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#F8FAFF',
  },

  headerBase: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: theme.spacing(2.5),
    paddingBottom: theme.spacing(1.75),
    paddingHorizontal: theme.spacing(2),
    backgroundColor: theme.color.primary.purple,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.color.base.white,
  },
  backWrapper: {
    width: 50,
  },
  headerEmpty: {
    width: 50,
  },
  deleteText: {
    color: theme.color.base.white,
  },
  imageContainer: {
    position: 'relative',
  },
  addPhotoButton: {
    position: 'absolute',
    bottom: -42.5,
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -25 }],
  },
  formWrapper: {
    marginHorizontal: theme.spacing(2),
    marginTop: theme.spacing(1) + 20.5,
  },

  wrapper: {
    width: '100%',
  },

  label: {
    color: '#464963',
    fontSize: 14,
    fontWeight: 400,
    marginBottom: 2,
  },

  textInputWrapper: {
    height: 50,
    borderWidth: 1,
    borderColor: '#DADBDD',
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 10,
    borderRadius: 16,
    marginBottom: 6,
    backgroundColor: theme.color.base.white,
  },

  input: {
    fontSize: 18,
    color: theme.color.base.black,
  },

  locationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingTop: theme.spacing(3),
  },

  checkbox: {
    marginRight: theme.spacing(1),
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#484C5333',
    backgroundColor: theme.color.base.white,
  },
  checkboxText: {
    fontSize: 14,
    fontWeight: 'bold',
  },

  typeCardWrapper: {
    paddingTop: theme.spacing(3),
    gap: 8,
  },

  buttonWrapper: {
    marginBottom: theme.spacing(3),
    marginHorizontal: theme.spacing(2),
  },
});
