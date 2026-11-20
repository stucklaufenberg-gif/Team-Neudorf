# Projektkarte: Was liegt wo und was wird wohin deployt?

Ein Repository, zwei unabhängige Anwendungen. Bevorzugte Plattform ab 20.11.2026: **Netlify** (zwei Sites).
Cloudflare (zwei Worker) bleibt als Alternative dokumentiert.

```
stucklaufenberg-gif/Team-Neudorf            (Branch: claude/busy-hopper-kebr8h)
├── src/, public/, astro.config.mjs, package.json   → A · Versicherungswebsite → Worker team-neudorf
├── digital-vision/                                  → B · Digital Vision        → Worker team-neudorf-digital-vision
│   ├── src/, public/, astro.config.mjs, package.json
│   └── wrangler.jsonc   (name: team-neudorf-digital-vision)
└── docs/                                            → wird von keinem Projekt gebaut
```

## Netlify (bevorzugt)

| | Versicherungswebsite | Digital Vision |
|---|---|---|
| Netlify-Projekt | `team-neudorf-vorschau` (vorhanden, noch ohne erfolgreichen Deploy) | noch anzulegen, z. B. `team-neudorf-digital-vision` |
| Base directory | leer (Repository-Stamm) | `digital-vision` |
| Package directory | leer | leer |
| Konfiguration | `netlify.toml` im Stamm: `PUBLIC_PREVIEW=true npm run build`, Publish `dist`, `noindex` | `digital-vision/netlify.toml`: `npm run build`, Publish `dist`, Node 22, `noindex` |
| Erkennbar an | Titel „Versicherungsmakler in Mechernich …“ | Titel „Digital Vision & Growth · Stefan Neudorf“, `dv-build` |

Netlify sucht die `netlify.toml` in dieser Reihenfolge: Package directory → Base directory → Stamm. Eine
`netlify.toml` hat Vorrang vor der UI, ein `base` in der Stamm-Datei überschreibt das Base directory der UI.
Deshalb darf die Stamm-`netlify.toml` kein `base` bekommen.

Quelle: https://docs.netlify.com/build/configure-builds/monorepos/

## A · Versicherungswebsite

| | |
|---|---|
| Quelle | Repository-Stamm: `src/`, `public/`, `astro.config.mjs`, `package.json` |
| Cloudflare | Workers, Projekt **`team-neudorf`** |
| URL | https://team-neudorf.stuck-laufenberg.workers.dev/ |
| Erkennbar an | Titel „Versicherungsmakler in Mechernich \| Team-Neudorf Versicherungen“, Unterseiten wie `/polizei` |
| Root Directory | leer (Repository-Stamm) |
| Build / Deploy | `npm run build` / `npx wrangler deploy` |
| Wrangler-Konfiguration | keine eigene. Cloudflare konfiguriert automatisch (Astro, Ausgabe `dist`) |
| Build Watch Paths (Soll) | Include `*` · Exclude `digital-vision/*, docs/*` |
| Produktive Domain | `www.team-neudorf.de` liegt beim bisherigen Hoster und ist **nicht** mit Cloudflare verbunden |

## B · Digital Vision & Growth

| | |
|---|---|
| Quelle | `digital-vision/` (eigene `package.json`, eigene Abhängigkeiten) |
| Cloudflare | Workers, Projekt **`team-neudorf-digital-vision`** |
| URL | https://team-neudorf-digital-vision.stuck-laufenberg.workers.dev/ |
| Erkennbar an | Titel „Digital Vision & Growth · Stefan Neudorf“, `robots.txt` mit `Disallow: /`, `<meta name="dv-build">` |
| Root Directory | **`digital-vision`** |
| Build / Deploy | `npm run build` / `npx wrangler deploy` |
| Wrangler-Konfiguration | `digital-vision/wrangler.jsonc`, `name` muss `team-neudorf-digital-vision` bleiben |
| Build Watch Paths (Soll) | Include `digital-vision/*` · Exclude leer |

