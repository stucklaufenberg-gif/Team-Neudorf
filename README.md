# Team-Neudorf Versicherungen – Website (Phase 1)

Premium-Website für Team-Neudorf Versicherungen, Stefan Neudorf, Mechernich.
Designrichtung: Noema × Kelder bei unverändertem Team-Neudorf-Branding. **Nicht veröffentlicht – kein Deployment ohne Freigabe.**

## Start
```bash
npm install
npm run dev       # Entwicklung: http://localhost:4321
npm run build     # statisches Build nach dist/
npm run preview   # Build lokal ansehen
npm run check     # Typecheck / Lint (astro check)
```

## Struktur
- `src/pages/index.astro` – neu gestaltete Startseite
- `src/pages/*.astro` – Unterseiten, wörtlich aus `legacy/` migriert (`npm run migrate` erzeugt sie neu und überschreibt Handänderungen)
- `src/styles/global.css` – Designsystem (Tokens, Bausteine, Motion)
- `src/components/` – Header, Footer, CTA-Band, Silk-Lines, Icons
- `src/data/site.ts` – Kontaktdaten, Navigation, Berufsgruppen
- `src/scripts/main.ts` – Menü, Reveal, Halftone, Formular-Fallback
- `public/.htaccess` – Apache-Regeln (ungetestet), `public/robots.txt`
- `legacy/` – unveränderte Kopie der bisherigen Live-Seiten (Quelle der Inhalte)
- `docs/` – Recherche, Designrichtung, **`IMPLEMENTATION_PLAN.md` (Stand, Prüfungen, offene Blocker)**

`references/` (Instagram-Screenshots, Pitch) ist per `.gitignore` ausgeschlossen.
