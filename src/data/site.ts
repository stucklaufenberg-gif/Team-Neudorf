// Zentrale, von der bestehenden Website www.team-neudorf.de übernommene Stammdaten.
// Änderungen hier wirken auf Header, Footer, Startseite und strukturierte Daten.
export const site = {
  name: 'Team-Neudorf Versicherungen',
  short: 'Team-Neudorf',
  owner: 'Stefan Neudorf',
  url: 'https://www.team-neudorf.de',
  phoneDisplay: '02256 9596141',
  phoneHref: 'tel:+4922569596141',
  email: 'info@team-neudorf.de',
  street: 'An der Quelle 1',
  zip: '53894',
  city: 'Mechernich',
  hours: [
    { days: 'Montag bis Donnerstag', time: '9:00 bis 17:00 Uhr' },
    { days: 'Freitag', time: '9:00 bis 14:00 Uhr' },
  ],
  whatsapp: 'https://wa.me/4922569596141?text=Hallo%20Team-Neudorf%2C%20ich%20habe%20eine%20Frage',
  // Bestehende Online-Terminbuchung (Microsoft Bookings), unverändert von kontakt.html übernommen.
  booking: 'https://outlook.office.com/bookwithme/user/97a5ff73feed4b1e9a061a36c0169eaf@team-neudorf.de?anonymous&ep=plink',
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61594512503251',
    instagram: 'https://www.instagram.com/teamneudorf_versicherungen/',
    linkedin: 'https://www.linkedin.com/in/stefan-neudorf-versicherungsmakler/',
  },
  logoAlt: 'Team-Neudorf: Versicherungen für Öffentlichen Dienst, Privat und Gewerbe',
} as const;

// Vertrauensleiste – wörtlich von der bestehenden Website.
export const trust = [
  { label: 'Zulassung', text: 'Zugelassener Versicherungsmakler, IHK-Erlaubnis nach § 34d GewO', href: '/erstinformation.html' },
  { label: 'Hintergrund', text: 'Ehemaliger Soldat der Bundeswehr' },
  { label: 'Vor Ort', text: 'Persönlich vor Ort in Mechernich und Umgebung' },
  { label: 'Erstgespräch', text: 'Erstgespräch kostenlos und unverbindlich' },
] as const;

export const berufsgruppen = [
  { href: '/polizei.html', label: 'Polizei', text: 'Polizeivollzugsdienst: Heilfürsorge, Polizeidienstunfähigkeit und Einsatzrisiken richtig abgesichert.' },
  { href: '/berufsfeuerwehr.html', label: 'Berufsfeuerwehr', text: 'Berufsfeuerwehr: Feuerwehrdienstunfähigkeit, Beihilfe oder Heilfürsorge (je nach Land) und Einsatzschutz.' },
  { href: '/bundespolizei.html', label: 'Bundespolizei', text: 'Bundesbeamte im Vollzugsdienst: Heilfürsorge, Polizeidienstunfähigkeit, Grenz-, Bahn- und Luftsicherheit.' },
  { href: '/zoll.html', label: 'Zoll', text: 'Zollbeamtinnen & Zollbeamte: Bundesbeamte mit Beihilfe, im Vollzugsdienst mit Einsatzrisiken.' },
  { href: '/bundeswehr.html', label: 'Bundeswehr', text: 'Soldatinnen und Soldaten: vom Dienstantritt bis zum Übergang ins zivile Leben.' },
  { href: '/lehramt.html', label: 'Lehramt', text: 'Lehrkräfte & Referendare: von der Diensthaftpflicht bis zur Verbeamtung.' },
  { href: '/verwaltung.html', label: 'Verwaltung', text: 'Beamte & Beschäftigte in Behörden und Kommunen, passend zu Ihrem Status.' },
  { href: '/justiz.html', label: 'Justiz', text: 'Richter, Staatsanwälte, Rechtspfleger & Justizvollzug: Schutz mit Verantwortung.' },
  { href: '/ordnungsamt.html', label: 'Ordnungsamt', text: 'Kommunaler Ordnungsdienst & Außendienst: Haftung, Recht und Einkommen im Blick.' },
  { href: '/sozial-erziehungsdienst.html', label: 'Sozial- & Erziehungsdienst', text: 'Erzieher:innen & Sozialarbeiter:innen: Arbeitskraft, Aufsichtspflicht und Vorsorge.' },
] as const;

export const oedThemen = [
  { href: '/oeffentlicher-dienst.html', label: 'Überblick Öffentlicher Dienst' },
  { href: '/berufsgruppen.html', label: 'Alle Berufsgruppen' },
  { href: '/leistungen.html', label: 'Leistungen' },
  { href: '/anwartschaft.html', label: 'Anwartschaft' },
  { href: '/aktuelles.html', label: 'Aktuelles' },
] as const;

export const mainNav = [
  { href: '/oeffentlicher-dienst.html', label: 'Öffentlicher Dienst', mega: true },
  { href: '/privatkunden.html', label: 'Privatkunden' },
  { href: '/firmenkunden.html', label: 'Firmenkunden' },
  { href: '/ueber-uns.html', label: 'Über uns' },
  { href: '/kontakt.html', label: 'Kontakt' },
] as const;

// Seiten, die zum Bereich „Öffentlicher Dienst“ gehören (für aria-current in der Navigation).
export const oedPaths = [
  ...berufsgruppen.map((b) => b.href),
  ...oedThemen.map((t) => t.href),
] as string[];
