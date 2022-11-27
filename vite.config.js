import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/bbb324.github.io/',
  css: {
    // css预处理器
    preprocessorOptions: {
    less: {
    charset: false,
     //additionalData: '@import "./src/assets/style/global.less";',
    },
    },
   },
})
