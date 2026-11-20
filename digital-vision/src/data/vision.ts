// Inhalte der Präsentation „Digital Vision & Growth“ – Final Pitch (14 Stationen).
// Hauptbotschaft: Wir übernehmen die digitale Vermarktung von Stefans Expertise, von der Content-Idee bis zur Beratungsanfrage.
// Fachliche Aussagen stammen aus Stefans „Checkliste Beamtenanwärter NRW“ (team-neudorf.de) und brauchen seine Freigabe.
// Keine erfundenen Zahlen, Referenzen, Preise oder Ergebnisse. Mockups sind Konzepte, Dashboard-Werte sind Demo-Daten.

export const tagLabel = { ist: 'Ist-Stand', quelle: 'Mit Quelle', doku: 'Laut Plattform-Doku', hyp: 'Unsere Hypothese', idee: 'Unser Vorschlag', check: 'Aus Stefans Checkliste' } as const;
export type Tag = keyof typeof tagLabel;

export const chapters = [
  { id: 's1', n: '01', title: 'Einstieg', line: 'Deine Expertise verdient mehr Sichtbarkeit.' },
  { id: 's2', n: '02', title: 'Marktpotenzial', line: 'Was Personenmarken in der Branche heute erreichen.' },
  { id: 's3', n: '03', title: 'Unsere Differenzierung', line: 'Creator-Mechanik trifft Versicherungswissen.' },
  { id: 's4', n: '04', title: 'Das Content-Lab', line: 'Der dreifache Hook, live umgeschaltet.' },
  { id: 's5', n: '05', title: 'Drei Reel-Konzepte', line: 'Aus deiner Checkliste, fertig zum Drehen.' },
  { id: 's6', n: '06', title: 'Content-Säulen', line: 'Reichweite, Vertrauen, Conversion.' },
  { id: 's7', n: '07', title: 'Ein Drehtag', line: 'Ein Termin, viele Inhalte.' },
  { id: 's8', n: '08', title: 'Vier Wochen Content', line: 'Ein Plan, der auf Beratung zuläuft.' },
  { id: 's9', n: '09', title: 'Paid Advertising', line: 'Drei Kampagnen, je zwei Creatives.' },
  { id: 's10', n: '10', title: 'Weg zur Anfrage', line: 'Mehrere Einstiege, keine Pflichtschritte.' },
  { id: 's11', n: '11', title: 'Automatisierung', line: 'Zwei Workflows, die wir aufbauen.' },
  { id: 's12', n: '12', title: 'Dein Anteil', line: 'Was du tust und was wir übernehmen.' },
  { id: 's13', n: '13', title: 'Erfolgsmessung', line: 'Wir zählen Gespräche, nicht Likes.' },
  { id: 's14', n: '14', title: '90-Tage-Pilot', line: 'Testen, messen, gemeinsam entscheiden.' },
] as const;

