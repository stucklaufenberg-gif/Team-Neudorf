// Inhalte der Präsentation „Digital Vision & Growth“ – Creative Direction 02.
// Agentur-Pitch: von der Expertise zur sichtbaren Marke und zu qualifizierten Beratungsanfragen.
// Keine erfundenen Zahlen, Referenzen, Preise oder Ergebnisse. Mockups sind Konzepte, Dashboard-Werte sind Demo-Daten.
// Drei Kennzeichnungen trennen die Aussagen: doku = laut Plattform-Dokumentation, hyp = unsere Hypothese, idee = unser Vorschlag.

export const tagLabel = { ist: 'Ist-Stand', doku: 'Laut Plattform-Doku', hyp: 'Unsere Hypothese', idee: 'Unser Vorschlag' } as const;
export type Tag = keyof typeof tagLabel;

export const chapters = [
  { id: 'k1', n: '01', title: 'Das ungenutzte Potenzial', line: 'Die Expertise ist da. Es fehlt das System, das sie sichtbar macht.' },
  { id: 'k2', n: '02', title: 'Wen wir gewinnen wollen', line: 'Vier Zielgruppen, eine klare Reihenfolge.' },
  { id: 'k3', n: '03', title: 'Die Personenmarke', line: 'Wie wir Stefan als Experten vermarkten.' },
  { id: 'k4', n: '04', title: 'Die Social-Media-Strategie', line: 'Drei Säulen und ein Plan für vier Wochen.' },
  { id: 'k5', n: '05', title: 'Produktion & Automatisierung', line: 'Ein Drehtag, mehrere Wochen Content.' },
  { id: 'k6', n: '06', title: 'Kampagnen & Leads', line: 'Drei Kampagnen, drei Wege zur Anfrage.' },
  { id: 'k7', n: '07', title: 'Die Lead Journey', line: 'Von der Anzeige bis zur Nachverfolgung.' },
  { id: 'k8', n: '08', title: 'Growth Intelligence', line: 'Woran wir eine Kampagne messen.' },
  { id: 'k9', n: '09', title: 'Der 90-Tage-Plan', line: 'Ein Pilot mit klarem Ende und offener Entscheidung.' },
  { id: 'k10', n: '10', title: 'Angebot & nächster Schritt', line: 'Wer was übernimmt und wie wir starten.' },
] as const;

/* ---------- 01 · Potenzial ---------- */
export const potential: { tag: Tag; label: string; title: string; items: string[] }[] = [
  { tag: 'ist', label: 'Schon vorhanden', title: 'Ein Fundament, das steht', items: ['Website mit Seiten für Öffentlichen Dienst, Privat- und Gewerbekunden', 'Instagram-Profil im Markenbild', 'Klarer Schwerpunkt: Öffentlicher Dienst', 'Ein Makler, der selbst vor die Kamera kann'] },
  { tag: 'hyp', label: 'Noch ungenutzt', title: 'Sichtbarkeit bleibt Zufall', items: ['Kein fester Rhythmus für Video und Beiträge', 'Keine Kampagnen, die gezielt Anfragen holen', 'Kein durchgängiger Weg von der Anfrage zum Termin', 'Keine Zahlen, die zeigen, was sich lohnt'] },
  { tag: 'idee', label: 'Unser Ansatz', title: 'Ein System, das wir betreiben', items: ['Planbare Inhalte aus gebündelten Drehtagen', 'Kampagnen für klar benannte Zielgruppen', 'Ein Lead-Prozess mit festen Schritten', 'Auswertung, die Entscheidungen möglich macht'] },
];

export const system = [
  { title: 'Expertise', text: 'Stefans Wissen und Auftreten' },
  { title: 'Content', text: 'Formate mit Wiedererkennung' },
  { title: 'Sichtbarkeit', text: 'Regelmäßig bei den Zielgruppen' },
  { title: 'Kampagnen', text: 'Was funktioniert, bekommt Reichweite' },
  { title: 'Anfragen', text: 'Menschen mit Beratungsbedarf' },
  { title: 'Messung', text: 'Auswerten, lernen, verbessern' },
];

