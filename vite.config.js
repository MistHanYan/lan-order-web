import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueSteUpExtend from 'vite-plugin-vue-setup-extend'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
      VueSteUpExtend()
  ],
  server:{
    host:'0.0.0.0',
    port: 80,
    proxy: {
      "/admin":{
        target: "http://47.109.47.32:8080",
        changeOrigin : true
      },
      "/public":{
        target: "http://47.109.47.32:8080",
        changeOrigin : true
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
