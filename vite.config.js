import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Specify the output directory for the build
    chunkSizeWarningLimit: 1024, // Adjust the chunk size warning limit if needed
  },
});