/* ---------- 02 · Zielgruppen ---------- */
export const criteria = ['Beratungsbedarf', 'Differenzierung', 'Erreichbarkeit', 'Wirtschaftliches Potenzial'] as const;
const level = ['', 'niedrig', 'mittel', 'hoch'];
export const levelText = (v: number) => level[v];
export const segments = [
  {
    id: 'anwaerter', title: 'Beamtenanwärter & Referendare', role: 'Fokus im Pilot',
    lead: 'Viele Entscheidungen in kurzer Zeit, feste Starttermine und ein Thema, bei dem Stefan zu Hause ist.',
    scores: [3, 3, 3, 2],
    reasons: ['Krankenversicherung und Dienstunfähigkeit müssen zum Berufsstart geklärt sein.', 'Schwerpunkt Öffentlicher Dienst, eigene Seite für den Start ins Referendariat.', 'Klarer Anlass und klarer Zeitpunkt: Inhalte und Anzeigen lassen sich darauf ausrichten.', 'Kleiner Einstieg, aber die Chance auf eine lange Kundenbeziehung.'],
  },
  {
    id: 'einsatz', title: 'Polizei, Feuerwehr & Bundeswehr', role: 'Zweite Welle',
    lead: 'Eine Berufswelt mit eigenen Regeln. Stefan war selbst Soldat und spricht ihre Sprache.',
    scores: [3, 3, 2, 2],
    reasons: ['Heilfürsorge, Dienstunfähigkeit und Diensthaftpflicht sind erklärungsbedürftig.', 'Eigene Erfahrung im Dienst: ein Vorteil, den kaum ein Wettbewerber hat.', 'Kleinere Gruppen, die man eher über Inhalte und Empfehlung erreicht als über breite Anzeigen.', 'Enge Gemeinschaften: Wer überzeugt, wird weiterempfohlen.'],
  },
  {
    id: 'privat', title: 'Privatkunden in Lebenssituationen', role: 'Regional begleitend',
    lead: 'Familie, Haus, Berufsstart: Anlässe, bei denen Menschen einen festen Ansprechpartner suchen.',
    scores: [2, 1, 3, 2],
    reasons: ['Bedarf entsteht punktuell, dann aber konkret.', 'Viel Wettbewerb. Den Unterschied macht die Person, nicht das Produkt.', 'Regional gut erreichbar: Mechernich, Euskirchen, Bonn und Köln.', 'Solide, wenn aus einem Vertrag eine Betreuung wird.'],
  },
  {
    id: 'gewerbe', title: 'Ausgewählte Gewerbekunden', role: 'Später, gezielt',
    lead: 'Hoher Wert je Kunde, aber ein anderer Weg dorthin als über Instagram und Facebook.',
    scores: [3, 2, 1, 3],
    reasons: ['Betriebliche Risiken und betriebliche Vorsorge sind beratungsintensiv.', 'Fachlich stark, aber noch ohne eigenes Profil in dieser Zielgruppe.', 'Entscheider erreicht man eher über Empfehlung, Suche und berufliche Netzwerke.', 'Wenige Kunden können viel bewegen.'],
  },
] as const;

/* ---------- 03 · Personenmarke ---------- */
export const differentiation = [
  { row: 'Absender', a: 'Ein Logo, ein Tarif, ein Slogan', b: 'Stefan, mit Gesicht und Stimme' },
  { row: 'Einstieg', a: '„Jetzt vergleichen und sparen“', b: 'Eine Frage, die die Zielgruppe wirklich hat' },
  { row: 'Inhalt', a: 'Produkt und Preis', b: 'Erklärung, Einordnung, nächster Schritt' },
  { row: 'Bild', a: 'Stockfotos, wechselnde Gestaltung', b: 'Ein Markenbild, das man wiedererkennt' },
  { row: 'Wirkung', a: 'Wird überblättert', b: 'Wird gemerkt, bevor Bedarf entsteht' },
];

export const brandPrinciples = [
  { title: 'Ein Markenbild', text: 'Navy, Gold, eine Schrift, ein Cover-Raster. Jeder Beitrag ist als Stefan erkennbar.' },
  { title: 'Feste Formate', text: 'Wiederkehrende Serien statt einzelner Ideen. Das spart Zeit und schafft Gewohnheit.' },
  { title: 'Experte, nicht Verkäufer', text: 'Stefan erklärt und ordnet ein. Das Produkt kommt erst im Gespräch.' },
  { title: 'Echt vor der Kamera', text: 'Kurze Sätze, eigener Ton, kein Ablesen. Wir führen Regie und schneiden.' },
  { title: 'Hilfe vor Werbung', text: 'Jeder Beitrag beantwortet eine Frage. Vertrauen entsteht vor dem Bedarf.' },
];

