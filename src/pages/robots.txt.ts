import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { isPreview } from '../data/env';

// Testumgebung: Suchmaschinen vollständig aussperren. Produktion: wie bisher alles erlauben.
export const GET: APIRoute = () =>
  new Response(
    isPreview
      ? 'User-agent: *\nDisallow: /\n'
      : `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
