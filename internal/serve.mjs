// Lokaler Start des internen Cockpits:  npm run cockpit  →  http://127.0.0.1:4400
// Bindet bewusst nur an 127.0.0.1 (nicht aus dem Netz erreichbar). Liefert ausschließlich
// internal/cockpit/ und data/ aus. Das Cockpit ist NICHT Teil des öffentlichen Website-Builds (dist/).
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const mounts = { '/data/': join(root, 'data'), '/': join(root, 'internal', 'cockpit') };
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.csv': 'text/csv; charset=utf-8', '.svg': 'image/svg+xml' };
const port = Number(process.env.PORT ?? 4400);

createServer(async (req, res) => {
  const path = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  const prefix = path.startsWith('/data/') ? '/data/' : '/';
  const base = mounts[prefix];
  const file = normalize(join(base, path.slice(prefix.length) || 'index.html'));
  if (file !== base && !file.startsWith(base + sep)) { res.writeHead(403).end('Nicht erlaubt'); return; }
  try {
    const body = await readFile(file);
    res.writeHead(200, { 'Content-Type': types[extname(file)] ?? 'application/octet-stream', 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex' }).end(body);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }).end('Nicht gefunden');
  }
}).listen(port, '127.0.0.1', () => console.log(`Team-Neudorf Cockpit (intern, nur lokal): http://127.0.0.1:${port}`));