export const formats = [
  {
    id: 'erklaert', img: 'd', series: 'Kurz erklärt', kind: 'Wissen', rhythm: 'wöchentlich · 30 bis 45 Sekunden', cover: 'Beihilfe oder Heilfürsorge?',
    hook: 'Beihilfe oder Heilfürsorge? Erst einmal den Unterschied verstehen',
    aufbau: 'Frage, Erklärung in drei Sätzen, Einblendung der Begriffe.', nutzen: 'Zeigt Kompetenz in dem Feld, in dem Stefan stark ist.', cta: '„Überblick ansehen“ führt zur Seite Öffentlicher Dienst.',
  },
  {
    id: 'frag', img: 'b', series: 'Frag Stefan', kind: 'FAQ', rhythm: 'wöchentlich · 20 bis 40 Sekunden', cover: 'Referendariat: drei Fragen vorab',
    hook: 'Referendariat startet: Welche Fragen solltest du vorher klären?',
    aufbau: 'Echte Kundenfrage im Bild, Stefan antwortet direkt.', nutzen: 'Die Themen kommen aus der Beratung. Der Vorrat geht nie aus.', cta: '„Checkliste ansehen“ führt zur Seite für Anwärter.',
  },
  {
    id: 'buero', img: 'c', series: 'Aus dem Büro', kind: 'Einblick', rhythm: '14-tägig · 30 Sekunden', cover: 'So läuft ein erstes Gespräch ab',
    hook: 'So läuft ein erstes Gespräch bei mir ab',
    aufbau: 'Drei Schritte, gefilmt im Büro, ruhig geschnitten.', nutzen: 'Nimmt die Hürde vor dem ersten Kontakt.', cta: '„Gespräch anfragen“ führt zu Telefon, WhatsApp oder Termin.',
  },
  {
    id: 'klartext', img: 'a', series: 'Klartext', kind: 'Haltung', rhythm: '14-tägig · 30 bis 45 Sekunden', cover: 'Woran du gute Beratung erkennst',
    hook: 'Woran du gute Beratung erkennst',
    aufbau: 'Eine klare Aussage, eine Begründung, ein Beispiel.', nutzen: 'Macht Stefans Haltung sichtbar und grenzt ihn ab.', cta: '„Mehr über Stefan“ führt zur Über-uns-Seite.',
  },
] as const;

/* ---------- 04 · Social-Media-Strategie ---------- */
export const pillars = [
  { id: 'wissen', n: '01', title: 'Wissen & Orientierung', effect: 'zeigt Kompetenz', text: 'Versicherungsthemen verständlich erklärt, mit Schwerpunkt Öffentlicher Dienst.', formats: ['Kurz erklärt', 'Wissens-Karussells', 'Checklisten'] },
  { id: 'vertrauen', n: '02', title: 'Fragen & Vertrauen', effect: 'baut Vertrauen', text: 'Antworten auf echte Fragen und ein Blick darauf, wie Beratung abläuft.', formats: ['Frag Stefan', 'Fragen-Sticker in Stories', 'Kundenstimmen nur mit Freigabe'] },
  { id: 'person', n: '03', title: 'Person & Einblick', effect: 'schafft Nähe', text: 'Stefan bei der Arbeit: Haltung, Alltag, Region.', formats: ['Aus dem Büro', 'Klartext', 'Unterwegs in der Region'] },
] as const;

export const tiles = [
  { img: 'd', pillar: 'wissen', text: 'Beihilfe oder Heilfürsorge?' },
  { img: 'b', pillar: 'vertrauen', text: 'Frag Stefan: Referendariat' },
  { img: 'a', pillar: 'person', text: 'Woran du gute Beratung erkennst' },
  { img: 'e', pillar: 'wissen', text: 'Dienstunfähigkeit kurz erklärt' },
  { img: 'c', pillar: 'person', text: 'So läuft ein Erstgespräch' },
  { img: 'd', pillar: 'vertrauen', text: 'Eure Fragen der Woche' },
] as const;

