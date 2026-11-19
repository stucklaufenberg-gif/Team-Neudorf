// Team-Neudorf – Interaktionen. Kein Framework, keine externen Dienste, kein Tracking.
// 1 Header · 2 Mobiles Menü · 3 Mega-Menü · 4 Reveal · 5 Halftone · 6 Formulare · 7 Jahr

import { initMotion } from './motion';
import { initTracking, markFormSuccess } from '../lib/tracking';

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

/* 1 · Header: Zustand beim Scrollen ----------------------------------- */
const header = document.querySelector<HTMLElement>('[data-header]');
if (header) {
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* 2 · Mobiles Menü (aria-expanded, Escape, Fokus bleibt im Menü) -------- */
const menuToggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
const menu = document.querySelector<HTMLElement>('[data-menu]');
if (menuToggle && menu) {
  let closeTimer = 0;
  const setMenu = (open: boolean) => {
    window.clearTimeout(closeTimer);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
    document.documentElement.classList.toggle('menu-open', open);
    if (open) {
      menu.hidden = false;
      void menu.offsetWidth; // Übergang auslösen
      menu.classList.add('is-open');
      menu.querySelector<HTMLElement>('a')?.focus({ preventScroll: true });
    } else {
      menu.classList.remove('is-open');
      closeTimer = window.setTimeout(() => (menu.hidden = true), reduceMotion.matches ? 0 : 420);
    }
  };
  menuToggle.addEventListener('click', () => setMenu(!menu.classList.contains('is-open')));
  document.addEventListener('keydown', (e) => {
    if (!menu.classList.contains('is-open')) return;
    if (e.key === 'Escape') { setMenu(false); menuToggle.focus(); return; }
    if (e.key !== 'Tab') return;
    const items = [menuToggle, ...menu.querySelectorAll<HTMLElement>('a, button')];
    const first = items[0], last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
  window.matchMedia('(min-width: 1120px)').addEventListener('change', (e) => e.matches && setMenu(false));
}

/* 3 · Mega-Menü: per Tastatur/Touch über den Pfeil-Button ----------------- */
const megaToggle = document.querySelector<HTMLButtonElement>('[data-mega-toggle]');
const mega = document.querySelector<HTMLElement>('[data-mega]');
if (megaToggle && mega) {
  const setMega = (open: boolean) => {
    mega.classList.toggle('is-open', open);
    megaToggle.setAttribute('aria-expanded', String(open));
  };
  megaToggle.addEventListener('click', () => setMega(!mega.classList.contains('is-open')));
  document.addEventListener('click', (e) => {
    if (!mega.contains(e.target as Node) && !megaToggle.contains(e.target as Node)) setMega(false);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mega.classList.contains('is-open')) { setMega(false); megaToggle.focus(); }
  });
}

/* 4 · Reveal beim Scrollen ------------------------------------------------ */
// Migrierte Unterseiten erhalten die Bewegung automatisch für ihre Bausteine.
document.querySelectorAll<HTMLElement>(
  'main > section:not(.hero) .section-head, main .grid > *, main .steps > *, main .split > *, main .faq, main .notice, main .contact-grid > *, main .about-grid > *, main .prose',
).forEach((el) => {
  if (el.hasAttribute('data-reveal') || el.closest('[data-reveal]')) return;
  el.setAttribute('data-reveal', '');
  const siblings = el.parentElement?.matches('.grid, .steps') ? Array.from(el.parentElement.children) : [];
  if (siblings.length) el.style.setProperty('--i', String(siblings.indexOf(el) % 4));
});
const revealEls = document.querySelectorAll<HTMLElement>('[data-reveal]');
// Erreichbarkeit vor Effekt: Was den Fokus erhält oder bereits oberhalb des Sichtfelds liegt
// (Sprungmarke, Seite neu geladen), wird sofort sichtbar – unabhängig von der Animation.
document.addEventListener('focusin', (e) => (e.target as Element).closest?.('[data-reveal]')?.classList.add('is-in'));
if ('IntersectionObserver' in window && !reduceMotion.matches) {
  const io = new IntersectionObserver(
    (entries) => entries.forEach((en) => {
      if (en.isIntersecting || en.boundingClientRect.top < 0) { en.target.classList.add('is-in'); io.unobserve(en.target); }
    }),
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-in'));
}

/* 5 · Halftone (Kelder): Punktraster, dessen Punktgröße langsam pulsiert ---- */
// Rein dekorativ. Läuft nur, solange sichtbar; bei reduced-motion ein statisches Bild.
function halftone(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const STEP = 13;
  let w = 0, h = 0, raf = 0, visible = false, last = 0;
  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth; h = canvas.clientHeight;
    canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    draw(performance.now());
  };
  const draw = (t: number) => {
    ctx.clearRect(0, 0, w, h);
    const time = t / 1000;
    for (let y = STEP / 2; y < h; y += STEP) {
      for (let x = STEP / 2; x < w; x += STEP) {
        // Zwei überlagerte, langsam wandernde Wellen bestimmen die Punktgröße
        const wave = Math.sin(x * 0.011 + time * 0.55) * Math.cos(y * 0.014 - time * 0.4) + Math.sin((x + y) * 0.006 + time * 0.3);
        const fall = Math.max(0, 1 - Math.hypot(x / w, 1 - y / h) * 0.95); // verdichtet sich zur unteren linken Ecke
        const r = Math.max(0, (wave * 0.5 + 0.55) * fall) * 2.6;
        if (r < 0.25) continue;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 6.2832);
        ctx.fillStyle = wave > 1.1 ? 'rgba(217,178,90,0.55)' : 'rgba(142,197,240,0.32)';
        ctx.fill();
      }
    }
  };
  const loop = (t: number) => {
    if (!visible) return;
    if (t - last > 50) { draw(t); last = t; } // ~20 fps genügen
    raf = requestAnimationFrame(loop);
  };
  new ResizeObserver(resize).observe(canvas);
  new IntersectionObserver(([en]) => {
    visible = en.isIntersecting && !reduceMotion.matches && !document.hidden;
    cancelAnimationFrame(raf);
    if (visible) raf = requestAnimationFrame(loop);
  }).observe(canvas);
}
document.querySelectorAll<HTMLCanvasElement>('canvas[data-halftone]').forEach(halftone);

/* 6 · Formulare ----------------------------------------------------------- */
// Die Formulare senden an die bestehenden Server-Skripte der Website (kontakt.php / schaden.php).
// Ohne JavaScript funktioniert der normale POST. Mit JavaScript wird das Ergebnis geprüft:
// Erfolg → Danke-Seite; nicht erreichbar → ehrliche Fehlermeldung mit echten Alternativen
// (Telefon, vorbereitete E-Mail). Es wird nie ein Versand vorgetäuscht.
document.querySelectorAll<HTMLFormElement>('form[action$=".php"]').forEach((form) => {
  const status = document.createElement('div');
  status.className = 'notice notice--warn form-status';
  status.setAttribute('role', 'alert');
  status.hidden = true;
  form.prepend(status);

  const mailtoFallback = () => {
    const data = new FormData(form);
    const lines: string[] = [];
    form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>('input, textarea, select').forEach((f) => {
      if (!f.name || f.name === 'website' || f.type === 'checkbox') return;
      const value = String(data.get(f.name) ?? '').trim();
      if (!value) return;
      const label = form.querySelector(`label[for="${f.id}"]`)?.textContent?.replace('*', '').trim() ?? f.name;
      lines.push(`${label}: ${value}`);
    });
    const subject = form.getAttribute('name') === 'schadenmeldung' ? 'Schadenmeldung über die Website' : 'Anfrage über die Website';
    return `mailto:info@team-neudorf.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n\n'))}`;
  };

  form.addEventListener('submit', async (e) => {
    if (!form.checkValidity()) return; // Browser zeigt die Pflichtfeld-Hinweise
    e.preventDefault();
    if (document.documentElement.hasAttribute('data-preview')) {
      // Testumgebung: Es gibt hier kein Formular-Backend – nichts senden, nichts vortäuschen.
      status.innerHTML =
        '<strong>Testumgebung: Dieses Formular ist in der Vorschau nicht angeschlossen. Es wurde nichts gesendet.</strong> ' +
        `Sie können Ihre Angaben <a href="${mailtoFallback()}">als vorbereitete E-Mail senden</a>, ` +
        'anrufen (<a href="tel:+4922569596141">02256 9596141</a>) oder ' +
        '<a href="https://wa.me/4922569596141?text=Hallo%20Team-Neudorf%2C%20ich%20habe%20eine%20Frage" target="_blank" rel="noopener">per WhatsApp schreiben</a>.';
      status.hidden = false;
      status.scrollIntoView({ block: 'center', behavior: reduceMotion.matches ? 'auto' : 'smooth' });
      return;
    }
    form.setAttribute('aria-busy', 'true');
    status.hidden = true;
    try {
      const res = await fetch(form.action, { method: 'POST', body: new FormData(form), redirect: 'follow' });
      const target = new URL(res.url);
      const isHtmlPage = (res.headers.get('content-type') ?? '').includes('text/html');
      if (res.ok && isHtmlPage && (target.pathname.includes('danke') || target.search.includes('fehler='))) {
        if (target.pathname.includes('danke')) markFormSuccess(); // Server hat den Versand bestätigt
        window.location.assign(res.url);
        return;
      }
      throw new Error('Formular-Endpunkt nicht erreichbar (' + res.status + ')');
    } catch {
      status.innerHTML =
        '<strong>Ihre Nachricht konnte gerade nicht online versendet werden.</strong> Ihre Angaben sind nicht verloren: ' +
        `Sie können sie <a href="${mailtoFallback()}">als vorbereitete E-Mail senden</a> ` +
        'oder uns direkt anrufen: <a href="tel:+4922569596141">02256 9596141</a>.';
      status.hidden = false;
      status.scrollIntoView({ block: 'center', behavior: reduceMotion.matches ? 'auto' : 'smooth' });
    } finally {
      form.removeAttribute('aria-busy');
    }
  });
});

/* 7 · Jahr im Footer ------------------------------------------------------ */
document.querySelectorAll<HTMLElement>('[data-year]').forEach((el) => (el.textContent = String(new Date().getFullYear())));

/* 8 · Signature Motion (Tiefe, Scroll-Kopplung, Karten) – nur ohne reduced-motion */
if (!reduceMotion.matches) initMotion();

/* 9 · Messgrundlage: CTA-Kennzeichnung; Erfassung nur mit Feature-Flag (Standard: aus) */
initTracking();
