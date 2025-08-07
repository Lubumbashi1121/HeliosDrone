import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/send-email': 'http://localhost:5000', // Redirect /send-email to backend
    },
  },
});
