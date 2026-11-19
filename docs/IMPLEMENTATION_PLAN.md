# Team-Neudorf – Umsetzungsplan & Stand Phase 1 (Website)

Stand: 19. November 2026 · Status: **lokal lauffähig, nicht veröffentlicht**

## 1. Ausgangslage
- Repository war leer. Die Live-Website www.team-neudorf.de (statisches HTML, 30 Seiten, zwei PHP-Formulare) wurde vollständig abgerufen und liegt unverändert unter `legacy/` als Migrationsquelle.
- Designreferenzen: Von GetLayers waren nur die öffentlichen Kurzbeschreibungen lesbar (Noema: „A portrait dissolving into slow-drifting light against deep navy, split by a towering serif headline“; Kelder: „deep-blue … halftone dots pulse and silk lines draw themselves“). Es wurden **keine** Premium-Dateien, Prompts oder Quelltexte verwendet – die Umsetzung ist eigenständig.

## 2. Entscheidungen
| Thema | Entscheidung | Grund |
|---|---|---|
| Stack | Astro (statisch), TypeScript, reines CSS, kein UI-Framework | schnell, wartbar, kein Tracking, läuft auf jedem Webspace |
| URLs | `build.format: 'file'` → alle bisherigen `…/seite.html`-Adressen bleiben 1:1 | SEO-Werte bleiben erhalten, keine inhaltlichen Redirects nötig |
| Inhalte | Unterseiten wörtlich aus `legacy/` migriert (`scripts/migrate-legacy.py`), Startseite neu komponiert aus vorhandenen Texten | keine erfundenen Fach- oder Produktaussagen |
| Farben | ausschließlich Werte aus dem bisherigen Stylesheet/Logo (#011D37, #08223b, #0b2440, #0f2f52, #143d6b, #d9b25a/#D4AB5A, #f6f4ef …) | Branding bleibt, keine Fantasie-Hexwerte |
| Schrift | Instrument Serif (Editorial-Headlines), Inter (Text), JetBrains Mono (Labels) – lokal gehostet via npm | keine Google-Fonts-Verbindung, DSGVO-freundlich |
| Claim | Hero nutzt die bestätigten Markenaussagen „Versicherung. Aber persönlich.“ und „Persönlich. Verständlich. Vor Ort.“ | „Sicherheit beginnt mit Verstehen.“ ist laut Brief nicht freigegeben |
| Porträt | durchgehend das echte Foto `stefan-portrait.jpg`; das Kompositbild `stefan.jpg` (Logo-Wand) wird nicht mehr verwendet | Vorgabe „authentische Porträts, keine KI-Anmutung“ |
| Formulare | senden unverändert an `kontakt.php` / `schaden.php`; bei Nichterreichbarkeit ehrliche Meldung + vorbereitete E-Mail/Telefon | kein Fake-Versand |
| Consent-Banner | entfällt vorerst: keine Cookies, keine Drittinhalte, kein Analytics | erst mit Phase 3 wieder nötig |

## 3. Noema × Kelder – wo was sichtbar ist
- **Noema:** Start-Hero (Porträt löst sich in driftendes Licht auf, hohe Serif-Headline schneidet ins Bild), Biografie-Abschnitt als helle Editorial-Fläche mit Zeitstrahl und Zitat, Abschluss-Headline.
- **Kelder:** Navy-Layer, Haarlinien-Raster für Karten, Mono-Indexzahlen, Berufsgruppen-Index, Vertrauens-Leiste, Halftone-Punktfelder (Canvas, pulsierend) und Silk-Lines, die sich beim Scrollen zeichnen (Bereichs-Überleitung, Ablauf, CTA-Bänder) – auf **allen** Unterseiten.
- Kein Dashboard, keine Kennzahlen, keine Live-Widgets.

## 4. Seitenumfang (28 Seiten)
Start · Öffentlicher Dienst · Berufsgruppen (+ 10 Berufsgruppen-Seiten) · Leistungen · Anwartschaft · Aktuelles · Privatkunden · Firmenkunden · Über uns · Versicherungsmakler Mechernich · Kontakt · Schaden melden · Danke-Seiten · Impressum · Datenschutz · Erstinformation · 404.

## 5. Geprüft (lokal, `astro preview`)
- `astro check`: 0 Fehler · `astro build`: 28 Seiten.
- Screenshots 390 / 768 / 1440 px visuell kontrolliert (Start, Polizei, Öffentlicher Dienst, Kontakt, Über uns); alle 28 Seiten automatisch auf horizontalen Überlauf geprüft (keiner).
- Mobiles Menü (Öffnen, Escape, Fokusführung), Mega-Menü, Formular-Fallback, `prefers-reduced-motion` (alle Inhalte sichtbar, keine Animation) und Betrieb ohne JavaScript (alle Inhalte sichtbar, Formular-POST nativ).
- Nicht geprüft: Lighthouse-Messwerte, echte Geräte, Screenreader-Durchlauf, `.htaccess` auf dem Zielserver.

## 6. Offene Punkte vor dem Livegang (echte Blocker)
1. **Formular-Skripte:** `kontakt.php` und `schaden.php` liegen nur auf dem bisherigen Server und müssen beim Deployment erhalten bleiben bzw. mit übertragen werden. Lokal ist der Versand deshalb nicht testbar.
2. **Hosting/Deployment:** Zugang und Servertyp unbekannt; `public/.htaccess` (https+www, 404, Caching) ist für Apache vorbereitet, aber ungetestet.
3. **Rechtstexte:** Impressum, Datenschutz und Erstinformation sind unverändert übernommen und **nicht rechtlich geprüft**. Die Datenschutzerklärung muss an den neuen Stand angepasst werden (lokale Schriften, kein Consent-Banner, weiterhin Microsoft Bookings/WhatsApp-Links). Freigabe u. a. für die Wortwahl „anbieterübergreifend/unabhängig“ nötig.
4. **Fachliche Freigabe:** Alle Versicherungsinhalte stammen wörtlich von der bisherigen Seite; die neu zusammengestellten Startseiten-Texte (Themenlisten der drei Bereiche, vierter Ablaufschritt, Zeitstrahl) bitte durch Stefan Neudorf bestätigen lassen.
5. **Bildrechte & Qualität:** Porträt liegt nur in 900 × 1125 px vor – für den großen Hero wird die Originaldatei in höherer Auflösung benötigt. Nutzungsrechte an Porträt und Bereichsfotos bestätigen.
6. **Aktuelles:** Stand 26. Oktober 2026 – vor Livegang aktualisieren.

## 7. Bewusst nicht enthalten
Social Media (Phase 2), Analytics/Dashboard (Phase 3), neue Lebenssituations-Landingpages (z. B. Referendariat/Anwärter – benötigen fachlich freigegebene neue Texte).

## 8. Erweiterung 03 – Signature Motion (Stand 19. November 2026, lokal, nicht gepusht)
Umsetzung ohne neue Abhängigkeit: CSS-Transforms, SVG und ein kleines Skript (`src/scripts/motion.ts`). Three.js/WebGL wurde bewusst nicht eingesetzt – die Tiefe entsteht aus versetzten Ebenen, Perspektive und Licht; ein 3D-Framework hätte hier nur Ladezeit gekostet.

**Vorher (gemessen):** Hero-Einstieg, driftendes Licht, Halftone, Reveal, zeitgesteuerte Silk-Lines, Karten-Hover (Zoom) funktionierten. Es fehlten: Pointer-/Scroll-Reaktion im Hero, räumliche Karten, scrollgekoppelter Zeitstrahl/Ablauf, Menü-Übergang; „Über uns“ war Fließtext.

**Ergänzt**
- Hero: sechs Ebenen (Licht, Goldrahmen, Porträt, Halftone, Headline, Bildlegende) mit eigener Tiefe; Pointer-Parallaxe und leichte Perspektivdrehung (Desktop), sanfte Eigenbewegung (Touch), Scroll-Parallaxe; Einstieg: Porträt aus der Unschärfe, Rahmen zeichnet sich, Zeilen steigen auf.
- Übergang Hero → Bereiche: Horizontlinie und Silk-Lines zeichnen sich an den Scrollfortschritt gekoppelt; Überschriften erscheinen in der Reihenfolge Eyebrow → Headline (Maske) → Text; Karten gestaffelt mit Bildvorhang.
- Bereichskarten: Neigung max. 3° (große Karte 1,6°), Licht folgt dem Zeiger, Schatten wandert mit; gleichwertiger Zustand bei Tastatur-Fokus; Bild-Parallaxe.
- Über uns: scrollgeführte Geschichte aus den drei bestehenden Abschnitten (Texte unverändert), mitlaufendes Porträt, Fortschrittslinie, Stationsnavigation. Startseiten-Zeitstrahl ebenfalls scrollgekoppelt.
- Beratungsweg: Linie folgt dem Scrollen, Knoten/Etappen werden nacheinander aktiv. Buttons mit Lichtkante, Pressed- und Fokuszustand; Kontaktzeilen mit Richtungs-Feedback; mobiles Menü als weicher Vorhang; mobiler Schnellkontakt (Anrufen · WhatsApp · Gespräch anfragen) zwischen Hero und Abschluss.

**Geprüft (lokal, Chromium headless ohne Grafikkarte)**
- `astro check` 0 Fehler, Build 28 Seiten, 84 Seitenaufrufe (28 × 390/768/1440) ohne horizontalen Überlauf und ohne Konsolenfehler.
- Hero bei 390×844, 768×1024, 1440×900: Headline, Gesicht und primärer CTA vollständig im ersten Bildschirm, CTA nicht verdeckt.
- `prefers-reduced-motion`: keine laufenden Animationen, keine Parallaxe, alle Inhalte sichtbar. Ohne JavaScript: alle Inhalte sichtbar, Linien gezeichnet.
- Tastatur: Fokusreihenfolge Header → Hero-CTAs → Karten, überall sichtbarer Fokus. Touch: Karten ohne Hover nutzbar, Schnellkontakt erscheint/verschwindet korrekt.
- Lighthouse (mobil, lokale Vorschau, daher ohne echte Netzlatenz): Start 100/100/100/100, Über uns 99/100/100/100, Polizei 99/100/100/100, Kontakt 100/100/100/100 (Performance/Accessibility/Best Practices/SEO); CLS 0–0,001.
- Bildrate im Headless-Browser ohne GPU: Desktop-Hero ca. 30 fps (vor Optimierung 11), 390 px 60 fps. **Nicht gemessen:** echte Geräte mit Grafikkarte, Safari/Firefox, Screenreader.

**Neue Kurztexte zur Freigabe:** Schnellkontakt-Beschriftungen „Anrufen“, „WhatsApp“, „Gespräch anfragen“; Navigationsbezeichnung „Stationen“.

## 9. Cloudflare-Pages-Vorschau (Testumgebung)
**Einstellungen im Cloudflare-Dashboard:** Framework Astro · Build-Befehl `npm run build` · Ausgabeordner `dist` · Node 22 (über `.nvmrc`) · Branch `claude/busy-hopper-kebr8h`. Keine Umgebungsvariablen nötig.

**Vorschau-Modus** (`src/data/env.ts`) ist bei jedem Cloudflare-Pages-Build automatisch aktiv (`CF_PAGES=1`):
- `noindex, nofollow` auf allen Seiten, `robots.txt` sperrt alles, zusätzlich `X-Robots-Tag` für `*.pages.dev` (`public/_headers`).
- Sichtbare Kennzeichnung „Testumgebung · nicht öffentlich“.
- Formulare (Kontakt, Schaden) senden nichts: Hinweis im Formular, beim Absenden klare Meldung mit E-Mail, Telefon und WhatsApp. Kein vorgetäuschter Versand.
- Für einen späteren Livegang auf Cloudflare: Umgebungsvariable `PUBLIC_PREVIEW=false` setzen.

**Verhalten von Cloudflare Pages bei `.html`-Adressen:** `/polizei.html` wird per 308 auf `/polizei` weitergeleitet (Plattformverhalten, nicht abschaltbar). Alle bisherigen Adressen bleiben damit erreichbar; Canonical-Tags zeigen weiter auf die `.html`-Adressen der Hauptdomain. Sollen die `.html`-Adressen im Livebetrieb exakt ohne Weiterleitung ausgeliefert werden, entweder auf dem bisherigen Webspace bleiben (mit `.htaccess`) oder Cloudflare Workers Static Assets mit `html_handling: "none"` nutzen.

**Geprüft mit dem lokalen Cloudflare-Emulator (`wrangler pages dev dist`):** 54 Seitenaufrufe (27 Seiten × 390/1440 px) ohne Überlauf, Konsolen- oder Ladefehler; 26 interne Linkziele erreichbar; eigene 404-Seite; Navigation per Klick und mobilem Menü; Motion aktiv; Formulare senden keinen POST.

**Vor dem produktiven Livegang:** Formular-Backend (bisherige PHP-Skripte auf dem alten Webspace oder Ersatz, z. B. Cloudflare Pages Function mit Mailversand – braucht Anbieterentscheidung und Datenschutzprüfung) · Rechtstexte prüfen und Datenschutzerklärung anpassen · fachliche Freigabe der neuen Kurztexte · Porträt in hoher Auflösung · Aktuelles aktualisieren · Entscheidung Hosting und `.html`-Strategie · Vorschau-Modus abschalten · Domain erst danach umstellen · Test auf echten Geräten/Safari.