export const calTypes = [
  { id: 'reel', label: 'Reels' },
  { id: 'story', label: 'Stories' },
  { id: 'wissen', label: 'Wissen' },
  { id: 'einblick', label: 'Einblicke' },
  { id: 'faq', label: 'FAQ' },
  { id: 'cta', label: 'Handlungsaufruf' },
] as const;
export type CalType = (typeof calTypes)[number]['id'];
export const calTypeName: Record<CalType, string> = { reel: 'Reel', story: 'Story', wissen: 'Wissen', einblick: 'Einblick', faq: 'FAQ', cta: 'Handlungsaufruf' };
export const days = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'] as const;
interface CalItem { d: number; type: CalType; title: string; format: string; goal: string; cta: string }
export const calendar: { theme: string; items: CalItem[] }[] = [
  { theme: 'Start ins Referendariat', items: [
    { d: 0, type: 'reel', title: 'Referendariat: drei Fragen vorab', format: 'Reel · Serie „Frag Stefan“', goal: 'Aufmerksamkeit bei Anwärtern', cta: 'Checkliste ansehen' },
    { d: 1, type: 'story', title: 'Umfrage: Wo stehst du gerade?', format: 'Story mit Umfrage-Sticker', goal: 'Interaktion und Themenideen', cta: 'Antworten lassen' },
    { d: 2, type: 'wissen', title: 'Die Checkliste in fünf Schritten', format: 'Karussell, fünf Seiten', goal: 'Speichern und Weiterleiten', cta: 'Checkliste ansehen' },
    { d: 3, type: 'einblick', title: 'So bereite ich ein Gespräch vor', format: 'Story-Sequenz aus dem Büro', goal: 'Nähe und Vertrauen', cta: 'Kein Aufruf' },
    { d: 4, type: 'faq', title: 'Wann sollte ich mich kümmern?', format: 'Reel · Serie „Frag Stefan“', goal: 'Häufige Frage beantworten', cta: 'Frage stellen' },
    { d: 6, type: 'cta', title: 'Checkliste für den Start in NRW', format: 'Beitrag mit Link in Story und Profil', goal: 'Besuch der Seite für Anwärter', cta: 'Checkliste ansehen' },
  ] },
  { theme: 'Beihilfe & Heilfürsorge', items: [
    { d: 0, type: 'reel', title: 'Beihilfe oder Heilfürsorge?', format: 'Reel · Serie „Kurz erklärt“', goal: 'Kompetenz zeigen', cta: 'Überblick ansehen' },
    { d: 1, type: 'story', title: 'Quiz: Was gilt für wen?', format: 'Story mit Quiz-Sticker', goal: 'Interaktion', cta: 'Mitraten' },
    { d: 2, type: 'wissen', title: 'Zwei Wege im Überblick', format: 'Karussell, vier Seiten', goal: 'Speichern und Weiterleiten', cta: 'Überblick ansehen' },
    { d: 4, type: 'einblick', title: 'Zwischen Büro und Hausbesuch', format: 'Reel · Serie „Aus dem Büro“', goal: 'Stefan als Person zeigen', cta: 'Kein Aufruf' },
    { d: 6, type: 'faq', title: 'Eure Fragen der Woche', format: 'Story-Sequenz, drei Antworten', goal: 'Vertrauen, neue Themen', cta: 'Frage stellen' },
  ] },
  { theme: 'Dienstunfähigkeit verstehen', items: [
    { d: 0, type: 'reel', title: 'Dienstunfähigkeit kurz erklärt', format: 'Reel · Serie „Kurz erklärt“', goal: 'Kompetenz zeigen', cta: 'Mehr dazu' },
    { d: 2, type: 'faq', title: 'Brauche ich das schon als Anwärter?', format: 'Reel · Serie „Frag Stefan“', goal: 'Häufige Frage beantworten', cta: 'Frage stellen' },
    { d: 3, type: 'story', title: 'Was ist dir noch unklar?', format: 'Story mit Fragen-Sticker', goal: 'Themen für den nächsten Dreh', cta: 'Frage stellen' },
    { d: 4, type: 'wissen', title: 'Drei Begriffe, die oft verwechselt werden', format: 'Karussell, vier Seiten', goal: 'Speichern und Weiterleiten', cta: 'Mehr dazu' },
    { d: 6, type: 'cta', title: 'Erstgespräch: kostenlos und unverbindlich', format: 'Beitrag und Story', goal: 'Gesprächsanfragen', cta: 'Gespräch anfragen' },
  ] },
  { theme: 'So arbeitet Stefan', items: [
    { d: 0, type: 'einblick', title: 'So läuft ein erstes Gespräch ab', format: 'Reel · Serie „Aus dem Büro“', goal: 'Hürde vor dem Kontakt senken', cta: 'Gespräch anfragen' },
    { d: 1, type: 'story', title: 'Hinter den Kulissen vom Drehtag', format: 'Story-Sequenz', goal: 'Nähe', cta: 'Kein Aufruf' },
    { d: 2, type: 'reel', title: 'Woran du gute Beratung erkennst', format: 'Reel · Serie „Klartext“', goal: 'Haltung zeigen, abgrenzen', cta: 'Mehr über Stefan' },
    { d: 4, type: 'faq', title: 'Wie arbeitet ein Makler eigentlich?', format: 'Reel · Serie „Frag Stefan“', goal: 'Vertrauen durch Transparenz', cta: 'Frage stellen' },
    { d: 6, type: 'cta', title: 'Termin für den nächsten Monat', format: 'Story mit Link', goal: 'Terminbuchungen', cta: 'Termin anfragen' },
  ] },
];

