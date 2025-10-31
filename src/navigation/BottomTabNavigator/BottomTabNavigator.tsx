import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TaskList } from '../../screens/TaskList';
import { theme } from '../../utils/theme';
import { Map } from '../../screens/Map';
import { Generator } from '../../screens/Generator';
import { GeneratorIcon, MapIcon, TasksIcon } from '../../components/Icons';

const Tab = createBottomTabNavigator();

const TaskIconComponent = ({ size, focused }: any) => {
  return <TasksIcon width={size} height={size} isActive={focused} />;
};

const MapIconComponent = ({ size, focused }: any) => {
  return <MapIcon width={size} height={size} isActive={focused} />;
};

const GeneratorIconComponent = ({ size, focused }: any) => {
  return <GeneratorIcon width={size} height={size} isActive={focused} />;
};

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.color.primary.purple,
        tabBarInactiveTintColor: '#464963',
        tabBarStyle: {
          backgroundColor: theme.color.base.white,
          borderTopWidth: 1,
          borderTopColor: '#E5E7EB',
          height: 80,
          paddingBottom: theme.spacing(2),
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}
    >
      <Tab.Screen
        name="Tasks"
        component={TaskList}
        options={{
          tabBarLabel: 'Tasks',
          tabBarIcon: TaskIconComponent,
        }}
      />
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarLabel: 'Map',
          tabBarIcon: MapIconComponent,
        }}
      />
      <Tab.Screen
        name="Generator"
        component={Generator}
        options={{
          tabBarLabel: 'Generator',
          tabBarIcon: GeneratorIconComponent,
        }}
      />
    </Tab.Navigator>
  );
};
