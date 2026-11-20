// Recherchierte Angaben zu Marktpreisen und steuerlichen Rechtsgrundlagen. Stand der Recherche: 20.11.2026.
// WICHTIG: Die Angaben stammen aus Suchergebnissen; die amtlichen Seiten waren in der Arbeitsumgebung nicht abrufbar.
// Vor dem Versand alle Links öffnen und Zahlen auf den Originalseiten bestätigen (siehe README, „Vor dem Versand prüfen“).

export const researchDate = 'November 2026';

/** Marktpreisspanne – Anbieterangaben, keine unabhängige Studie. Bewusst kein Streichpreis. */
export const market = {
  low: 700,
  high: 1500,
  scaleMax: 1600,
  statement: 'Vergleichbare Social-Media-Betreuung für kleine Unternehmen wird in veröffentlichten Preisübersichten häufig mit etwa 700 bis 1.500 € netto pro Monat angegeben. Anzeigenbetreuung wird dabei oft zusätzlich berechnet.',
  sources: [
    { label: 'Kontentino: Social-Media-Pakete für kleine Unternehmen – Preise (Anbieterratgeber)', href: 'https://www.kontentino.com/de/blog/social-media-packages-kleine-unternehmen-preise/', detail: 'Basis-Pakete 300–700 €, Mittelklasse 700–1.500 € pro Monat' },
    { label: 'HEROLD: Social-Media-Betreuung – Kosten (Anbieterratgeber, Markt Österreich)', href: 'https://www.herold.at/ratgeber/social-ads/social-media-betreuung-kosten-oesterreich/', detail: 'Agenturen etwa 800 bis über 1.500 € pro Monat' },
  ],
};

/** Prozentangaben korrekt aus den Zahlen berechnet, nicht gerundet geschätzt. */
export const pct = (a: number, b: number) => Math.round(((b - a) / b) * 100);

export const law = {
  estg4: { label: '§ 4 Abs. 4 EStG – Betriebsausgaben', href: 'https://www.gesetze-im-internet.de/estg/__4.html' },
  ustg4: { label: '§ 4 Nr. 11 UStG – Steuerbefreiung für Versicherungsvermittler', href: 'https://www.gesetze-im-internet.de/ustg_1980/__4.html' },
  ustg15: { label: '§ 15 Abs. 2 UStG – Ausschluss des Vorsteuerabzugs', href: 'https://www.gesetze-im-internet.de/ustg_1980/__15.html' },
  ustg13b: { label: '§ 13b UStG – Steuerschuldnerschaft des Leistungsempfängers', href: 'https://www.gesetze-im-internet.de/ustg_1980/__13b.html' },
};
