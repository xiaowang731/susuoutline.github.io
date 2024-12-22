import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  base: '/susuoutline.github.io/',
  // base: "/",
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')  // 配置 @ 别名指向 src 目录
    }
  }
});