/* ---------- 02 · Marktpotenzial ---------- */
// Wird aus der Recherche befüllt. Jede Zahl braucht Quelle und Datum; ohne Beleg steht „nicht belegt“.
export interface Brand { name: string; handle: string; platform: string; focus: string; reach: string; date: string; source: string; sourceLabel: string }
export const brands: Brand[] = [
  { name: 'Platz 1 im Ranking', handle: 'finance_made_simple_', platform: 'Instagram', focus: 'Versicherungsmakler', reach: '379.000', date: '20.10.2026', source: 'https://www.versicherungenmitkopf.de/allgemein/die-besten-versicherungs-instagrammer-deutschlands', sourceLabel: 'VMK-Studie' },
  { name: 'Platz 2 im Ranking', handle: 'versicherungenmitkopf', platform: 'Instagram', focus: 'Versicherungsmakler', reach: '342.000', date: '20.10.2026', source: 'https://www.versicherungenmitkopf.de/allgemein/die-besten-versicherungs-instagrammer-deutschlands', sourceLabel: 'VMK-Studie' },
  { name: 'Zielgruppe Lehrkräfte', handle: 'finanzexperten_fuer_lehrer', platform: 'Instagram', focus: 'Versicherungsmakler', reach: '59.600', date: '20.10.2026', source: 'https://www.versicherungenmitkopf.de/allgemein/die-besten-versicherungs-instagrammer-deutschlands', sourceLabel: 'VMK-Studie' },
  { name: 'Zielgruppe Beamte', handle: 'beamtenhahn', platform: 'Instagram', focus: 'Versicherungsvertreter (DBV)', reach: '51.300', date: '20.10.2026', source: 'https://www.versicherungenmitkopf.de/allgemein/die-besten-versicherungs-instagrammer-deutschlands', sourceLabel: 'VMK-Studie' },
  { name: 'Zielgruppe Beamte', handle: 'beamtenberater_com', platform: 'Instagram', focus: 'Versicherungsmakler', reach: '9.800', date: '20.10.2026', source: 'https://www.versicherungenmitkopf.de/allgemein/die-besten-versicherungs-instagrammer-deutschlands', sourceLabel: 'VMK-Studie' },
  { name: 'Zielgruppe Polizei', handle: 'der.finanzcop', platform: 'Instagram', focus: 'Versicherungsmakler', reach: '5.700', date: '20.10.2026', source: 'https://www.versicherungenmitkopf.de/allgemein/die-besten-versicherungs-instagrammer-deutschlands', sourceLabel: 'VMK-Studie' },
];
export const potentialTakeaways = [
  'Die Studie zählt 34 deutschsprachige Versicherungs-Accounts, neun davon mit 100.000 Followern oder mehr.',
  'Berufsgruppen sind eigene Nischen: Lehrkräfte, Beamte und Polizei haben bereits eigene Accounts.',
  'Für NRW-Beamte mit einem Berater vor Ort ist der Platz noch frei. Das ist unsere Einschätzung, keine Marktzahl.',
];

/* ---------- 03 · Differenzierung ---------- */
export const pillarsOfPitch = [
  { title: 'Creator-Mechaniken', text: 'Hooks, Serien, Schnittrhythmus: was auf Instagram funktioniert.' },
  { title: 'Versicherungswissen', text: 'Beihilfe, Heilfürsorge, Dienstunfähigkeit: fachlich sauber, von Stefan freigegeben.' },
  { title: 'Kundengewinnung', text: 'Jeder Inhalt hat ein Ziel: Checkliste, Gespräch oder Termin.' },
  { title: 'Professionelle Produktion', text: 'Skript, Regie, Dreh und Schnitt aus einer Hand.' },
];
export interface MechanicRef { name: string; what: string; url: string; note: string }
export const mechanicRefs: MechanicRef[] = [
  { name: 'Creator Class', what: 'Instagram-Account creatorclass.de, Inhalte aus der bereitgestellten Bildschirmaufnahme.', url: 'https://www.instagram.com/creatorclass.de/', note: 'Referenz für Content-Mechanik, nicht für Versicherungsfragen.' },
  { name: 'Christian Wolf', what: 'Mitgründer von MORE Nutrition, bekannt für Kurzvideo-Formate mit hoher Reichweite.', url: 'https://blackforestspace.de/speaker/christian-wolf/', note: 'Referenz für Content-Mechanik, keine Versicherungsexpertise.' },
];
export const observations = [
  { time: '00:50–01:06', seen: 'Split-Screen: oben ein Zuhörer, unten ein Sprecher, Nutzenfrage als Titel, laufende Untertitel.', ours: 'Berufsgruppen-Duell: Polizei vs. Lehramt' },
  { time: '03:55–04:59', seen: 'Serie mit Zuschauerfrage, Fallbeispiel und klarer Diagnose in kurzen Sätzen.', ours: 'Der Beamten-Check: ein Punkt der Checkliste pro Folge' },
  { time: '06:17–07:26', seen: 'Drei Varianten desselben Inhalts nebeneinander, die Unterschiede werden erklärt.', ours: 'Ein Thema, drei Hooks (Station 04)' },
];
export const hookFacts: { text: string; source: string; url: string }[] = [
  { text: 'Die ersten drei Sekunden eines Reels entscheiden, ob jemand weiterwischt.', source: 'Instagram Creators, FAQ', url: 'https://creators.instagram.com/faq' },
  { text: 'Der Hook gehört in die ersten sechs Sekunden, das Kernversprechen möglichst in die ersten drei.', source: 'TikTok for Business, Creative Best Practices', url: 'https://ads.tiktok.com/help/article/creative-best-practices' },
];

