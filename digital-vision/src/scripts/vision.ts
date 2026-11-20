// Digital Vision & Growth – Interaktion und Bewegung. Kein Framework, kein Tracking, keine externen Dienste.
// 1 Scroll-Engine · 2 Hero · 3 Reveal · 4 Kapitel & Schritte · 5 Präsentationsmodus & Tastatur ·
// 6 Tabs · 7 Demonstrationen (Content-Lab, Reel-Konzepte, Kalender, Drehtag, Kampagnen, Anfrageweg,
// Automatisierung, Cockpit) · 8 Halftone

const root = document.documentElement;
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const $$ = <T extends Element = HTMLElement>(s: string, el: ParentNode = document) => Array.from(el.querySelectorAll<T>(s));
const $ = <T extends Element = HTMLElement>(s: string, el: ParentNode = document) => el.querySelector<T>(s);

/* ---------- 1 · Scroll-Engine: Fortschritt, Szenen (--p), Parallaxe (--v) ---------- */
const scenes = $$('[data-scene]');
const parallax = $$('[data-parallax]');
$$('[data-words]').forEach((el) => {
  const spans = $$('span', el);
  el.style.setProperty('--n', String(spans.length));
  spans.forEach((s, i) => s.style.setProperty('--i', String(i)));
});
const sceneRange = (el: HTMLElement) => ({ top: el.getBoundingClientRect().top + window.scrollY, range: Math.max(1, el.offsetHeight - window.innerHeight) });

/* ---------- 4a · Schritte (Stops) für die geführte Navigation ---------- */
interface Stop { el: HTMLElement; label: string; y: number; chapter: string }
let stops: Stop[] = [];
const measureStops = () => {
  stops = $$('[data-stop]').map((el) => {
    const scene = el.classList.contains('stop') ? el.closest<HTMLElement>('[data-scene]') : null;
    let y: number;
    if (scene && !reduce.matches) { const r = sceneRange(scene); y = r.top + (parseFloat(el.style.top) / 100) * r.range; }
    else y = (scene ?? el).getBoundingClientRect().top + window.scrollY;
    return { el, label: el.dataset.stop ?? '', y: Math.max(0, Math.round(y)), chapter: el.closest<HTMLElement>('[data-chapter]')?.dataset.chapter ?? '' };
  }).sort((a, b) => a.y - b.y);
  const total = $('[data-stop-total]'); if (total) total.textContent = String(stops.length);
};
let stopIndex = 0;
const goTo = (i: number) => {
  const s = stops[clamp(i, 0, stops.length - 1)];
  if (s) window.scrollTo({ top: s.y, behavior: reduce.matches ? 'auto' : 'smooth' });
};

const chapterEls = $$('[data-chapter]');
const railLinks = $$<HTMLAnchorElement>('[data-rail]');
const indexLinks = $$<HTMLAnchorElement>('[data-index-link]');
const whereLetter = $('[data-where-letter]'), whereTitle = $('[data-where-title]');
const prevBtn = $<HTMLButtonElement>('[data-prev]'), nextBtn = $<HTMLButtonElement>('[data-next]'), stopN = $('[data-stop-n]');
let currentChapter = '';

