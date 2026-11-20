// 90-Tage-Pilotangebot – Interaktion. Kein Framework, kein Tracking, keine externen Dienste.
// 1 Fortschritt & Kapitel · 2 Navigation · 3 Reveal · 4 Roadmap-Tabs · 5 Leistungsmodule · 6 Preis-Zähler
// 7 Budgetrechner · 8 Druck/PDF · 9 Halftone

const root = document.documentElement;
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
const $$ = <T extends Element = HTMLElement>(s: string, el: ParentNode = document) => Array.from(el.querySelectorAll<T>(s));
const $ = <T extends Element = HTMLElement>(s: string, el: ParentNode = document) => el.querySelector<T>(s);
const eur = (n: number) => new Intl.NumberFormat('de-DE', { maximumFractionDigits: 0 }).format(Math.round(n)) + ' €';

/* ---------- 1 · Fortschritt & aktuelles Kapitel ---------- */
const chapters = $$('[data-chapter]');
const navLinks = $$<HTMLAnchorElement>('[data-nav-link]');
let current = '';
let ticking = false;
const update = () => {
  ticking = false;
  const y = window.scrollY, vh = window.innerHeight;
  const max = Math.max(1, root.scrollHeight - vh);
  root.style.setProperty('--scroll', (y / max).toFixed(4));
  root.classList.toggle('scrolled', y > 24);
  let ch = chapters[0]?.dataset.chapter ?? '';
  for (const c of chapters) if (c.getBoundingClientRect().top <= vh * 0.4) ch = c.dataset.chapter ?? ch;
  if (ch !== current) {
    current = ch;
    navLinks.forEach((a) => {
      const on = a.dataset.navLink === ch;
      a.classList.toggle('is-current', on);
      if (on) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
    });
  }
};
window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
window.addEventListener('resize', update);
update();

/* ---------- 2 · Kapitelmenü (schmale Viewports) ---------- */
const navToggle = $<HTMLButtonElement>('[data-nav-toggle]');
const setNav = (open: boolean) => { navToggle?.setAttribute('aria-expanded', String(open)); root.classList.toggle('nav-open', open); };
navToggle?.addEventListener('click', () => setNav(navToggle.getAttribute('aria-expanded') !== 'true'));
navLinks.forEach((a) => a.addEventListener('click', () => setNav(false)));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && root.classList.contains('nav-open')) { setNav(false); navToggle?.focus(); } });
document.addEventListener('click', (e) => { if (root.classList.contains('nav-open') && !(e.target as Element).closest('.nav')) setNav(false); });

/* ---------- 3 · Reveal beim Scrollen ---------- */
const reveals = $$('[data-reveal]');
if (reduce.matches || !('IntersectionObserver' in window)) reveals.forEach((el) => el.classList.add('is-in'));
else {
  const io = new IntersectionObserver((entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } }), { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  reveals.forEach((el) => io.observe(el));
}
requestAnimationFrame(() => root.classList.add('ready'));

/* ---------- 4 · Roadmap: Tabs mit Pfeiltasten (WAI-ARIA Tabs) ---------- */
$$('[data-tabs]').forEach((box) => {
  const tabs = $$<HTMLButtonElement>('[role="tab"]', box);
  const panels = $$('[data-panel]', box);
  const select = (i: number, focus = false) => {
    tabs.forEach((t, k) => { const on = k === i; t.setAttribute('aria-selected', String(on)); t.tabIndex = on ? 0 : -1; });
    panels.forEach((p, k) => { p.hidden = k !== i; });
    box.style.setProperty('--step', String(i));
    if (focus) tabs[i].focus();
  };
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => select(i));
    t.addEventListener('keydown', (e) => {
      const n = tabs.length;
      const map: Record<string, number> = { ArrowRight: (i + 1) % n, ArrowDown: (i + 1) % n, ArrowLeft: (i - 1 + n) % n, ArrowUp: (i - 1 + n) % n, Home: 0, End: n - 1 };
      if (e.key in map) { e.preventDefault(); select(map[e.key], true); }
    });
  });
  select(0);
});

/* ---------- 5 · Leistungsmodule: auf- und zuklappen ---------- */
$$('[data-mod]').forEach((mod, i) => {
  const btn = $<HTMLButtonElement>('.mod__head', mod);
  if (!btn) return;
  const set = (open: boolean) => { btn.setAttribute('aria-expanded', String(open)); mod.classList.toggle('is-open', open); };
  btn.addEventListener('click', () => set(btn.getAttribute('aria-expanded') !== 'true'));
  set(i === 0);
});

/* ---------- 6 · Preis-Zähler ---------- */
$$('[data-count]').forEach((el) => {
  const target = Number(el.dataset.count);
  if (reduce.matches || !('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver(([en]) => {
    if (!en.isIntersecting) return;
    io.disconnect();
    const t0 = performance.now(), dur = 1400;
    const step = (t: number) => {
      const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3);
      el.textContent = String(Math.round(target * e));
      if (p < 1) requestAnimationFrame(step); else el.textContent = String(target);
    };
    el.textContent = '0';
    requestAnimationFrame(step);
  }, { threshold: 0.6 });
  io.observe(el);
});

