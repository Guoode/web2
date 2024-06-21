import { defineConfig } from 'vite'
import { fileURLToPath, URL } from "node:url";
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 为 ./src 提供别名 @
	resolve: {
		alias: {
			'@': fileURLToPath(new URL("./src", import.meta.url))
		}
	},
	server:{
		hmr: true,
	}
})