const update = () => {
  const y = window.scrollY, vh = window.innerHeight, max = Math.max(1, document.documentElement.scrollHeight - vh);
  root.style.setProperty('--scroll', (y / max).toFixed(4));
  root.classList.toggle('scrolled', y > 30);
  if (!reduce.matches) {
    for (const el of scenes) {
      const r = el.getBoundingClientRect();
      if (r.bottom < -vh || r.top > vh * 2) continue;
      el.style.setProperty('--p', clamp(-r.top / Math.max(1, el.offsetHeight - vh)).toFixed(4));
    }
    for (const el of parallax) {
      const r = el.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh + 200) continue;
      el.style.setProperty('--v', clamp((r.top + r.height / 2 - vh / 2) / (vh / 2 + r.height / 2), -1, 1).toFixed(4));
    }
  }
  // aktuelles Kapitel
  let ch = '';
  for (const c of chapterEls) if (c.getBoundingClientRect().top <= vh * 0.45) ch = c.dataset.chapter ?? '';
  if (ch !== currentChapter) {
    currentChapter = ch;
    const order = chapterEls.map((c) => c.dataset.chapter);
    railLinks.forEach((a) => { const i = order.indexOf(a.dataset.rail), cur = order.indexOf(ch); a.classList.toggle('is-current', a.dataset.rail === ch); a.classList.toggle('is-done', cur > -1 && i < cur); a.toggleAttribute('aria-current', a.dataset.rail === ch); });
    indexLinks.forEach((a) => a.classList.toggle('is-current', a.getAttribute('href') === '#' + ch));
    const link = railLinks.find((a) => a.dataset.rail === ch);
    if (whereLetter) whereLetter.textContent = link ? (link.querySelector('span')?.textContent ?? '') : '';
    if (whereTitle) whereTitle.textContent = link ? (link.querySelector('em')?.textContent ?? '') : 'Digital Vision & Growth';
  }
  // aktueller Schritt
  let idx = 0;
  stops.forEach((s, i) => { if (s.y <= y + 4) idx = i; });
  if (y >= max - 2) idx = stops.length - 1;
  stopIndex = idx;
  if (stopN) stopN.textContent = String(idx + 1);
  if (prevBtn) prevBtn.disabled = idx === 0 && y < 10;
  if (nextBtn) nextBtn.disabled = idx >= stops.length - 1;
};
let ticking = false;
const request = () => { if (!ticking) { ticking = true; requestAnimationFrame(() => { ticking = false; update(); }); } };
window.addEventListener('scroll', request, { passive: true });
window.addEventListener('resize', () => { measureStops(); request(); });
window.addEventListener('load', () => { measureStops(); update(); });
measureStops(); update();

/* ---------- 2 · Hero: Ebenen folgen Zeiger (Desktop) bzw. driften sanft (Touch) ---------- */
const hero = $('[data-hero]');
if (hero && !reduce.matches) {
  let tx = 0, ty = 0, x = 0, y = 0, raf = 0, active = false, last = -1e9, wx = 9, wy = 9, ws = -1;
  if (finePointer) hero.addEventListener('pointermove', (e) => { const r = hero.getBoundingClientRect(); tx = ((e.clientX - r.left) / r.width) * 2 - 1; ty = ((e.clientY - r.top) / r.height) * 2 - 1; last = performance.now(); });
  const loop = (t: number) => {
    if (!active) return;
    if (t - last > 2500) { tx = Math.sin(t / 5200) * 0.32; ty = Math.cos(t / 6900) * 0.22; }
    x += (tx - x) * 0.055; y += (ty - y) * 0.055;
    const sy = clamp(window.scrollY / hero.offsetHeight);
    if (Math.abs(x - wx) > 0.0015 || Math.abs(y - wy) > 0.0015 || sy !== ws) { wx = x; wy = y; ws = sy; hero.style.setProperty('--px', x.toFixed(3)); hero.style.setProperty('--py', y.toFixed(3)); hero.style.setProperty('--sy', sy.toFixed(4)); }
    raf = requestAnimationFrame(loop);
  };
  new IntersectionObserver(([en]) => { active = en.isIntersecting; cancelAnimationFrame(raf); if (active) raf = requestAnimationFrame(loop); }).observe(hero);
}
if (finePointer && !reduce.matches) {
  $$('[data-tilt]').forEach((el) => {
    el.addEventListener('pointermove', (e) => { const r = el.getBoundingClientRect(); el.style.setProperty('--tx', (((e.clientX - r.left) / r.width) * 2 - 1).toFixed(3)); el.style.setProperty('--ty', (((e.clientY - r.top) / r.height) * 2 - 1).toFixed(3)); });
    el.addEventListener('pointerleave', () => { el.style.setProperty('--tx', '0'); el.style.setProperty('--ty', '0'); });
  });
}

