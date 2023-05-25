import { defineConfig } from 'vite'
import Adonis from '@adonisjs/vite/plugin'

export default defineConfig({
  plugins: [Adonis({
    entrypoints: ['./src/assets/app.js', './src/assets/app.css'],
    reload: ['content/**/*', 'src/templates/**/*.edge'],
    publicDirectory: 'dist'
  })],
  build: {
    target: 'esnext',
  }
})
