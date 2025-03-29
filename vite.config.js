import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: 'https://zayd100.github.io/React-proj/', // Change this to your actual repo name
});