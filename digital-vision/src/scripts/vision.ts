// Digital Vision & Growth – Interaktion und Bewegung. Kein Framework, kein Tracking, keine externen Dienste.
// 1 Scroll-Engine · 2 Hero · 3 Reveal · 4 Kapitel & Schritte · 5 Präsentationsmodus & Tastatur ·
// 6 Tabs (Säulen, Reels, Journey, Roadmap) · 7 Schalter (Vergleich, Zuständigkeit, Anzeige, Geschichten) · 8 Halftone

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
  else if (/^[1-6]$/.test(key)) { const c = chapterEls[Number(key) - 1]; if (c) { e.preventDefault(); const s = stops.findIndex((st) => st.chapter === c.dataset.chapter); goTo(s); } }
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
// Content-Säulen ↔ Profil-Mockup
const pillarsRoot = $('[data-pillars]');
if (pillarsRoot) tabs($('[role="tablist"]', pillarsRoot)!, (tab) => $('.phone', pillarsRoot)?.setAttribute('data-active-pillar', tab.dataset.pillar ?? ''));
// Reel-Fächer
const reelsRoot = $('[data-reels]');
if (reelsRoot) tabs($('[role="tablist"]', reelsRoot)!);
// Journey und Roadmap: Linie füllt sich bis zum gewählten Schritt
for (const sel of ['[data-journey] .journey', '[data-roadmap] .roadmap']) {
  const el = $(sel);
  if (el) tabs($('[role="tablist"]', el)!, (_t, i, all) => { el.style.setProperty('--a', String(i)); all.forEach((b, k) => b.classList.toggle('is-reached', k <= i)); });
}

/* ---------- 7 · Schalter ---------- */
const pressGroup = (buttons: HTMLElement[], active: HTMLElement) => buttons.forEach((b) => b.setAttribute('aria-pressed', String(b === active)));
// Organisch / Bezahlt
const cmp = $('[data-compare]');
if (cmp) { const btns = $$('[data-mode]', $('.switch', cmp)!); btns.forEach((b) => b.addEventListener('click', () => { pressGroup(btns, b); $('.compare', cmp)?.setAttribute('data-mode', b.dataset.mode ?? 'both'); })); }
// Zuständigkeit im Produktionsablauf
const who = $('[data-who]');
if (who) { const btns = $$('[data-who-filter]', who); btns.forEach((b) => b.addEventListener('click', () => { pressGroup(btns, b); const f = b.dataset.whoFilter; $$('[data-who-item]', who).forEach((li) => li.classList.toggle('is-dim', f !== 'alle' && li.dataset.whoItem !== f)); })); }
// Anzeigen-Entwurf: Motiv und Format
const adRoot = $('[data-ad]');
if (adRoot) {
  const ad = $('.ad', adRoot)!;
  const variants = $$('[data-ad-variant]', adRoot), formats = $$('[data-ad-format]', adRoot);
  variants.forEach((b) => b.addEventListener('click', () => {
    pressGroup(variants, b);
    for (const [k, target] of [['headline', '[data-ad-headline]'], ['sub', '[data-ad-sub]'], ['text', '[data-ad-text]'], ['cta', '[data-ad-cta]']] as const) { const el = $(target, ad); if (el) el.textContent = b.dataset[k] ?? ''; }
    ad.classList.remove('is-swapping'); void ad.offsetWidth; ad.classList.add('is-swapping');
  }));
  formats.forEach((b) => b.addEventListener('click', () => { pressGroup(formats, b); ad.dataset.format = b.dataset.adFormat ?? 'feed'; }));
}
// Storyboard je Reel
const boards = $('[data-boards]');
if (boards) { const btns = $$('[data-board-btn]', boards); btns.forEach((b) => b.addEventListener('click', () => { pressGroup(btns, b); $$('[data-board]', boards).forEach((d) => (d.hidden = d.dataset.board !== b.dataset.boardBtn)); })); }
// Geschichten auf- und zuklappen
$$('[data-story]').forEach((b) => b.addEventListener('click', () => b.setAttribute('aria-expanded', String(b.getAttribute('aria-expanded') !== 'true'))));

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
