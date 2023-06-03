import { create } from 'zustand';
import { logger } from './logger';

interface AuthState {
  isAuthenticated: boolean;
}

export interface AuthStore extends AuthState {
  setIsAuthenticated: (args: AuthState['isAuthenticated']) => void;
}

const initialState: Pick<AuthStore, keyof AuthState> = {
  isAuthenticated: true,
};

const useAuthStore = create<AuthStore>()(
  logger<AuthStore>(
    (set) => ({
      ...initialState,
      setIAuthentcated: (isAuthenticated) => {
        set(() => ({ isAuthenticated }));
      },
    }),
    'authStore'
  )
);

export default useAuthStore;
