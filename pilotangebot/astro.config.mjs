import { defineConfig } from 'astro/config';

// Eigenständiges 90-Tage-Pilotangebot – unabhängig von Website und Digital-Vision-Präsentation.
export default defineConfig({
  build: { inlineStylesheets: 'auto' },
  compressHTML: true,
  devToolbar: { enabled: false },
  server: { host: true, port: 4600 },
});
