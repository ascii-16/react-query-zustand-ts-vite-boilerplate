import { StateCreator } from 'zustand';
import type { AuthSlice } from '@/types/store';

export const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  isAuthenticated: false,
  setIsAuthenticated: (isAuthenticated: boolean) =>
    set(() => ({ isAuthenticated })),
});
