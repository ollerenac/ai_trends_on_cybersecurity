import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/ai_trends_on_cybersecurity/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        notas: resolve(__dirname, 'notas.html'),
      },
    },
  },
})
