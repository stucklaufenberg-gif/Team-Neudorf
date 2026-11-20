# Deployment-Audit: Versicherungswebsite und Digital Vision

Stand: 20.11.2026 · Repository `stucklaufenberg-gif/Team-Neudorf`

Kennzeichnung in diesem Dokument:

- **[verifiziert]**: selbst geprüft (Befehl ausgeführt, URL abgerufen, Doku gelesen)
- **[abgeleitet]**: aus Code, Git oder Verhalten geschlossen, nicht direkt einsehbar
- **[unbekannt]**: mangels Cloudflare-Zugang nicht prüfbar

Aus der Entwicklungssitzung bestand **kein Zugang zum Cloudflare-Dashboard oder zur Cloudflare-API**.
Alle Aussagen über Dashboard-Einstellungen sind deshalb abgeleitet und so markiert.

## 1. Ergebnis in einem Satz

Das Cloudflare-Projekt `team-neudorf-digital-vision` baut aus dem **Repository-Stamm** statt aus
`digital-vision/`. Dort liegt die Versicherungswebsite ohne Wrangler-Konfiguration, also erkennt Cloudflare
sie automatisch als Astro-Projekt und veröffentlicht sie unter dem Namen der Digital Vision.

## 2. Vergleich

| Eigenschaft | Website | Digital Vision |
|---|---|---|
| Quellverzeichnis | Repository-Stamm (`src/`, `public/`, `astro.config.mjs`) [verifiziert] | `digital-vision/` [verifiziert] |
| Build-Konfiguration | `npm run build` = `astro build`, `build.format: 'file'`, Ausgabe `dist/`, 29 Seiten [verifiziert, lokaler Build] | `npm run build` = `astro build`, Ausgabe `digital-vision/dist/`, 2 Seiten [verifiziert, lokaler Build] |
| Wrangler-Konfiguration | **keine** im Stamm. Cloudflare erzeugt sie beim Build automatisch (Astro erkannt, Ausgabe `dist`) [verifiziert per `wrangler setup --dry-run`] | `digital-vision/wrangler.jsonc`, `name: team-neudorf-digital-vision`, Assets aus `./dist`, `404-page` [verifiziert] |
| Cloudflare-Projekt | Worker `team-neudorf` (Workers Builds, mit GitHub verbunden) [abgeleitet: URL existiert, baute früher automatisch nach Push] | Worker `team-neudorf-digital-vision` [abgeleitet: URL existiert] |
| Root Directory | leer bzw. `/` [abgeleitet, korrekt] | leer bzw. `/` [abgeleitet aus Inhalt, **falsch**, muss `digital-vision` sein] |
| Git-Branch | `claude/busy-hopper-kebr8h` [abgeleitet: einziger Branch im Repository, es gibt keinen `main`] | wie Website [abgeleitet] |
| Build Watch Paths | vermutlich Standard `*` [unbekannt] | vermutlich Standard `*` [unbekannt] |
| Letzter Commit auf GitHub | `b63552a` [verifiziert]. Website-Dateien unverändert seit `1e2cae4` [verifiziert] | `b63552a` [verifiziert]. Creative Direction 02 (`105656a`) ist **nicht gepusht** [verifiziert] |
| Letzter Build bei Cloudflare | [unbekannt] | [unbekannt] |
| Öffentliche URL | https://team-neudorf.stuck-laufenberg.workers.dev/ [verifiziert, 200] | https://team-neudorf-digital-vision.stuck-laufenberg.workers.dev/ [verifiziert, 200] |
| Ausgelieferter Inhalt | Versicherungswebsite [verifiziert] | **Versicherungswebsite** [verifiziert] |
| Status | **Korrekt** | **Fehler** |

## 3. Fingerprints

Ein HTTP-Status 200 sagt nichts über den Inhalt. Diese Merkmale unterscheiden die beiden Anwendungen eindeutig:

| Merkmal | Versicherungswebsite | Digital Vision (Creative Direction 02) |
|---|---|---|
| `<title>` | `Versicherungsmakler in Mechernich \| Team-Neudorf Versicherungen` | `Digital Vision & Growth · Stefan Neudorf` |
| Canonical | `https://www.team-neudorf.de/` | keiner |
| Robots-Meta | keins (Vorschau-Schutz nicht aktiv) | `noindex, nofollow` |
| `robots.txt` | `Allow: /` mit Sitemap | `Disallow: /` |
| Typische Unterseiten | `/polizei`, `/referendariat-nrw` (200) | gibt es nicht (404) |
| Eindeutige Markup-Merkmale | `/_astro/Base.*.css`, Silk-Line-SVG | `data-chapter="k1"` bis `"k10"`, `data-cal`, `data-dash` |
| Build-Kennung | keine | `<meta name="dv-build" content="<Commit>">` (ab dem nächsten Deployment) |

Gemessen am 20.11.2026:

- Beide URLs liefern denselben Titel, dieselbe Canonical, dieselben Assets und 46.746 Bytes HTML.
- Unterschied zwischen den beiden HTML-Dateien: nur zufällige SVG-IDs (`silk-flow-v63w7` gegenüber
  `silk-flow-ydse8`). Diese IDs entstehen bei jedem Build neu. Die Digital-Vision-URL ist also **ein
  eigener Build der Website**, keine Weiterleitung und keine Kopie.

## 4. Nachweis der Ursache

