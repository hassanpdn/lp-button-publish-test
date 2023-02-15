import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// const path = require("path");
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
      build :{
            lib: {
                  entry: resolve(__dirname, "src/index.js"),
                  name: "lv-button-01",
                  fileName: (format) => `lv-button.${format}.js`
            },
            rollupOptions: {
                  external: ["vue"],
                  output: {
                        globals: {
                              vue: "Vue"
                        }
                  }
            }
      },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
