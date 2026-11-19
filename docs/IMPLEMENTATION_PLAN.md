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
