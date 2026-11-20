# Reel-Manifest: sechs Muster-Reels für Station 06

Die sechs Filme werden extern produziert, ohne Generierung in dieser Entwicklungsumgebung.
Die Galerie in Station 06 ist fertig und erkennt die Dateien beim Build automatisch.

## Ablage

Ordner: `digital-vision/public/media/reels/`

| Slot | Video (Pflicht) | Posterbild (optional) | Thema |
|---|---|---|---|
| Reel 01 | `reel-01-dienstschluessel.mp4` | `reel-01-dienstschluessel.jpg` | Dienstschlüssel verloren |
| Reel 02 | `reel-02-polizei-lehramt.mp4` | `reel-02-polizei-lehramt.jpg` | Polizei vs. Lehramt |
| Reel 03 | `reel-03-erster-diensttag.mp4` | `reel-03-erster-diensttag.jpg` | Der erste Diensttag |
| Reel 04 | `reel-04-dienstunfaehigkeit.mp4` | `reel-04-dienstunfaehigkeit.jpg` | Dienstunfähig während der Ausbildung? |
| Reel 05 | `reel-05-gesundheitsfragen.mp4` | `reel-05-gesundheitsfragen.jpg` | Gesundheitsfragen vor dem PKV-Antrag |
| Reel 06 | `reel-06-lebensphasen.mp4` | `reel-06-lebensphasen.jpg` | Dein Leben verändert sich |

Dateinamen exakt so, kleingeschrieben, ohne Umlaute.

## Verhalten in der Präsentation

- **Datei fehlt:** Der Slot zeigt das gezeichnete Storyboard mit „Storyboard · Film folgt“. Die Auswahlliste zeigt
  „Storyboard“.
- **Datei vorhanden:** Die Auswahlliste zeigt „Film“. Das Smartphone zeigt Posterbild oder Storyboard, dazu einen
  Abspielknopf.
  - Kein Autoplay, kein Vorabladen (`preload="none"`).
  - Die Wiedergabe startet nur auf Klick und zunächst stumm; „Ton an“ erscheint während der Wiedergabe.
- **Datei defekt oder nicht ladbar:** Der Player blendet sich aus, das Storyboard bleibt sichtbar.
- **Beim Wechsel des Reels** stoppt das laufende Video.

## Empfohlene Kodierung

Ziel: unter 6 MB je Film bei 35 bis 45 Sekunden.

```bash
ffmpeg -i quelle.mp4 -vf "scale=1080:1920" -c:v libx264 -crf 24 -preset slow -profile:v high \
  -pix_fmt yuv420p -c:a aac -b:a 128k -movflags +faststart reel-0X-name.mp4
ffmpeg -ss 2 -i reel-0X-name.mp4 -frames:v 1 -q:v 4 reel-0X-name.jpg
```

Für Mobilgeräte reicht notfalls 720 × 1280 (`scale=720:1280`, `-crf 25`).

## Danach

1. `npm run build` im Ordner `digital-vision/`.
2. Prüfen, dass in Station 06 bei jedem gelieferten Reel „Film“ steht.
3. Committen. Nach Freigabe pushen und deployen.

## Status (20.11.2026)

| Slot | Status |
|---|---|
| Reel 01 | Testfilm mit 32,5 s extern vorhanden, wird weiterentwickelt. Noch keine Datei im Projekt. |
| Reel 02 bis 06 | Musterproduktion extern, noch keine Datei im Projekt. |

Alle Filme sind unveröffentlichte Beispielkonzepte. Versicherungs- und Rechtsaussagen braucht vor einer echten
Veröffentlichung die fachliche Freigabe durch Stefan.
