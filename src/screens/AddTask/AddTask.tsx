import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import { Button } from '../../components';
import { useState } from 'react';
import { TaskType, useTaskStore } from '../../store/useTaskStore';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../../utils/theme';
import TaskImagePlaceholder from '../../assets/TaskImagePlaceholder.svg';
import Checkbox from 'expo-checkbox';
import { TaskTypeCard } from './components/TaskTypeCard';

const aspectRatio = 29 / 10;

export const AddTask = () => {
  const navigation = useNavigation();
  const addTask = useTaskStore(state => state.addTask);
  const [title, setTitle] = useState('');
  const [isLocation, setIsLocation] = useState(false);
  const [taskType, setTaskType] = useState<TaskType>('urgent');

  const { width } = useWindowDimensions();

  const onSubmit = () => {
    if (!title) {
      return;
    }

    addTask({
      id: Date.now().toString(),
      title,
      completed: false,
      type: taskType,
    });
    setTitle('');
    navigation.goBack();
  };

  const onAddPhoto = () => {
    console.log('Add Photo');
  };

  const onBack = () => {
    navigation.goBack();
  };

  const onChangeTaskType = (value?: TaskType) => {
    setTaskType(value as TaskType);
  };

  return (
    <View style={s.container}>
      <View>
        <View style={{ backgroundColor: theme.color.base.white }}>
          <View style={s.headerBase}>
            <Pressable onPress={onBack}>
              <Text>Back</Text>
            </Pressable>
            <Text style={s.headerTitle}>Add New Task</Text>
            <View style={s.headerEmpty} />
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
              <TextInput
                style={[s.input]}
                value={title}
                onChangeText={setTitle}
              />
            </View>
          </View>

          <Pressable
            style={s.locationWrapper}
            onPress={() => setIsLocation(prev => !prev)}
          >
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
  headerEmpty: {
    width: 40,
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
