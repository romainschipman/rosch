import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

export default defineConfig({
  plugins: [
    react()
  ],
  resolve: {
    alias: {
      react: path.resolve('./node_modules/react'),
      'styled-components': path.resolve('./node_modules/styled-components'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/lib/index.tsx'),
      name: 'rosch-ui',
      fileName: (format) => `rosch-ui.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'styled-components'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'styled-components': 'styled',
        },
      },
    },
  },

  root: '.',
});
