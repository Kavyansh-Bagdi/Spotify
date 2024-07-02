import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/spotify/',
  "homepage": "https://github.com/Kavyansh-Bagdi/spotify",

})
