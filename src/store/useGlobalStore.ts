import { create } from 'zustand';
import { getItem, setItem } from '@/lib/localStorage';
import { logger } from './logger';

interface GlobalState {
  isMenuOpen: boolean;
}

export interface GlobalStore extends GlobalState {
  toggleMenu: () => void;
}

const initialState: Pick<GlobalStore, keyof GlobalState> = {
  isMenuOpen: getItem('isMenuOpen') ?? false,
};

const useGlobalStore = create<GlobalStore>()(
  logger<GlobalStore>(
    (set) => ({
      ...initialState,
      toggleMenu: () => {
        set((state) => {
          setItem('isMenuOpen', !state.isMenuOpen);
          return { isMenuOpen: !state.isMenuOpen };
        });
      },
    }),
    'globalStore'
  )
);

export default useGlobalStore;
