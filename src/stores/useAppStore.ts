import AsyncStorage from '@react-native-async-storage/async-storage';
import {LoginResponse} from 'src/types/auth.types';
import {User} from 'src/types/user.types';

import {create} from 'zustand';
import {persist, createJSONStorage, devtools} from 'zustand/middleware';

type AppStore = {
  currentUser: LoginResponse | null;
  setCurrentUser: (currentUser: LoginResponse | null) => void;
  favoriteUsers: User[];
  setFavoriteUsers: (users: User[]) => void;
};

const useAppStore = create<AppStore>()(
  devtools(
    persist(
      set => ({
        currentUser: null,
        setCurrentUser: (currentUser: LoginResponse | null) =>
          set(() => ({currentUser}), false, 'app/setCurrentUser'),
        favoriteUsers: [],
        setFavoriteUsers: (favoriteUsers: User[]) =>
          set(() => ({favoriteUsers}), false, 'app/setFavoriteUsers'),
      }),
      {
        name: 'AppStore',
        storage: createJSONStorage(() => AsyncStorage),
        partialize: state => ({currentUser: state.currentUser}),
      },
    ),
  ),
);

export default useAppStore;
