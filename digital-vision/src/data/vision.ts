// Inhalte der Präsentation „Digital Vision & Growth“.
// Grundlage: die 20-Folien-Präsentation (praesentation/), Stefans Website team-neudorf.de und sein Instagram-Profil.
// Keine erfundenen Zahlen, Referenzen oder Ergebnisse. Mockups sind Konzepte.

export const chapters = [
  { id: 'a', letter: 'A', title: 'Die Chance', line: 'Warum Vertrauen und Sichtbarkeit zusammengehören.' },
  { id: 'b', letter: 'B', title: 'Die Personenmarke', line: 'Stefan als Mensch, Berater und Gesicht seiner Marke.' },
  { id: 'c', letter: 'C', title: 'Die Social-Media-Vision', line: 'Drei Säulen, konkrete Reels, ein wiedererkennbarer Auftritt.' },
  { id: 'd', letter: 'D', title: 'Digital Growth', line: 'Organische Reichweite, Kampagnen und der Weg zur Anfrage.' },
  { id: 'e', letter: 'E', title: 'Produktion & Automatisierung', line: 'Wenig Aufwand für Stefan, klare Abläufe.' },
  { id: 'f', letter: 'F', title: 'Zusammenarbeit', line: '90 Tage Pilot und der nächste gemeinsame Schritt.' },
] as const;

export const trustPoints = [
  { title: 'Man sieht sie nicht', text: 'Der Wert zeigt sich erst im Ernstfall. Bis dahin zählt, wem man glaubt.' },
  { title: 'Man lebt lange damit', text: 'Beihilfe, Dienstunfähigkeit, Vorsorge: Entscheidungen für viele Jahre.' },
  { title: 'Man fragt jemanden', text: 'Empfehlung und Sympathie entscheiden, wer den Anruf bekommt.' },
];

// Quelle: team-neudorf.de (Startseite, Über uns)
export const stations = [
  { label: 'Herkunft', title: 'Soldat bei der Bundeswehr', text: 'unter anderem im Auslandseinsatz in Afghanistan' },
  { label: 'Verantwortung', title: 'Kaufmann für Büromanagement', text: 'nach der Ausbildung Leitung einer Filiale' },
  { label: 'Heute', title: 'Versicherungsmakler in Mechernich', text: 'seit 2024, Schwerpunkt Öffentlicher Dienst' },
  { label: 'Privat', title: 'Verheiratet, Vater von drei Kindern', text: 'Vorsorge ist für ihn kein reines Berufsthema' },
];

export const system = [
  { title: 'Personal Brand', text: 'Stefan als Gesicht und Stimme' },
  { title: 'Hochwertiger Content', text: 'Reels und Beiträge mit Wiedererkennung' },
  { title: 'Organische Sichtbarkeit', text: 'Regelmäßig im Blickfeld der Zielgruppen' },
  { title: 'Gezielte Kampagnen', text: 'Was funktioniert, bekommt Reichweite' },
  { title: 'Qualifizierte Anfragen', text: 'Menschen mit konkretem Beratungsbedarf' },
  { title: 'Messbares Wachstum', text: 'Auswerten, lernen, verbessern' },
];

export const positioning = [
  { label: 'Persönlichkeit', title: 'Ein Mensch mit Geschichte', items: ['Ehemaliger Soldat', 'Familienvater', 'Zu Hause in der Region'] },
  { label: 'Glaubwürdigkeit', title: 'Kennt ihre Berufswelt', items: ['Öffentlicher Dienst aus eigener Erfahrung', 'Keinem einzelnen Anbieter verpflichtet', 'Bleibt Ansprechpartner nach dem Abschluss'] },
  { label: 'Kompetenz', title: 'Erklärt, statt zu überreden', items: ['Beihilfe, Dienstunfähigkeit, Pension', 'Privat- und Firmenkunden', 'Verständlich statt Fachsprache'] },
];

