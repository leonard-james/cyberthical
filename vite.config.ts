import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  // Publish only the shared assets folder; using the workspace root would
  // also copy repository files such as .git into the production build.
  publicDir: 'assets',

  // Base path — change to '/your-repo-name/' if deploying to GitHub Pages subpath
  base: '/',
});
