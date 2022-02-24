import { StateCreator } from 'zustand';
import type { TestSlice } from '@/types/store';

export const createTestSlice: StateCreator<TestSlice> = (set) => ({
  isTesting: false,
  setIsTesting: (isTesting: boolean) => set(() => ({ isTesting })),
});
