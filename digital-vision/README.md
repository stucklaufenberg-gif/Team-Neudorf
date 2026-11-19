# Team-Neudorf · Digital Vision & Growth — interaktive Web-Präsentation

Eigenständiges Projekt. Es teilt sich nur das Repository mit der Versicherungswebsite, nicht den Build,
nicht die Abhängigkeiten und nicht das Deployment. Die Website im Repository-Stamm wird von diesem
Projekt nicht berührt.

**Status:** Agentur-Pitch für ein Gespräch mit Stefan Neudorf (Creative Direction 02). Nicht öffentlich
beworben, `noindex`, kein Tracking, kein Login, keine Formulare, keine Anbindung an Werbekonten, CRM oder
Social-Media-Konten.

**Kernbotschaft:** Wir machen aus Stefans Expertise eine sichtbare Marke und aus digitaler Aufmerksamkeit
qualifizierte Beratungsanfragen.

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

## Kapitel und Kernaussagen

| Nr. | Kapitel | Kernaussage |
|---|---|---|
| 01 | Das ungenutzte Potenzial | Das Fundament (Website, Profil, Schwerpunkt) steht. Es fehlt das System, das daraus Anfragen macht. |
| 02 | Wen wir gewinnen wollen | Vier Segmente, bewertet nach vier Kriterien. Fokus im Pilot: Beamtenanwärter und Referendare. |
| 03 | Die Personenmarke | Stefan wird als Experte vermarktet: ein Markenbild, feste Videoserien, Hilfe vor Werbung. |
| 04 | Die Social-Media-Strategie | Drei Säulen, Instagram und Facebook zuerst, ein fertiger Plan für vier Wochen. |
| 05 | Produktion & Automatisierung | Acht Schritte. Routine wird automatisiert, KI liefert geprüfte Entwürfe, Stefan gibt alles frei. |
| 06 | Kampagnen & Leads | Drei Kampagnen mit je einem Ziel und einem Anfrageweg. Plattformregeln sind eingeplant. |
| 07 | Die Lead Journey | Acht Stationen von der Anzeige bis zur Nachverfolgung, mit Datenschutz im Entwurf. |
| 08 | Growth Intelligence | Sechs Kennzahlen. Entscheidend sind Gespräche und Kosten je qualifiziertem Lead. |
| 09 | Der 90-Tage-Plan | Vorbereiten, veröffentlichen, auswerten, entscheiden. Ohne Erfolgsgarantie. |
| 10 | Angebot & nächster Schritt | Aufgabenteilung, mögliche Pilotleistungen, zusätzliche Kostenarten, Start mit einem Gespräch. |

Die frühere Biografie-Strecke ist entfallen. Stefans Herkunft kommt nur noch als Begründung der
Differenzierung vor (Kapitel 02 und 03).

## Die fünf Demonstrationen

1. **Redaktionskalender** (Kapitel 04): vier Wochen, 21 Inhalte, Filter nach Art, Detailansicht je Eintrag.
2. **Drehtag-Rechner** (Kapitel 05): Regler für die Zahl der Themen, daraus abgeleitete Formate und Wochen. Rechenbeispiel, keine Zusage.
3. **Kampagnen** (Kapitel 06): drei umschaltbare Konzepte mit Anzeigen-Entwurf (Feed/Story) und Steckbrief, dazu der Vergleich der drei Anfragewege.
4. **Lead Journey** (Kapitel 07): acht Stationen, je vier Sichten (Interessent, Automatisierung, Stefan, Messung). „Ablauf abspielen“ startet nur auf Klick und stoppt bei jeder Eingabe.
5. **Performance-Cockpit** (Kapitel 08): Kennzahlen, Trichter und Bewertung für drei Demo-Kampagnen. Alle Werte sind frei erfunden und als Demo gekennzeichnet.

Alle Demonstrationen sind Pitch-Visualisierungen ohne Datenanbindung.

## Kennzeichnung der Aussagen

| Kennzeichen | Bedeutung |
|---|---|
| Ist-Stand | Aus team-neudorf.de und dem Instagram-Profil |
| Laut Plattform-Doku | Aus Hilfeseiten von Meta oder Google (siehe Quellen) |
| Unsere Hypothese | Begründete Einschätzung, nicht belegt |
| Unser Vorschlag | Konzept der Agentur |

## Recherche und Quellen (Stand 19.11.2026)

**Einschränkung:** Die Seiten von Meta, Google und die Gesetzestexte waren aus der Entwicklungsumgebung
nicht im Volltext abrufbar. Alle Angaben stammen aus Suchergebnis-Auszügen der genannten offiziellen
Seiten. Vor einer Verwendung gegenüber Dritten und vor jedem Kampagnenstart sind sie im Original und im
Werbekonto zu prüfen. Das ist keine rechtliche Prüfung.

In der Präsentation verwendet:

- Meta-Lead-Formulare verlangen einen Link zur Datenschutzerklärung:
  https://www.facebook.com/business/help/1019886738092553
