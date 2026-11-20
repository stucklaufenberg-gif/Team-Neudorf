# Team-Neudorf · Digital Vision & Growth — interaktive Web-Präsentation

Eigenständiges Projekt. Es teilt sich nur das Repository mit der Versicherungswebsite, nicht den Build,
nicht die Abhängigkeiten und nicht das Deployment. Die Website im Repository-Stamm wird von diesem
Projekt nicht berührt.

**Status:** Agentur-Pitch für einen persönlichen Termin mit Stefan Neudorf (Final Pitch, 14 Stationen).
Nicht öffentlich beworben, `noindex`, kein Tracking, kein Login, keine Formulare, keine Anbindung an
Werbekonten, CRM oder Social-Media-Konten.

**Hauptbotschaft:** Wir übernehmen die digitale Vermarktung deiner Expertise, von der Content-Idee über
Social Media und Werbekampagnen bis zur qualifizierten Beratungsanfrage.

Begleitende Dokumente:

- `SPRECHERLEITFADEN.md`: Argumente je Station, Antworten auf Einwände
- `media/MUSTERPRODUKTION.md`: Higgsfield-Briefings, Asset-Manifest, Einbindung von Videos
- `../docs/DEPLOYMENT_AUDIT.md` und `../docs/PROJECT_DEPLOYMENT_MAP.md`: Deployment und Fehlerbilder

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

## Stationen

| Nr. | Station | Kern | Interaktion |
|---|---|---|---|
| 01 | Einstieg | Deine Expertise verdient mehr Sichtbarkeit. | – |
| 02 | Marktpotenzial | Versicherungs-Personal-Brands mit datierten Reichweiten | – |
| 03 | Differenzierung | Creator-Mechanik, Versicherungswissen, Kundengewinnung, Produktion | – |
| 04 | Content-Lab | Visual, Spoken und Text Hook, drei Varianten zu einem Thema | Varianten, Ebenen an/aus |
| 05 | Drei Reel-Konzepte | Polizei vs. Lehramt · Drei Prüfpunkte · Dienstschlüssel | Konzepte, Videoplayer |
| 06 | Content-Säulen | Reichweite, Vertrauen, Conversion | Säulen ↔ Profil |
| 07 | Ein Drehtag | Ein Termin, viele Formate (illustrativ) | Regler |
| 08 | Vier Wochen Content | Redaktionsplan aus Themen der Checkliste | Filter, Details |
| 09 | Paid Advertising | Drei Kampagnen, je zwei Creatives | Kampagne, Creative, Format |
| 10 | Weg zur Anfrage | Mehrere Einstiege, keine Pflichtschritte | Routen |
| 11 | Automatisierung | Content- und Lead-Workflow, nicht eingerichtet | Workflow-Wechsel |
| 12 | Dein Anteil | Vier Aufgaben für Stefan, acht für die Agentur | – |
| 13 | Erfolgsmessung | Cockpit mit Demo-Daten | Kampagnenwechsel |
| 14 | 90-Tage-Pilot | Phasen mit Verantwortlichkeiten, Kostenarten, Einladung | Phasen |

Fachliche Aussagen in Station 04, 05 und 08 stammen aus Stefans „Checkliste Beamtenanwärter NRW“
(auf team-neudorf.de) und brauchen vor jeder Veröffentlichung seine Freigabe.

## Kennzeichnung der Aussagen

| Kennzeichen | Bedeutung |
|---|---|
| Ist-Stand | Aus team-neudorf.de und dem Instagram-Profil |
| Mit Quelle | Datierte Angabe mit Quellenlink (Station 02) |
| Aus Stefans Checkliste | Fachliche Aussage aus Stefans eigener Checkliste |
| Laut Plattform-Doku | Aus Hilfeseiten von Meta, Instagram, TikTok oder Google (siehe Quellen) |
| Unsere Hypothese | Begründete Einschätzung, nicht belegt |
| Unser Vorschlag | Konzept der Agentur |

## Recherche und Quellen (Stand 20.11.2026)

