import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/React-portfolio/', // Set base path to match your repository name
  plugins: [react()],
});

