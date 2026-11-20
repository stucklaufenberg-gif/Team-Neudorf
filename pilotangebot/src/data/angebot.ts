// Inhalte des 90-Tage-Pilotangebots. Verbindlich ist die Leistungsbeschreibung aus dem Angebot vom Commit 5e7b208;
// hier wird sie nur strukturiert, nicht erweitert. Platzhalter in eckigen Klammern vor dem Versand ausfüllen (README).

/** Kontakt der Agentur. Solange leer, zeigt die Seite einen sichtbaren Platzhalter statt eines funktionslosen Buttons. */
export const agency = {
  name: '',
  email: '',
  phone: '', // Anzeigeform, z. B. "0221 123456"
  phoneHref: '', // z. B. "tel:+49221123456"
};

export const fee = { month: 750, months: 3 };
export const techMax = 350;
export const adsMax = 300;

export const chapters = [
  { id: 'start', label: 'Start' },
  { id: 'roadmap', label: '90 Tage' },
  { id: 'leistungen', label: 'Leistungen' },
  { id: 'preis', label: 'Pilotpreis' },
  { id: 'rechner', label: 'Budget' },
  { id: 'steuern', label: 'Steuern & Förderung' },
  { id: 'zusammenarbeit', label: 'Zusammenarbeit' },
  { id: 'entscheidung', label: 'Entscheidung' },
];

export const services = [
  {
    n: '01', key: 'strategie', title: 'Strategie und Positionierung', short: 'Kick-off, Zielgruppen, Positionierung, Redaktionsplanung.',
    items: [
      'Gemeinsamer Kick-off',
      'Zielgruppen und Kommunikationsziele festlegen',
      'Positionierung als Experte für Versicherungen, insbesondere für Beamte und den öffentlichen Dienst in NRW',
      'Content-Strategie und Redaktionsplanung',
      'Aufbau und Konfiguration der notwendigen Produktionsprozesse',
      'Vorbereitung eines einfachen Prozesses zur Lead-Erfassung',
    ],
  },
  {
    n: '02', key: 'content', title: 'KI-gestützte Content-Produktion', short: 'Ab Monat 2 bis zu 8 Reels und 4 Grafik- oder Karussellbeiträge pro Monat.',
    items: [
      'Ab Monat 2 geplanter Umfang pro Monat: bis zu 8 KI-gestützte Kurzvideos/Reels',
      'Ab Monat 2 geplanter Umfang pro Monat: bis zu 4 ergänzende Grafik- oder Karussellbeiträge',
      'Skripte, Hooks, Beitragstexte und grundlegender Schnitt',
      'Vorbereitung und Veröffentlichung nach deiner Freigabe',
      'Produktion nach der KI-first-Methodik aus der Präsentation',
    ],
    note: 'Monat 1 ist Aufbauphase mit geringerem Veröffentlichungsumfang. Die sechs vorhandenen Muster-Reels dienen als kreative und technische Referenz; sie sind keine veröffentlichten Kampagnenergebnisse.',
  },
  {
    n: '03', key: 'social', title: 'Social-Media-Betreuung', short: 'Ein gemeinsam festgelegter Hauptkanal, Veröffentlichung nach Freigabe.',
    items: [
      'Betreuung eines gemeinsam festgelegten Hauptkanals',
      'Redaktionsplanung',
      'Veröffentlichung freigegebener Beiträge',
      'Grundlegende Performance-Auswertung',
      'Anpassung der Inhalte anhand erster Erkenntnisse',
    ],
  },
  {
    n: '04', key: 'leads', title: 'Einfache Lead-Erfassung und Automatisierung', short: 'Ein einfacher Lead-Einstieg mit Benachrichtigung und Kontaktverwaltung.',
    items: [
      'Konzeption und Einrichtung eines einfachen Lead-Einstiegs',
      'Anbindung an eine geeignete Kontaktverwaltung bzw. ein CRM',
      'Benachrichtigung über neue Anfragen',
      'Einbindung einer Terminbuchung, sofern technisch und organisatorisch sinnvoll',
      'Grundlegende Funktionstests',
    ],
  },
  {
    n: '05', key: 'meta', title: 'Meta-Werbetest', short: 'Eine einfache Testkampagne mit bis zu zwei Creatives, Start erst nach Freigabe.',
    items: [
      'Vorbereitung einer einfachen Testkampagne',
      'Bis zu zwei Anzeigen-Creatives',
      'Abstimmung von Zielgruppe, Werbebotschaft und Budget',
      'Grundlegende Auswertung der Testkampagne',
    ],
    note: 'Die Schaltung setzt deine gesonderte Freigabe und die Erfüllung aller rechtlichen und technischen Voraussetzungen voraus. Weitere Kampagnenkonzepte aus der Präsentation sind nicht automatisch Teil des Pilots.',
  },
  {
    n: '06', key: 'reporting', title: 'Reporting und Optimierung', short: 'Monatliche Übersicht, 60-Minuten-Gespräch, Auswertung nach 90 Tagen.',
    items: [
      'Monatliche Übersicht über erbrachte Leistungen und verfügbare Kennzahlen',
      'Ein monatliches Abstimmungs- und Strategiegespräch von bis zu 60 Minuten',
      'Abschließende Auswertung nach 90 Tagen',
    ],
  },
];

