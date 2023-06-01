import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {    // <-- this object is added
    host: true,
    port: 8080
  },
  watch: {
    usePolling: true
  }
})