/* ---------- 7 · Budgetrechner ---------- */
$$('[data-calc]').forEach((calc) => {
  const fee = Number(calc.dataset.fee), months = Number(calc.dataset.months);
  const inputs = $$<HTMLInputElement>('[data-in]', calc);
  const vat = $<HTMLInputElement>('[data-vat]', calc);
  const outs = Object.fromEntries($$<HTMLOutputElement>('[data-out]', calc).map((o) => [o.dataset.out, o]));
  const segs = Object.fromEntries($$('[data-seg]', calc).map((s) => [s.dataset.seg, s]));
  const sumMonth = $('[data-sum-month]', calc), sumTotal = $('[data-sum-total]', calc), basis = $('[data-basis]', calc);
  const maxAll = fee + inputs.reduce((a, i) => a + Number(i.max), 0);
  const render = () => {
    const f = vat?.checked ? 1.19 : 1;
    const vals: Record<string, number> = { fee };
    inputs.forEach((i) => {
      vals[i.dataset.in ?? ''] = Number(i.value);
      i.style.setProperty('--fill', `${(Number(i.value) / Number(i.max)) * 100}%`);
      i.setAttribute('aria-valuetext', `${eur(Number(i.value))} pro Monat`);
    });
    Object.entries(vals).forEach(([k, v]) => {
      if (outs[k]) outs[k].textContent = eur(v * f);
      if (segs[k]) segs[k].style.width = `${(v / maxAll) * 100}%`;
    });
    const m = Object.values(vals).reduce((a, b) => a + b, 0) * f;
    if (sumMonth) sumMonth.textContent = eur(m);
    if (sumTotal) sumTotal.textContent = eur(Math.round(m) * months);
    if (basis) basis.textContent = vat?.checked ? 'Planungswert inklusive 19 % Umsatzsteuer (vereinfachte Annahme)' : 'Netto-Werte bzw. Beträge laut Anbieterabrechnung';
  };
  inputs.forEach((i) => i.addEventListener('input', render));
  vat?.addEventListener('change', render);
  $$<HTMLButtonElement>('[data-preset]', calc).forEach((b) => b.addEventListener('click', () => {
    const [t, a] = (b.dataset.preset ?? '0,0').split(',').map(Number);
    inputs.forEach((i) => { i.value = String(i.dataset.in === 'tech' ? t : a); });
    render();
  }));
  render();
});

/* ---------- 8 · Druck/PDF: alle Inhalte sichtbar machen ---------- */
let restore: (() => void) | null = null;
window.addEventListener('beforeprint', () => {
  const hidden = $$('[data-panel][hidden]');
  hidden.forEach((p) => { p.hidden = false; });
  restore = () => hidden.forEach((p) => { p.hidden = true; });
});
window.addEventListener('afterprint', () => { restore?.(); restore = null; });
$$('[data-print]').forEach((b) => b.addEventListener('click', () => window.print()));

/* ---------- 9 · Halftone: Punktraster mit langsam pulsierender Punktgröße ---------- */
function halftone(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d'); if (!ctx) return;
  const STEP = 14; let w = 0, h = 0, raf = 0, visible = false, last = 0;
  const draw = (t: number) => {
    ctx.clearRect(0, 0, w, h); const time = t / 1000;
    for (let y = STEP / 2; y < h; y += STEP) for (let x = STEP / 2; x < w; x += STEP) {
      const wave = Math.sin(x * 0.01 + time * 0.5) * Math.cos(y * 0.013 - time * 0.35) + Math.sin((x - y) * 0.005 + time * 0.25);
      const fall = Math.max(0, 1 - Math.hypot(1 - x / w, y / h) * 1.05);
      const r = Math.max(0, (wave * 0.5 + 0.5) * fall) * 2.4;
      if (r < 0.3) continue;
      ctx.beginPath(); ctx.arc(x, y, r, 0, 6.2832); ctx.fillStyle = wave > 1.05 ? 'rgba(217,178,90,0.5)' : 'rgba(142,197,240,0.28)'; ctx.fill();
    }
  };
  const resize = () => { const dpr = Math.min(window.devicePixelRatio || 1, 2); w = canvas.clientWidth; h = canvas.clientHeight; canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr); ctx.setTransform(dpr, 0, 0, dpr, 0, 0); draw(performance.now()); };
  const loop = (t: number) => { if (!visible) return; if (t - last > 60) { draw(t); last = t; } raf = requestAnimationFrame(loop); };
  new ResizeObserver(resize).observe(canvas);
  new IntersectionObserver(([en]) => { visible = en.isIntersecting && !reduce.matches && !document.hidden; cancelAnimationFrame(raf); if (visible) raf = requestAnimationFrame(loop); }).observe(canvas);
}
$$<HTMLCanvasElement>('canvas[data-halftone]').forEach(halftone);
