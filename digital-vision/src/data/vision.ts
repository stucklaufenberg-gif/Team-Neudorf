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
  { name: 'Creator Class', what: 'Kurs zu Social-Media-Wachstum: Formate, Hooks, Storytelling und Analyse viraler Reels.', url: 'https://www.creatorclass.net/', note: 'Referenz für Content-Mechanik, nicht für Versicherungsfragen.' },
  { name: 'Christian Wolf', what: 'Mitgründer von MORE Nutrition, bekannt für Kurzvideo-Formate mit hoher Reichweite.', url: 'https://blackforestspace.de/speaker/christian-wolf/', note: 'Referenz für Content-Mechanik, keine Versicherungsexpertise.' },
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
export const hookTopic = 'Polizei oder Lehramt: Wer bekommt Heilfürsorge, wer Beihilfe?';
export const hookVariants = [
  { id: 'split', label: 'Variante A · Vergleich', scene: 'split', visual: 'Split-Screen: links Einsatzjacke und Streifenwagen-Tür, rechts Tafel und Klassenraum.', spoken: '„Gleicher Beamtenstatus, aber völlig andere Krankenversicherung. Warum?“', text: 'Gleicher Status. Gleiche Absicherung?', why: 'Der Kontrast stoppt den Daumen, die Frage hält die Aufmerksamkeit.' },
  { id: 'detail', label: 'Variante B · Detail', scene: 'detail', visual: 'Nahaufnahme: Ernennungsurkunde auf dem Tisch, daneben zwei Versicherungskarten.', spoken: '„Ab dem Tag deiner Ernennung gilt für dich etwas Neues. Und zwar nicht für alle das Gleiche.“', text: 'Polizei: Heilfürsorge. Lehramt: Beihilfe.', why: 'Die Antwort steht schon im Bild, die Begründung kommt von Stefan.' },
  { id: 'frage', label: 'Variante C · Direkt', scene: 'person', visual: 'Stefan schaut direkt in die Kamera, ruhiger Hintergrund im Büro.', spoken: '„Du startest bei der Polizei? Dann brauchst du etwas, das Lehrkräfte nicht brauchen.“', text: 'Polizei-Start: Das wissen viele nicht.', why: 'Direkte Ansprache, Stefan als Gesicht der Marke.' },
] as const;

/* ---------- 05 · Drei Reel-Konzepte ---------- */
export const concepts = [
  {
    id: 'a', tab: 'A', title: 'Polizei vs. Lehramt', scene: 'split', video: '', poster: '',
    hook: 'Gleicher Beamtenstatus. Gleiche Absicherung?',
    spoken: 'Warum unterscheiden sich die Versicherungsfragen beim Polizeistart und im Lehramtsreferendariat?',
    opening: 'Split-Screen, zwei Berufswelten, ein Schnitt auf Stefan.',
    times: ['0–1 s', '1–3 s', '3–12 s', '12–25 s', '25–30 s'],
    board: ['Visual Hook: Split-Screen, Einsatzalltag links, Klassenraum rechts', 'Text Hook steht, Spoken Hook von Stefan aus dem Off', 'Schnitt auf Stefan: „Polizei NRW bekommt Heilfürsorge, Lehramt Beihilfe.“', 'Zwei Spalten im Bild: was jeweils dazu nötig ist', 'Handlungsaufruf: Checkliste im Profil'],
    core: 'Im Polizeivollzugsdienst NRW gibt es freie Heilfürsorge, im Lehramt in der Regel 50 Prozent Beihilfe plus private Krankenversicherung. Wer Heilfürsorge hat, denkt an eine Anwartschaft für später.',
    cta: 'Checkliste ansehen', goal: 'Reichweite bei Anwärtern, Einstieg in die Checkliste',
  },
  {
    id: 'b', tab: 'B', title: 'Drei Prüfpunkte vor dem ersten Diensttag', scene: 'detail', video: '', poster: '',
    hook: 'Deine Verbeamtung steht bevor?',
    spoken: 'Drei Dinge, die du vor deinem ersten Diensttag prüfen solltest.',
    opening: 'Detailaufnahmen: Unterlagen, Kalender, ein markierter Termin, Checkliste.',
    times: ['0–1 s', '1–3 s', '3–12 s', '12–21 s', '21–30 s'],
    board: ['Visual Hook: Kalender, ein Termin wird gold markiert', 'Text Hook im Bild, Stefan spricht den Spoken Hook in die Kamera', 'Punkt 1: Leistungsauszug der Krankenkasse anfordern', 'Punkt 2: private Krankenversicherung ab dem Ernennungstag', 'Punkt 3: Austritt aus der gesetzlichen Kasse fristgerecht, dann Hinweis auf die Checkliste'],
    core: 'Leistungsauszug nach § 305 SGB V anfordern, die private Krankenversicherung ab dem Tag der Ernennungsurkunde beginnen lassen und den Austritt aus der gesetzlichen Kasse innerhalb von zwei Wochen nach deren Hinweis erklären.',
    cta: 'Ganze Checkliste holen', goal: 'Vertrauen durch konkreten Nutzen, Download der Checkliste',
  },
  {
    id: 'c', tab: 'C', title: 'Der verlorene Dienstschlüssel', scene: 'key', video: '', poster: '',
    hook: 'Dienstschlüssel verloren. Was jetzt?',
    spoken: 'Wann kann ein verlorener Dienstschlüssel eigentlich teuer werden?',
    opening: 'Ein Schlüssel fällt auf den Schreibtisch. Stille. Perspektivwechsel.',
    times: ['0–1 s', '1–3 s', '3–14 s', '14–24 s', '24–30 s'],
    board: ['Visual Hook: Schlüssel fällt, Aufprall, kurze Stille', 'Text Hook erscheint, Stefan stellt die Frage als Spoken Hook', 'Stefan: wann der Dienstherr Regress nehmen kann', 'Was eine Diensthaftpflicht abdeckt, was die Gewerkschaft schon regelt', 'Handlungsaufruf: Gespräch anfragen'],
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