export const channels = [
  { name: 'Instagram', role: 'Hauptkanal', why: 'Reels, Stories und Profil als Schaufenster.' },
  { name: 'Facebook', role: 'Mitlaufend', why: 'Gleiche Inhalte, regionale Reichweite, dieselbe Planung.' },
  { name: 'LinkedIn', role: 'Später', why: 'Sinnvoll, sobald Gewerbekunden in den Fokus rücken.' },
];

/* ---------- 05 · Produktion & Automatisierung ---------- */
export const levels = [
  { id: 'auto', label: 'Automatisierbar', note: 'Routine ohne fachliche Aussage: planen, exportieren, erinnern, Zahlen abrufen. Das kann Software übernehmen.' },
  { id: 'ki', label: 'KI-unterstützt, geprüft', note: 'KI liefert Entwürfe und Varianten. Wir prüfen jede Fassung, bevor Stefan sie sieht.' },
  { id: 'stefan', label: 'Stefan persönlich', note: 'Fachliche Aussagen, der Auftritt vor der Kamera und jede Freigabe bleiben bei Stefan.' },
] as const;
export type Level = (typeof levels)[number]['id'];
export const pipeline: { title: string; text: string; level: Level }[] = [
  { title: 'Themenplanung', text: 'Häufige Kundenfragen werden zu einem Monatsplan.', level: 'ki' },
  { title: 'Skripte', text: 'Hook, drei Sätze, nächster Schritt. Entwurf von uns.', level: 'ki' },
  { title: 'Drehtag', text: 'Mehrere Themen an einem Termin, mit Regie.', level: 'stefan' },
  { title: 'Schnitt', text: 'Schnitt, Untertitel und Cover im Markenbild.', level: 'ki' },
  { title: 'Varianten', text: 'Kurzfassungen, Formate und Texte für jeden Kanal.', level: 'ki' },
  { title: 'Freigabe', text: 'Stefan prüft jeden Beitrag fachlich, bevor er geplant wird.', level: 'stefan' },
  { title: 'Veröffentlichung', text: 'Freigegebene Beiträge gehen geplant online.', level: 'auto' },
  { title: 'Analyse', text: 'Zahlen werden gesammelt und monatlich besprochen.', level: 'auto' },
];
export const shootTopics = ['Referendariat: drei Fragen', 'Beihilfe oder Heilfürsorge', 'Dienstunfähigkeit erklärt', 'So läuft ein Erstgespräch', 'Woran du gute Beratung erkennst', 'Wann sollte ich mich kümmern', 'Wie arbeitet ein Makler', 'Zwischen Büro und Hausbesuch'];
export const shootOutputs = [
  { id: 'reels', label: 'Reels', hint: '9:16, mit Untertiteln', shape: 'tall' },
  { id: 'stories', label: 'Story-Sequenzen', hint: 'Kurzfassung in drei Teilen', shape: 'tall3' },
  { id: 'karussells', label: 'Wissens-Karussells', hint: 'Aus dem Skript abgeleitet', shape: 'stack' },
  { id: 'zitate', label: 'Zitat-Grafiken', hint: 'Ein Satz, ein Bild', shape: 'square' },
  { id: 'ads', label: 'Anzeigenmotive', hint: 'Für freigegebene Kampagnen', shape: 'ad' },
] as const;

/* ---------- 06 · Kampagnen & Leads ---------- */
export const compare = [
  { row: 'Erreicht', a: 'Follower, Empfehlungen, Menschen aus der Region', b: 'Ausgewählte Zielgruppen auf Instagram und Facebook' },
  { row: 'Stärke', a: 'Vertrauen und Wiedererkennung', b: 'Steuerbar und schnell testbar' },
  { row: 'Grenze', a: 'Reichweite wächst langsam', b: 'Ohne gute Inhalte wirkungslos' },
  { row: 'Kosten', a: 'Zeit und Produktion', b: 'Werbebudget, zusätzlich zur Agenturleistung' },
];

