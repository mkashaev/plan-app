import { create } from 'zustand';
// import { persist, createJSONStorage } from 'zustand/middleware';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthData } from '../api/user';

type UserStore = {
  user: AuthData | null;
  setUser: (user: AuthData) => void;
  clearUser: () => void;
};

export const useUserStore = create<UserStore>()(set => ({
  user: null,
  setUser: user => set({ user }),
  clearUser: () => set({ user: null }),
}));