/** Bestandteile, die im Angebot ausdrücklich an eine Bedingung oder gesonderte Freigabe geknüpft sind. */
export const optional = [
  'Schaltung der Meta-Testkampagne – erst nach deiner gesonderten Freigabe',
  'Einbindung einer Terminbuchung – sofern technisch und organisatorisch sinnvoll',
  'Kostenpflichtige Tools – erst nach deiner Zustimmung vor der ersten Buchung',
  'Ausgaben über den Obergrenzen von Technik- und Werbebudget – nur nach ausdrücklicher vorheriger Freigabe',
  'Weitere Kampagnenkonzepte aus der Präsentation – nicht automatisch Teil des Pilots',
];

export const excluded = [
  'Zusätzliche Sonderproduktionen und unbegrenzte Überarbeitungen',
  'Umfangreiche externe Dreharbeiten',
  'Tägliche Community-Betreuung und aktive Kaltakquise',
  'Komplexe KI-Chatbots und automatisierte Versicherungsberatung',
  'Umfangreiche individuelle CRM-Entwicklungen',
  'Dauerhafte, umfassende Performance-Marketing-Betreuung',
  'Weitere Kanäle über den vereinbarten Hauptkanal hinaus',
  'Rechtliche Prüfung oder Rechtsberatung',
];

export const months = [
  {
    tag: 'Monat 1', days: 'Tag 1–30', title: 'Strategie, Aufbau, erste Inhalte',
    items: [
      'Woche 1–2: Onboarding, Strategie, Zugänge, Freigabeprozess, technische Einrichtung',
      'Positionierung, Zielgruppen und Redaktionsplanung',
      'Aufbau der Produktionsprozesse und Vorbereitung der Lead-Erfassung',
      'Danach: erste Veröffentlichungen in reduziertem Umfang',
      'Gegebenenfalls ein freigegebener Werbetest',
    ],
    milestone: 'Strategie, Prozesse und erste Inhalte stehen.',
  },
  {
    tag: 'Monat 2', days: 'Tag 31–60', title: 'Content-Produktion, erste Werbetests, Automatisierung',
    items: [
      'Regelmäßige Content-Produktion im geplanten Umfang: bis zu 8 Reels und 4 Grafik- oder Karussellbeiträge',
      'Veröffentlichung nach deiner Freigabe',
      'Meta-Testkampagne mit bis zu zwei Creatives, sofern freigegeben',
      'Einfacher Lead-Einstieg mit Benachrichtigung; Auswertung und Optimierung des Lead-Prozesses',
    ],
    milestone: 'Ein laufender Kanal und erste Erkenntnisse.',
  },
  {
    tag: 'Monat 3', days: 'Tag 61–90', title: 'Optimierung, Auswertung, Entscheidung',
    items: [
      'Fortführung der vereinbarten Leistungen',
      'Anpassung der Inhalte anhand erster Erkenntnisse',
      'Abschließende Analyse: Ergebnisse, Aufwand, technische Kosten',
      'Gemeinsames Auswertungsgespräch zur möglichen Zukunft',
    ],
    milestone: 'Eine fundierte Entscheidung auf Basis echter Erfahrungen.',
  },
];

export const approval = [
  { t: 'Wir erstellen', d: 'Wir erstellen den Content und übermitteln ihn gebündelt.' },
  { t: 'Du prüfst', d: 'Du prüfst möglichst innerhalb von zwei Werktagen.' },
  { t: 'Eine Korrekturschleife', d: 'Eine gebündelte Korrekturschleife ist enthalten.' },
  { t: 'Erst dann online', d: 'Veröffentlichung erst nach deiner ausdrücklichen Freigabe.' },
];

export const nextSteps = [
  { t: 'Angebot gemeinsam besprechen', d: 'Wir gehen Leistungen, Budget und Ablauf gemeinsam durch und klären offene Fragen.' },
  { t: 'Leistungsumfang und Voraussetzungen final bestätigen', d: 'Hauptkanal, Zugänge, Freigabewege und die rechtlichen Voraussetzungen werden festgehalten.' },
  { t: 'Pilotpartnerschaft schriftlich vereinbaren', d: 'Die Vereinbarung wird mit den vervollständigten Vertragsgrundlagen schriftlich geschlossen.' },
  { t: 'Kick-off terminieren', d: 'Mit dem Kick-off beginnen die 90 Tage.' },
];

export const eur = (n: number) => new Intl.NumberFormat('de-DE', { maximumFractionDigits: 0 }).format(n) + ' €';
