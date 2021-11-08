import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
  server: {
    host: '0.0.0.0',
    port: 8082,
    open: true,
    cors: true,
    strictPort: true,
    proxy: {
      '/bilibili/api': {
        target: 'https://api.bilibili.com/',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/bilibili\/api/, ''),
        headers: {
          // referer: 'https://api.bilibili.com',
          origin: 'https://api.bilibili.com'
        }
      },
      '/weibo/api': {
        target: 'https://weibo.com/',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/weibo\/api/, ''),
        headers: {
          // referer: 'https://weibo.com',
          origin: 'https://weibo.com'
        }
      }
    }
  }
})
