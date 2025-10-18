import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/React-portfolio/', // Important: match your repo name
  plugins: [react()],
});
