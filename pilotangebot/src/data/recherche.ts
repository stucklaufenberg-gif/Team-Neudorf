// Recherchierte Angaben zu Marktpreisen, Steuern und Förderung. Stand der Recherche: 20.11.2026.
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

export const funding = {
  check: [
    {
      title: 'BAFA: Förderung von Unternehmensberatungen für KMU',
      status: 'Laut Recherche geöffnet',
      text: 'Bezuschusst wird Beratung durch beim BAFA registrierte Beraterinnen und Berater, in NRW mit 50 % von höchstens 3.500 € förderfähigen Beratungskosten. Umsetzungsleistungen wie Content-Produktion, Anzeigenschaltung und laufende Social-Media-Betreuung sind nicht förderfähig. Der Antrag muss vor Beginn der Beratung gestellt werden. Das Pilotangebot ist als Umsetzungspaket deshalb nicht förderfähig; denkbar wäre höchstens ein getrennt vereinbartes Strategie-Beratungsmodul durch einen registrierten Berater.',
      href: 'https://www.bafa.de/DE/Wirtschaft/Beratung_Finanzierung/Unternehmensberatung/unternehmensberatung_node.html',
      link: 'bafa.de – Unternehmensberatung',
    },
    {
      title: 'NRW: RWP-Beratungsförderung',
      status: 'Nur in Fördergebieten',
      text: 'Bezuschusst Beratung für bestehende kleine und mittlere Unternehmen, allerdings nur in Gebieten der regionalen Wirtschaftsförderung (GRW). Ob Mechernich bzw. der Kreis Euskirchen dazugehört, ist nicht bestätigt. Auch hier gilt: Beratung, keine Umsetzung; Antrag vor Vertragsabschluss.',
      href: 'https://wirtschaft.nrw/system/files/media/document/file/grw-beratungserlass_nrw_2026_01.04.2026.pdf',
      link: 'wirtschaft.nrw – GRW-Beratungserlass 2026',
    },
    {
      title: 'Mittelstand-Digital Zentren',
      status: 'Kostenfreie Orientierung',
      text: 'Bundesgeförderte Zentren bieten kostenfreie Erstorientierung zur Digitalisierung. Das ist kein Zuschuss zu Agentur- oder Werbekosten.',
      href: 'https://www.mittelstand-digital.de/',
      link: 'mittelstand-digital.de',
    },
  ],
  unavailable: [
    { title: 'go-digital (Bund)', text: 'Ende 2024 ausgelaufen und nicht fortgeführt. Nicht beantragbar.', href: 'https://www.bundeswirtschaftsministerium.de/', link: 'bundeswirtschaftsministerium.de' },
    { title: 'Digital Jetzt (Bund)', text: 'Richtlinie bis Ende 2023 befristet, beendet. Nicht beantragbar.', href: 'https://www.bundeswirtschaftsministerium.de/digital-jetzt', link: 'bundeswirtschaftsministerium.de/digital-jetzt' },
    { title: 'MID – Mittelstand Innovativ & Digital (NRW)', text: 'Seit 2026 bei der NRW.BANK mit Losverfahren. MID-Digitalisierung fördert nur noch die Entwicklung digitaler Produkte auf Basis von Schlüsseltechnologien; der Aufruf „Digitale Prozesse“ 2026 ist laut Recherche ausgeschöpft. Für den Einkauf von Marketingleistungen nicht passend.', href: 'https://www.nrwbank.de/de/foerderung/foerderprodukte/60348/mittelstand-innovativ--digital-mid---digitalisierung.html', link: 'nrwbank.de – MID-Digitalisierung' },
  ],
};
