// Internes Cockpit – Oberfläche. Speichert ausschließlich im localStorage dieses Browsers.
import { SAEULEN, STATUS, BRIEFING_FIELDS, validateBriefing, parseBriefingsJson, filterBriefings, CSV_COLUMNS, parsePerformanceCsv, filterRows, summarize, groupBy, fmtInt, fmtPct } from './lib.js';

const $ = (s) => document.querySelector(s);
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const store = {
  get(key, fallback) { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } },
  set(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); return true; } catch { return false; } },
};
const K_CONTENT = 'tn_cockpit_briefings_v1', K_PERF = 'tn_cockpit_performance_v1';

function toast(msg) { const t = $('#toast'); t.textContent = msg; t.hidden = false; clearTimeout(toast.t); toast.t = setTimeout(() => (t.hidden = true), 3200); }
function report(el, kind, title, items = []) {
  el.className = 'report ' + kind; el.hidden = false;
  el.innerHTML = `<strong>${esc(title)}</strong>${items.length ? `<ul>${items.slice(0, 12).map((i) => `<li>${esc(i)}</li>`).join('')}${items.length > 12 ? `<li>… und ${items.length - 12} weitere</li>` : ''}</ul>` : ''}`;
}
function download(name, text, type) {
  const a = Object.assign(document.createElement('a'), { href: URL.createObjectURL(new Blob([text], { type })), download: name });
  document.body.append(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}
const options = (sel, entries, allLabel) => { sel.innerHTML = (allLabel ? `<option value="">${allLabel}</option>` : '') + entries.map(([v, l]) => `<option value="${esc(v)}">${esc(l)}</option>`).join(''); };

/* ---------------- Tabs ---------------- */
const tabs = [...document.querySelectorAll('[role=tab]')];
function selectTab(tab) {
  tabs.forEach((t) => { const on = t === tab; t.setAttribute('aria-selected', on); t.tabIndex = on ? 0 : -1; $('#' + t.getAttribute('aria-controls')).hidden = !on; });
  history.replaceState(null, '', '#' + tab.id.replace('tab-', ''));
}
tabs.forEach((t, i) => {
  t.addEventListener('click', () => selectTab(t));
  t.addEventListener('keydown', (e) => { if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { const n = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length]; n.focus(); selectTab(n); } });
});
const initial = document.getElementById('tab-' + location.hash.slice(1)); if (initial) selectTab(initial);

/* ---------------- Content ---------------- */
let briefings = [];
const filters = { zielgruppe: '', saeule: '', status: '', suche: '' };

async function loadSeed() {
  const res = await fetch('/data/content/briefings.json', { cache: 'no-store' });
  if (!res.ok) throw new Error('Repository-Datei data/content/briefings.json nicht gefunden.');
  const { items, errors } = parseBriefingsJson(await res.text());
  if (errors.length) report($('#import-report'), 'warn', 'Die Repository-Datei enthält ungültige Einträge:', errors);
  return items;
}
function saveContent() { if (!store.set(K_CONTENT, briefings)) toast('Speichern im Browser nicht möglich – bitte exportieren.'); }

function renderContent() {
  const groups = [...new Set(briefings.map((b) => b.zielgruppe))].sort();
  const keep = filters.zielgruppe;
  options($('#f-zielgruppe'), groups.map((g) => [g, g]), 'Alle Zielgruppen');
  $('#f-zielgruppe').value = groups.includes(keep) ? keep : (filters.zielgruppe = '');
  $('#dl-zielgruppe').innerHTML = groups.map((g) => `<option value="${esc(g)}">`).join('');
  const list = filterBriefings(briefings, filters);
  $('#content-count').textContent = `${list.length} von ${briefings.length} Briefings`;
  const empty = $('#content-empty');
  empty.hidden = list.length > 0;
  empty.textContent = briefings.length ? 'Kein Briefing passt zu diesen Filtern.' : 'Noch keine Briefings vorhanden. Legen Sie ein neues an oder importieren Sie eine JSON-Datei.';
  $('#content-list').innerHTML = list.map((b) => `
    <article class="card" data-saeule="${esc(b.saeule)}" data-id="${esc(b.id)}">
      <div class="meta"><span class="chip">${esc(SAEULEN[b.saeule])}</span><span class="chip status-${esc(b.status)}">${esc(STATUS[b.status])}</span>${b.veroeffentlichung ? `<span class="chip">${esc(b.veroeffentlichung)}</span>` : ''}</div>
      <h3>${esc(b.hook)}</h3>
      <p>${esc(b.kernaussage)}</p>
      <dl>
        <dt>Zielgruppe</dt><dd>${esc(b.zielgruppe)}</dd>
        <dt>Format</dt><dd>${esc(b.format)}</dd>
        <dt>CTA</dt><dd>${esc(b.cta)}</dd>
        <dt>Ziel-URL</dt><dd><code>${esc(b.zielUrl)}</code></dd>
        <dt>id</dt><dd><code>${esc(b.id)}</code></dd>
      </dl>
      <details><summary>Szenenfolge (${b.szenen.length}) und Assets (${b.originalAssets.length})</summary>
        <ol>${b.szenen.map((s) => `<li>${esc(s)}</li>`).join('')}</ol>
        <p><strong>Original-Assets:</strong> ${b.originalAssets.map(esc).join(' · ') || '–'}</p>
        ${b.quelle ? `<p><strong>Quelle:</strong> ${esc(b.quelle)}</p>` : ''}
      </details>
      ${b.freigabeHinweis ? `<p class="hint">${esc(b.freigabeHinweis)}</p>` : ''}
      <div class="card-actions"><button data-edit="${esc(b.id)}">Bearbeiten</button></div>
    </article>`).join('');
}

