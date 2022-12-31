import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import electron from './plugins/electron';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), electron()],
});