/* ---------- 04 · Content-Lab ---------- */
export const hookLayers = [
  { id: 'visual', label: 'Visual Hook', short: 'Was man sieht' },
  { id: 'spoken', label: 'Spoken Hook', short: 'Was man hört' },
  { id: 'text', label: 'Text Hook', short: 'Was man liest' },
] as const;
export const hookTopic = 'Heilfürsorge oder Beihilfe? Ein Thema, drei Einstiege.';
export const hookVariants = [
  { id: 'vergleich', label: 'Berufsvergleich', scene: 'cards', visual: 'Stefan steht zwischen zwei Karten „POLIZEI“ und „LEHRAMT“, kurzer Split-Frame ab dem ersten Bild.', spoken: '„Zwei Leute starten als Beamtenanwärter in NRW. Aber die Krankenversicherung ist nicht automatisch gleich geregelt.“', text: 'POLIZEI ≠ LEHRAMT?', cta: 'Checkliste im Profil', why: 'Format „Berufsgruppen-Duell“, abgeleitet aus dem beobachteten Split-Screen-Reel.' },
  { id: 'frage', label: 'Frage / Denkfehler', scene: 'person', visual: 'Stefan direkt in die Kamera, Blickkontakt, eine große Untertitelzeile.', spoken: '„Du denkst, als Beamter ist die Krankenversicherung überall gleich geregelt? Polizei und Lehramt starten unterschiedlich.“', text: 'Überall gleich geregelt?', cta: 'Frage in die Kommentare', why: 'Format „Die unerwartete Konsequenz“: eine verbreitete Annahme, sachlich aufgelöst, ohne Panik.' },
  { id: 'check', label: 'Checkliste', scene: 'detail', visual: 'Die gedruckte NRW-Checkliste in der Hand, ein Punkt wird angestrichen.', spoken: '„Punkt zwei meiner Checkliste klärt, ob für dich Heilfürsorge oder Beihilfe gilt.“', text: 'Heilfürsorge oder Beihilfe? Punkt 2.', cta: 'Checkliste holen', why: 'Format „Der Beamten-Check“: Serie mit einem Punkt pro Folge, das Dokument als sichtbarer Beleg.' },
] as const;