options($('#f-saeule'), Object.entries(SAEULEN), 'Alle Säulen');
options($('#f-status'), Object.entries(STATUS), 'Alle Status');
for (const [id, key] of [['#f-zielgruppe', 'zielgruppe'], ['#f-saeule', 'saeule'], ['#f-status', 'status'], ['#f-suche', 'suche']]) $(id).addEventListener('input', (e) => { filters[key] = e.target.value; renderContent(); });

// Editor
const dlg = $('#editor'), form = $('#editor-form');
options(form.elements.saeule, Object.entries(SAEULEN)); options(form.elements.status, Object.entries(STATUS));
let editingId = null;
function openEditor(b) {
  editingId = b?.id ?? null;
  $('#editor-title').textContent = b ? 'Briefing bearbeiten' : 'Neues Briefing';
  $('#editor-errors').hidden = true; $('#e-delete').hidden = !b;
  const v = b ?? { id: '', zielgruppe: '', saeule: 'wissen', status: 'idee', hook: '', kernaussage: '', format: '', cta: '', zielUrl: '/', veroeffentlichung: '', szenen: [], originalAssets: [], quelle: '', freigabeHinweis: '' };
  for (const f of BRIEFING_FIELDS) form.elements[f].value = Array.isArray(v[f]) ? v[f].join('\n') : v[f];
  dlg.showModal();
}
$('#b-new').addEventListener('click', () => openEditor(null));
$('#content-list').addEventListener('click', (e) => { const id = e.target.closest('[data-edit]')?.dataset.edit; if (id) openEditor(briefings.find((b) => b.id === id)); });
$('#e-cancel').addEventListener('click', () => dlg.close());
$('#e-delete').addEventListener('click', () => { if (confirm('Dieses Briefing wirklich löschen?')) { briefings = briefings.filter((b) => b.id !== editingId); saveContent(); dlg.close(); renderContent(); toast('Briefing gelöscht.'); } });
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const lines = (s) => s.split('\n').map((l) => l.trim()).filter(Boolean);
  const b = Object.fromEntries(BRIEFING_FIELDS.map((f) => [f, f === 'szenen' || f === 'originalAssets' ? lines(form.elements[f].value) : form.elements[f].value.trim()]));
  const errors = validateBriefing(b);
  if (b.id !== editingId && briefings.some((x) => x.id === b.id)) errors.push('id: wird bereits von einem anderen Briefing verwendet.');
  if (errors.length) { report($('#editor-errors'), 'error', 'Bitte korrigieren:', errors); return; }
  briefings = editingId ? briefings.map((x) => (x.id === editingId ? b : x)) : [...briefings, b];
  saveContent(); dlg.close(); renderContent(); toast('Gespeichert (nur in diesem Browser).');
});

$('#b-export').addEventListener('click', () => {
  download(`team-neudorf-briefings-${new Date().toISOString().slice(0, 10)}.json`, JSON.stringify({ version: 1, exportiert: new Date().toISOString(), briefings }, null, 2), 'application/json');
  toast(`${briefings.length} Briefings exportiert.`);
});
$('#b-import').addEventListener('change', async (e) => {
  const file = e.target.files[0]; e.target.value = ''; if (!file) return;
  const { items, errors } = parseBriefingsJson(await file.text());
  if (!items.length) { report($('#import-report'), 'error', 'Import nicht möglich – nichts wurde geändert.', errors.length ? errors : ['Die Datei enthält keine Briefings.']); return; }
  const byId = new Map(briefings.map((b) => [b.id, b])); let neu = 0, ersetzt = 0;
  for (const b of items) { byId.has(b.id) ? ersetzt++ : neu++; byId.set(b.id, b); }
  briefings = [...byId.values()]; saveContent(); renderContent();
  report($('#import-report'), errors.length ? 'warn' : 'ok', `Import: ${neu} neu, ${ersetzt} ersetzt${errors.length ? `, ${errors.length} übersprungen` : ''}.`, errors);
});
$('#b-reset').addEventListener('click', async () => {
  if (!confirm('Alle lokalen Änderungen verwerfen und den Stand aus dem Repository laden?')) return;
  try { briefings = await loadSeed(); saveContent(); renderContent(); $('#import-report').hidden = true; toast('Repository-Stand geladen.'); }
  catch (err) { report($('#import-report'), 'error', err.message); }
});

