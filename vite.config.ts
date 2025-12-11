import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Configuration Vite simplifiée
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: '/Site_de_Voyage/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          'framer-motion': ['framer-motion'],
          swiper: ['swiper'],
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
    host: '0.0.0.0',
    strictPort: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  define: {
    'process.env': {}
  },
  css: {
    postcss: './postcss.config.js',
  },
}));