**Einschränkung:** Die Quellen waren aus der Entwicklungsumgebung nicht im Volltext abrufbar. Alle Angaben
stammen aus Suchergebnis-Auszügen und sind vor dem Termin im Original zu prüfen. Keine rechtliche Prüfung.

Station 02, Reichweiten (Stichtag 02.06.2026, Auswertung eines Maklerunternehmens):

- https://www.versicherungenmitkopf.de/allgemein/die-besten-versicherungs-instagrammer-deutschlands
- https://versicherungsmonitor.de/2026/06/05/383-000-follower/
- finanzexperten_fuer_lehrer: Wert in den Auszügen widersprüchlich, deshalb „nicht eindeutig belegt“.

Station 02, Ausgangspunkt von Stefan: 11 Beiträge und 109 Follower laut bereitgestelltem
Profil-Screenshot (Aufnahmedatum unbekannt).

Station 03, Referenzen für Content-Mechanik (ohne Versicherungsbezug):

- Creator Class: https://www.creatorclass.net/
- Christian Wolf: https://blackforestspace.de/speaker/christian-wolf/
- Ob Christian Wolf Creator Class betreibt, ist nicht belegt und wird nicht behauptet.

Station 04, Hook-Mechanik:

- Instagram Creators FAQ (erste drei Sekunden): https://creators.instagram.com/faq
- TikTok for Business, Creative Best Practices (Hook in den ersten sechs Sekunden):
  https://ads.tiktok.com/help/article/creative-best-practices
- Der Dreiklang Visual, Spoken und Text Hook ist eine Praxisregel aus Creator-Blogs, keine Plattformaussage.

Station 09, Plattformregeln:

- Datenschutz-Link in Lead-Formularen: https://www.facebook.com/business/help/1019886738092553
- Verbotene Abfragen (Gesundheit, Finanzen, Versicherung): https://transparency.meta.com/policies/ad-standards/
- Persönliche Merkmale: https://transparency.meta.com/policies/ad-standards/objectionable-content/privacy-violations-personal-attributes/
- Sonderkategorie Finanzprodukte, Geltung für Deutschland offen:
  https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/special-ad-category

Nicht verfügbar und deshalb nicht verwendet: die im Briefing genannte Branchenrecherche, die
Creator-Class-Bildschirmaufnahme und der Reel-Analysebericht. Sie lagen weder im Repository noch im
verbundenen Google Drive.

## Aufbau

| Pfad | Inhalt |
|---|---|
| `src/data/vision.ts` | Sämtliche Texte und Strukturen aller Kapitel und Demonstrationen |
| `src/pages/index.astro` | Die Präsentation: 14 Stationen, Bedienelemente |
| `src/components/SceneArt.astro` | Gezeichnete Platzhalter-Szenen für Reel-Konzepte |
| `public/media/reels/` | Ort für freigegebene Musterclips (noch leer, siehe `media/MUSTERPRODUKTION.md`) |
| `src/styles/vision.css` | Gestaltung, Bewegung, Präsentationsmodus, Responsive, reduzierte Bewegung |
| `src/scripts/vision.ts` | Scroll-Steuerung, Navigation, Präsentationsmodus, Tastatur, Demonstrationen |
| `src/assets/` | Porträt, Logo und daraus abgeleitete Platzhalter-Motive |
| `public/` | `robots.txt` (alles gesperrt), `_headers` (`X-Robots-Tag: noindex`), Favicon |
| `wrangler.jsonc` | Cloudflare-Konfiguration für das eigene Projekt `team-neudorf-digital-vision` |

Technik: Astro (statisch), TypeScript und CSS ohne UI-Framework, selbst gehostete Schriften.
Keine externen Skripte, keine Cookies, keine Anfragen an Dritte.

## Bedienung

**Selbst erkunden:** scrollen. Rechts die Kapitelleiste 01–10, oben „Kapitel“ für die Übersicht.

**Präsentieren:** Schaltfläche „Präsentieren“ oder Taste `P`. Die Präsentation springt Station für
Station (15 Stopps: 14 Stationen und die Einladung), nichts läuft von selbst weiter.

