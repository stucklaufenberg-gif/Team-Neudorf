# Team Neudorf · 90-Tage-Pilotangebot

Interaktive Angebotspräsentation für Stefan Neudorf (Team-Neudorf Versicherungen) mit vollständiger
Druck-/PDF-Fassung. Gestalterische Referenz ist die Präsentation „Digital Vision & Growth“; deren Dateien
werden weder verwendet noch verändert (Logo und Porträt sind Kopien). Eigener Build, eigene Abhängigkeiten,
eigene Netlify-Konfiguration.

Status: **Entwurf mit Platzhaltern**, `noindex`, nicht veröffentlicht, kein Deployment.

## Lokal aufrufen

```bash
cd pilotangebot
npm install
npm run dev       # Entwicklung, http://localhost:4600
npm run check     # Typprüfung (astro check)
npm run build     # statischer Build nach pilotangebot/dist/
npm run preview   # gebauten Stand ansehen, http://localhost:4600
```

**PDF:** Button „PDF speichern“ (oben) bzw. „Angebot als PDF speichern“ (Abschluss) oder Strg/Cmd + P →
„Als PDF speichern“, A4, Hintergrundgrafiken an. Die Druckfassung ersetzt interaktive Elemente durch
statische Darstellungen: alle drei Monate der Roadmap, alle Leistungsmodule geöffnet, Budgettabelle statt
Rechner, keine Animationen. Umfang derzeit 14 A4-Seiten (dunkles Deckblatt, helle Folgeseiten).

## Aufbau der Seite

| Kapitel | Interaktion |
|---|---|
| Hero „Deine digitale Zukunft. Unser gemeinsamer 90-Tage-Start.“ | KI-first-Flussgrafik (Expertise → KI-Workflow → Freigabe → Reels, Grafiken, Anzeigen, Anfragen), Halftone-Raster, Lichtfelder |
| Ausgangslage | Scroll-Reveal |
| 01 Roadmap | Timeline als Tabs (Klick, Pfeiltasten, Pos1/Ende), Fortschrittslinie, Meilensteine |
| 02 Leistungen | Sechs aufklappbare Module; Übersicht Enthalten / Optional nach Freigabe / Nicht enthalten |
| 03 Pilotpreis | 750 € in Gold mit Zähleranimation, Hinweis „Einmalige Pilotkonditionen“, externer Marktvergleich als Spanne mit Skala, drei Kostenpositionen |
| 04 Budgetrechner | Schieberegler Technik 0–350 € und Meta 0–300 €, Schnellauswahl, optionale USt.-Planungsannahme 19 %, Monats- und 3-Monats-Summe; Budgettabelle und Budgetregeln |
| 05 Steuern und Förderung | Drei Stufen: Betriebsausgaben / Förderung individuell prüfen / bewilligt: keine; offizielle Links |
| 06–07 Zusammenarbeit, Erwartungen | Freigabeprozess, Mitwirkung, Grenzen |
| 08 Ende nach 90 Tagen | Automatisches Ende, kein Folgepreis |
| 09 Nächste Schritte | Vier Schritte, PDF-Button, Kontakt (Platzhalter, bis `src/data/angebot.ts → agency` gefüllt ist) |
| 10 Konditionen und Annahme | Vertragsdaten mit Platzhaltern, Unterschriftsfelder |

Barrierearmut: Skip-Link, sichtbarer Fokus, ARIA-Tabs, `aria-expanded` an Modulen und Menü, beschriftete
Regler mit `aria-valuetext`, Live-Region für Summen, `prefers-reduced-motion` schaltet alle Animationen ab,
ohne JavaScript sind alle Inhalte sichtbar.

## Kontaktweg

Die Seite enthält keinen funktionslosen „Beauftragen“-Button. Sobald in `src/data/angebot.ts` unter `agency`
E-Mail und/oder Telefon eingetragen sind, erscheinen im Abschluss echte Links („Gesprächstermin anfragen“,
Telefonnummer). Bis dahin steht dort ein sichtbarer Platzhalter; der PDF-Button funktioniert immer.

## Marktvergleich, Steuern, Förderung – Stand und Prüfbedarf

Daten in `src/data/recherche.ts`, Stand der Recherche November 2026.

- **Marktvergleich:** Spanne 700–1.500 € netto/Monat für Social-Media-Betreuung kleiner Unternehmen
  (Anbieterangaben Kontentino, HEROLD; keine unabhängige Studie). Bewusst **kein Streichpreis**, weil kein
  belastbarer Einzelwert existiert. Rechnung: (1.500 − 750) ÷ 1.500 = 50 % unter dem oberen Wert; 750 liegt
  7 % über dem unteren Wert 700. Ausdrücklich als externer Marktvergleich gekennzeichnet, nicht als eigener
  früherer Preis. Die Formulierung sollte vor dem Versand wettbewerbsrechtlich (UWG/PAngV) mit freigegeben werden.
- **Steuern:** § 4 Abs. 4 EStG (Betriebsausgaben), § 4 Nr. 11 und § 15 Abs. 2 UStG (Vorsteuerausschluss bei
  Versicherungsvermittlern), § 13b UStG (Reverse Charge, z. B. Meta Irland). Keine Ersparnis zugesagt.