/* ---------- 05 · Drei Reel-Konzepte ---------- */
export const concepts = [
  {
    id: 'a', tab: 'A', title: 'Polizei vs. Lehramt', scene: 'cards', video: '', poster: '', length: '25–35 s', format: 'Berufsgruppen-Duell', origin: 'Split-Screen-Reel, Aufnahme 00:50–01:06',
    hook: 'Gleiche Verbeamtung. Gleiche Absicherung?',
    spoken: 'Du wirst Beamtenanwärter in NRW. Aber weißt du, welche Krankenversicherungsregeln für deine Laufbahn gelten?',
    opening: 'Zwei Akten nebeneinander: „POLIZEI“ und „LEHRAMT“, Stefan dazwischen.',
    times: ['0–4 s', '4–15 s', '15–20 s', '20–25 s', '25–35 s'],
    board: ['Visual Hook: zwei Akten, Text Hook steht, Stefan stellt die Frage', 'Stefan: Polizeivollzugsdienst NRW mit Heilfürsorge, Lehramt mit Beihilfe', 'Die gedruckte Checkliste in die Kamera', 'Drei Fragen eingeblendet: Welche Laufbahn? Welcher Status? Wann beginnt der Dienst?', 'CTA: „Die NRW-Checkliste findest du über mein Profil.“'],
    core: 'Im Polizeivollzugsdienst NRW gibt es freie Heilfürsorge, im Lehramt in der Regel 50 Prozent Beihilfe plus private Krankenversicherung. Wer Heilfürsorge hat, denkt an eine Anwartschaft für später.',
    cta: 'Checkliste ansehen', goal: 'Reichweite bei Anwärtern, Einstieg in die Checkliste',
  },
  {
    id: 'b', tab: 'B', title: 'Drei Prüfpunkte vor dem ersten Diensttag', scene: 'detail', video: '', poster: '', length: '25–40 s', format: 'Countdown mit drei Karten', origin: 'Talking Head mit eingeblendeten Belegen, Aufnahme 01:12–02:16',
    hook: 'Verbeamtung in Sicht?',
    spoken: 'Bevor du deine Ernennungsurkunde bekommst: Diese drei Fragen würde ich zuerst prüfen.',
    opening: 'Kalenderblatt mit markierter „Ernennung“, Stefan legt drei Karten auf den Tisch.',
    times: ['0–4 s', '4–12 s', '12–20 s', '20–28 s', '28–40 s'],
    board: ['Visual Hook: Kalender und drei Karten, Text Hook, Stefans Frage', 'Karte 1: bestehende Verträge nicht vorschnell kündigen', 'Karte 2: Gesundheitsfragen vorbereiten, Leistungsauszug anfordern', 'Karte 3: private Krankenversicherung ab dem Tag der Ernennungsurkunde', 'CTA: „Die ausführliche Checkliste gibt es kostenlos, gern gehen wir sie gemeinsam durch.“'],
    core: 'Bestehende Verträge wie eine Berufsunfähigkeitsversicherung nicht kündigen, bevor die neue Absicherung steht. Für die Gesundheitsfragen den Leistungsauszug nach § 305 SGB V anfordern. Die private Krankenversicherung auf den Tag der Ernennungsurkunde legen.',
    cta: 'Ganze Checkliste holen', goal: 'Vertrauen durch konkreten Nutzen, Download der Checkliste',
  },
  {
    id: 'c', tab: 'C', title: 'Der verlorene Dienstschlüssel', scene: 'key', video: '', poster: '', length: '30–40 s', format: 'Die unerwartete Konsequenz', origin: 'Kontroverse These mit konkretem Beispiel, Aufnahme 03:03–03:47',
    hook: 'Dienstschlüssel verloren. Was jetzt?',
    spoken: 'Wann kann ein verlorener Dienstschlüssel eigentlich teuer werden?',
    opening: 'Ein Schlüssel fällt auf den Schreibtisch. Stille. Perspektivwechsel auf Stefan.',
    times: ['0–2 s', '2–5 s', '5–18 s', '18–32 s', '32–40 s'],
    board: ['Visual Hook: Schlüssel fällt, Aufprall, eine Sekunde Stille', 'Text Hook, Stefan stellt die Frage', 'Drei Fragen auf der Tafel: Was ist passiert? Wie fahrlässig? Was ist schon abgesichert?', 'Einordnung ohne Pauschalaussage: wann Regress droht, was die Diensthaftpflicht abdeckt', 'CTA: „Wenn du unsicher bist, lass uns kurz drüber sprechen.“'],
    core: 'Regress droht bei Vorsatz und grober Fahrlässigkeit (§ 48 BeamtStG). Versicherbar ist die grobe Fahrlässigkeit über eine Diensthaftpflicht. Vorher prüfen, was die Gewerkschaft schon abdeckt.',
    cta: 'Gespräch anfragen', goal: 'Beratungsbedarf wecken, Kontaktaufnahme',
  },
] as const;

/* ---------- 06 · Content-Säulen ---------- */
export const pillars = [
  { id: 'reichweite', n: '01', title: 'Reichweite', effect: 'Neue Menschen erreichen', text: 'Fragen, Vergleiche und Alltagssituationen, die jeder im Dienst kennt.', formats: ['Polizei vs. Lehramt', 'Dienstschlüssel verloren', 'Was ändert sich am ersten Diensttag?'] },
  { id: 'vertrauen', n: '02', title: 'Vertrauen', effect: 'Kompetenz zeigen', text: 'Fachwissen verständlich erklärt, dazu persönliche Einblicke.', formats: ['Kurz erklärt: Öffnungsaktion', 'Frag Stefan', 'So läuft ein Erstgespräch'] },
  { id: 'conversion', n: '03', title: 'Conversion', effect: 'Anfragen auslösen', text: 'Checklisten, konkrete Beratungsfragen und passende Terminangebote.', formats: ['Checkliste für den Start in NRW', 'Drei Fragen vor dem Antrag', 'Termin für Anwärter'] },
] as const;
export const tiles = [
  { img: 'd', pillar: 'reichweite', text: 'Polizei vs. Lehramt' },
  { img: 'b', pillar: 'vertrauen', text: 'Kurz erklärt: Öffnungsaktion' },
  { img: 'ad', pillar: 'conversion', text: 'Checkliste für NRW' },
  { img: 'e', pillar: 'reichweite', text: 'Dienstschlüssel verloren' },
  { img: 'c', pillar: 'vertrauen', text: 'So läuft ein Erstgespräch' },
  { img: 'a', pillar: 'conversion', text: 'Termin für Anwärter' },
] as const;