/* ---------- 3 · Reveal ---------- */
// Große Überschriften erscheinen hinter einer Maske. Die Maske liegt auf einem inneren Element,
// damit der IntersectionObserver die Überschrift selbst weiterhin als sichtbar erkennt.
$$('.h-xl[data-reveal], .closing__title[data-reveal]').forEach((el) => { const c = document.createElement('span'); c.className = 'clip'; c.append(...Array.from(el.childNodes)); el.append(c); });
const reveals = $$('[data-reveal]');
document.addEventListener('focusin', (e) => (e.target as Element).closest?.('[data-reveal]')?.classList.add('is-in'));
if ('IntersectionObserver' in window && !reduce.matches) {
  const io = new IntersectionObserver((entries) => entries.forEach((en) => { if (en.isIntersecting || en.boundingClientRect.top < 0) { en.target.classList.add('is-in'); io.unobserve(en.target); } }), { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
  reveals.forEach((el) => io.observe(el));
} else reveals.forEach((el) => el.classList.add('is-in'));

/* ---------- 4b · Kapitelübersicht ---------- */
const index = $<HTMLDialogElement>('#index');
const openIndex = () => { if (index && !index.open) index.showModal(); };
$$('[data-open-index]').forEach((b) => b.addEventListener('click', openIndex));
$('[data-close-index]')?.addEventListener('click', () => index?.close());
indexLinks.forEach((a) => a.addEventListener('click', () => index?.close()));
index?.addEventListener('click', (e) => { if (e.target === index) index.close(); });

/* ---------- 5 · Präsentationsmodus & Tastatur ---------- */
const presentBtn = $<HTMLButtonElement>('[data-present]');
const setPresenting = (on: boolean) => {
  root.classList.toggle('presenting', on);
  presentBtn?.setAttribute('aria-pressed', String(on));
  if (!on && document.fullscreenElement) document.exitFullscreen?.().catch(() => {});
  requestAnimationFrame(() => { measureStops(); update(); });
};
presentBtn?.addEventListener('click', () => setPresenting(!root.classList.contains('presenting')));
$('[data-present-exit]')?.addEventListener('click', () => setPresenting(false));
prevBtn?.addEventListener('click', () => goTo(window.scrollY > stops[stopIndex].y + 40 ? stopIndex : stopIndex - 1));
nextBtn?.addEventListener('click', () => goTo(stopIndex + 1));

document.addEventListener('keydown', (e) => {
  if (e.altKey || e.ctrlKey || e.metaKey) return;
  const t = e.target as HTMLElement;
  if (t.closest('input, textarea, select')) return;
  if (index?.open) return; // im Dialog gelten die normalen Tasten (Tab, Enter, Esc)
  const presenting = root.classList.contains('presenting');
  const inTabs = !!t.closest('[role="tablist"]');
  const key = e.key;
  if ((key === 'ArrowRight' && !inTabs) || key === 'PageDown' || (presenting && key === ' ' && !t.closest('button, a'))) { e.preventDefault(); goTo(stopIndex + 1); }
  else if ((key === 'ArrowLeft' && !inTabs) || key === 'PageUp') { e.preventDefault(); goTo(window.scrollY > stops[stopIndex].y + 40 ? stopIndex : stopIndex - 1); }
  else if (key === 'Home') { e.preventDefault(); goTo(0); }
  else if (key === 'End') { e.preventDefault(); goTo(stops.length - 1); }
  else if (/^[0-9]$/.test(key)) { const c = chapterEls[key === '0' ? 9 : Number(key) - 1]; if (c) { e.preventDefault(); const s = stops.findIndex((st) => st.chapter === c.dataset.chapter); goTo(s); } }
  else if (key === 'g' || key === 'G') { e.preventDefault(); openIndex(); }
  else if (key === 'p' || key === 'P') { e.preventDefault(); setPresenting(!presenting); }
  else if (key === 'f' || key === 'F') { e.preventDefault(); if (document.fullscreenElement) document.exitFullscreen?.(); else root.requestFullscreen?.().catch(() => {}); }
  else if (key === 'Escape' && presenting) setPresenting(false);
});

/* ---------- 6 · Tabs mit Tastatur (Pfeile, Home, End) ---------- */
function tabs(list: HTMLElement, onSelect?: (tab: HTMLElement, i: number, all: HTMLElement[]) => void) {
  const all = $$('[role="tab"]', list);
  const select = (tab: HTMLElement, focus = false) => {
    all.forEach((t) => { const on = t === tab; t.setAttribute('aria-selected', String(on)); t.tabIndex = on ? 0 : -1; const panel = document.getElementById(t.getAttribute('aria-controls') ?? ''); if (panel) panel.hidden = !on; });
    if (focus) tab.focus({ preventScroll: true });
    onSelect?.(tab, all.indexOf(tab), all);
  };
  all.forEach((t, i) => {
    t.addEventListener('click', () => select(t));
    t.addEventListener('keydown', (e) => {
      const map: Record<string, number> = { ArrowRight: i + 1, ArrowDown: i + 1, ArrowLeft: i - 1, ArrowUp: i - 1, Home: 0, End: all.length - 1 };
      if (!(e.key in map)) return;
      e.preventDefault(); e.stopPropagation();
      select(all[(map[e.key] + all.length) % all.length], true);
    });
  });
  const initial = all.find((t) => t.getAttribute('aria-selected') === 'true') ?? all[0];
  if (initial) onSelect?.(initial, all.indexOf(initial), all);
}
// Einfache Tab-Gruppen
const replay = (el: HTMLElement, cls: string) => { el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls); };
const pressGroup = (buttons: HTMLElement[], active: HTMLElement) => buttons.forEach((b) => b.setAttribute('aria-pressed', String(b === active)));
const setText = (sel: string, value: string | undefined, scope: ParentNode = document) => { const el = $(sel, scope); if (el) el.textContent = value ?? ''; };
// Content-Säulen ↔ Profil-Mockup
const pillarsRoot = $('[data-pillars]');
if (pillarsRoot) tabs($('[role="tablist"]', pillarsRoot)!, (tab) => $('.phone', pillarsRoot)?.setAttribute('data-active-pillar', tab.dataset.pillar ?? ''));
// Roadmap: Linie füllt sich bis zum gewählten Schritt
const roadmapEl = $('[data-roadmap] .roadmap');
if (roadmapEl) tabs($('[role="tablist"]', roadmapEl)!, (_t, i, all) => { roadmapEl.style.setProperty('--a', String(i)); all.forEach((b, k) => b.classList.toggle('is-reached', k <= i)); });

/* ---------- 7 · Demonstrationen ---------- */
// Content-Lab: Hook-Varianten und drei ein- und ausblendbare Ebenen
const lab = $('[data-hooklab]');
if (lab) {
  const phone = $('[data-lab-phone]', lab)!;
  tabs($('[role="tablist"]', lab)!, (tab) => {
    $$('[data-lab-screen]', lab).forEach((s) => (s.hidden = s.dataset.labScreen !== tab.dataset.variant));
    replay(phone, 'is-swapping');
  });
  const layerBtns = $$('[data-layer]', lab);
  layerBtns.forEach((b) => b.addEventListener('click', () => {
    b.setAttribute('aria-pressed', String(b.getAttribute('aria-pressed') !== 'true'));
    const on = layerBtns.filter((x) => x.getAttribute('aria-pressed') === 'true').map((x) => x.dataset.layer);
    phone.dataset.layers = on.join(' ');
    $$('[data-layer-row]', lab).forEach((row) => row.classList.toggle('is-off', !on.includes(row.dataset.layerRow)));
  }));
}

// Musterclips: starten nur auf Klick und zunächst stumm; Ton nur auf ausdrücklichen Wunsch.
// Lässt sich eine Datei nicht laden, bleibt das Storyboard sichtbar (kein leerer Player).
const stopVideos = (scope: ParentNode) => $$<HTMLVideoElement>('video[data-reel-video]', scope).forEach((v) => { v.pause(); v.closest('[data-reel-player]')?.classList.remove('is-playing'); });
$$('[data-reel-player]').forEach((player) => {
  const video = $<HTMLVideoElement>('video[data-reel-video]', player), play = $('[data-reel-play]', player), sound = $('[data-reel-sound]', player);
  if (!video) return;
  const fail = () => { player.classList.add('has-error'); video.hidden = true; if (play) play.hidden = true; if (sound) sound.hidden = true; };
  video.addEventListener('error', fail);
  video.addEventListener('ended', () => player.classList.remove('is-playing'));
  play?.addEventListener('click', () => {
    if (video.paused) { video.play().then(() => player.classList.add('is-playing')).catch(fail); play.setAttribute('aria-label', 'Muster-Reel anhalten'); }
    else { video.pause(); player.classList.remove('is-playing'); play.setAttribute('aria-label', 'Muster-Reel abspielen'); }
  });
  sound?.addEventListener('click', () => { video.muted = !video.muted; sound.setAttribute('aria-pressed', String(!video.muted)); sound.textContent = video.muted ? 'Ton an' : 'Ton aus'; });
});
// KI-first: Produktionskette, Linie füllt sich bis zum gewählten Schritt
const aiRoot = $('[data-aichain] .chain8');
if (aiRoot) tabs($('[role="tablist"]', aiRoot)!, (_t, i, all) => { aiRoot.style.setProperty('--a', String(i)); all.forEach((el, k) => el.classList.toggle('is-reached', k <= i)); });
// Reel-Galerie: Auswahl zeigt Smartphone-Slot und Steckbrief, laufende Videos stoppen
const gallery = $('[data-gallery]');
if (gallery) tabs($('[role="tablist"]', gallery)!, (tab) => { stopVideos(gallery); $$('[data-slot]', gallery).forEach((sl) => (sl.hidden = sl.dataset.slot !== tab.dataset.reel)); });
// Personal Brand: Phasen verschieben den Mix aus KI-Content und eigenen Aufnahmen
const brandRoot = $('[data-brand]');
if (brandRoot) tabs($('[role="tablist"]', brandRoot)!, (tab) => $('.brandmap__mix', brandRoot)?.style.setProperty('--ai', tab.dataset.ai ?? '50'));

// Redaktionskalender: Filter nach Art, Auswahl zeigt die Details
const cal = $('[data-cal]');
if (cal) {
  const items = $$('.cal__item', cal), filters = $$('[data-cal-filter]', cal);
  const show = (it: HTMLElement) => { pressGroup(items, it); for (const k of ['when', 'kind', 'title', 'format', 'to']) setText(`[data-cal-${k}]`, it.dataset[k], cal); const d = $('.cal__detail', cal); if (d) replay(d, 'is-swapping'); };
  items.forEach((it) => it.addEventListener('click', () => show(it)));
  filters.forEach((f) => f.addEventListener('click', () => {
    pressGroup(filters, f); const t = f.dataset.calFilter;
    items.forEach((it) => it.classList.toggle('is-dim', t !== 'alle' && it.dataset.calType !== t));
    const current = items.find((it) => it.getAttribute('aria-pressed') === 'true');
    if (t !== 'alle' && current?.classList.contains('is-dim')) { const first = items.find((it) => !it.classList.contains('is-dim')); if (first) show(first); }
  }));
}

// Drehtag: aus n Themen werden Formate für mehrere Wochen (illustratives Rechenbeispiel)
const shoot = $('[data-shoot]');
if (shoot) {
  const input = $<HTMLInputElement>('[data-shoot-input]', shoot)!;
  const render = () => {
    const n = Number(input.value), karussells = Math.ceil(n / 2), feed = n + karussells, weeks = Math.floor(feed / 3);
    const out: Record<string, number> = { reels: n, hooks: n * 3, stories: n, karussells, ads: Math.min(4, n), ctas: n, feed, weeks };
    setText('[data-shoot-n]', String(n), shoot);
    for (const [k, v] of Object.entries(out)) $$(`[data-out="${k}"]`, shoot).forEach((el) => { if (el.textContent !== String(v)) { el.textContent = String(v); replay(el, 'is-bump'); } });
    $$('[data-topic]', shoot).forEach((li) => li.classList.toggle('is-on', Number(li.dataset.topic) < n));
    $$('[data-week]', shoot).forEach((li) => li.classList.toggle('is-on', Number(li.dataset.week) <= weeks));
    input.style.setProperty('--fill', `${((n - 3) / 5) * 100}%`);
  };
  input.addEventListener('input', render); render();
}

// Paid Advertising: Kampagne, Creative und Format
const adRoot = $('[data-ad]');
if (adRoot) {
  const ad = $('.ad', adRoot)!, formatBtns = $$('[data-ad-format]', adRoot), creativeBtns = $$('[data-creative]', adRoot);
  let camp: HTMLElement | null = null, creative = 0, first = true;
  const paint = () => {
    if (!camp) return;
    const cr = (JSON.parse(camp.dataset.creatives ?? '[]') as { headline: string; sub: string }[])[creative];
    setText('[data-ad-headline]', cr?.headline, ad); setText('[data-ad-sub]', cr?.sub, ad);
    setText('[data-ad-offer]', camp.dataset.offer, ad); setText('[data-ad-cta]', camp.dataset.cta, ad);
    $$('[data-ad-img]', ad).forEach((im) => (im.hidden = im.dataset.adImg !== `${camp!.dataset.campaign}${creative}`));
    if (!first) replay(ad, 'is-swapping');
    first = false;
  };
  tabs($('[role="tablist"]', adRoot)!, (tab) => { camp = tab; creative = 0; pressGroup(creativeBtns, creativeBtns[0]); paint(); });
  creativeBtns.forEach((b) => b.addEventListener('click', () => { pressGroup(creativeBtns, b); creative = Number(b.dataset.creative); paint(); }));
  formatBtns.forEach((b) => b.addEventListener('click', () => { pressGroup(formatBtns, b); ad.dataset.format = b.dataset.adFormat ?? 'feed'; }));
}

// Weg zur Anfrage: Route hebt die beteiligten Stationen hervor
const routesRoot = $('[data-routes]');
if (routesRoot) {
  const btns = $$('[data-route]', routesRoot), route = $('.route', routesRoot)!;
  btns.forEach((b) => b.addEventListener('click', () => {
    pressGroup(btns, b);
    const nodes = (b.dataset.nodes ?? '').split(' ');
    $$('[data-node]', route).forEach((li) => { li.classList.toggle('is-on', nodes.includes(li.dataset.node ?? '')); li.style.setProperty('--o', String(Math.max(0, nodes.indexOf(li.dataset.node ?? '')))); });
    setText('[data-route-note]', b.dataset.note, routesRoot);
    replay(route, 'is-swapping');
  }));
}

// Automatisierung: Content- oder Lead-Workflow
const flows = $('[data-workflows]');
if (flows) { const btns = $$('[data-workflow]', flows); btns.forEach((b) => b.addEventListener('click', () => { pressGroup(btns, b); $$('[data-flow]', flows).forEach((f) => (f.hidden = f.dataset.flow !== b.dataset.workflow)); })); }

// Erfolgsmessung: Cockpit mit Demo-Daten
const dash = $('[data-dash]');
if (dash) {
  interface Row { id: string; spend: number; leads: number; qualified: number; booked: number; attended: number; customers: number; verdict: string; action: string }
  const rows: Row[] = JSON.parse(dash.dataset.dash ?? '[]');
  const eur = (v: number) => v.toLocaleString('de-DE', { maximumFractionDigits: 0 }) + ' €';
  const btns = $$('[data-dash-set]', dash);
  const render = (r: Row) => {
    const kpi: Record<string, string> = { spend: eur(r.spend), qualified: String(r.qualified), cpl: r.qualified ? eur(r.spend / r.qualified) : '–', booked: String(r.booked), attended: String(r.attended), customers: String(r.customers) };
    for (const [k, v] of Object.entries(kpi)) setText(`[data-kpi="${k}"]`, v, dash);
    $$('[data-funnel]', dash).forEach((li) => { const v = r[li.dataset.funnel as 'leads']; li.style.setProperty('--w', String(r.leads ? v / r.leads : 0)); setText('b', String(v), li); });
    setText('[data-dash-verdict]', r.verdict, dash); setText('[data-dash-action]', r.action, dash);
  };
  btns.forEach((b) => b.addEventListener('click', () => { pressGroup(btns, b); const r = rows.find((x) => x.id === b.dataset.dashSet); if (r) render(r); }));
  if (rows[0]) render(rows[0]);
}

/* ---------- 8 · Halftone: Punktraster, dessen Punktgröße langsam pulsiert ---------- */
function halftone(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d'); if (!ctx) return;
  const STEP = 13; let w = 0, h = 0, raf = 0, visible = false, last = 0;
  const draw = (t: number) => {
    ctx.clearRect(0, 0, w, h); const time = t / 1000;
    for (let y = STEP / 2; y < h; y += STEP) for (let x = STEP / 2; x < w; x += STEP) {
      const wave = Math.sin(x * 0.011 + time * 0.55) * Math.cos(y * 0.014 - time * 0.4) + Math.sin((x + y) * 0.006 + time * 0.3);
      const fall = Math.max(0, 1 - Math.hypot(x / w, 1 - y / h) * 0.95);
      const r = Math.max(0, (wave * 0.5 + 0.55) * fall) * 2.6;
      if (r < 0.25) continue;
      ctx.beginPath(); ctx.arc(x, y, r, 0, 6.2832); ctx.fillStyle = wave > 1.1 ? 'rgba(217,178,90,0.55)' : 'rgba(142,197,240,0.32)'; ctx.fill();
    }
  };
  const resize = () => { const dpr = Math.min(window.devicePixelRatio || 1, 2); w = canvas.clientWidth; h = canvas.clientHeight; canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr); ctx.setTransform(dpr, 0, 0, dpr, 0, 0); draw(performance.now()); };
  const loop = (t: number) => { if (!visible) return; if (t - last > 50) { draw(t); last = t; } raf = requestAnimationFrame(loop); };
  new ResizeObserver(resize).observe(canvas);
  new IntersectionObserver(([en]) => { visible = en.isIntersecting && !reduce.matches && !document.hidden; cancelAnimationFrame(raf); if (visible) raf = requestAnimationFrame(loop); }).observe(canvas);
}
$$<HTMLCanvasElement>('canvas[data-halftone]').forEach(halftone);