- **Förderung:** BAFA-Unternehmensberatung (nur Beratung durch registrierte Berater, keine Umsetzung),
  RWP-Beratung NRW (nur GRW-Fördergebiete, Mechernich nicht bestätigt), Mittelstand-Digital (kostenfreie
  Orientierung). Nicht beantragbar/passend: go-digital (Ende 2024), Digital Jetzt (Ende 2023), MID NRW 2026.
  Bewilligte Förderung: keine.

**Vor dem Versand prüfen:** Die amtlichen Seiten (bafa.de, gesetze-im-internet.de, nrwbank.de,
wirtschaft.nrw) und die Anbieterseiten waren in der Arbeitsumgebung gesperrt; die Angaben stammen aus
Suchergebnissen und Sekundärquellen. Alle Links öffnen, Zahlen und Status bestätigen. Auf der Seite ist das
mit zwei sichtbaren Platzhaltern markiert.

## Platzhalter vor dem Versand

Gelb markiert in eckigen Klammern:

- `[Agenturname, Anschrift, Ansprechpartner]` (Hero) und `[Agentur, Name]` (Unterschrift)
- `[Angebotsnummer]`, `[Datum]` des Angebots, `[Datum]` Gültig bis
- `[Datum Kick-off]` (Roadmap) bzw. `[Datum]` Laufzeitbeginn (Konditionen)
- Rechnungsstellung, Zahlungsziel
- Vertragsgrundlagen: AGB, Auftragsverarbeitungsvertrag (AVV), Nutzungsrechte an Inhalten
- `[Kontakt der Agentur: E-Mail und Telefon]` (Abschluss; über `agency` in `src/data/angebot.ts`)
- `[Quellen vor Versand auf den Originalseiten prüfen]` (Marktvergleich)
- `[Angaben vor Versand auf den verlinkten offiziellen Seiten prüfen]` (Steuern und Förderung)

Außerdem offen: Umsatzsteuer-Status der Agentur, betreuter Hauptkanal, Veröffentlichungsumfang in Monat 1.
Das Angebot enthält keine rechtliche oder steuerliche Prüfung.

## Veröffentlichung über Netlify (vorbereitet, nicht ausgeführt)

Zielstruktur:

| Projekt | Netlify-Site | Status |
|---|---|---|
| Präsentation (`digital-vision/`) | team-neudorf-digital-vision.netlify.app | unverändert |
| Pilotangebot (`pilotangebot/`) | neue, eigene Site, Wunschname `team-neudorf-pilotangebot` | noch nicht angelegt |
| Versicherungswebsite (Repository-Stamm) | – | unverändert |

Build-Einstellungen (stehen in `pilotangebot/netlify.toml`):

- Base directory: `pilotangebot`
- Build command: `npm run build`
- Publish directory: `dist` (also `pilotangebot/dist`)
- Node 22
- Header: `X-Robots-Tag: noindex, nofollow` (zusätzlich `public/_headers`, `robots.txt`, Meta-Tag)

Vorgesehener Ablauf nach ausdrücklicher Freigabe:

1. Platzhalter ausfüllen und Prüfpunkte oben erledigen, lokal `npm run check && npm run build`.
2. Neue Netlify-Site anlegen (Name `team-neudorf-pilotangebot`, falls frei; die Verfügbarkeit ließ sich in
   der Arbeitsumgebung nicht prüfen). **Nicht** die bestehende Site `team-neudorf-digital-vision` verwenden.
3. Deploy aus einem sauberen Export nur des Ordners `pilotangebot/` (z. B. `git archive HEAD pilotangebot`),
   damit die Netlify-Konfiguration im Repository-Stamm nicht greift; alternativ Git-Anbindung mit Base
   directory `pilotangebot`.
4. Live-URL prüfen: noindex-Header, Druckansicht, Mobilansicht.

Hinweis Git: Der lokale Commit `82f0f23` liegt nur auf dem lokalen Branch `lokal/vorschau-schutz-82f0f23`
und ist kein Vorfahre von `claude/busy-hopper-kebr8h`; ein Push dieses Branches überträgt ihn nicht.

## Dateien

| Pfad | Zweck |
|---|---|
| `package.json`, `package-lock.json` | Eigene Abhängigkeiten (Astro, Schriften), Port 4600 |
| `astro.config.mjs`, `tsconfig.json`, `.nvmrc`, `.gitignore` | Build-Konfiguration |
| `netlify.toml`, `public/_headers`, `public/robots.txt` | Netlify-Build, noindex, Sicherheits- und Cache-Header |
| `src/pages/index.astro` | Angebotsseite |
| `src/data/angebot.ts` | Leistungen, Roadmap, Budget, nächste Schritte, Agenturkontakt |
| `src/data/recherche.ts` | Marktspanne, Steuer- und Förderangaben mit Quellen |
| `src/scripts/angebot.ts` | Interaktion: Navigation, Reveal, Tabs, Module, Zähler, Rechner, Druck, Halftone |
| `src/styles/angebot.css` | Gestaltung, Responsive-Regeln, Druck-/PDF-Regeln |
| `src/assets/logo.png`, `src/assets/avatar.png` | Kopien aus `digital-vision/` |
| `public/favicon.svg` | Kopie des Favicons |