/* ---------- 07 · Ein Drehtag ---------- */
export const shootTopics = ['Polizei vs. Lehramt', 'Drei Prüfpunkte', 'Dienstschlüssel', 'Öffnungsaktion', 'Dienstunfähigkeit', 'So läuft ein Erstgespräch', 'Frag Stefan', 'Freizeitunfall'];
export const shootOutputs = [
  { id: 'reels', label: 'Reels', hint: 'je Thema ein Video', shape: 'tall' },
  { id: 'hooks', label: 'Hook-Varianten', hint: 'drei Einstiege je Reel', shape: 'tall3' },
  { id: 'stories', label: 'Story-Ausschnitte', hint: 'Kurzfassungen', shape: 'tall3' },
  { id: 'karussells', label: 'Carousels', hint: 'aus den Skripten', shape: 'stack' },
  { id: 'ads', label: 'Anzeigen-Creatives', hint: 'für freigegebene Kampagnen', shape: 'ad' },
] as const;

/* ---------- 08 · Vier Wochen Content ---------- */
export const calTypes = [
  { id: 'reel', label: 'Reels' },
  { id: 'story', label: 'Stories' },
  { id: 'wissen', label: 'Carousels' },
  { id: 'faq', label: 'FAQ' },
  { id: 'cta', label: 'Handlungsaufruf' },
] as const;
export type CalType = (typeof calTypes)[number]['id'];
export const calTypeName: Record<CalType, string> = { reel: 'Reel', story: 'Story', wissen: 'Carousel', faq: 'FAQ', cta: 'Handlungsaufruf' };
export const days = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'] as const;
interface CalItem { d: number; type: CalType; title: string; format: string; to: string }
export const calendar: { theme: string; items: CalItem[] }[] = [
  { theme: 'Polizei oder Lehramt?', items: [
    { d: 0, type: 'reel', title: 'Polizei vs. Lehramt', format: 'Reel, Konzept A', to: 'Checkliste' },
    { d: 1, type: 'story', title: 'Umfrage: Wo startest du?', format: 'Story mit Umfrage', to: 'Antworten für W2' },
    { d: 2, type: 'wissen', title: 'Heilfürsorge und Beihilfe im Überblick', format: 'Carousel, 5 Seiten', to: 'Checkliste' },
    { d: 4, type: 'faq', title: 'Brauche ich mit Heilfürsorge noch etwas?', format: 'Reel, Frag Stefan', to: 'Beratung' },
    { d: 6, type: 'cta', title: 'Checkliste für den Start in NRW', format: 'Beitrag und Story mit Link', to: 'Checkliste' },
  ] },
  { theme: 'Vor dem ersten Diensttag', items: [
    { d: 0, type: 'reel', title: 'Drei Prüfpunkte vor dem ersten Diensttag', format: 'Reel, Konzept B', to: 'Checkliste' },
    { d: 1, type: 'story', title: 'Quiz: Ab wann gilt die Beihilfe?', format: 'Story mit Quiz', to: 'Checkliste' },
    { d: 2, type: 'wissen', title: 'Den Krankenkassen-Austritt richtig erklären', format: 'Carousel, 4 Seiten', to: 'Checkliste' },
    { d: 4, type: 'faq', title: 'Was ist ein Leistungsauszug?', format: 'Reel, Frag Stefan', to: 'Beratung' },
    { d: 6, type: 'cta', title: 'Termin vor dem Dienstantritt', format: 'Story mit Link', to: 'Termin' },
  ] },
  { theme: 'Dienstunfähigkeit verstehen', items: [
    { d: 0, type: 'reel', title: 'Was passiert bei Dienstunfähigkeit als Anwärter?', format: 'Reel, Kurz erklärt', to: 'Beratung' },
    { d: 2, type: 'wissen', title: 'Die Klausel, auf die es ankommt', format: 'Carousel, 4 Seiten', to: 'Checkliste' },
    { d: 3, type: 'story', title: 'Was ist dir noch unklar?', format: 'Story mit Fragen-Sticker', to: 'Themen für den Drehtag' },
    { d: 4, type: 'faq', title: 'Warum früh abschließen?', format: 'Reel, Frag Stefan', to: 'Beratung' },
    { d: 6, type: 'cta', title: 'Erstgespräch: kostenlos und unverbindlich', format: 'Beitrag und Story', to: 'Termin' },
  ] },
  { theme: 'Haftung im Dienstalltag', items: [
    { d: 0, type: 'reel', title: 'Dienstschlüssel verloren. Was jetzt?', format: 'Reel, Konzept C', to: 'Beratung' },
    { d: 1, type: 'story', title: 'Hinter den Kulissen vom Drehtag', format: 'Story-Sequenz', to: 'Profil' },
    { d: 2, type: 'wissen', title: 'Dienstunfall und Freizeitunfall', format: 'Carousel, 4 Seiten', to: 'Checkliste' },
    { d: 4, type: 'faq', title: 'Was deckt meine Gewerkschaft schon ab?', format: 'Reel, Frag Stefan', to: 'Beratung' },
    { d: 6, type: 'cta', title: 'Termin für den nächsten Monat', format: 'Story mit Link', to: 'Termin' },
  ] },
];

