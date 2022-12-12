import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// const path = require('path')



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // root: path.resolve(__dirname, 'src'),
  // server: {
  //   port: 3001,
  //   hot: true
  // }
})
