declare module 'virtual:pwa-register/react' {
  // @ts-expect-error ignore when react is not installed
  // @ref: https://vite-plugin-pwa.netlify.app/frameworks/react.html
  import { type Dispatch, SetStateAction } from 'react';

  export interface RegisterSWOptions {
    immediate?: boolean;
    onNeedRefresh?: () => void;
    onOfflineReady?: () => void;
    onRegistered?: (
      registration: ServiceWorkerRegistration | undefined
    ) => void;
    onRegisterError?: (error: any) => void;
  }

  export function useRegisterSW(options?: RegisterSWOptions): {
    needRefresh: [boolean, Dispatch<SetStateAction<boolean>>];
    offlineReady: [boolean, Dispatch<SetStateAction<boolean>>];
    updateServiceWorker: (reloadPage?: boolean) => Promise<void>;
  };
}