export const campaigns = [
  {
    id: 'a', tab: 'A', img: 'ad', name: 'Referendariat & Berufseinstieg',
    headline: 'Dein Start in NRW. Auf zwei Seiten.', sub: 'Die Checkliste für deine Absicherung im Referendariat.', text: 'Für angehende Lehrkräfte und Beamtenanwärter in NRW.', cta: 'Checkliste ansehen',
    facts: [
      ['Zielgruppe', 'Angehende Lehrkräfte und Beamtenanwärter in NRW, kurz vor dem Dienstantritt'],
      ['Problem', 'Viele Entscheidungen in wenigen Wochen, wenig Überblick'],
      ['Nutzen', 'Eine Checkliste und ein Ansprechpartner, der die Fragen kennt'],
      ['Format', 'Reel-Anzeige und Story, Motiv mit Stefan'],
      ['Weg', 'Landingpage zum Referendariat, von dort zur Terminanfrage'],
      ['Messung', 'Seitenbesuche, Kontakt-Klicks, Terminanfragen'],
    ],
  },
  {
    id: 'b', tab: 'B', img: 'c', name: 'Absicherung im Öffentlichen Dienst',
    headline: 'Beihilfe oder Heilfürsorge?', sub: 'Verständlich erklärt von jemandem, der den Dienst kennt.', text: 'Für Beamte, Polizei, Feuerwehr und Bundeswehr.', cta: 'Mehr dazu',
    facts: [
      ['Zielgruppe', 'Beamte und Angehörige von Polizei, Feuerwehr und Bundeswehr in der Region'],
      ['Problem', 'Die eigene Versorgung ist schwer zu durchschauen'],
      ['Nutzen', 'Ein verständlicher Überblick und ein Rückruf, wenn gewünscht'],
      ['Format', 'Video-Anzeige aus der Serie „Kurz erklärt“'],
      ['Weg', 'Meta-Lead-Formular mit wenigen Feldern: Name, Kontakt, Rückrufwunsch'],
      ['Messung', 'Qualifizierte Leads, Kosten je qualifiziertem Lead, geführte Gespräche'],
    ],
  },
  {
    id: 'c', tab: 'C', img: 'a', name: 'Persönliche Beratung für Privatkunden',
    headline: 'Ein Ansprechpartner. Vor Ort.', sub: 'Erstgespräch kostenlos und unverbindlich.', text: 'Stefan Neudorf, Versicherungsmakler in Mechernich.', cta: 'Termin anfragen',
    facts: [
      ['Zielgruppe', 'Privatkunden rund um Mechernich und Euskirchen, mit einem konkreten Anlass'],
      ['Problem', 'Verträge aus vielen Jahren, niemand fühlt sich zuständig'],
      ['Nutzen', 'Ein fester Ansprechpartner, der zuhört und sortiert'],
      ['Format', 'Porträt-Anzeige im Feed, regional ausgespielt'],
      ['Weg', 'Direkte Terminbuchung für ein Erstgespräch'],
      ['Messung', 'Gebuchte und wahrgenommene Termine'],
    ],
  },
] as const;

export const leadPaths = [
  { id: 'form', title: 'Meta-Lead-Formular', rows: ['Formular öffnet sich direkt in Instagram oder Facebook, Kontaktdaten sind vorausgefüllt.', 'Niedrigste Hürde, viele Anfragen möglich.', 'Anfragen können unverbindlicher sein. Ein Prüfschritt im Formular hilft.', 'Datenschutz-Link ist Pflicht. Keine Fragen zu Gesundheit, Finanzen oder bestehenden Verträgen.', 'Kampagne B'] },
  { id: 'page', title: 'Landingpage', rows: ['Die Anzeige führt auf eine Seite, die das Thema erklärt und zum Kontakt führt.', 'Wer anfragt, hat sich vorher informiert.', 'Mehr Schritte, dadurch weniger Anfragen.', 'Volle Kontrolle über Hinweise, Einwilligung und Erstinformation.', 'Kampagne A'] },
  { id: 'booking', title: 'Terminbuchung', rows: ['Interessenten wählen selbst einen freien Termin.', 'Höchste Verbindlichkeit, kein Hin und Her.', 'Höchste Hürde. Braucht Vertrauen aus den Inhalten davor.', 'Buchungswerkzeug mit Vertrag zur Auftragsverarbeitung nötig.', 'Kampagne C'] },
] as const;
export const pathRows = ['So funktioniert es', 'Stärke', 'Grenze', 'Zu beachten', 'Passt zu'];