- Formulartyp mit zusätzlichem Prüfschritt („Higher Intent“): https://www.facebook.com/business/help/375478503258484
- Leads als Download, über Partner-Anbindung oder Schnittstelle; Download nur 90 Tage:
  https://www.facebook.com/business/help/734933888443065
- Keine Abfrage von Gesundheits-, Finanz- oder Versicherungsdaten in Lead-Formularen ohne Erlaubnis von Meta:
  https://transparency.meta.com/policies/ad-standards/
- Keine Behauptung oder Andeutung persönlicher Merkmale in Anzeigen:
  https://transparency.meta.com/policies/ad-standards/objectionable-content/privacy-violations-personal-attributes/
- Planung von Beiträgen, Reels und Stories in der Meta Business Suite:
  https://www.facebook.com/business/help/1170295510042639
- Google: Verifizierung für Finanzdienstleistungs-Anzeigen in Deutschland:
  https://support.google.com/adspolicy/answer/12390454

Hintergrund, nicht als Tatsache in der Präsentation behauptet:

- Metas Anzeigenkategorie für Finanzprodukte: Pflicht für die USA belegt, für Versicherungsanzeigen in
  Deutschland offen. In der Präsentation als Hypothese gekennzeichnet.
  https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/special-ad-category
- Meta-Richtlinie Finanz- und Versicherungsprodukte:
  https://transparency.meta.com/policies/ad-standards/restricted-goods-services/financial-services/
- Lead-Abruf per Webhook und Schnittstelle, nötige Berechtigungen:
  https://developers.facebook.com/documentation/ads-commerce/marketing-api/guides/lead-ads/quickstart/webhooks-integration
- Recht, nur als Prüfauftrag: DSGVO Art. 6, 7, 9, 13, 28; § 7 UWG (Einwilligung für Werbeanrufe und
  E-Mail-Werbung); § 15 VersVermV (Erstinformation); § 34d GewO.
- Hinweise von Instagram zu Empfehlungen (Originalinhalte, keine Wasserzeichen):
  https://creators.instagram.com/blog/tips-for-improving-your-reach

Nicht verifiziert und deshalb nicht behauptet: Marktgrößen, Abschlussquoten, typische Lead-Kosten,
Reichweiten, technische Limits der Instagram-Schnittstelle, Partnerstatus einzelner Automatisierungswerkzeuge.

## Aufbau

| Pfad | Inhalt |
|---|---|
| `src/data/vision.ts` | Sämtliche Texte und Strukturen aller Kapitel und Demonstrationen |
| `src/pages/index.astro` | Die Präsentation: Hero, Kapitel 01–10, Bedienelemente |
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
Station (35 Stationen), nichts läuft von selbst weiter.

| Taste | Wirkung |
|---|---|
| `→` `Bild ab` `Leertaste` | nächste Station |
| `←` `Bild auf` | vorherige Station |
| `1` – `9`, `0` | direkt zu Kapitel 01–09 bzw. 10 |
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

## Geprüft (Creative Direction 02)

- `npm run check`: 0 Fehler · `npm run build`: 2 Seiten
- Chromium bei 390, 768, 1440 und 1920 px: kein horizontaler Überlauf, keine Konsolenfehler,
  bei 1440 und 1920 passt jede Station in einen Bildschirm
- Alle fünf Demonstrationen, Tabs, Filter, Kapitelübersicht, Präsentationsmodus und Tastatur automatisiert durchgespielt
- Keine Anfragen an fremde Server, lesbar ohne JavaScript, reduzierte Bewegung
- Screenshots liegen lokal unter `screenshots/digital-vision/cd02/` (nicht im Repository)

Nicht geprüft: Safari und Firefox, echte Mobilgeräte, Beamer-Auflösungen unter 1280 px Breite.

## Offene Freigaben und Punkte

1. **Push und Deployment** dieser Überarbeitung.
2. **Recherche im Original prüfen** (siehe Einschränkung oben), besonders die Regeln für Versicherungswerbung.
3. **Rechtliche Prüfung** von Datenschutzhinweisen, Einwilligungstexten, Erstinformation und Werbeaussagen
   durch eine Fachperson vor jedem echten Start.
4. **Ist-Stand und Hypothesen** in Kapitel 01 und 02 mit Stefan abgleichen: Sie beruhen auf dem Blick von außen.
5. **Porträt und Logo:** Verwendung durch Stefan Neudorf bestätigen. Es gibt nur ein Originalfoto; alle
   Cover-, Anzeigen- und Profilmotive sind daraus abgeleitete Platzhalter.
6. **Absender:** Agenturname und Kontaktdaten fehlen bewusst, sie wurden nicht erfunden.
7. **Ansprache:** Hero und Abschlussfragen sprechen Stefan mit „du“ an. Bitte bestätigen.
8. **Preise:** Die Präsentation nennt keine Beträge. Die Demo-Werte im Cockpit sind keine Budgetempfehlung.
9. **Werkzeuge:** Für CRM, Terminbuchung und Automatisierung ist noch nichts ausgewählt oder eingerichtet.
