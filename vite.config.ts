import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        b2bLeadGen: resolve(import.meta.dirname, 'b2b-lead-generation/index.html'),
        dataResearch: resolve(import.meta.dirname, 'data-research/index.html'),
      },
    },
  },
})