/* ---------- 09 · Paid Advertising ---------- */
export const campaigns = [
  {
    id: 'a', tab: 'A', name: 'Beamtenanwärter NRW', audience: 'Anwärterinnen und Anwärter sowie Referendare in NRW', offer: 'Die kostenlose Checkliste für den Start', cta: 'Checkliste ansehen', path: 'Landingpage mit Checkliste, danach freiwillig Kontakt',
    creatives: [
      { img: 'ad', headline: 'Deine Verbeamtung steht bevor?', sub: 'Drei Dinge, die du vorher prüfen solltest.' },
      { img: 'd', headline: 'Polizei oder Lehramt?', sub: 'Andere Regeln für deine Krankenversicherung.' },
    ],
  },
  {
    id: 'b', tab: 'B', name: 'Polizei & öffentlicher Dienst', audience: 'Beamte im Polizei- und Verwaltungsdienst in der Region', offer: 'Ein kurzes Erklärvideo und ein Rückruf, wenn gewünscht', cta: 'Mehr erfahren', path: 'Meta-Lead-Formular mit wenigen Feldern',
    creatives: [
      { img: 'e', headline: 'Dienstschlüssel verloren?', sub: 'Wann es teuer werden kann, kurz erklärt.' },
      { img: 'c', headline: 'Heilfürsorge, und dann?', sub: 'Was du für später regeln solltest.' },
    ],
  },
  {
    id: 'c', tab: 'C', name: 'Persönliche Beratung', audience: 'Privatkunden rund um Mechernich und Euskirchen', offer: 'Erstgespräch, kostenlos und unverbindlich', cta: 'Termin anfragen', path: 'Direkte Terminbuchung',
    creatives: [
      { img: 'a', headline: 'Ein Ansprechpartner. Vor Ort.', sub: 'Stefan Neudorf, Versicherungsmakler in Mechernich.' },
      { img: 'b', headline: 'Viele Verträge, ein Überblick.', sub: 'Wir sortieren gemeinsam, in Ruhe.' },
    ],
  },
] as const;
export const adRules: { tag: Tag; text: string }[] = [
  { tag: 'doku', text: 'Lead-Formulare brauchen einen Datenschutz-Link und dürfen keine Gesundheits-, Finanz- oder Vertragsdaten abfragen.' },
  { tag: 'doku', text: 'Anzeigen dürfen persönliche Merkmale wie Gesundheit oder finanzielle Lage nicht andeuten.' },
  { tag: 'hyp', text: 'Ob Metas Sonderkategorie für Finanzprodukte bei Versicherungsanzeigen in Deutschland greift, prüfen wir vor dem Start im Werbekonto.' },
];

