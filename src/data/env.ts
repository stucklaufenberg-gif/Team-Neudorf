// Vorschau-Modus (Testumgebung): aktiv bei jedem Cloudflare-Pages- oder Netlify-Build
// (CF_PAGES=1 bzw. NETLIFY=true) oder
// wenn PUBLIC_PREVIEW=true gesetzt ist. Für den späteren Livegang PUBLIC_PREVIEW=false setzen.
// Wirkung: noindex auf allen Seiten, robots.txt sperrt alles, sichtbare Kennzeichnung,
// Formulare senden nichts (die PHP-Skripte der bisherigen Website existieren dort nicht).
declare const process: { env: Record<string, string | undefined> }; // Build läuft in Node
const flag = process.env.PUBLIC_PREVIEW;
export const isPreview = flag ? flag === 'true' : process.env.CF_PAGES === '1' || process.env.NETLIFY === 'true';