export const platformRules: { tag: Tag; text: string }[] = [
  { tag: 'doku', text: 'Meta-Lead-Formulare brauchen einen Link zur eigenen Datenschutzerklärung. Gesundheits-, Finanz- und Versicherungsdaten dürfen ohne Erlaubnis von Meta nicht abgefragt werden.' },
  { tag: 'doku', text: 'Anzeigen dürfen persönliche Merkmale wie Gesundheit oder finanzielle Lage weder behaupten noch andeuten. Der Nutzen steht im Mittelpunkt, nicht die Lage der Person.' },
  { tag: 'doku', text: 'Google verlangt für Finanzdienstleistungs-Anzeigen in Deutschland eine Verifizierung des Werbetreibenden. Deshalb beginnt der Pilot mit Meta, Google Ads prüfen wir danach.' },
  { tag: 'hyp', text: 'Ob Metas besondere Anzeigenkategorie für Finanzprodukte bei Versicherungsanzeigen in Deutschland greift, klären wir vor dem Start direkt im Werbekonto.' },
];

/* ---------- 07 · Lead Journey ---------- */
export const journey = [
  { title: 'Anzeige oder Content', sees: 'Sieht ein Reel oder eine Anzeige mit Stefan.', auto: 'Ausspielung an die freigegebene Zielgruppe.', stefan: 'Gibt Motiv und Text vorher frei.', data: 'Reichweite, Aufrufe, Klicks' },
  { title: 'Kontaktanfrage', sees: 'Füllt ein kurzes Formular aus oder klickt auf „Termin anfragen“.', auto: 'Bestätigung auf dem Bildschirm, Hinweis auf Datenschutz.', stefan: 'Nichts. Die Anfrage kommt von selbst.', data: 'Anzahl der Anfragen je Kampagne' },
  { title: 'Strukturierte Erfassung', sees: 'Bekommt eine kurze Bestätigung mit Stefans Kontaktdaten.', auto: 'Anfrage landet mit Quelle und Zeitpunkt an einem Ort.', stefan: 'Nichts.', data: 'Herkunft: Kampagne, Motiv, Kanal' },
  { title: 'CRM', sees: 'Merkt davon nichts.', auto: 'Kontakt wird angelegt, Status „neu“, Dubletten werden erkannt.', stefan: 'Sieht alle Anfragen in einer Liste.', data: 'Status je Kontakt' },
  { title: 'Benachrichtigung', sees: 'Wartet nicht lange auf eine Antwort.', auto: 'Stefan erhält sofort eine Nachricht mit den Angaben.', stefan: 'Entscheidet: anrufen, schreiben oder Termin vorschlagen.', data: 'Zeit bis zur ersten Reaktion' },
  { title: 'Terminbuchung', sees: 'Wählt einen freien Termin und bekommt eine Erinnerung.', auto: 'Kalendereintrag, Bestätigung, Erinnerung am Vortag.', stefan: 'Legt fest, wann Termine möglich sind.', data: 'Gebuchte Termine' },
  { title: 'Beratung', sees: 'Spricht mit Stefan. Kostenlos und unverbindlich.', auto: 'Nichts. Beratung bleibt persönlich.', stefan: 'Führt das Gespräch, übergibt die Erstinformation, dokumentiert.', data: 'Wahrgenommene Termine, Ergebnis' },
  { title: 'Nachverfolgung', sees: 'Bekommt die vereinbarten Unterlagen und einen nächsten Schritt.', auto: 'Erinnerung an offene Punkte, Status wird fortgeschrieben.', stefan: 'Hält den Kontakt und meldet, ob ein Kunde gewonnen wurde.', data: 'Gewonnene Kunden, soweit Stefan sie meldet' },
];

export const privacy = [
  { title: 'Einwilligung und Information', text: 'Wer anfragt, erfährt klar, wer die Daten bekommt und wofür. Rückruf und E-Mail nur mit ausdrücklicher Einwilligung, die wir dokumentieren.' },
  { title: 'So wenig Daten wie möglich', text: 'Name, Kontaktweg, Anliegen. Angaben zu Gesundheit oder bestehenden Verträgen gehören ins Gespräch, nicht ins Formular.' },
  { title: 'Zugriff und Löschung', text: 'Anbieter mit Vertrag zur Auftragsverarbeitung, Zugriff nur für Stefan und benannte Personen, feste Löschfristen.' },
];

