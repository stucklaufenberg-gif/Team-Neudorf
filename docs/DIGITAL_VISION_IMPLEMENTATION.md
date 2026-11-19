# Digital Vision – Build Sprint 01 (Stand 19. November 2026)

Kette aus der Vision: **Aufmerksamkeit → relevante Landingpage → Vertrauen → Kontakt → messbare Erkenntnisse.**
Dieser Sprint liefert die erste nutzbare Schicht dazu. Alles ist lokal geprüft, nichts ist veröffentlicht.

## 1. Was funktioniert

| Baustein | Stand |
|---|---|
| Pilot-Landingpage `/referendariat-nrw.html` | fertig, in Navigation (Mega-Menü, mobiles Menü), Startseite und Sitemap verlinkt |
| Content-Modell + 5 Redaktionsbriefings | `data/content/briefings.json` |
| Internes Cockpit (Content, Performance, Messplan) | lokal startbar, nicht Teil des öffentlichen Builds |
| Event-Taxonomie + typisiertes Interface | `src/lib/tracking.ts`, **Erfassung standardmäßig aus** |
| CTA-Kennzeichnung | alle Kontakt-Links tragen `data-cta`, Landingpage-CTAs zusätzlich `data-cta-id` |

## 2. Start und Dateien

```bash
npm run cockpit        # internes Cockpit: http://127.0.0.1:4400 (nur dieser Rechner)
npm run test:cockpit   # Logiktest (CSV-Prüfung, Kennzahlen, Briefing-Validierung)
npm run dev            # öffentliche Website
```

- `src/pages/referendariat-nrw.astro` – Landingpage
- `src/lib/tracking.ts` – Ereignisse, Typen, Schalter, Integrationsstelle für einen Anbieter
- `data/content/briefings.json` – Briefings (Quelle der Wahrheit im Repository)
- `data/demo/performance-demo.csv` – **erfundene** Beispieldaten, im Cockpit durchgehend als DEMO markiert
- `internal/cockpit/` – Oberfläche (`index.html`, `app.js`, `cockpit.css`), Logik (`lib.js`), Test (`lib.test.mjs`)
- `internal/serve.mjs` – lokaler Server, bindet nur an 127.0.0.1

## 3. Landingpage: Herkunft der Inhalte
Alle Fachaussagen sind **wörtlich** von bestehenden Seiten übernommen (Quelle steht als Kommentar im Code): Einleitung und drei Punkte von `oeffentlicher-dienst.html`, sechs Fragen von `lehramt.html` (4) und `polizei.html` (2), Gesprächsablauf und Begrüßung von `index.html`. Die Seite ist als Zusammenstellung **redaktionell freigabepflichtig** (im Vorschau-Modus sichtbar markiert).

Neu formuliert und freizugeben: Seitentitel und Meta-Beschreibung · Marke „Referendariat · Beamtenanwärter in NRW“ · Zwischenüberschriften „Drei Weichen, die Sie jetzt stellen“, „Welche Fragen sollten Sie vor dem Start klären?“, „Mehr zu Ihrer Laufbahn“, „Ich bin Stefan Neudorf“ · Hinweissatz „Die Antworten stammen von unseren Seiten für Lehramt und Polizei. Regeln unterscheiden sich je nach Laufbahn und Dienstherr.“ · Linktexte „Lehramt & Referendariat“, „Anwartschaft erklärt“.
Offen für Stefan: Die beiden Polizei-Fragen (Heilfürsorge, Anwartschaft) gelten nicht für jede Laufbahn – behalten oder streichen? Das Titelbild stammt von der Lehramt-Seite.

## 4. Content-Modell
Felder je Briefing: `id`, `zielgruppe`, `saeule` (person | wissen | einblicke), `hook`, `kernaussage`, `format`, `cta`, `zielUrl` (nur interne Adresse), `status` (idee | briefing | freigabe-offen | freigegeben | produziert | veroeffentlicht), `originalAssets[]`, `veroeffentlichung` (optional, JJJJ-MM-TT), dazu `szenen[]`, `quelle`, `freigabeHinweis`.

Enthalten: die vier Reel-Ideen der Vision (Bundeswehr → Makler, Referendariat, Beihilfe/Heilfürsorge, bKV) und eine fünfte Idee für die Säule „Einblicke“ (Erstgespräch), die nicht aus der Vision stammt, sondern aus vorhandenem Website-Inhalt. Kernaussagen stützen sich auf Website-Texte; jede Idee trägt einen Freigabe-Hinweis. Kein Briefing ist freigegeben.

Cockpit: Filter nach Zielgruppe, Säule, Status und Suche · Anlegen, Bearbeiten, Löschen mit Prüfung · JSON-Export/-Import (ungültige Einträge werden benannt und übersprungen) · Zurücksetzen auf den Repository-Stand. **Speicherung nur im Browser (localStorage), nicht synchronisiert** – dauerhafte Änderungen über Export in `data/content/briefings.json` einpflegen. Es gibt kein Posting, keine Schnittstelle zu Social-Media-Plattformen.

