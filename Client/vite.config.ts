import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: false,
    host: '0.0.0.0',
    port: 3000
  },
  plugins: [vue()]
})
