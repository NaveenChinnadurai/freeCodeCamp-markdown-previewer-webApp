import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/freeCodeCamp-markdown-previewer-webApp",
  plugins: [react()],
})