/* ---------------- Performance ---------------- */
let perf = store.get(K_PERF, { rows: [], quelle: '', demo: false });
const pf = { von: '', bis: '', kanal: '', landingpage: '' };
const TEMPLATE = CSV_COLUMNS.join(',') + '\n';
const COLS = [['besuche', 'Besuche'], ['kontakt_klicks', 'Kontakt-Klicks'], ['terminanfragen', 'Terminanfragen'], ['qualifizierte_leads', 'Qualif. Leads']];

function table(el, firstLabel, groups) {
  el.innerHTML = `<thead><tr><th>${firstLabel}</th>${COLS.map(([, l]) => `<th>${l}</th>`).join('')}<th>Klickrate</th><th>Anfragequote</th><th>Lead-Quote</th></tr></thead><tbody>` +
    groups.map((g) => `<tr><td>${esc(g.key)}</td>${COLS.map(([k]) => `<td>${fmtInt(g[k])}</td>`).join('')}<td>${fmtPct(g.klickrate)}</td><td>${fmtPct(g.anfragequote)}</td><td>${fmtPct(g.leadquote)}</td></tr>`).join('') + '</tbody>';
}
function chart(groups) {
  const W = 900, H = 220, pad = { l: 44, r: 12, t: 12, b: 34 }, max = Math.max(1, ...groups.map((g) => g.besuche));
  const bw = (W - pad.l - pad.r) / groups.length, y = (v) => pad.t + (H - pad.t - pad.b) * (1 - v / max);
  const step = Math.ceil(groups.length / 12);
  $('#chart').innerHTML = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Besuche und Kontakt-Klicks nach Datum. Werte in der Tabelle darunter.">
    <line x1="${pad.l}" y1="${y(0)}" x2="${W - pad.r}" y2="${y(0)}" stroke="#c9c2b2"/><text x="${pad.l - 6}" y="${y(max) + 4}" text-anchor="end">${fmtInt(max)}</text><text x="${pad.l - 6}" y="${y(0) + 4}" text-anchor="end">0</text>
    ${groups.map((g, i) => { const x = pad.l + i * bw + bw * 0.15, w = bw * 0.7; return `<rect x="${x}" y="${y(g.besuche)}" width="${w}" height="${y(0) - y(g.besuche)}" fill="#143d6b"><title>${g.key}: ${fmtInt(g.besuche)} Besuche</title></rect><rect x="${x + w * 0.3}" y="${y(g.kontakt_klicks)}" width="${w * 0.4}" height="${y(0) - y(g.kontakt_klicks)}" fill="#d9b25a"><title>${g.key}: ${fmtInt(g.kontakt_klicks)} Kontakt-Klicks</title></rect>${i % step === 0 ? `<text x="${x + w / 2}" y="${H - 12}" text-anchor="middle">${g.key.slice(5)}</text>` : ''}`; }).join('')}
    <rect x="${pad.l + 8}" y="${pad.t}" width="10" height="10" fill="#143d6b"/><text x="${pad.l + 24}" y="${pad.t + 9}">Besuche</text><rect x="${pad.l + 90}" y="${pad.t}" width="10" height="10" fill="#d9b25a"/><text x="${pad.l + 106}" y="${pad.t + 9}">Kontakt-Klicks</text></svg>`;
}
function renderPerf() {
  const has = perf.rows.length > 0;
  $('#demo-banner').hidden = !(has && perf.demo);
  $('#perf-body').hidden = !has; $('#perf-empty').hidden = has;
  if (!has) {
    $('#perf-empty').innerHTML = '<strong>Noch keine Daten.</strong><br>Es ist keine Website-Messung aktiv, deshalb gibt es hier keine echten Zahlen. Importieren Sie eine CSV-Datei mit zusammengefassten Werten (Vorlage über „CSV-Vorlage“) oder laden Sie die als Demo gekennzeichneten Beispieldaten.';
    for (const id of ['#p-kanal', '#p-lp']) options($(id), [], 'Alle');
    return;
  }
  const uniq = (k) => [...new Set(perf.rows.map((r) => r[k]))].sort();
  for (const [id, key, label] of [['#p-kanal', 'kanal', 'Alle Kanäle'], ['#p-lp', 'landingpage', 'Alle Landingpages']]) { const vals = uniq(key); options($(id), vals.map((v) => [v, v]), label); $(id).value = vals.includes(pf[key]) ? pf[key] : (pf[key] = ''); }
  const rows = filterRows(perf.rows, pf), s = summarize(rows), demo = perf.demo ? '<span class="demo-tag">DEMO</span>' : '';
  $('#perf-source').textContent = `${perf.demo ? 'Demo-Datei' : 'Import'}: ${perf.quelle} · ${rows.length} von ${perf.rows.length} Zeilen im Filter${rows.length ? ` · Zeitraum ${rows.map((r) => r.datum).sort()[0]} bis ${rows.map((r) => r.datum).sort().at(-1)}` : ''}`;
  $('#kpis').innerHTML = [['Website-Besuche', s.besuche], ['Kontakt-Klicks', s.kontakt_klicks], ['Terminanfragen', s.terminanfragen], ['Qualifizierte Leads', s.qualifizierte_leads]].map(([l, v]) => `<div class="kpi">${demo}<div class="label">${l}</div><div class="value">${rows.length ? fmtInt(v) : '–'}</div></div>`).join('');
  $('#rates').innerHTML = [['Kontakt-Klickrate', s.klickrate, 'Kontakt-Klicks ÷ Besuche', s.kontakt_klicks, s.besuche], ['Anfragequote', s.anfragequote, 'Terminanfragen ÷ Kontakt-Klicks', s.terminanfragen, s.kontakt_klicks], ['Lead-Quote', s.leadquote, 'Qualifizierte Leads ÷ Terminanfragen', s.qualifizierte_leads, s.terminanfragen]]
    .map(([l, v, f, a, b]) => `<div class="rate"><div class="label"><strong>${l}</strong></div><div class="value">${fmtPct(v)}</div><div class="formula">${f} = ${fmtInt(a)} ÷ ${fmtInt(b)}${v === null ? ' · keine Basis, nicht berechenbar' : ''}</div></div>`).join('');
  const byDate = groupBy(rows, 'datum');
  if (byDate.length) chart(byDate); else $('#chart').innerHTML = '<p class="empty">Keine Zeilen im gewählten Filter.</p>';
  table($('#t-datum'), 'Datum', byDate); table($('#t-lp'), 'Landingpage', groupBy(rows, 'landingpage')); table($('#t-kanal'), 'Kanal', groupBy(rows, 'kanal'));
}
function loadCsv(text, name, demo) {
  const { rows, errors, warnings } = parsePerformanceCsv(text);
  if (errors.length) { report($('#perf-report'), 'error', `„${name}“ wurde nicht importiert – die bisherigen Daten bleiben unverändert.`, errors); return; }
  perf = { rows, quelle: name, demo }; store.set(K_PERF, perf);
  Object.assign(pf, { von: '', bis: '', kanal: '', landingpage: '' }); $('#p-von').value = $('#p-bis').value = '';
  report($('#perf-report'), warnings.length ? 'warn' : 'ok', `${rows.length} Zeilen aus „${name}“ übernommen${demo ? ' (Demo-Daten)' : ''}.`, warnings);
  renderPerf();
}
$('#p-import').addEventListener('change', async (e) => { const f = e.target.files[0]; e.target.value = ''; if (f) loadCsv(await f.text(), f.name, false); });
$('#p-demo').addEventListener('click', async () => { const r = await fetch('/data/demo/performance-demo.csv', { cache: 'no-store' }); r.ok ? loadCsv(await r.text(), 'performance-demo.csv', true) : report($('#perf-report'), 'error', 'Demo-Datei nicht gefunden.'); });
$('#p-template').addEventListener('click', () => download('team-neudorf-performance-vorlage.csv', TEMPLATE, 'text/csv'));
$('#p-clear').addEventListener('click', () => { if (!perf.rows.length || confirm('Importierte Daten aus diesem Browser löschen?')) { perf = { rows: [], quelle: '', demo: false }; store.set(K_PERF, perf); $('#perf-report').hidden = true; renderPerf(); } });
for (const [id, key] of [['#p-von', 'von'], ['#p-bis', 'bis'], ['#p-kanal', 'kanal'], ['#p-lp', 'landingpage']]) $(id).addEventListener('input', (e) => { pf[key] = e.target.value; renderPerf(); });

/* ---------------- Start ---------------- */
const saved = store.get(K_CONTENT, null);
try { briefings = Array.isArray(saved) ? saved : await loadSeed(); } catch (err) { report($('#import-report'), 'error', err.message); }
renderContent(); renderPerf();
