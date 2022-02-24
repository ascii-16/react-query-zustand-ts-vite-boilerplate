import create, { GetState, SetState, StoreApi } from 'zustand';
import { persist } from 'zustand/middleware';
import type { AuthSlice, TestSlice } from '@/types/store';
import { createAuthSlice } from './createAuthSlice';
import { createTestSlice } from './createTestSlice';

export type Store = AuthSlice & TestSlice;

export const useStore = create<Store>(
  persist(
    (set, get, api) => ({
      ...createAuthSlice(
        set as unknown as SetState<AuthSlice>,
        get as GetState<AuthSlice>,
        api as StoreApi<AuthSlice>
      ),
      ...createTestSlice(
        set as unknown as SetState<TestSlice>,
        get as GetState<TestSlice>,
        api as StoreApi<TestSlice>
      ),
    }),
    {
      name: 'store',
    }
  )
);
