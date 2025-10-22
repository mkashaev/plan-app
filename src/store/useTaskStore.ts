import { create } from 'zustand';

export type TaskType = 'urgent' | 'regular' | 'low';

export type Task = {
  id: string;
  title: string;
  completed?: boolean;
  location?: string;
  type?: TaskType;
};

type TaskStore = {
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (id: string) => void;
  getById: (id: string) => Task | undefined;
  editTask: (id: string, updatedTask: Partial<Task>) => void;
};

export const useTaskStore = create<TaskStore>()((set, get) => ({
  tasks: [
    { id: '1', title: 'Go to gym', completed: false },
    { id: '2', title: 'Buy groceries', completed: true },
    { id: '3', title: 'Read a book', completed: false },
  ],

  addTask: (task: Task) => {
    set(state => ({ tasks: [...state.tasks, task] }));
  },

  removeTask: (id: string) => {
    set(state => ({ tasks: state.tasks.filter(task => task.id !== id) }));
  },

  editTask: (id: string, updatedTask: Partial<Task>) => {
    set(state => ({
      tasks: state.tasks.map(task =>
        task.id === id ? { ...task, ...updatedTask } : task,
      ),
    }));
  },

  getById: (id: string) => {
    return get().tasks.find(task => task.id === id);
  },
}));
