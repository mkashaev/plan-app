import { create } from 'zustand';

export type Task = {
  id: string;
  title: string;
  completed?: boolean;
};

type TaskStore = {
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (id: string) => void;
  editTask: (id: string, updatedTask: Partial<Task>) => void;
};

export const useTaskStore = create<TaskStore>()(set => ({
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
}));