/* ---------- 10 · Weg zur Anfrage ---------- */
export const pathNodes = [
  { id: 'reel', label: 'Reel', text: 'Jemand sieht Stefan mit einer Frage, die ihn betrifft.' },
  { id: 'profil', label: 'Profil oder Landingpage', text: 'Mehr Inhalte zum Thema, ein klarer nächster Schritt.' },
  { id: 'check', label: 'Checkliste', text: 'Kostenlos und ohne Pflichtangaben. Sie bringt Nutzen, bevor jemand fragt.' },
  { id: 'kontakt', label: 'Freiwillige Kontaktaufnahme', text: 'Telefon, WhatsApp, Nachricht oder Formular. Der Interessent entscheidet.' },
  { id: 'termin', label: 'Beratungstermin', text: 'Stefan berät persönlich. Die Erstinformation übergibt er im Gespräch.' },
] as const;
export const routes = [
  { id: 'klassisch', label: 'Über die Checkliste', nodes: ['reel', 'profil', 'check', 'kontakt', 'termin'], note: 'Der ausführliche Weg für alle, die sich erst informieren wollen.' },
  { id: 'direkt', label: 'Direkt zum Termin', nodes: ['reel', 'profil', 'termin'], note: 'Wer schon überzeugt ist, bucht sofort. Keine Checkliste nötig.' },
  { id: 'anzeige', label: 'Über eine Anzeige', nodes: ['reel', 'kontakt', 'termin'], note: 'Ein Lead-Formular in der Anzeige: zwei Klicks bis zur Anfrage.' },
  { id: 'nachricht', label: 'Per Nachricht', nodes: ['reel', 'kontakt', 'termin'], note: 'Eine Frage per DM oder WhatsApp, Stefan antwortet persönlich.' },
] as const;

/* ---------- 11 · Automatisierung ---------- */
export const levels = [
  { id: 'auto', label: 'Automatisierbar' },
  { id: 'ki', label: 'KI-unterstützt, geprüft' },
  { id: 'mensch', label: 'Mensch entscheidet' },
] as const;
export type Level = (typeof levels)[number]['id'];
export const workflows = [
  { id: 'content', label: 'Content-Workflow', steps: [
    { title: 'Recherche', text: 'Häufige Fragen, Trends und Termine im Jahr der Zielgruppe sammeln.', level: 'ki' },
    { title: 'Skriptvorschläge', text: 'Hooks und Skripte als Entwurf, von uns überarbeitet.', level: 'ki' },
    { title: 'Fachliche Freigabe', text: 'Stefan prüft jede Aussage, bevor gedreht wird.', level: 'mensch' },
    { title: 'Schnittunterstützung', text: 'Untertitel, Rohschnitt, Formatvarianten. Feinschnitt von uns.', level: 'ki' },
    { title: 'Planung', text: 'Freigegebene Beiträge werden für beide Kanäle eingeplant.', level: 'auto' },
    { title: 'Reporting', text: 'Zahlen werden gesammelt und monatlich aufbereitet.', level: 'auto' },
  ] },
  { id: 'lead', label: 'Lead-Workflow', steps: [
    { title: 'Erfassung', text: 'Zulässige Anfragen aus Formular, Anzeige oder Buchung landen an einem Ort.', level: 'auto' },
    { title: 'CRM-Zuordnung', text: 'Kontakt anlegen, Quelle und Kampagne vermerken, Dubletten erkennen.', level: 'auto' },
    { title: 'Benachrichtigung', text: 'Stefan erfährt sofort von jeder neuen Anfrage.', level: 'auto' },
    { title: 'Erste Antwort', text: 'Stefan meldet sich persönlich. Vorlagen helfen, entscheiden tut er.', level: 'mensch' },
    { title: 'Terminorganisation', text: 'Buchung, Bestätigung, Erinnerung am Vortag.', level: 'auto' },
    { title: 'Reporting', text: 'Anfragen, Termine und Ergebnis je Kampagne.', level: 'auto' },
  ] },
] as const;

