import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import { useUserStore } from '../../store/useUserStore';
import { theme } from '../../utils/theme';
import { TabButton } from './components/TabButton';
import { TaskCard } from './components/TaskCard';
import { useTaskStore } from '../../store/useTaskStore';
import { useNavigation } from '@react-navigation/native';

export const TaskList = () => {
  const navigation = useNavigation();
  const clearUser = useUserStore(state => state.clearUser);
  const tasks = useTaskStore(state => state.tasks);

  const onAddTask = () => {
    // @TODO: Update types
    navigation.navigate('AddTask' as never);
  };

  return (
    <View style={s.container}>
      <View style={s.header}>
        <Text style={s.headerText}>Hello, there</Text>

        <Pressable style={s.headerButton} onPress={onAddTask}>
          <Text style={s.headerButtonText}>+ Add Task</Text>
        </Pressable>
      </View>

      <View style={s.chin}>
        <Text style={s.chinText}>You have </Text>
        <Text style={s.chinText}>6 tasks here</Text>
      </View>

      <View style={s.filters}>
        <TabButton isActive>All</TabButton>

        <TabButton>Active</TabButton>

        <TabButton>Completed</TabButton>
      </View>

      <View style={s.tasksTitleWrapper}>
        <Text style={s.tasksTitle}>Your Tasks</Text>
      </View>

      <ScrollView style={s.taskContainer}>
        {tasks.map(task => (
          <TaskCard key={task.id} data={task} />
        ))}
      </ScrollView>

      <Button title="Logout" onPress={clearUser} />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.color.primary.purple,
    paddingTop: theme.spacing(1),
    paddingHorizontal: theme.spacing(2),
  },

  headerText: {
    fontSize: 14,
    color: theme.color.base.white,
    fontWeight: '400',
    opacity: 0.75,
  },

  headerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.color.primary.yellow,
    borderRadius: 8,
    paddingVertical: 11,
    paddingHorizontal: 18,
    height: 36,
  },

  headerButtonText: {
    fontSize: 12,
    fontWeight: 'bold',
  },

  chin: {
    flexDirection: 'column',
    backgroundColor: theme.color.primary.purple,
    paddingVertical: theme.spacing(1.25),
    paddingHorizontal: theme.spacing(2),
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  chinText: {
    fontSize: 24,
    color: theme.color.base.white,
    fontWeight: '700',
    width: '100%',
  },

  filters: {
    flexDirection: 'row',
    columnGap: theme.spacing(2),
    paddingTop: theme.spacing(1.5),
    paddingHorizontal: theme.spacing(2),
  },

  tasksTitle: {
    color: theme.color.base.black,
    opacity: 0.5,
  },
  tasksTitleWrapper: {
    paddingTop: theme.spacing(1),
    paddingHorizontal: theme.spacing(2),
  },

  taskContainer: {
    paddingTop: theme.spacing(1.5),
    paddingHorizontal: theme.spacing(2),
  },
});
