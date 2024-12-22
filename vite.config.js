import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Automatically opens the browser on `npm run dev`
  },
  build: {
    rollupOptions: {
      input: 'index.html', // Correct the path to the entry point
    },
  },
});
