export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      VITE_API_ENDPOINT: string;
    }
  }
}
