# Team-Neudorf · Digital Vision & Growth — interaktive Web-Präsentation

Eigenständiges Projekt. Es teilt sich nur das Repository mit der Versicherungswebsite, nicht den Build,
nicht die Abhängigkeiten und nicht das Deployment. Die Website im Repository-Stamm wird von diesem
Projekt nicht berührt.

**Status:** Konzeptpräsentation für ein Gespräch mit Stefan Neudorf. Nicht öffentlich beworben,
`noindex`, kein Tracking, kein Login, keine Formulare.

## Starten

```bash
cd digital-vision
npm install
npm run dev       # Entwicklung, http://localhost:4500
npm run check     # Astro- und TypeScript-Prüfung
npm run build     # statischer Build nach dist/
npm run preview   # gebauten Stand ansehen, http://localhost:4500
```

Node 22 (siehe `.nvmrc`).

## Aufbau

| Pfad | Inhalt |
|---|---|
| `src/data/vision.ts` | Sämtliche Texte und Strukturen: Kapitel, Säulen, Reels, Kampagne, Journey, Roadmap |
| `src/pages/index.astro` | Die Präsentation: Hero, Kapitel A–F, Bedienelemente |
| `src/styles/vision.css` | Gestaltung, Bewegung, Präsentationsmodus, Responsive, reduzierte Bewegung |
| `src/scripts/vision.ts` | Scroll-Steuerung, Kapitelnavigation, Präsentationsmodus, Tastatur, Umschalter |
| `src/assets/` | Porträt, Logo und daraus abgeleitete Platzhalter-Motive |
| `public/` | `robots.txt` (alles gesperrt), `_headers` (`X-Robots-Tag: noindex`), Favicon |
| `wrangler.jsonc` | Cloudflare-Konfiguration für das eigene Projekt `team-neudorf-digital-vision` |

Technik: Astro (statisch), TypeScript und CSS ohne UI-Framework, selbst gehostete Schriften.
Keine externen Skripte, keine Cookies, keine Anfragen an Dritte.

## Bedienung

**Selbst erkunden:** scrollen. Rechts die Kapitelleiste A–F, oben „Kapitel" für die Übersicht.

**Präsentieren:** Schaltfläche „Präsentieren" oder Taste `P`. Die Präsentation springt dann Station
für Station (28 Stationen), nichts läuft von selbst weiter.

| Taste | Wirkung |
|---|---|
| `→` `↓` `Bild ab` `Leertaste` | nächste Station |
| `←` `↑` `Bild auf` | vorherige Station |
| `1` – `6` | direkt zu Kapitel A–F |
| `G` | Kapitelübersicht |
| `P` | Präsentationsmodus ein/aus |
| `F` | Vollbild |
| `Pos1` / `Ende` | Anfang / Schluss |
| `Esc` | Übersicht schließen, Präsentationsmodus beenden |

Interaktive Elemente: Content-Säulen mit Profil-Mockup, vier Reel-Konzepte, Storyboard je Reel,
Vergleich organisch/bezahlt, Beispielkampagne (drei Motive, Feed/Story), Customer Journey,
Produktionsablauf mit Filter, 90-Tage-Roadmap. Alle sind per Maus, Touch und Tastatur bedienbar.

Bei `prefers-reduced-motion` entfallen Parallaxe, Zeigerbewegung und Einblendungen; der Inhalt bleibt
vollständig. Ohne JavaScript ist die Seite als durchgehendes Dokument lesbar.

## Deployment (eigenes Cloudflare-Projekt)

Das Deployment ist vorbereitet, aber **nicht ausgeführt**. Es braucht eine ausdrückliche Freigabe und
einen einmaligen Schritt im Cloudflare-Dashboard, weil aus der Entwicklungssitzung kein Cloudflare-Zugang besteht.

1. Den Stand auf GitHub pushen (Branch `claude/busy-hopper-kebr8h`).
2. Cloudflare-Dashboard → **Workers & Pages** → **Create** → **Import a repository** →
   `stucklaufenberg-gif/Team-Neudorf`.
3. Einstellungen:
   - Projektname: `team-neudorf-digital-vision`
   - Branch: `claude/busy-hopper-kebr8h`
   - **Root directory: `digital-vision`** (entscheidend, sonst wird die Versicherungswebsite gebaut)
   - Build command: `npm run build`
   - Deploy command: `npx wrangler deploy`
4. Empfohlen: unter **Build → Build watch paths** `digital-vision/*` eintragen, damit nur Änderungen
   an der Präsentation einen Build auslösen. Beim bestehenden Projekt `team-neudorf` umgekehrt
   `digital-vision/*` ausschließen.
5. Die Adresse lautet danach voraussichtlich `team-neudorf-digital-vision.<konto>.workers.dev`.
   Sie gilt erst als bestätigt, wenn sie tatsächlich aufgerufen wurde.

Alternativ von einem Rechner mit Cloudflare-Anmeldung: `npm run build && npx wrangler deploy`.

Das bestehende Cloudflare-Projekt `team-neudorf` und die Domain `team-neudorf.de` werden dabei nicht verändert.

## Geprüft

- `npm run check`: 0 Fehler · `npm run build`: 2 Seiten · `wrangler deploy --dry-run`: fehlerfrei
- Browser (Chromium) bei 390, 768, 1440 und 1920 px: kein horizontaler Überlauf, Überschrift und
  Einstieg im ersten Bildschirm, keine Konsolenfehler
- Alle Umschalter, Kapitelübersicht, Präsentationsmodus und Tastatursteuerung automatisiert durchgespielt
- Reduzierte Bewegung und Betrieb ohne JavaScript
- Screenshots und Aufnahmen liegen lokal unter `screenshots/digital-vision/` (nicht im Repository)

Nicht geprüft: Safari und Firefox, echte Mobilgeräte, Beamer-Auflösungen unter 1280 px Breite.

## Offene Freigaben und Punkte

1. **Push** des lokalen Commits auf GitHub.
2. **Deployment** als eigenes Cloudflare-Projekt (Schritte oben).
3. **Porträt und Logo:** Verwendung in dieser Präsentation durch Stefan Neudorf. Es gibt nur ein
   Originalfoto; alle Reel-, Storyboard- und Anzeigenmotive sind daraus abgeleitete Platzhalter und
   als „Konzept · Visualisierung" gekennzeichnet.
4. **Absender:** Agenturname und Kontaktdaten fehlen bewusst, sie wurden nicht erfunden.
5. **Ansprache:** Die Abschlussfragen sind in der Du-Form geschrieben. Bitte bestätigen oder auf „Sie" ändern.
6. **Fachliche Aussagen** in Reel- und Anzeigentexten (Beihilfe, Heilfürsorge, Referendariat,
   Dienstunfähigkeit): Freigabe durch Stefan vor jeder echten Veröffentlichung.
7. **Werbung für Finanz- und Versicherungsthemen:** Plattformregeln und rechtliche Vorgaben sind nicht
   geprüft. Vor einer echten Kampagne klären.
8. **Budget und Honorar:** In der Präsentation stehen keine Beträge. Sie sind nicht vorgegeben worden.
9. Zahlen zu Reichweite, Followern oder Ergebnissen kommen nicht vor; es gibt keine belegten Werte.
