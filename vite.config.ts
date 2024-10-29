import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueSetupExtend(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')], // 设置你的 SVG 图标存放路径
      symbolId: 'icon-[name]', // 生成的 symbol ID，使用文件名进行命名
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {

    proxy: {
      '/api': {
        target: 'http://syt.atguigu.cn',
        ws: true, // 支持ws协议；websocket的缩写；
        changeOrigin: true, // 是否跨域
      }
    }
  }
})
