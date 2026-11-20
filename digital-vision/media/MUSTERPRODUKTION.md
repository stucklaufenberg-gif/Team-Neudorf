# Musterproduktion: drei Reel-Beispiele (Higgsfield)

Pitch-Mockups für die Präsentation, keine Veröffentlichung. Jedes Asset bleibt als Konzept gekennzeichnet.

## Stand

| Nr. | Titel | Status | Datei |
|---|---|---|---|
| 01 | Polizei vs. Lehramt | **nicht generiert**: wartet auf Freigabe der Credits | – |
| 02 | Der erste Diensttag | **nicht generiert**: wartet auf Freigabe der Credits | – |
| 03 | Der verlorene Dienstschlüssel | **nicht generiert**: wartet auf Freigabe der Credits | – |

Bis die Clips vorliegen, zeigt die Präsentation in Station 04 und 05 gezeichnete Szenen (HTML/CSS) mit dem
Hinweis „Storyboard · Video folgt“. Die Storyboards sind auch ohne Video vollständig verständlich.

**Higgsfield-Prüfung am 20.11.2026:**

- Verbindung aktiv, Plan „creator“, Guthaben 4.809 Credits.
- Kosten laut Schätzung je Clip (10 s, 9:16, ohne Ton), Modell `cinematic_studio_3_0`:
  - 50 Credits in 720p
  - 130 Credits in 1080p
- Alternative `kling_4_0_flash`: 30 Credits.
- Für alle drei Beispiele in 720p: rund 150 Credits.

## Produktionsregeln

- Navy und Gold als Lichtakzente, realistische, dokumentarische Bildsprache, keine übertriebene KI-Ästhetik.
- Keine Schrift im Video. Text-Hooks und Untertitel kommen als HTML-Ebene in der Präsentation.
- Keine Logos, keine Dienstabzeichen, keine Wappen, keine Kennzeichen.
- Keine erkennbaren realen Personen und **kein Stefan-Double**. Menschen nur von hinten, angeschnitten oder als Hände.
- Kein Ton. Keine künstliche Stimme. Den gesprochenen Hook spricht später Stefan selbst.
- Keine fachlichen Aussagen, Fristen oder Rechtsansprüche im generierten Bild.

## Briefing 01: Polizei vs. Lehramt

- **Format:** 9:16, 10 Sekunden, 720p, ohne Ton
- **Visual Hook:** Split-Screen aus zwei Berufswelten
- **Text-Hook (HTML-Ebene):** „Gleicher Beamtenstatus. Gleiche Absicherung?“
- **Gesprochener Hook (Stefan):** „Warum unterscheiden sich die Versicherungsfragen beim Polizeistart und im Lehramtsreferendariat?“
- **Prompt:**
  > Vertical 9:16 documentary split-screen, two equal halves divided by a thin warm gold line. Left half: a
  > young officer seen from behind putting on a plain dark navy jacket next to the open door of a patrol car
  > at dusk, soft blue ambient light, no insignia, no text, no logos. Right half: a young teacher seen from
  > behind at a green chalkboard in a calm classroom, warm daylight, chalk lines without readable writing.
  > Slow synchronized push-in on both halves. Natural light, realistic skin and fabric, subtle film grain,
  > deep navy shadows with gold highlights. No faces facing camera, no readable text anywhere.
- **Fallback:** Zwei getrennte 9:16-Clips erzeugen und in der Präsentation per CSS nebeneinander setzen,
  falls das Modell keinen sauberen Split-Screen liefert.

## Briefing 02: Der erste Diensttag

- **Format:** 9:16, 10 Sekunden, 720p, ohne Ton
- **Visual Hook:** Unterlagen, Kalender, ein markierter Termin, Nahaufnahme einer Checkliste
- **Text-Hook (HTML-Ebene):** „Deine Verbeamtung steht bevor?“
- **Gesprochener Hook (Stefan):** „Drei Dinge, die du vor deinem ersten Diensttag prüfen solltest.“
- **Prompt:**
  > Vertical 9:16 cinematic editorial macro sequence on a dark navy desk. A hand places an envelope of
  > documents next to a paper wall calendar; a gold pen circles one date. Cut to a close-up of a printed
  > checklist with three empty boxes, a pen tip hovering over the first box. Slow precise camera slide,
  > shallow depth of field, soft window light, gold accents on navy. All paper shows only abstract lines,
  > no readable words or numbers, no logos, no official seals.
- **Hinweis:** Kein Fristdatum und kein Rechtsanspruch im Bild. Die Inhalte nennt Stefan im Video.

## Briefing 03: Der verlorene Dienstschlüssel

- **Format:** 9:16, 10 Sekunden, 720p, ohne Ton
- **Visual Hook:** Ein Schlüssel fällt auf einen Schreibtisch. Kurze Stille. Perspektivwechsel.
- **Text-Hook (HTML-Ebene):** „Dienstschlüssel verloren. Was jetzt?“
- **Gesprochener Hook (Stefan):** „Wann kann ein verlorener Dienstschlüssel eigentlich teuer werden?“
- **Prompt:**
  > Vertical 9:16 cinematic slow motion: a single plain metal key on a simple ring falls onto a dark
  > wooden office desk and bounces once. Hold on the still key for a beat of silence. Then the camera
  > tilts up to an empty office chair and a half-open drawer in soft evening light. Navy shadows, warm
  > gold desk lamp highlights, realistic metal reflections, no people, no text, no logos, no tags with writing.
- **Fachlicher Hinweis:** Die Erklärung (Regress nach § 48 BeamtStG nur bei Vorsatz und grober
  Fahrlässigkeit, Diensthaftpflicht für grobe Fahrlässigkeit, Gewerkschaft prüfen) stammt aus Stefans
  Checkliste. Stefan muss sie vor jeder Veröffentlichung freigeben.

## Einbindung in die Präsentation

1. Clip als MP4 (H.264, ohne Ton, max. 1080 × 1920, Ziel unter 3 MB) speichern unter
   `digital-vision/public/media/reels/<id>.mp4`, Vorschaubild als `<id>.jpg`.
2. In `digital-vision/src/data/vision.ts` beim passenden Konzept `video: '/media/reels/<id>.mp4'` und
   `poster: '/media/reels/<id>.jpg'` eintragen.
3. Die Präsentation zeigt dann einen Abspielknopf. Das Video startet nur auf Klick, stumm, ohne Autoplay.
   Ohne Video bleibt die gezeichnete Szene sichtbar.
4. Manifest unten ergänzen.

## Manifest

| Asset | Herkunft | Tool / Modell | Prompt | Erzeugt am | Freigabe |
|---|---|---|---|---|---|
| Gezeichnete Szenen (Split, Detail, Schlüssel) | eigene HTML/CSS-Grafik | – | – | 20.11.2026 | Pitch-intern |
| Porträt- und Anzeigenmotive | vorhandenes Originalfoto von Stefan (team-neudorf.de) | Zuschnitt | – | – | Nutzung durch Stefan zu bestätigen |
| Reel 01 bis 03 | – | – | siehe Briefings | – | noch nicht erzeugt |
