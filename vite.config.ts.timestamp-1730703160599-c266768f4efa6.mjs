// vite.config.ts
import { defineConfig } from "file:///D:/UGit/my-v3-ts/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/UGit/my-v3-ts/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import path from "path";
import vueSetupExtend from "file:///D:/UGit/my-v3-ts/node_modules/vite-plugin-vue-setup-extend/dist/index.mjs";
import { createSvgIconsPlugin } from "file:///D:/UGit/my-v3-ts/node_modules/vite-plugin-svg-icons/dist/index.mjs";
var __vite_injected_original_dirname = "D:\\UGit\\my-v3-ts";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    vueSetupExtend(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/assets/svg")],
      // 设置你的 SVG 图标存放路径
      symbolId: "icon-[name]"
      // 生成的 symbol ID，使用文件名进行命名
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  server: {
    proxy: {
      "/api": {
        target: "http://syt.atguigu.cn",
        ws: true,
        // 支持ws协议；websocket的缩写；
        changeOrigin: true
        // 是否跨域
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxVR2l0XFxcXG15LXYzLXRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxVR2l0XFxcXG15LXYzLXRzXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9VR2l0L215LXYzLXRzL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXHJcbmltcG9ydCB2dWVTZXR1cEV4dGVuZCBmcm9tICd2aXRlLXBsdWdpbi12dWUtc2V0dXAtZXh0ZW5kJ1xyXG5pbXBvcnQgeyBjcmVhdGVTdmdJY29uc1BsdWdpbiB9IGZyb20gJ3ZpdGUtcGx1Z2luLXN2Zy1pY29ucyc7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHZ1ZSgpLFxyXG4gICAgdnVlU2V0dXBFeHRlbmQoKSxcclxuICAgIGNyZWF0ZVN2Z0ljb25zUGx1Z2luKHtcclxuICAgICAgaWNvbkRpcnM6IFtwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgJ3NyYy9hc3NldHMvc3ZnJyldLCAvLyBcdThCQkVcdTdGNkVcdTRGNjBcdTc2ODQgU1ZHIFx1NTZGRVx1NjgwN1x1NUI1OFx1NjUzRVx1OERFRlx1NUY4NFxyXG4gICAgICBzeW1ib2xJZDogJ2ljb24tW25hbWVdJywgLy8gXHU3NTFGXHU2MjEwXHU3Njg0IHN5bWJvbCBJRFx1RkYwQ1x1NEY3Rlx1NzUyOFx1NjU4N1x1NEVGNlx1NTQwRFx1OEZEQlx1ODg0Q1x1NTQ3RFx1NTQwRFxyXG4gICAgfSksXHJcbiAgXSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICAnQCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYycpXHJcbiAgICB9XHJcbiAgfSxcclxuICBzZXJ2ZXI6IHtcclxuXHJcbiAgICBwcm94eToge1xyXG4gICAgICAnL2FwaSc6IHtcclxuICAgICAgICB0YXJnZXQ6ICdodHRwOi8vc3l0LmF0Z3VpZ3UuY24nLFxyXG4gICAgICAgIHdzOiB0cnVlLCAvLyBcdTY1MkZcdTYzMDF3c1x1NTM0Rlx1OEJBRVx1RkYxQndlYnNvY2tldFx1NzY4NFx1N0YyOVx1NTE5OVx1RkYxQlxyXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSwgLy8gXHU2NjJGXHU1NDI2XHU4REU4XHU1N0RGXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBd08sU0FBUyxvQkFBb0I7QUFDclEsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sVUFBVTtBQUNqQixPQUFPLG9CQUFvQjtBQUMzQixTQUFTLDRCQUE0QjtBQUpyQyxJQUFNLG1DQUFtQztBQU96QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixlQUFlO0FBQUEsSUFDZixxQkFBcUI7QUFBQSxNQUNuQixVQUFVLENBQUMsS0FBSyxRQUFRLFFBQVEsSUFBSSxHQUFHLGdCQUFnQixDQUFDO0FBQUE7QUFBQSxNQUN4RCxVQUFVO0FBQUE7QUFBQSxJQUNaLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFFTixPQUFPO0FBQUEsTUFDTCxRQUFRO0FBQUEsUUFDTixRQUFRO0FBQUEsUUFDUixJQUFJO0FBQUE7QUFBQSxRQUNKLGNBQWM7QUFBQTtBQUFBLE1BQ2hCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
