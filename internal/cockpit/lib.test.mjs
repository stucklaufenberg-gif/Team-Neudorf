// Schnelltest der Cockpit-Logik:  npm run test:cockpit
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { parsePerformanceCsv, summarize, filterRows, groupBy, parseBriefingsJson, validateBriefing, filterBriefings, fmtPct } from './lib.js';

const seed = parseBriefingsJson(await readFile(new URL('../../data/content/briefings.json', import.meta.url), 'utf8'));
assert.equal(seed.errors.length, 0, 'Repository-Briefings sind gültig');
assert.equal(seed.items.length, 5);
assert.deepEqual([...new Set(seed.items.map((b) => b.saeule))].sort(), ['einblicke', 'person', 'wissen']);
assert.equal(filterBriefings(seed.items, { saeule: 'person' }).length, 1);
assert.ok(validateBriefing({ ...seed.items[0], zielUrl: 'https://extern.example' }).length > 0, 'externe Ziel-URL wird abgelehnt');
assert.ok(parseBriefingsJson('{kaputt').errors[0].includes('kein gültiges JSON'));

const demo = parsePerformanceCsv(await readFile(new URL('../../data/demo/performance-demo.csv', import.meta.url), 'utf8'));
assert.equal(demo.errors.length, 0); assert.equal(demo.rows.length, 12);
const s = summarize(demo.rows);
assert.equal(s.besuche, 1350); assert.equal(s.kontakt_klicks, 102); assert.equal(s.terminanfragen, 28); assert.equal(s.qualifizierte_leads, 14);
assert.equal(s.klickrate, 102 / 1350); assert.equal(s.leadquote, 0.5);
assert.equal(filterRows(demo.rows, { kanal: 'instagram', von: '2026-01-12' }).length, 3);
assert.equal(groupBy(demo.rows, 'datum').length, 4);

assert.equal(summarize([]).klickrate, null, 'ohne Basis keine Rate'); assert.equal(fmtPct(null), '–');
assert.ok(parsePerformanceCsv('').errors[0].includes('leer'));
assert.ok(parsePerformanceCsv('datum,kanal\n2026-01-01,google').errors[0].includes('fehlen Pflichtspalten'));
assert.ok(parsePerformanceCsv('datum,kanal,landingpage,besuche,kontakt_klicks,terminanfragen,qualifizierte_leads,email\n').errors[0].includes('personenbezogene'));
const bad = parsePerformanceCsv('datum,kanal,landingpage,besuche,kontakt_klicks,terminanfragen,qualifizierte_leads\n2026-13-40,google,/,10,1,0,0\n2026-01-01,google,start,-5,x,0,0');
assert.equal(bad.rows.length, 0, 'bei Fehlern wird nichts übernommen'); assert.equal(bad.errors.length, 2);
const semi = parsePerformanceCsv('datum;kanal;landingpage;besuche;kontakt_klicks;terminanfragen;qualifizierte_leads\n2026-02-01;Google;/;10;20;1;3');
assert.equal(semi.rows.length, 1); assert.equal(semi.rows[0].kanal, 'google'); assert.equal(semi.warnings.length, 2, 'unplausible Werte erzeugen Warnungen');
console.log('Cockpit-Logik: alle Prüfungen bestanden');