1. **Die Doku sagt, was ohne Konfiguration passiert.** Ohne Wrangler-Konfiguration im Build-Verzeichnis
   löst `wrangler deploy` die automatische Projektkonfiguration aus.
   Quelle: https://developers.cloudflare.com/workers/ci-cd/builds/configuration/ (Abschnitt Deploy
   command) und https://developers.cloudflare.com/workers/framework-guides/automatic-configuration/
2. **Der Worker-Name wird überschrieben.** Workers Builds setzt den Namen des verbundenen Workers per
   `WRANGLER_CI_OVERRIDE_NAME`. Deshalb landet der Website-Build unter `team-neudorf-digital-vision`,
   ohne dass ein Namensfehler auftritt.
   Quelle: https://developers.cloudflare.com/workers/ci-cd/builds/troubleshoot/
3. **Lokal reproduziert.** `npx wrangler setup --dry-run` im Repository-Stamm (Stand `b63552a`) ergibt:
   Framework Astro, Build `npm run build`, Ausgabe `dist`, also die Website.
4. **Inhalt live geprüft.** Die Digital-Vision-URL liefert die Website, siehe Abschnitt 3.
5. **Gegenprobe.** `digital-vision/` baut eigenständig korrekt (2 Seiten, Titel „Digital Vision &
   Growth“, 10 Kapitel, Kalender und Cockpit). `wrangler deploy --dry-run` liest dort 52 Dateien aus
   `digital-vision/dist`, ohne Fehler.

Eine Korrektur im Code kann den Fehler **nicht** beheben: Solange das Projekt im Stamm baut, landet dort
immer die Website. Erforderlich ist das Root Directory `digital-vision` im Cloudflare-Projekt.

## 5. Git-Bestand

| Commit / Branch | Inhalt | Ort |
|---|---|---|
| `origin/claude/busy-hopper-kebr8h` → `b63552a` | Digital Vision, erste Fassung | GitHub [verifiziert] |
| `claude/busy-hopper-kebr8h` → `105656a` | Creative Direction 02, nur `digital-vision/`, 1 Commit vor GitHub | lokal [verifiziert] |
| `lokal/sicherung-105656a` | Sicherung von `105656a` | lokal |
| `lokal/vorschau-schutz-82f0f23` → `82f0f23` | Vorschau-Schutz der Website (`WORKERS_CI`), nur `src/data/env.ts` | lokal, **nicht** in der Historie von `claude/busy-hopper-kebr8h` [verifiziert] |
| `lokal/sicherung-6d1e0ea` → `6d1e0ea` | inhaltsgleich mit `b63552a`, auf `82f0f23` aufbauend | lokal |
| `.git/sicherung-2026-11-20.bundle` | Git-Bundle aller oben genannten Branches | lokal |

Weitere Befunde:

- Es gibt nur einen Remote-Branch und keinen `main`.
- GitHub Actions: keine (`.github/` existiert nicht).
- Uncommitted Changes: keine.
- `dist/`, `.wrangler/` und `node_modules/` sind ignoriert und nicht eingecheckt.

Ein Push von `claude/busy-hopper-kebr8h` überträgt `105656a` und die Commits danach, **nicht** `82f0f23`
[verifiziert per `git branch --contains`]. Alle Änderungen seit dem letzten Website-Commit `1e2cae4`
liegen in `digital-vision/` und `docs/` [verifiziert per `git diff --name-only`].

## 6. Weitere bekannte Adressen

| URL | Ergebnis am 20.11.2026 |
|---|---|
| https://5c7669ba-team-neudorf.stuck-laufenberg.workers.dev/ | 200, Website (Versions-URL des Workers `team-neudorf`) |
| https://claude-busy-hopper-kebr8h-team-neudorf.stuck-laufenberg.workers.dev/ | 404 |
| https://team-neudorf-vorschau.netlify.app/ | 404 (Netlify-Versuch ohne Deployment) |
| https://www.team-neudorf.de/ | 200, Server Apache: bisheriger Hoster, **nicht** Cloudflare und von diesen Projekten nicht berührt |
| `*.pages.dev` (manueller Upload) | [unbekannt]: Falls ein Upload erfolgte, kennt nur das Dashboard die Adresse |

## 7. Nebenbefunde und Risiken

1. **Die Website hängt an der automatischen Konfiguration.** Ohne eigene `wrangler.jsonc` im Stamm
   entscheidet Wrangler bei jedem Build selbst; laut Doku gehört bei Astro `astro add cloudflare` dazu.
   Das funktioniert heute, ist aber nicht festgeschrieben. Eine explizite Konfiguration wäre robuster. Sie
   ändert jedoch das Deployment der Website und gehört deshalb in einen eigenen, getesteten Schritt mit
   Freigabe (siehe `PROJECT_DEPLOYMENT_MAP.md`, Abschnitt „Optionen“).
2. **Keine Build Watch Paths** [abgeleitet]: Jeder Push baut beide Projekte.
3. **Beide Projekte folgen einem Feature-Branch.** Das ist bewusst so, solange nichts auf `main` geht.
4. **Die Website-Vorschau ist indexierbar**: kein `noindex`, `robots.txt` erlaubt alles, weil `82f0f23`
   nicht gepusht ist. Unabhängig von diesem Fehler, aber offen.

## 8. Fehlende Cloudflare-Angaben

Nur mit Dashboard-Zugang prüfbar. Für die Reparatur nicht zwingend nötig, für die Dokumentation wünschenswert:

- je Projekt: Branch, Build- und Deploy-Command, Root Directory, Build Watch Paths
- je Projekt: letzter Build mit Commit-Hash
- ob es zusätzlich ein Pages-Projekt aus einem manuellen Upload gibt
