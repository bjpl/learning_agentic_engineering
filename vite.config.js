import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/learning_agentic_engineering/',
  build: {
    outDir: 'dist',
    sourcemap: true
  }
});