export const stories = [
  { title: 'Vom Soldaten zum Versicherungsmakler', basis: 'Bundeswehr, Auslandseinsatz in Afghanistan', tells: 'Was Verantwortung und Verlässlichkeit bedeuten.' },
  { title: 'Früh Verantwortung übernommen', basis: 'Ausbildung, danach Leitung einer Filiale', tells: 'Zuhören, statt irgendeine Lösung anzubieten.' },
  { title: 'Vorsorge ist persönlich', basis: 'Verheiratet, Vater von drei Kindern', tells: 'Warum Absicherung für ihn kein Fachbegriff ist.' },
  { title: 'Vor Ort in Mechernich', basis: 'Mechernich, Euskirchen, Bonn und Köln', tells: 'Beratung mit Gesicht, im Büro oder zu Hause.' },
];

export const pillars = [
  { id: 'person', n: '01', title: 'Persönlichkeit & Einblicke', effect: 'schafft Nähe', text: 'Stefan als Mensch: sein Weg, seine Haltung, sein Arbeitsalltag.', formats: ['Herkunftsgeschichte', 'Ein Tag im Büro', 'Was mir in der Beratung wichtig ist'] },
  { id: 'wissen', n: '02', title: 'Wissen & Orientierung', effect: 'zeigt Kompetenz', text: 'Versicherungsthemen verständlich erklärt, mit Schwerpunkt Öffentlicher Dienst.', formats: ['Beihilfe oder Heilfürsorge', 'Start ins Referendariat', 'Dienstunfähigkeit erklärt'] },
  { id: 'vertrauen', n: '03', title: 'Vertrauen & Community', effect: 'baut Vertrauen', text: 'Fragen beantworten und zeigen, wie Beratung wirklich abläuft.', formats: ['Häufige Fragen', 'So läuft ein Erstgespräch', 'Kundenstimmen nur mit Freigabe'] },
] as const;

// Kacheln des Profil-Mockups (Entwürfe)
export const tiles = [
  { img: 'a', pillar: 'person', text: 'Vom Soldaten zum Makler' },
  { img: 'd', pillar: 'wissen', text: 'Beihilfe oder Heilfürsorge?' },
  { img: 'b', pillar: 'wissen', text: 'Referendariat startet' },
  { img: 'e', pillar: 'vertrauen', text: 'Drei Fragen vor dem Start' },
  { img: 'c', pillar: 'vertrauen', text: 'So läuft ein Erstgespräch' },
  { img: 'd', pillar: 'person', text: 'Was mir wichtig ist' },
] as const;

export const reels = [
  {
    id: 'bundeswehr', img: 'a', pillar: 'Persönlichkeit', length: '30–45 Sekunden', cover: 'Vom Soldaten zum Makler',
    hook: 'Warum ich nach der Bundeswehr Versicherungsmakler wurde',
    bild: 'Stefan spricht direkt in die Kamera, ruhiges Büro, Untertitel.',
    kern: 'Verantwortung, Verlässlichkeit, Vertrauen: was ihn geprägt hat.',
    cta: '„Mehr über mich“ führt zur Über-uns-Seite.',
    scenes: ['Stefan nennt den Hook in einem Satz.', 'Bundeswehr: was ihn diese Zeit gelehrt hat.', 'Der Weg danach: Ausbildung, Filialleitung.', 'Heute: warum er den Öffentlichen Dienst versteht.', 'Hinweis auf die Über-uns-Seite.'],
  },
  {
    id: 'referendariat', img: 'b', pillar: 'Wissen', length: '30–40 Sekunden', cover: 'Referendariat startet: drei Fragen vorab',
    hook: 'Referendariat startet: Welche Fragen solltest du vorher klären?',
    bild: 'Stefan nennt drei Stichpunkte, die Checkliste ist im Bild.',
    kern: 'Krankenversicherung, Dienstunfähigkeit, früh starten.',
    cta: '„Checkliste holen“ führt zur Seite für Anwärter.',
    scenes: ['Hook als Frage.', 'Drei Stichpunkte werden eingeblendet.', 'Stefan: warum gerade diese Phase wichtig ist.', 'Die Checkliste im Bild.', 'Hinweis auf die Seite für Anwärter.'],
  },
  {
    id: 'beihilfe', img: 'd', pillar: 'Wissen', length: '40–60 Sekunden', cover: 'Beihilfe oder Heilfürsorge?',
    hook: 'Beihilfe oder Heilfürsorge? Erst einmal den Unterschied verstehen',
    bild: 'Stefan erklärt, zwei Texttafeln stellen beide Wege gegenüber.',
    kern: 'Zwei Wege im Öffentlichen Dienst, je nach Dienstherr.',
    cta: '„Überblick ansehen“ führt zur Seite Öffentlicher Dienst.',
    scenes: ['Hook.', 'Beihilfe in einem Satz.', 'Heilfürsorge in einem Satz.', 'Was das für die eigene Absicherung bedeutet.', 'Hinweis auf die Seite Öffentlicher Dienst.'],
  },
  {
    id: 'gespraech', img: 'c', pillar: 'Vertrauen', length: '30 Sekunden', cover: 'So läuft ein erstes Gespräch ab',
    hook: 'So läuft ein erstes Gespräch bei mir ab',
    bild: 'Einblick ins Büro, drei Schritte werden eingeblendet.',
    kern: 'Melden, zuhören, in Ruhe entscheiden. Kostenlos und unverbindlich.',
    cta: '„Gespräch anfragen“ führt zu Telefon, WhatsApp, Termin.',
    scenes: ['Hook.', 'Schritt 1: Sie melden sich.', 'Schritt 2: Ich höre zu.', 'Schritt 3: Sie entscheiden in Ruhe.', 'Kontaktwege nennen.'],
  },
] as const;

