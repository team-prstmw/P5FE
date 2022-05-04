/* eslint-disable import/no-extraneous-dependencies */
import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';
import reactJsx from 'vite-react-jsx';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), reactRefresh(), reactJsx()],
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:4000/api',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ''),
  //     },
  //   },
  // },
  // build: {
  //   outDir: '../server/public',
  //   emptyOutDir: true,
  // },
});
