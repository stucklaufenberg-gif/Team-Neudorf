import { defineConfig } from 'astro/config';

// Eigenständige Präsentation „Digital Vision & Growth“ – unabhängig von der Team-Neudorf-Website.
export default defineConfig({
  build: { inlineStylesheets: 'auto' },
  compressHTML: true,
  devToolbar: { enabled: false },
  server: { host: true, port: 4500 },
});
