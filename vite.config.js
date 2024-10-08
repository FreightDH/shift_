import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import VitePluginWebpCompress from 'vite-plugin-webp-compress';

export default defineConfig({
  base: '',
  plugins: [react(), VitePluginWebpCompress()],
  resolve: {
    alias: {
      '@': '/src',
      '@/app': '/src/app',
      '@/pages': '/src/pages',
      '@/widgets': '/src/widgets',
      '@/features': '/src/features',
      '@/entities': '/src/entities',
      '@/shared': '/src/shared',
    },
  },
});
