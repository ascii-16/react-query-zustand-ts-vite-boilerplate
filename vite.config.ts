import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import { VitePWA } from 'vite-plugin-pwa';
import { PWAConfig } from './src/lib/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), VitePWA(PWAConfig)],
});
