// Reine Logik des internen Cockpits (ohne DOM) – getrennt, damit sie mit Node testbar ist.

export const SAEULEN = { person: 'Person', wissen: 'Wissen', einblicke: 'Einblicke' };
export const STATUS = {
  idee: 'Idee',
  briefing: 'Briefing fertig',
  'freigabe-offen': 'Freigabe offen',
  freigegeben: 'Freigegeben',
  produziert: 'Produziert',
  veroeffentlicht: 'Veröffentlicht',
};
export const BRIEFING_FIELDS = ['id', 'zielgruppe', 'saeule', 'hook', 'kernaussage', 'format', 'cta', 'zielUrl', 'status', 'originalAssets', 'veroeffentlichung', 'szenen', 'quelle', 'freigabeHinweis'];

/** Prüft ein Briefing. Gibt eine Liste verständlicher Fehlermeldungen zurück (leer = gültig). */
export function validateBriefing(b) {
  const e = [];
  if (!b || typeof b !== 'object') return ['Eintrag ist kein Objekt.'];
  if (!/^[a-z0-9-]{3,60}$/.test(b.id ?? '')) e.push('id: nur Kleinbuchstaben, Ziffern und Bindestriche (3–60 Zeichen).');
  for (const f of ['zielgruppe', 'hook', 'kernaussage', 'format', 'cta']) if (!String(b[f] ?? '').trim()) e.push(`${f}: darf nicht leer sein.`);
  if (!(b.saeule in SAEULEN)) e.push(`saeule: erlaubt sind ${Object.keys(SAEULEN).join(', ')}.`);
  if (!(b.status in STATUS)) e.push(`status: erlaubt sind ${Object.keys(STATUS).join(', ')}.`);
  if (!/^\/[a-z0-9\-/.#]*$/.test(b.zielUrl ?? '')) e.push('zielUrl: muss eine interne Adresse sein und mit / beginnen (z. B. /kontakt.html).');
  if (b.veroeffentlichung && !isDate(b.veroeffentlichung)) e.push('veroeffentlichung: Datum im Format JJJJ-MM-TT oder leer.');
  for (const f of ['originalAssets', 'szenen']) if (!Array.isArray(b[f])) e.push(`${f}: muss eine Liste sein.`);
  return e;
}

/** Liest eine exportierte JSON-Datei. Akzeptiert { briefings: [...] } oder ein Array. */
export function parseBriefingsJson(text) {
  let data;
  try { data = JSON.parse(text); } catch (err) { return { items: [], errors: ['Die Datei ist kein gültiges JSON: ' + err.message] }; }
  const list = Array.isArray(data) ? data : data?.briefings;
  if (!Array.isArray(list)) return { items: [], errors: ['Kein Feld „briefings“ mit einer Liste gefunden.'] };
  const errors = [], items = [], seen = new Set();
  list.forEach((b, i) => {
    const errs = validateBriefing(b);
    if (b?.id && seen.has(b.id)) errs.push('id kommt mehrfach vor.');
    if (errs.length) errors.push(`Eintrag ${i + 1} (${b?.id ?? 'ohne id'}): ${errs.join(' ')}`);
    else { seen.add(b.id); items.push(pick(b)); }
  });
  return { items, errors };
}
const pick = (b) => Object.fromEntries(BRIEFING_FIELDS.map((f) => [f, b[f] ?? (f === 'originalAssets' || f === 'szenen' ? [] : '')]));

export function filterBriefings(items, { zielgruppe = '', saeule = '', status = '', suche = '' } = {}) {
  const q = suche.trim().toLowerCase();
  return items.filter((b) =>
    (!zielgruppe || b.zielgruppe === zielgruppe) && (!saeule || b.saeule === saeule) && (!status || b.status === status) &&
    (!q || [b.id, b.hook, b.kernaussage, b.zielgruppe].join(' ').toLowerCase().includes(q)));
}

/* ---------- Performance: CSV mit aggregierten, personenbezugsfreien Daten ---------- */
export const CSV_COLUMNS = ['datum', 'kanal', 'landingpage', 'besuche', 'kontakt_klicks', 'terminanfragen', 'qualifizierte_leads'];
const NUMERIC = ['besuche', 'kontakt_klicks', 'terminanfragen', 'qualifizierte_leads'];
// Spalten, die auf personenbezogene oder sensible Daten hindeuten – solche Dateien werden abgelehnt.
const FORBIDDEN = /(name|vorname|nachname|e-?mail|telefon|handy|adresse|strasse|straße|geburt|ip|kunde|versicherungsnummer|vertrag|gesundheit|diagnose|nachricht)/i;

export function isDate(s) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(s)) return false;
  const d = new Date(s + 'T00:00:00Z');
  return !Number.isNaN(d.getTime()) && d.toISOString().slice(0, 10) === s;
}

function splitLine(line, sep) {
  const out = []; let cur = '', q = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (q) { if (c === '"' && line[i + 1] === '"') { cur += '"'; i++; } else if (c === '"') q = false; else cur += c; }
    else if (c === '"') q = true;
    else if (c === sep) { out.push(cur); cur = ''; }
    else cur += c;
  }
  out.push(cur);
  return out.map((v) => v.trim());
}

