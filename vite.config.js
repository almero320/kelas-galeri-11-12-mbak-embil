// vite.config.js (di root project)
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // penting untuk Vercel
  build: {
    outDir: 'dist', // pastikan output ke 'dist'
  },
});