/* ---------- 08 · Growth Intelligence (Demo-Daten, frei erfunden) ---------- */
export const dashData = [
  { id: 'a', name: 'Kampagne A', spend: 450, leads: 38, qualified: 14, booked: 9, attended: 7, customers: 2, verdict: 'Viele Anfragen, aber nur jede dritte ist qualifiziert.', action: 'Formular schärfen: eine Frage zum Anlass ergänzen, Zielgruppe enger fassen.' },
  { id: 'b', name: 'Kampagne B', spend: 450, leads: 16, qualified: 11, booked: 8, attended: 7, customers: 3, verdict: 'Weniger Anfragen, dafür werden fast alle zu Gesprächen.', action: 'Laufen lassen. Budget erst erhöhen, wenn die Quote stabil bleibt.' },
  { id: 'c', name: 'Kampagne C', spend: 300, leads: 6, qualified: 3, booked: 2, attended: 1, customers: 0, verdict: 'Zu wenige Daten für ein Urteil.', action: 'Weiterlaufen lassen und ein zweites Motiv testen, bevor wir entscheiden.' },
];
export const kpiSources = { spend: 'Werbekonto', qualified: 'CRM, von Stefan bestätigt', cpl: 'Berechnet', booked: 'Kalender', attended: 'Kalender und Stefan', customers: 'Stefans Rückmeldung' };

/* ---------- 09 · 90-Tage-Plan ---------- */
export const roadmap = [
  { days: 'Tag 1–30', title: 'Vorbereiten', items: ['Positionierung und Zielgruppen festlegen', 'Themenplan und Skripte', 'Erster Drehtag', 'Lead-Weg und Messung einrichten'], result: 'Ergebnis: ein abgestimmter Plan, erstes Material, ein getesteter Anfrageweg.' },
  { days: 'Tag 31–60', title: 'Veröffentlichen', items: ['Regelmäßige Beiträge nach Plan', 'Erste freigegebene Kampagnentests', 'Lead-Prozess im Alltag erproben', 'Zweiter Drehtag'], result: 'Ergebnis: ein sichtbarer Kanal und die ersten echten Anfragen.' },
  { days: 'Tag 61–90', title: 'Auswerten', items: ['Kampagnen vergleichen', 'Motive und Formulare verbessern', 'Kosten je qualifizierter Anfrage ermitteln'], result: 'Ergebnis: echte Zahlen als Grundlage.' },
  { days: 'Tag 90', title: 'Entscheiden', items: ['Was hat funktioniert?', 'Was kostet ein Gespräch?', 'Ausbauen, anpassen oder beenden'], result: 'Eine gemeinsame Entscheidung. Ohne Erfolgsgarantie, aber mit Zahlen.' },
];

/* ---------- 10 · Angebot ---------- */
export const roles = {
  wir: ['Strategie, Zielgruppen und Themenplan', 'Skripte, Regie und Dreh', 'Schnitt, Untertitel, Grafik', 'Planung und Veröffentlichung nach Freigabe', 'Kampagnen: Aufbau, Betreuung, Auswertung', 'Lead-Prozess einrichten und pflegen', 'Monatliches Gespräch mit Zahlen', 'Ein fester Ansprechpartner'],
  stefan: ['Themen und Aussagen fachlich freigeben', 'Drehtermine wahrnehmen', 'Anfragen persönlich beantworten', 'Rückmeldung geben, was aus Gesprächen wird'],
};
export const offer = [
  { label: 'Pilotprojekt', title: 'Was dazugehören könnte', items: ['Strategie-Workshop', 'Zwei Drehtage', 'Redaktionsplan für drei Monate', 'Bis zu drei Kampagnentests', 'Lead-Prozess und Auswertung'], foot: 'Umfang und Honorar legen wir gemeinsam fest.' },
  { label: 'Zusätzliche Kostenarten', title: 'Was getrennt anfällt', items: ['Werbebudget, geht direkt an die Plattform', 'Werkzeuge für Terminbuchung und CRM', 'Rechtliche Prüfung von Datenschutz und Werbeaussagen', 'Bei Bedarf: Drehort oder zusätzliche Technik'], foot: 'Beträge nennen wir erst, wenn der Umfang feststeht.' },
  { label: 'So starten wir', title: 'Drei Schritte', items: ['Gespräch: Ziele, Zielgruppe, verfügbare Zeit', 'Unser Vorschlag für den Pilot mit Umfang und Preis', 'Stefans Entscheidung, danach der erste Workshop'], foot: 'Kein Vertrag vor dem Gespräch.' },
];
export const questions = ['Welche Zielgruppe soll zuerst wachsen?', 'Wie viel Zeit kannst du im Monat einplanen?', 'Wie kommen Anfragen heute bei dir an?'];