export const compare = [
  { row: 'Erreicht', organic: 'Follower, Empfehlungen, Menschen aus der Region', paid: 'Ausgewählte Zielgruppen auf Instagram und Facebook' },
  { row: 'Stärke', organic: 'Vertrauen und Wiedererkennung', paid: 'Steuerbar und schnell testbar' },
  { row: 'Grenze', organic: 'Reichweite wächst langsam', paid: 'Ohne gute Inhalte wirkungslos' },
  { row: 'Kosten', organic: 'Zeit und Produktion', paid: 'Werbebudget, zusätzlich zur Agenturleistung' },
];

export const adVariants = [
  { id: 'a', label: 'Motiv A', headline: 'Referendariat in NRW?', sub: 'Diese Fragen solltest du vorher klären.', text: 'Kostenlose Checkliste für Anwärterinnen und Anwärter.', cta: 'Mehr dazu' },
  { id: 'b', label: 'Motiv B', headline: 'Dein Start in NRW. Auf zwei Seiten.', sub: 'Die Checkliste für deine Absicherung, mit allen Fristen.', text: 'Für Beamtenanwärterinnen und Beamtenanwärter in NRW.', cta: 'Checkliste ansehen' },
  { id: 'c', label: 'Motiv C', headline: 'Beihilfe oder Heilfürsorge?', sub: 'Erst einmal den Unterschied verstehen.', text: 'Verständlich erklärt von Stefan Neudorf.', cta: 'Überblick ansehen' },
];

export const campaign = [
  { label: 'Zielgruppe', text: 'Angehende Lehrkräfte und Beamtenanwärter in NRW' },
  { label: 'Motiv', text: 'Stefan als Ansprechpartner, im vertrauten Markenbild' },
  { label: 'Angebot', text: 'Die kostenlose Checkliste, die es auf team-neudorf.de bereits gibt' },
  { label: 'Ziel', text: 'Seite mit Antworten, von dort zum Erstgespräch' },
  { label: 'Freigabe', text: 'Motiv, Text und Budget gibt Stefan frei, bevor etwas startet' },
];

