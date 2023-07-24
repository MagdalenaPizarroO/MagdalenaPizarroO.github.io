// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/MagdalenaPizarroO.github.io/',
  }

  if (command !== 'serve') {
    config.base = '/MagdalenaPizarroO.github.io/'
  }

  return config
})
