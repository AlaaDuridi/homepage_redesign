import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {env} from 'process';
export default defineConfig({
    define: {
        global: {},
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import './src/index.css';`,
            },
        },
    },
    resolve: {},
    plugins: [react()],
    optimizeDeps: {
        include: ['@mui/material/Tooltip', '@emotion/styled', 'swiper/css', 'swiper/css/pagination'],
    },
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