## Was löst welches Deployment aus?

Gilt, sobald die Watch Paths wie oben eingetragen sind.

| Geänderte Dateien | Website baut | Digital Vision baut |
|---|---|---|
| nur `digital-vision/…` | nein | ja |
| nur `docs/…` | nein | nein |
| Website-Dateien (`src/`, `public/`, `package.json` im Stamm …) | ja | nein |
| beides in einem Push | ja | ja |
| leerer Push, über 20 Commits oder über 3000 Dateien | ja | ja (Cloudflare ignoriert dann die Watch Paths) |

Die Watch Paths bestimmen nur, **ob** gebaut wird. **Was** gebaut wird, bestimmt das Root Directory.
Gemeinsam genutzte Dateien gibt es nicht: Beide Anwendungen haben eigene `package.json`, `astro.config.mjs`
und `node_modules`.

## Welche Version ist gerade online?

- **Digital Vision:** Quelltext öffnen und nach `dv-build` suchen. Der Wert ist der Commit, aus dem
  Cloudflare gebaut hat. Lokal steht dort `lokal`.
- **Website:** Cloudflare-Dashboard → `team-neudorf` → **Deployments**. Dort steht der Commit jedes Builds.
- **Schnelltest, ob die richtige Anwendung läuft:** den Titel prüfen (siehe Tabellen oben).

## Eine Anwendung aktualisieren

1. Nur im jeweiligen Bereich ändern: `digital-vision/` für B, Stamm für A.
2. Lokal bauen:
   - A: `npm run build` im Stamm
   - B: `cd digital-vision && npm run build`
3. Committen und `claude/busy-hopper-kebr8h` pushen.
4. Cloudflare baut das betroffene Projekt automatisch. Danach die URL anhand des Fingerprints prüfen.

## Zurück auf einen funktionierenden Stand

- **Schnell, ohne Git:** Cloudflare-Dashboard → Projekt → **Deployments** → eine frühere, funktionierende
  Version wählen → **Rollback**. Das betrifft nur dieses eine Projekt.
- **Dauerhaft:** den fehlerhaften Commit mit `git revert <commit>` rückgängig machen und pushen. Kein
  Force-Push.
- **Bekannte Stände:**
  - Website: unverändert seit Commit `1e2cae4`
  - Digital Vision: `b63552a` (erste Fassung) und `105656a` (Creative Direction 02)

## Bekannte Stolperfallen

- **Root Directory leer** beim Projekt B: Dann wird die Website unter der Digital-Vision-URL
  veröffentlicht. Genau das war der Fehler vom November 2026, siehe `DEPLOYMENT_AUDIT.md`.
- **`name` in `digital-vision/wrangler.jsonc` umbenennen:** Muss zum Worker-Namen im Dashboard passen.
- **Commit `82f0f23`** (Vorschau-Schutz der Website) liegt nur lokal auf `lokal/vorschau-schutz-82f0f23`.
  Er gehört nicht in die Historie von `claude/busy-hopper-kebr8h`, solange er nicht ausdrücklich
  freigegeben ist.

## Optionen für später

- **Explizite `wrangler.jsonc` für die Website** (`name: team-neudorf`, Assets aus `./dist`). Das macht
  das Deployment unabhängig von der automatischen Erkennung. Es ändert aber den Deploy-Weg der Website,
  deshalb vorher die Weiterleitungen (`.html` auf ohne Endung) und die 404-Seite gegen den heutigen Stand testen.
- **Zwei Repositories**: sinnvoll, wenn die Digital Vision einen anderen Lebenszyklus oder andere
  Zugriffsrechte bekommt (zum Beispiel weil sie mit Kunden geteilt wird). Heute nicht nötig, weil Root
  Directory und Watch Paths die Projekte sauber trennen.
- **Eigener `main`-Branch** für den späteren Livegang der Website. Dann zeigt `team-neudorf` auf `main`,
  die Digital Vision kann auf ihrem Branch bleiben.