export const journey = [
  { title: 'Aufmerksamkeit', what: 'Jemand sieht ein Reel oder eine Anzeige mit Stefan.', measure: 'Reichweite, Aufrufe', source: 'Zahlen der Plattform' },
  { title: 'Interesse', what: 'Die Person besucht das Profil oder die passende Seite.', measure: 'Profilbesuche, Seitenaufrufe', source: 'Plattform und Website, nach Freigabe der Messung' },
  { title: 'Kontakt', what: 'Sie meldet sich: per Telefon, WhatsApp oder Terminbuchung.', measure: 'Kontakt-Klicks, Anfragen', source: 'Website und Stefans eigene Zählung' },
  { title: 'Gespräch', what: 'Stefan führt das Erstgespräch, kostenlos und unverbindlich.', measure: 'Geführte Gespräche', source: 'Stefans eigene Zählung' },
  { title: 'Kunde', what: 'Die passende Absicherung entsteht, wenn sie wirklich passt.', measure: 'Abschlüsse', source: 'Stefans eigene Angabe' },
];

export const production = [
  { title: 'Themenplanung', text: 'Welche Fragen stellen Kunden wirklich? Daraus entsteht der Plan.', who: 'gemeinsam' },
  { title: 'Gebündelter Dreh', text: 'Mehrere Inhalte an einem Termin, statt täglich zu filmen.', who: 'gemeinsam' },
  { title: 'Schnitt & Gestaltung', text: 'Schnitt, Untertitel und Cover im Markenbild.', who: 'wir' },
  { title: 'KI-Unterstützung', text: 'Ideen, Untertitel, Varianten. Immer von Menschen geprüft.', who: 'wir' },
  { title: 'Redaktionsplan', text: 'Vorbereitete Veröffentlichung nach Stefans Freigabe.', who: 'wir' },
  { title: 'Auswertung', text: 'Was kam an? Was machen wir beim nächsten Dreh anders?', who: 'gemeinsam' },
] as const;

export const roles = {
  stefan: ['Themen und Geschichten freigeben', 'Drehtermine wahrnehmen', 'Inhalte fachlich freigeben', 'Anfragen persönlich beantworten'],
  wir: ['Strategie und Themenplan', 'Regie und Dreh', 'Schnitt, Untertitel, Grafik', 'Texte und Beitragsplanung', 'Vorbereitete Veröffentlichung', 'Kampagnen nach Freigabe', 'Auswertung und Optimierung', 'Ein fester Ansprechpartner'],
};

export const roadmap = [
  { days: 'Tag 1–30', title: 'Fundament', items: ['Marken- und Content-Strategie', 'Themenplan für die drei Säulen', 'Erster Drehtermin'], result: 'Ergebnis: ein abgestimmter Plan und erstes Material.' },
  { days: 'Tag 31–60', title: 'Rhythmus', items: ['Erste Inhalte gehen live', 'Regelmäßige Veröffentlichung', 'Erste Erkenntnisse aus den Reaktionen'], result: 'Ergebnis: ein Kanal, der regelmäßig sichtbar ist.' },
  { days: 'Tag 61–90', title: 'Verstärkung', items: ['Erste Kampagnen nach Freigabe', 'Gemeinsame Auswertung', 'Empfehlung für die nächsten Schritte'], result: 'Ergebnis: echte Zahlen als Entscheidungsgrundlage.' },
  { days: 'Tag 90', title: 'Entscheidung', items: ['Was hat funktioniert?', 'Was kostet eine Anfrage?', 'Weiter, anpassen oder beenden'], result: 'Gemeinsame Entscheidung über die weitere Zusammenarbeit.' },
];

export const budget = [
  { label: 'Agenturleistung', title: 'Unsere Arbeit', items: ['Strategie und Themenplanung', 'Dreh, Schnitt und Gestaltung', 'Veröffentlichung und Betreuung', 'Kampagnensteuerung und Auswertung'], foot: 'Umfang und Honorar legen wir gemeinsam fest.' },
  { label: 'Werbebudget', title: 'Stefans Entscheidung', items: ['Geht vollständig an Meta', 'Höhe legt Stefan fest', 'Jederzeit anpassbar oder pausierbar', 'Start erst nach Freigabe'], foot: 'Kommt zur Agenturleistung hinzu, ist aber kein Muss für den Start.' },
];

export const questions = ['Welche Zielgruppe soll zuerst wachsen?', 'Wie viel Zeit kannst du im Monat einplanen?', 'Welche Geschichten möchtest du erzählen, und welche nicht?'];
