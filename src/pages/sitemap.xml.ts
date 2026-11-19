import type { APIRoute } from 'astro';
import { site } from '../data/site';

// Gleiche Adresse wie bisher (/sitemap.xml). Rechtstexte, Danke- und Formularseiten sind
// wie auf der bestehenden Website per noindex ausgenommen und stehen nicht in der Sitemap.
const EXCLUDE = new Set(['404', 'danke', 'schaden-danke', 'datenschutz', 'erstinformation', 'impressum', 'schaden-melden']);

export const GET: APIRoute = () => {
  const pages = Object.keys(import.meta.glob('./*.astro'))
    .map((p) => p.replace('./', '').replace('.astro', ''))
    .filter((p) => !EXCLUDE.has(p))
    .sort((a, b) => (a === 'index' ? -1 : b === 'index' ? 1 : a.localeCompare(b)));
  const urls = pages
    .map((p) => `  <url><loc>${site.url}/${p === 'index' ? '' : p + '.html'}</loc></url>`)
    .join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