## 5. Messgrundlage
Ereignisse: `landingpage_view`, `contact_click`, `tel_click`, `email_click`, `whatsapp_click`, `booking_click` (der Microsoft-Bookings-Link existiert), `download_click`, `contact_success`.
`contact_success` entsteht ausschließlich auf der Danke-Seite, nachdem der Server den Formularversand bestätigt hat – nie durch einen Klick, nie im Vorschau-Modus.

Ein Ereignis enthält nur: Ereignisname, Seitenpfad ohne Parameter, Landingpage-Kennung, CTA-Kennung, Platzierung, grober Kanal (feste Liste). Keine Namen, Formularinhalte, Gesundheits- oder Vertragsangaben, keine IP, keine Kennungen.

**Schalter:** `PUBLIC_TRACKING_ENABLED` (Standard: nicht gesetzt = aus). Selbst eingeschaltet wird ohne registrierten Adapter (`registerAdapter` in `src/lib/tracking.ts`) nichts übertragen. `PUBLIC_TRACKING_DEBUG=true` schreibt Ereignisse nur lokal in die Konsole. Vor dem Einschalten nötig: Anbieterwahl, Rechtsgrundlage, Datenschutzerklärung, ggf. Einwilligung.

## 6. Performance-Cockpit
Kennzahlen wie in der Vision: Website-Besuche, Kontakt-Klicks, Terminanfragen, qualifizierte Leads. Raten mit sichtbarer Formel: Kontakt-Klickrate = Kontakt-Klicks ÷ Besuche · Anfragequote = Terminanfragen ÷ Kontakt-Klicks · Lead-Quote = qualifizierte Leads ÷ Terminanfragen (ohne Basis: „–“).

CSV-Format (Komma oder Semikolon): `datum,kanal,landingpage,besuche,kontakt_klicks,terminanfragen,qualifizierte_leads`. Fehlerhafte Dateien werden vollständig abgelehnt (Zeile und Grund werden genannt); Dateien mit Spalten wie Name, E-Mail, Telefon werden zurückgewiesen; unplausible Werte erzeugen Warnungen. Filter: Zeitraum, Kanal, Landingpage.

## 7. Welche Daten real fehlen
**Es liegen keine echten Website-, Social- oder Conversion-Daten vor.** Später möglich:
- Website: Besuche und Klicks – erst nach freigegebener Messung.
- Social: Reichweite/Klicks je Beitrag aus den Plattform-Statistiken; Zuordnung über Kampagnen-Links (`?utm_source=instagram`).
- Echte Anfragen: bestätigte Formularversände, Microsoft Bookings, von Hand gezählte Anrufe/WhatsApp; „qualifiziert“ ist Stefans Einschätzung, nur als Anzahl.
Bis dahin: Zahlen von Hand als CSV zusammentragen und importieren.

## 8. Für eine spätere produktive Dashboard-Anbindung
- Das Cockpit liegt außerhalb von `src/pages` und `public` und wird **nicht** nach `dist/` gebaut; es gibt keine `/admin`- oder Dashboard-Route auf der öffentlichen Website.
- Eine Online-Version braucht echte Zugangskontrolle **vor** dem Ausliefern (z. B. Cloudflare Access vor einer eigenen Subdomain oder ein Login-Dienst) und einen Speicher statt localStorage (`store` in `internal/cockpit/app.js` ist die Austauschstelle). Beides ist nicht umgesetzt.
- Datenquelle: `loadCsv` in `app.js` ist die Stelle, an der ein automatischer Abruf aggregierter Zahlen andocken würde.

## 9. Geprüft (lokal, Chromium headless)
- `astro check` 0 Fehler, Build 29 Seiten; 29 Seiten × 390/768/1440 px ohne Überlauf, Konsolen- oder Ladefehler; alle 27 bisherigen `.html`-Adressen vorhanden; interne Links intakt.
- Landingpage: über Mega-Menü und mobiles Menü erreichbar, primärer CTA bei allen drei Breiten im ersten Bildschirm, kein zusätzliches Formular.
- Messung aus: keine Ereignisse, keine Fremd-Requests, keine Cookies/Speicher. Mit Schalter + Debug: Ereignisse wie definiert, ohne URL-Parameter; `contact_success` nicht durch Klick.
- Vorschau-Modus unverändert: noindex, Kennzeichnung, Formular sendet nichts. Motion aktiv.
- Cockpit: 30 Browser-Prüfungen (Filter, Bearbeiten, Validierung, Export, Import gültig/defekt, Zurücksetzen, Leerzustand, fehlerhafte CSV, CSV mit Personendaten, Filter, Demo-Kennzeichnung, 390 px) und der Logiktest bestanden.
- Nicht geprüft: echte Geräte, Safari/Firefox, Screenreader.
