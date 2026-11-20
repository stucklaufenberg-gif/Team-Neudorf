// Inhalte der Präsentation „Digital Vision & Growth“ – Final Pitch (14 Stationen).
// Hauptbotschaft: Wir übernehmen die digitale Vermarktung von Stefans Expertise, von der Content-Idee bis zur Beratungsanfrage.
// Fachliche Aussagen stammen aus Stefans „Checkliste Beamtenanwärter NRW“ (team-neudorf.de) und brauchen seine Freigabe.
// Keine erfundenen Zahlen, Referenzen, Preise oder Ergebnisse. Mockups sind Konzepte, Dashboard-Werte sind Demo-Daten.

export const tagLabel = { ist: 'Ist-Stand', quelle: 'Mit Quelle', doku: 'Laut Plattform-Doku', hyp: 'Unsere Hypothese', idee: 'Unser Vorschlag', check: 'Aus Stefans Checkliste' } as const;
export type Tag = keyof typeof tagLabel;

export const chapters = [
  { id: 's1', n: '01', title: 'Einstieg', line: 'Wir starten, bevor du vor einer Kamera stehen musst.' },
  { id: 's2', n: '02', title: 'Marktpotenzial', line: 'Was Personenmarken in der Branche heute erreichen.' },
  { id: 's3', n: '03', title: 'Unsere Differenzierung', line: 'Creator-Mechanik trifft Versicherungswissen.' },
  { id: 's4', n: '04', title: 'KI-first', line: 'Dein Marketing startet vor dem ersten Drehtag.' },
  { id: 's5', n: '05', title: 'Das Content-Lab', line: 'Ein Thema, drei Einstiege.' },
  { id: 's6', n: '06', title: 'Sechs Muster-Reels', line: 'Sechs Themen, sechs Formate, ein System.' },
  { id: 's7', n: '07', title: 'Personal Brand', line: 'Von KI-Content zur Expertenmarke.' },
  { id: 's8', n: '08', title: 'Eine Quelle, viele Inhalte', line: 'Wiederverwendung statt Neuanfang.' },
  { id: 's9', n: '09', title: 'Vier Wochen Content', line: 'Ein Plan, der auf Beratung zuläuft.' },
  { id: 's10', n: '10', title: 'Paid Advertising', line: 'Drei Kampagnen, je zwei Creatives.' },
  { id: 's11', n: '11', title: 'Weg zur Anfrage', line: 'Vom Reel zum Beratungstermin.' },
  { id: 's12', n: '12', title: 'Automatisierung', line: 'Zwei Workflows, die wir aufbauen.' },
  { id: 's13', n: '13', title: 'Dein Zeitaufwand', line: 'Was du tust und was wir übernehmen.' },
  { id: 's14', n: '14', title: 'Erfolgsmessung', line: 'Wir zählen Gespräche, nicht Likes.' },
  { id: 's15', n: '15', title: '90-Tage-Pilot', line: 'KI-first starten, messen, entscheiden.' },
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

/* ---------- 13 · Erfolgsmessung (Demo-Daten, frei erfunden) ---------- */
export const dashData = [
  { id: 'a', name: 'Kampagne A', spend: 450, leads: 38, qualified: 14, booked: 9, attended: 7, customers: 2, verdict: 'Viele Anfragen, aber nur jede dritte ist qualifiziert.', action: 'Zielgruppe enger fassen, eine Frage zum Anlass ergänzen.' },
  { id: 'b', name: 'Kampagne B', spend: 450, leads: 16, qualified: 11, booked: 8, attended: 7, customers: 3, verdict: 'Weniger Anfragen, dafür werden fast alle zu Gesprächen.', action: 'Laufen lassen. Budget erst erhöhen, wenn das so bleibt.' },
  { id: 'c', name: 'Kampagne C', spend: 300, leads: 6, qualified: 3, booked: 2, attended: 1, customers: 0, verdict: 'Zu wenige Daten für ein Urteil.', action: 'Zweites Motiv testen, dann entscheiden.' },
];
export const kpiSources = { spend: 'Werbekonto', qualified: 'CRM, von Stefan bestätigt', cpl: 'Berechnet', booked: 'Kalender', attended: 'Kalender und Stefan', customers: 'Stefans Rückmeldung' };

/* ---------- 14 · 90-Tage-Pilot ---------- */
export const roadmap = [
  { days: 'Tag 1–30', title: 'KI-first starten', wir: ['Strategie, Themen aus der Checkliste', 'Erste KI-Reels produzieren', 'Lead-Weg und Messung einrichten'], stefan: ['Themen und Inhalte freigeben', 'Zugänge freigeben'], result: 'Die ersten freigegebenen Reels sind bereit, ohne Drehtag.' },
  { days: 'Tag 31–60', title: 'Sichtbar werden', wir: ['Regelmäßige Veröffentlichung nach Plan', 'Erste freigegebene Kampagnentests', 'Ersten Drehtermin vorbereiten'], stefan: ['Beiträge freigeben', 'Optional: erster Drehtermin'], result: 'Ein sichtbarer Kanal und die ersten echten Anfragen.' },
  { days: 'Tag 61–90', title: 'Auswerten', wir: ['Formate und Kampagnen vergleichen', 'Kosten je qualifizierter Anfrage ermitteln'], stefan: ['Rückmeldung zu den Gesprächen'], result: 'Echte Zahlen statt Annahmen.' },
  { days: 'Tag 90', title: 'Entscheiden', wir: ['Ergebnisbericht und Empfehlung für Phase B'], stefan: ['Entscheidung: ausbauen, anpassen oder beenden'], result: 'Eine gemeinsame Entscheidung. Ohne Erfolgsgarantie, aber mit Zahlen.' },
];
export const costTypes = ['Agenturleistung für den Pilot (Umfang und Honorar legen wir gemeinsam fest)', 'Werbebudget, direkt an die Plattform', 'Werkzeuge für CRM und Terminbuchung', 'Rechtliche Prüfung von Datenschutz und Werbeaussagen'];
export const questions = ['Welche Zielgruppe soll zuerst wachsen?', 'Wie viele Drehtage passen in dein Quartal?', 'Wie kommen Anfragen heute bei dir an?'];

/* =====================================================================
   KI-FIRST-ERWEITERUNG (20.11.2026)
   ===================================================================== */

/* ---------- KI-first: Produktionskette ---------- */
export const aiChain = [
  { n: '01', title: 'Themen', tool: 'Checkliste und Kundenfragen', who: 'stefan', text: 'Themen kommen aus Stefans NRW-Beamten-Checkliste und den Fragen, die er in der Beratung hört.', out: 'Themenliste mit fachlichem Kern' },
  { n: '02', title: 'Recherche', tool: 'Creator-Analyse', who: 'wir', text: 'Welche Content-Mechaniken halten Aufmerksamkeit? Wir übertragen Formate, keine fremden Inhalte.', out: 'Formatwahl je Thema' },
  { n: '03', title: 'Hooks und Storyboard', tool: 'Konzeption', who: 'wir', text: 'Visual Hook, Text Hook und Szenenfolge für 35 bis 45 Sekunden.', out: 'Storyboard mit Zeitmarken' },
  { n: '04', title: 'KI-Filmszenen', tool: 'Higgsfield', who: 'wir', text: 'Filmische Szenen, Bewegung und Bildsprache in Navy und Gold, ohne Logos und ohne Stefan-Double.', out: 'Szenen-Clips im Hochformat' },
  { n: '05', title: 'Typografie und Schnitt', tool: 'Code-Postproduktion (z. B. Remotion)', who: 'wir', text: 'Animierte Hooks, Schnitt, Übergänge, Untertitelstil und Sounddesign. Zunächst ohne Voice-over.', out: 'Fertige MP4-Datei' },
  { n: '06', title: 'Fachliche Freigabe', tool: 'Stefan', who: 'stefan', text: 'Jede Versicherungs- und Rechtsaussage wird vor der Veröffentlichung von Stefan geprüft.', out: 'Freigegebener Beitrag' },
  { n: '07', title: 'Geplante Veröffentlichung', tool: 'Redaktionsplan', who: 'wir', text: 'Freigegebene Beiträge werden für Instagram und Facebook eingeplant. Nichts geht ohne Freigabe online.', out: 'Termin im Redaktionsplan' },
  { n: '08', title: 'Auswertung', tool: 'Reporting', who: 'wir', text: 'Was hält Aufmerksamkeit, was führt zu Anfragen? Die Erkenntnisse fließen in die nächste Runde.', out: 'Monatlicher Bericht' },
] as const;
export const aiPrinciples = [
  { title: 'Higgsfield', role: 'Bild und Bewegung', text: 'Filmische Szenen, Kamerabewegung, Licht und Bildsprache.' },
  { title: 'Code-Postproduktion', role: 'Text und Schnitt', text: 'Präzise Typografie, animierte Hooks, Übergänge und finale MP4-Dateien, z. B. mit Remotion.' },
  { title: 'Sounddesign', role: 'Ton ohne Stimme', text: 'Zunächst keine Voice-overs. Später echte Stefan-Aufnahmen, optional eine professionelle Sprachproduktion.' },
];

/* ---------- Reel-Galerie: sechs Musterproduktionen ---------- */
// Dateien in public/media/reels/. Fehlt eine Datei, zeigt die Galerie das Storyboard.
export const reels = [
  {
    id: 'reel-01', n: '01', file: 'reel-01-dienstschluessel', scene: 'key', title: 'Dienstschlüssel verloren',
    hook: 'Dienstschlüssel verloren? Und jetzt?', audience: 'Beamte in Polizei, Verwaltung und Justiz', mechanic: 'Spannende Alltagssituation mit sachlicher Auflösung',
    visual: 'Ein Schlüssel fällt auf den Schreibtisch, eine Sekunde Stille, Perspektivwechsel.', topic: 'Diensthaftpflicht, Regress bei grober Fahrlässigkeit, vorhandene Absicherung', goal: 'Beratungsbedarf sichtbar machen', role: 'Beratung',
    board: [['0–3 s', 'Schlüssel fällt, Text Hook'], ['3–12 s', 'Frage: Wer haftet?'], ['12–24 s', 'Einordnung: Vorsatz und grobe Fahrlässigkeit'], ['24–34 s', 'Was eine Diensthaftpflicht abdeckt'], ['34–40 s', 'CTA: Absicherung prüfen lassen']],
    status: 'KI-gestützte Musterproduktion, 32,5 s',
  },
  {
    id: 'reel-02', n: '02', file: 'reel-02-polizei-lehramt', scene: 'cards', title: 'Polizei vs. Lehramt',
    hook: 'Beide verbeamtet. Gleiche Absicherung?', audience: 'Anwärter bei Polizei und im Lehramt in NRW', mechanic: 'Split-Screen und überraschender Berufsgruppenvergleich',
    visual: 'Zwei Akten, „POLIZEI“ und „LEHRAMT“, im Split-Screen.', topic: 'Heilfürsorge, Beihilfe und private Krankenversicherung', goal: 'Reichweite in zwei Berufsgruppen', role: 'Reichweite',
    board: [['0–3 s', 'Split-Screen, Text Hook'], ['3–12 s', 'Beide starten verbeamtet'], ['12–24 s', 'Polizei: Heilfürsorge · Lehramt: Beihilfe'], ['24–34 s', 'Was jeweils dazu nötig ist'], ['34–40 s', 'CTA: Checkliste im Profil']],
    status: 'KI-gestützte Musterproduktion, 40 s',
  },
  {
    id: 'reel-03', n: '03', file: 'reel-03-erster-diensttag', scene: 'detail', title: 'Der erste Diensttag',
    hook: 'Bald verbeamtet? 3 Dinge prüfen.', audience: 'Anwärter kurz vor der Ernennung', mechanic: 'Countdown und visuelle Checkliste',
    visual: 'Kalender mit markiertem Termin, drei Karten werden aufgedeckt.', topic: 'Versicherungsbeginn, bestehende Verträge, Gesundheitsfragen', goal: 'Nutzen zeigen, Checkliste verbreiten', role: 'Kompetenz',
    board: [['0–3 s', 'Kalender, Text Hook'], ['3–14 s', 'Karte 1: bestehende Verträge'], ['14–25 s', 'Karte 2: Gesundheitsfragen vorbereiten'], ['25–36 s', 'Karte 3: Versicherungsbeginn am Ernennungstag'], ['36–42 s', 'CTA: ganze Checkliste']],
    status: 'KI-gestützte Musterproduktion, 40 s',
  },
  {
    id: 'reel-04', n: '04', file: 'reel-04-dienstunfaehigkeit', scene: 'tree', title: 'Dienstunfähig während der Ausbildung?',
    hook: 'Noch Anwärter? Was, wenn du ausfällst?', audience: 'Beamte auf Widerruf und auf Probe', mechanic: 'Was-wäre-wenn-Szenario und Entscheidungsbaum',
    visual: 'Ein Entscheidungsbaum baut sich auf: Status, Ursache, vorhandene Absicherung.', topic: 'Dienstunfähigkeit, Beamtenstatus, Klausel der Absicherung', goal: 'Kompetenz zeigen, Gespräch anregen', role: 'Vertrauen',
    board: [['0–3 s', 'Frage als Text Hook'], ['3–14 s', 'Ast 1: Welchen Status hast du?'], ['14–25 s', 'Ast 2: Was ist die Ursache?'], ['25–36 s', 'Ast 3: Was ist schon abgesichert?'], ['36–42 s', 'CTA: persönlich einschätzen lassen']],
    status: 'KI-gestützte Musterproduktion, 40 s',
  },
  {
    id: 'reel-05', n: '05', file: 'reel-05-gesundheitsfragen', scene: 'doc', title: 'Gesundheitsfragen vor dem PKV-Antrag',
    hook: 'PKV-Antrag? Kennst du deine Akte?', audience: 'Anwärter vor dem Antrag auf private Krankenversicherung', mechanic: 'Dokumenten-Reveal und praktischer Expertenhinweis',
    visual: 'Ein Dokument wird Zeile für Zeile aufgedeckt, eine Zeile markiert.', topic: 'Gesundheitsfragen, Leistungsauszug der Krankenkasse, anonyme Voranfrage', goal: 'Expertenwissen zeigen, Fehler vermeiden helfen', role: 'Kompetenz',
    board: [['0–3 s', 'Dokument, Text Hook'], ['3–14 s', 'Warum die Historie zählt'], ['14–25 s', 'Leistungsauszug anfordern'], ['25–36 s', 'Bei Vorerkrankungen: erst anonym anfragen'], ['36–42 s', 'CTA: vor dem Antrag sprechen']],
    status: 'KI-gestützte Musterproduktion, 40 s',
  },
  {
    id: 'reel-06', n: '06', file: 'reel-06-lebensphasen', scene: 'timeline', title: 'Dein Leben verändert sich',
    hook: 'Prüfung bestanden. Und deine Absicherung?', audience: 'Beamte nach der Ausbildung, Familien', mechanic: 'Lebensphasen, Vorher-Nachher und Karriere-Timeline',
    visual: 'Split-Frame Karriere und Familie, eine Zeitleiste läuft mit.', topic: 'Anpassung bei Beförderung und Familie, Nachversicherung', goal: 'Bestandskunden und Empfehlungen ansprechen', role: 'Beratung',
    board: [['0–3 s', 'Zeitleiste, Text Hook'], ['3–14 s', 'Ernennung: der Start'], ['14–25 s', 'Beförderung: passt die Absicherung noch?'], ['25–36 s', 'Familie: wer ist mitversichert?'], ['36–42 s', 'CTA: Check-up-Termin']],
    status: 'KI-gestützte Musterproduktion, 40 s',
  },
] as const;
export const reelRoles = { Reichweite: 'Reichweite erzeugen', Vertrauen: 'Vertrauen aufbauen', Kompetenz: 'Fachkompetenz zeigen', Beratung: 'Beratung anbieten' } as const;

/* ---------- Personal Brand Roadmap ---------- */
export const brandPhases = [
  { id: 'a', tab: 'Phase A', title: 'KI-first', ai: 85, text: 'Wir starten mit hochwertigen KI-Reels auf Basis deines Fachwissens. Ein Videodreh ist dafür nicht nötig.', stefan: ['Inhalte fachlich prüfen und freigeben', 'Zugänge und Veröffentlichungen freigeben'], output: 'Sichtbarkeit vom ersten Monat an' },
  { id: 'b', tab: 'Phase B', title: 'Persönliche Expertenmarke', ai: 55, text: 'Ein gebündelter Drehtermin pro Monat, zum Beispiel in deinem Büro. Daraus entstehen Statements, Antworten auf Kundenfragen und Serien.', stefan: ['Freigaben', 'Ein Drehtermin pro Monat, mit Regie und vorbereiteten Skripten'], output: 'Dein Gesicht, deine Stimme, deine Serien' },
  { id: 'c', tab: 'Phase C', title: 'Hybride Content-Marke', ai: 35, text: 'KI-Visuals, deine Aufnahmen, programmierte Animationen und Kampagnen greifen ineinander. Deine echten Videos tragen zunehmend das Vertrauen.', stefan: ['Freigaben', 'Regelmäßige Drehtermine', 'Beratungsgespräche'], output: 'Reichweite, Vertrauen und Wiedererkennung' },
] as const;

/* ---------- Zeitaufwand ---------- */
export const effort = {
  stefan: [
    { title: 'Fachwissen und Kundenfragen', text: 'Du gibst die Themen, wir machen Content daraus.' },
    { title: 'Fachliche Freigaben', text: 'Nichts geht ohne dein OK online.' },
    { title: 'Später ein Drehtermin pro Monat', text: 'Gebündelt, vorbereitet, mit Regie.' },
    { title: 'Beratungsgespräche', text: 'Die Gespräche führst du persönlich.' },
  ],
  wir: ['Markt- und Themenrecherche', 'Redaktionsplanung', 'Hook-Entwicklung', 'Skripte und Storyboards', 'KI-Videoproduktion', 'Schnitt und Motion Design', 'Veröffentlichungsvorbereitung', 'Anzeigenkonzepte und Kampagnen', 'Einrichtung zulässiger Automatisierungen', 'Lead-Prozess und Reporting'],
};

/* ---------- Wiederverwendung: aus einer Checkliste viele Inhalte ---------- */
export const reuseTopics = ['Polizei vs. Lehramt', 'Erster Diensttag', 'Dienstschlüssel', 'Dienstunfähigkeit', 'Gesundheitsfragen', 'Lebensphasen', 'Öffnungsaktion', 'Freizeitunfall'];
export const reuseOutputs = [
  { id: 'reels', label: 'Reels', hint: 'je Thema ein Film', shape: 'tall' },
  { id: 'hooks', label: 'Hook-Varianten', hint: 'drei Einstiege je Thema', shape: 'tall3' },
  { id: 'stories', label: 'Storys', hint: 'Kurzfassungen', shape: 'tall3' },
  { id: 'karussells', label: 'Carousels', hint: 'aus den Skripten', shape: 'stack' },
  { id: 'ads', label: 'Anzeigenvarianten', hint: 'für freigegebene Kampagnen', shape: 'ad' },
  { id: 'ctas', label: 'Checklisten-CTAs', hint: 'je Thema ein Verweis', shape: 'square' },
] as const;
export const reuseAssets = ['Themen aus der Checkliste', 'Szenen und Filmaufnahmen', 'Gestaltungsvorlagen in Navy und Gold'];