/* ---------- 12 · Dein Anteil ---------- */
export const roles = {
  stefan: [
    { title: 'Expertise', text: 'Dein Wissen ist der Inhalt.' },
    { title: 'Kameraauftritte', text: 'Gebündelt, mit Regie, an wenigen Terminen.' },
    { title: 'Fachliche Freigaben', text: 'Nichts geht ohne dein OK online.' },
    { title: 'Persönliche Beratung', text: 'Die Gespräche führst du.' },
  ],
  wir: ['Strategie', 'Research', 'Content-Ideen', 'Skripte', 'Produktion und Schnitt', 'Kampagnensteuerung', 'Publishing-Vorbereitung', 'Auswertung und Optimierung'],
};

/* ---------- 13 · Erfolgsmessung (Demo-Daten, frei erfunden) ---------- */
export const dashData = [
  { id: 'a', name: 'Kampagne A', spend: 450, leads: 38, qualified: 14, booked: 9, attended: 7, customers: 2, verdict: 'Viele Anfragen, aber nur jede dritte ist qualifiziert.', action: 'Zielgruppe enger fassen, eine Frage zum Anlass ergänzen.' },
  { id: 'b', name: 'Kampagne B', spend: 450, leads: 16, qualified: 11, booked: 8, attended: 7, customers: 3, verdict: 'Weniger Anfragen, dafür werden fast alle zu Gesprächen.', action: 'Laufen lassen. Budget erst erhöhen, wenn das so bleibt.' },
  { id: 'c', name: 'Kampagne C', spend: 300, leads: 6, qualified: 3, booked: 2, attended: 1, customers: 0, verdict: 'Zu wenige Daten für ein Urteil.', action: 'Zweites Motiv testen, dann entscheiden.' },
];
export const kpiSources = { spend: 'Werbekonto', qualified: 'CRM, von Stefan bestätigt', cpl: 'Berechnet', booked: 'Kalender', attended: 'Kalender und Stefan', customers: 'Stefans Rückmeldung' };

/* ---------- 14 · 90-Tage-Pilot ---------- */
export const roadmap = [
  { days: 'Tag 1–30', title: 'Aufbauen', wir: ['Positionierung und Themenplan', 'Skripte für den ersten Drehtag', 'Lead-Weg und Messung einrichten'], stefan: ['Themen freigeben', 'Erster Drehtag'], result: 'Ein abgestimmter Plan, erstes Material, ein getesteter Anfrageweg.' },
  { days: 'Tag 31–60', title: 'Veröffentlichen', wir: ['Regelmäßige Beiträge nach Plan', 'Erste freigegebene Kampagnentests', 'Zweiter Drehtag'], stefan: ['Beiträge freigeben', 'Anfragen beantworten'], result: 'Ein sichtbarer Kanal und die ersten echten Anfragen.' },
  { days: 'Tag 61–90', title: 'Auswerten', wir: ['Kampagnen vergleichen und verbessern', 'Kosten je qualifizierter Anfrage ermitteln'], stefan: ['Rückmeldung zu den Gesprächen'], result: 'Echte Zahlen statt Annahmen.' },
  { days: 'Tag 90', title: 'Entscheiden', wir: ['Ergebnisbericht und Empfehlung'], stefan: ['Entscheidung: ausbauen, anpassen oder beenden'], result: 'Eine gemeinsame Entscheidung. Ohne Erfolgsgarantie, aber mit Zahlen.' },
];
export const costTypes = ['Agenturleistung für den Pilot (Umfang und Honorar legen wir gemeinsam fest)', 'Werbebudget, direkt an die Plattform', 'Werkzeuge für CRM und Terminbuchung', 'Rechtliche Prüfung von Datenschutz und Werbeaussagen'];
export const questions = ['Welche Zielgruppe soll zuerst wachsen?', 'Wie viele Drehtage passen in dein Quartal?', 'Wie kommen Anfragen heute bei dir an?'];
