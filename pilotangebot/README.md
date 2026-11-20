# Team Neudorf · 90-Tage-Pilotangebot

Eigenständiges Kundenangebot für Stefan Neudorf (Team-Neudorf Versicherungen), passend zur Präsentation
„Digital Vision & Growth“. Eigener Build, eigene Abhängigkeiten. Die Präsentation (`digital-vision/`) und
die Versicherungswebsite (Repository-Stamm) werden nicht berührt.

Status: **Entwurf mit Platzhaltern**, nicht veröffentlicht, `noindex`, kein Deployment.

## Lokal aufrufen

```bash
cd pilotangebot
npm install
npm run dev       # http://localhost:4600
npm run build     # statischer Build nach pilotangebot/dist/
npm run preview   # gebauten Stand ansehen, http://localhost:4600
```

**Als PDF:** Seite im Browser öffnen, oben „Als PDF speichern“ klicken (oder Strg/Cmd + P) und
„Als PDF speichern“ wählen, Format A4, Hintergrundgrafiken an. Die Druckfassung hat ein dunkles
Deckblatt und helle Folgeseiten mit Navy- und Gold-Akzenten, derzeit rund 9 Seiten.

## Inhalt

| Abschnitt | Inhalt |
|---|---|
| Deckblatt | Kernaussage, Empfänger, Platzhalter für Absender, Angebotsnummer, Datum, Gültigkeit |
| 01 Ausgangslage und Ziel | Vision aus der Präsentation, Pilot als Aufbau- und Testphase |
| 02 Leistungsumfang | Strategie und Aufbau, KI-Content (ab Monat 2 bis zu 8 Reels und 4 Grafik-/Karussellbeiträge pro Monat), Social Media (ein Hauptkanal), Lead-Erfassung, Meta-Testkampagne (bis zu 2 Creatives), Reporting; Liste „Nicht enthalten“ |
| 03 Zeitplan | Monat 1 Aufbau, Monat 2 Regelbetrieb, Monat 3 Auswertung und Entscheidung; Laufzeit ab Kick-off |
| 04 Investition | Drei getrennte Positionen, Budgettabelle, Hinweis „rechnerisches Gesamtbudget, keine feste Rechnung“, Steuerhinweis |
| 05 Budgetregeln | Technikbudget max. 350 €/Monat und Meta-Werbebudget max. 300 €/Monat: Obergrenze, Freigabe, direkte Abrechnung, keine Pauschale |
| 06 Mitwirkung und Freigaben | Vier-Schritte-Ablauf, zwei Werktage Prüfzeit, eine Korrekturschleife, keine stillschweigende Freigabe, keine KI-Stimme ohne Zustimmung |
| 07 Erwartungen und Grenzen | Keine Garantien, keine bestehenden Livekampagnen, keine Rechtsberatung |
| 08 Ende nach 90 Tagen | Automatisches Ende, keine Verlängerung, Pilotpreis nur einmalig, Folgeangebot neu kalkuliert, kein Folgepreis genannt |
| 09 Konditionen und Annahme | Laufzeit, Honorar, Zahlungsbedingungen (Platzhalter), Unterschriftsfelder |

## Platzhalter vor dem Versand

Im Angebot gelb markiert in eckigen Klammern:

- `[Agenturname, Anschrift, Ansprechpartner]` (Deckblatt) und `[Agentur, Name]` (Unterschrift)
- `[Angebotsnummer]`, `[Datum]` des Angebots, `[Datum]` Gültig bis
- `[Datum Kick-off]` bzw. Laufzeitbeginn (Abschnitte 03 und 09)
- Rechnungsstellung, z. B. monatlich im Voraus oder zum Monatsende
- Zahlungsziel, z. B. 14 Tage
- Vertragsgrundlagen: AGB, Auftragsverarbeitungsvertrag (AVV), Nutzungsrechte an Inhalten

Ebenfalls zu klären, im Text bewusst offen gelassen:

- Umsatzsteuer-Status der Agentur (zum Beispiel Kleinunternehmerregelung). Formuliert ist „zuzüglich
  gesetzlicher Umsatzsteuer, sofern sie anfällt“.
- Konkreter Veröffentlichungsumfang in Monat 1, festzulegen im Kick-off.
- Welcher Hauptkanal betreut wird.

Vor dem Versand sollten Vertragsdetails und rechtliche Formulierungen geprüft werden. Das Angebot enthält
keine rechtliche Prüfung.

## Dateien

| Pfad | Zweck |
|---|---|
| `package.json`, `package-lock.json` | Eigene Abhängigkeiten (Astro, Schriften), Port 4600 |
| `astro.config.mjs`, `tsconfig.json`, `.nvmrc`, `.gitignore` | Build-Konfiguration |
| `src/pages/index.astro` | Angebotsseite mit allen Inhalten |
| `src/styles/angebot.css` | Gestaltung in der Designsprache der Präsentation, inklusive Druck-/PDF-Regeln |
| `src/assets/logo.png`, `src/assets/avatar.png` | Kopien von Logo und Porträt aus `digital-vision/` |
| `public/favicon.svg` | Kopie des Favicons |
| `public/robots.txt` | Nicht indexieren |
| `README.md` | Diese Dokumentation |
