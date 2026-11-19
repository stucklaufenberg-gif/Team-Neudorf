import { defineConfig } from 'astro/config';

// Statische Ausgabe. `format: 'file'` erzeugt polizei.html statt polizei/index.html –
// damit bleiben alle bestehenden, bei Google indexierten URLs 1:1 erhalten.
export default defineConfig({
  site: 'https://www.team-neudorf.de',
  trailingSlash: 'ignore',
  build: { format: 'file', inlineStylesheets: 'auto' },
  compressHTML: true,
  devToolbar: { enabled: false },
  server: { host: true, port: 4321 },
});
