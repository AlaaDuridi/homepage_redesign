import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { env } from 'process';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Change this to your desired port
    host: '0.0.0.0', // Allow access from network
    proxy: {
      '/api': {
        target: env.VITE_BACKEND_HOST,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});