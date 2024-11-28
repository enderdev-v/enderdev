import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "node:path";


// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@ui': path.resolve(__dirname, './src/components/ui'),
      '@Styles': path.resolve(__dirname, './src/Styles'),
    }
  },
  plugins: [react()],
  
})