/** Liest und prüft eine CSV-Datei. Fehler verhindern den Import vollständig; Warnungen nicht. */
export function parsePerformanceCsv(text) {
  const errors = [], warnings = [], rows = [];
  const lines = text.replace(/^﻿/, '').split(/\r?\n/).filter((l) => l.trim() !== '');
  if (!lines.length) return { rows, errors: ['Die Datei ist leer.'], warnings };
  const sep = (lines[0].match(/;/g) ?? []).length > (lines[0].match(/,/g) ?? []).length ? ';' : ',';
  const header = splitLine(lines[0], sep).map((h) => h.toLowerCase());
  const forbidden = header.filter((h) => !CSV_COLUMNS.includes(h) && FORBIDDEN.test(h));
  if (forbidden.length) return { rows, errors: [`Die Datei enthält Spalten, die auf personenbezogene Daten hindeuten (${forbidden.join(', ')}). Bitte nur aggregierte Zahlen importieren – nichts wurde übernommen.`], warnings };
  const missing = CSV_COLUMNS.filter((c) => !header.includes(c));
  if (missing.length) return { rows, errors: [`Es fehlen Pflichtspalten: ${missing.join(', ')}. Erwartet wird: ${CSV_COLUMNS.join(', ')}.`], warnings };
  const extra = header.filter((h) => !CSV_COLUMNS.includes(h));
  if (extra.length) warnings.push(`Unbekannte Spalten werden ignoriert: ${extra.join(', ')}.`);
  if (lines.length === 1) return { rows, errors: ['Die Datei enthält nur die Kopfzeile, aber keine Daten.'], warnings };

  for (let i = 1; i < lines.length; i++) {
    const cells = splitLine(lines[i], sep), n = i + 1;
    if (cells.length !== header.length) { errors.push(`Zeile ${n}: ${cells.length} Werte statt ${header.length}.`); continue; }
    const rec = Object.fromEntries(header.map((h, j) => [h, cells[j]]));
    const rowErr = [];
    if (!isDate(rec.datum)) rowErr.push(`datum „${rec.datum}“ ist kein gültiges Datum (JJJJ-MM-TT)`);
    if (!rec.kanal) rowErr.push('kanal fehlt');
    if (!/^\//.test(rec.landingpage)) rowErr.push(`landingpage „${rec.landingpage}“ muss mit / beginnen`);
    const row = { datum: rec.datum, kanal: rec.kanal.toLowerCase(), landingpage: rec.landingpage };
    for (const f of NUMERIC) {
      if (!/^\d+$/.test(rec[f])) rowErr.push(`${f} „${rec[f]}“ ist keine ganze Zahl ≥ 0`);
      else row[f] = Number(rec[f]);
    }
    if (rowErr.length) { errors.push(`Zeile ${n}: ${rowErr.join('; ')}.`); continue; }
    if (row.kontakt_klicks > row.besuche) warnings.push(`Zeile ${n}: mehr Kontakt-Klicks als Besuche – bitte Quelle prüfen.`);
    if (row.qualifizierte_leads > row.terminanfragen) warnings.push(`Zeile ${n}: mehr qualifizierte Leads als Terminanfragen – bitte Quelle prüfen.`);
    rows.push(row);
  }
  return errors.length ? { rows: [], errors, warnings } : { rows, errors, warnings };
}

export function filterRows(rows, { von = '', bis = '', kanal = '', landingpage = '' } = {}) {
  return rows.filter((r) => (!von || r.datum >= von) && (!bis || r.datum <= bis) && (!kanal || r.kanal === kanal) && (!landingpage || r.landingpage === landingpage));
}

const ratio = (a, b) => (b > 0 ? a / b : null);
export function summarize(rows) {
  const t = { besuche: 0, kontakt_klicks: 0, terminanfragen: 0, qualifizierte_leads: 0 };
  for (const r of rows) for (const f of NUMERIC) t[f] += r[f];
  return {
    ...t,
    zeilen: rows.length,
    klickrate: ratio(t.kontakt_klicks, t.besuche),        // Kontakt-Klicks ÷ Besuche
    anfragequote: ratio(t.terminanfragen, t.kontakt_klicks), // Terminanfragen ÷ Kontakt-Klicks
    leadquote: ratio(t.qualifizierte_leads, t.terminanfragen), // qualifizierte Leads ÷ Terminanfragen
  };
}

export function groupBy(rows, key) {
  const m = new Map();
  for (const r of rows) { if (!m.has(r[key])) m.set(r[key], []); m.get(r[key]).push(r); }
  return [...m.entries()].map(([k, v]) => ({ key: k, ...summarize(v) })).sort((a, b) => (key === 'datum' ? a.key.localeCompare(b.key) : b.besuche - a.besuche));
}

export const fmtInt = (n) => new Intl.NumberFormat('de-DE').format(n);
export const fmtPct = (v) => (v === null ? '–' : new Intl.NumberFormat('de-DE', { style: 'percent', maximumFractionDigits: 1 }).format(v));
