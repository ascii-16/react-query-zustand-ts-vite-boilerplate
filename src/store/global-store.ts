import { create } from 'zustand';
import { getItem, setItem } from '@/lib/local-storage';
import { logger } from './logger';

type GlobalState = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

const useGlobalStore = create<GlobalState>()(
  logger<GlobalState>(
    (set) => ({
      isMenuOpen: getItem('isMenuOpen') ?? false,
      toggleMenu: () => {
        set((state) => {
          const newIsMenuOpen = !state.isMenuOpen;
          setItem('isMenuOpen', newIsMenuOpen);
          return { isMenuOpen: newIsMenuOpen };
        });
      },
    }),
    'globalStore'
  )
);

export default useGlobalStore;