| Taste | Wirkung |
|---|---|
| `→` `Bild ab` `Leertaste` | nächste Station |
| `←` `Bild auf` | vorherige Station |
| `1` – `9`, `0` | direkt zu Station 01–09 bzw. 10 |
| `G` | Kapitelübersicht |
| `P` | Präsentationsmodus ein/aus |
| `F` | Vollbild |
| `Pos1` / `Ende` | Anfang / Schluss |
| `Esc` | Übersicht schließen, Präsentationsmodus beenden |

Liegt der Fokus in einer Auswahl (Tabs), wechseln die Pfeiltasten dort den Eintrag.

Bei `prefers-reduced-motion` entfallen Parallaxe, Zeigerbewegung und Einblendungen; der Inhalt bleibt
vollständig. Ohne JavaScript ist die Seite als durchgehendes Dokument lesbar.

## Deployment

Eigenes Cloudflare-Projekt, getrennt von der Versicherungswebsite. Zwei Wege:

- **Mit GitHub verbunden:** Projekt `team-neudorf-digital-vision`, Branch `claude/busy-hopper-kebr8h`,
  **Root directory `digital-vision`**, Build `npm run build`, Deploy `npx wrangler deploy`.
- **Direkter Upload:** `npm run build`, dann den Inhalt von `dist/` bei Cloudflare Pages hochladen.

Aus der Entwicklungssitzung besteht kein Cloudflare-Zugang. Push und Deployment brauchen eine
ausdrückliche Freigabe.

## Geprüft (Final Pitch, 20.11.2026)

- `npm run check`: 0 Fehler. `npm run build`: 2 Seiten, gesamt 1,3 MB
- Chromium bei 390, 768, 1440 und 1920 px:
  - kein horizontaler Überlauf, keine Konsolenfehler, keine fehlenden Dateien
  - bei 1440 und 1920 passt jede Station in einen Bildschirm
- Automatisiert durchgespielt:
  - Content-Lab: Varianten und Ebenen
  - Konzepte, Säulen, Drehtag-Regler, Kalender
  - Kampagnen mit Creative und Format
  - Routen, Workflows, Cockpit, Pilotphasen
  - Präsentationsmodus mit allen 15 Stopps, Tastatur, Übersicht
- Videoplayer mit einem Testclip geprüft: Start nur auf Klick, stumm, ohne Vorabladen, stoppt beim Konzeptwechsel.
  Der Testclip ist wieder entfernt.
- Screenshots liegen lokal unter `screenshots/digital-vision/final/` (nicht im Repository).

Nicht geprüft: Safari und Firefox, echte Mobilgeräte, Beamer-Auflösungen unter 1280 px Breite.

## Offene Freigaben und Punkte

1. **Push und Deployment.** Vorher im Cloudflare-Projekt `team-neudorf-digital-vision` das Root directory
   `digital-vision` bestätigen.
2. **Higgsfield-Musterclips:** etwa 150 Credits für drei Clips in 720p, siehe `media/MUSTERPRODUKTION.md`.
3. **Recherche im Original prüfen:** Reichweiten in Station 02, Plattformregeln in Station 09.
4. **Fachliche Freigabe** der Aussagen aus der Checkliste in Station 04, 05 und 08 durch Stefan.
5. **Rechtliche Prüfung** von Datenschutzhinweisen, Einwilligungstexten, Erstinformation und Werbeaussagen
   durch eine Fachperson vor jedem echten Start.
6. **Porträt und Logo:** Verwendung durch Stefan bestätigen. Es gibt nur ein Originalfoto.
7. **Absender:** Agenturname und Kontaktdaten fehlen bewusst, sie wurden nicht erfunden.
8. **Preise:** Die Präsentation nennt keine Beträge. Die Cockpit-Werte sind Demo-Daten.
9. **Werkzeuge:** Für CRM, Terminbuchung und Automatisierung ist noch nichts ausgewählt oder eingerichtet.
10. **Fehlende Recherche-Grundlagen:** Branchenrecherche, Creator-Class-Aufnahme und Reel-Analysebericht
    bitte bereitstellen, falls sie in den Pitch einfließen sollen.
