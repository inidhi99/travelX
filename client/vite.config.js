import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import path from 'path';

// const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // string shorthand: http://localhost:5173/foo -> http://localhost:4567/foo
      // '/foo': 'http://localhost:4567',
      // with options: http://localhost:5173/api/bar-> http://jsonplaceholder.typicode.com/bar
      '/graphql': {
        target: 'http://127.0.0.1:3001',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/graphql/, ''),
        secure: false,
        ws: true,
      },

      // '/': 'http://localhost:3001',
      // with RegEx: http://localhost:5173/fallback/ -> http://jsonplaceholder.typicode.com/
      // '^/fallback/.*': {
      //   target: 'http://jsonplaceholder.typicode.com',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/fallback/, ''),
      // },
      // // Using the proxy instance
      // '/api': {
      //   target: 'http://jsonplaceholder.typicode.com',
      //   changeOrigin: true,
      //   configure: (proxy, options) => {
      //     // proxy will be an instance of 'http-proxy'
      //   },
      // },
      // Proxying websockets or socket.io: ws://localhost:5173/socket.io -> ws://localhost:5174/socket.io
      // '/socket.io': {
      //   target: 'ws://localhost:5174',
      //   ws: true,
      // },
    },
  },
});
