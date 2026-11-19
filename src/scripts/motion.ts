// Team-Neudorf – Signature Motion (Erweiterung 03)
// Hero-Tiefe (Pointer + Scroll), scrollgekoppelte Linien, räumliche Karten, scrollgeführte
// Geschichte, Ablauf-Knoten, Schnellkontakt. Alles läuft über transform/opacity und CSS-Variablen.
// Wird nur ohne prefers-reduced-motion gestartet; ohne JavaScript bleibt alles statisch sichtbar.

const clamp = (v: number, min = 0, max = 1) => Math.min(max, Math.max(min, v));

export function initMotion() {
  const root = document.documentElement;
  root.classList.add('motion');
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* 1 · Hero: Ebenen reagieren auf Pointer (Desktop) bzw. driften sanft (Touch) und auf Scroll */
  const hero = document.querySelector<HTMLElement>('.hero');
  if (hero) {
    let targetX = 0, targetY = 0, x = 0, y = 0, raf = 0, active = false, lastMove = -1e9;
    let wx = 9, wy = 9, wsy = -1, heroHeight = hero.offsetHeight;
    window.addEventListener('resize', () => (heroHeight = hero.offsetHeight));
    if (finePointer) {
      hero.addEventListener('pointermove', (e) => {
        const r = hero.getBoundingClientRect();
        targetX = ((e.clientX - r.left) / r.width) * 2 - 1;
        targetY = ((e.clientY - r.top) / r.height) * 2 - 1;
        lastMove = performance.now();
      });
    }
    const loop = (t: number) => {
      if (!active) return;
      if (t - lastMove > 2500) { // kein Pointer (Touch) oder Ruhe: langsame, kaum merkliche Eigenbewegung
        targetX = Math.sin(t / 5200) * 0.32;
        targetY = Math.cos(t / 6900) * 0.22;
      }
      x += (targetX - x) * 0.055;
      y += (targetY - y) * 0.055;
      const sy = clamp(window.scrollY / heroHeight);
      // Nur schreiben, wenn sich sichtbar etwas ändert – spart Stilberechnungen im Ruhezustand
      if (Math.abs(x - wx) > 0.0015 || Math.abs(y - wy) > 0.0015 || sy !== wsy) {
        wx = x; wy = y; wsy = sy;
        hero.style.setProperty('--px', x.toFixed(3));
        hero.style.setProperty('--py', y.toFixed(3));
        hero.style.setProperty('--sy', sy.toFixed(4));
      }
      raf = requestAnimationFrame(loop);
    };
    new IntersectionObserver(([en]) => {
      active = en.isIntersecting;
      cancelAnimationFrame(raf);
      if (active) raf = requestAnimationFrame(loop);
    }).observe(hero);
  }

  /* 2 · Scrollgekoppelte Elemente: --p läuft von 0 (tritt unten ein) bis 1 (oberes Fünftel) */
  document.querySelectorAll('.area-card__media').forEach((el) => el.setAttribute('data-scrub', ''));
  const scrubs = Array.from(document.querySelectorAll<HTMLElement | SVGElement>('[data-scrub]'));
  const stories = Array.from(document.querySelectorAll<HTMLElement>('[data-story]'));
  stories.forEach((s) => s.classList.add('story-on'));
  const quickbar = document.querySelector<HTMLElement>('[data-quickbar]');
  const quietZones = Array.from(document.querySelectorAll<HTMLElement>('.hero, .page-hero, .closing, .cta-band, .site-footer, form'));

  const update = () => {
    const vh = window.innerHeight;
    for (const el of scrubs) {
      const r = el.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh + 200) continue;
      const p = clamp((vh * 0.95 - r.top) / (vh * 0.75));
      el.style.setProperty('--p', p.toFixed(4));
      if (el.hasAttribute('data-steps')) {
        const steps = el.querySelectorAll('li');
        steps.forEach((li, i) => li.classList.toggle('is-active', p >= i / steps.length + 0.1));
      }
    }
    for (const story of stories) {
      const r = story.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh + 200) continue;
      const line = vh * 0.62;
      const chapters = Array.from(story.querySelectorAll<HTMLElement>('[data-chapter]'));
      let current = 0;
      chapters.forEach((c, i) => { if (c.getBoundingClientRect().top < line) current = i; });
      chapters.forEach((c, i) => {
        c.classList.toggle('is-active', i === current);
        c.classList.toggle('is-past', i < current);
      });
      story.dataset.active = String(current);
      story.querySelectorAll('.story-scroll__nav li').forEach((li, i) => li.classList.toggle('is-current', i === current));
      const first = chapters[0]?.getBoundingClientRect().top ?? r.top;
      const last = chapters[chapters.length - 1]?.getBoundingClientRect().top ?? r.bottom;
      story.style.setProperty('--story-p', clamp((line - first) / Math.max(1, last - first)).toFixed(4));
    }
    if (quickbar) {
      const blocked = quietZones.some((z) => { const r = z.getBoundingClientRect(); return r.top < vh - 40 && r.bottom > 40; });
      const show = !blocked && !root.classList.contains('menu-open');
      quickbar.classList.toggle('is-visible', show);
    }
  };
  let ticking = false;
  const request = () => { if (!ticking) { ticking = true; requestAnimationFrame(() => { ticking = false; update(); }); } };
  window.addEventListener('scroll', request, { passive: true });
  window.addEventListener('resize', request);
  update();

  /* 3 · Karten: feine räumliche Neigung + Licht, das dem Zeiger folgt (nur echte Zeiger) */
  if (finePointer) {
    document.querySelectorAll<HTMLElement>('.area-card').forEach((card) => {
      const max = card.classList.contains('area-card--lead') ? 1.6 : 3;
      card.addEventListener('pointermove', (e) => {
        const r = card.getBoundingClientRect();
        const nx = (e.clientX - r.left) / r.width, ny = (e.clientY - r.top) / r.height;
        card.classList.add('is-tilting');
        card.style.setProperty('--ry', ((nx - 0.5) * 2 * max).toFixed(3));
        card.style.setProperty('--rx', ((0.5 - ny) * 2 * max).toFixed(3));
        card.style.setProperty('--mx', (nx * 100).toFixed(1) + '%');
        card.style.setProperty('--my', (ny * 100).toFixed(1) + '%');
      });
      card.addEventListener('pointerleave', () => {
        card.classList.remove('is-tilting');
        card.style.setProperty('--ry', '0');
        card.style.setProperty('--rx', '0');
      });
    });
    // Lichtpunkt für die Rasterkarten und Panels
    document.addEventListener('pointermove', (e) => {
      const el = (e.target as Element).closest?.<HTMLElement>('.card, .hero__card, .form-wrap, .contact-panel, .download-card');
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', (((e.clientX - r.left) / r.width) * 100).toFixed(1) + '%');
      el.style.setProperty('--my', (((e.clientY - r.top) / r.height) * 100).toFixed(1) + '%');
    }, { passive: true });
  }
}
