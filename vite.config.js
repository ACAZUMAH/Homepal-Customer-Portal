import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: true, // Enables hot module replacement
    watch: {
      usePolling: true, // Ensures changes are detected quickly
    },
  },
})
