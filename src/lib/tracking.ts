// Team-Neudorf – Messgrundlage (Event-Taxonomie + typisiertes Interface)
// -----------------------------------------------------------------------------
// STANDARD: AUS. Es wird nichts erfasst, gespeichert oder übertragen, solange
//   1) PUBLIC_TRACKING_ENABLED nicht ausdrücklich "true" ist UND
//   2) ein Adapter (Anbieter-Anbindung) registriert wurde.
// Beides ist bewusst nicht gesetzt: Anbieter, Rechtsgrundlage, Datenschutztexte und ggf.
// Einwilligung sind noch nicht freigegeben. Diese Datei legt nur fest, WAS später gemessen
// würde – einheitlich und ohne Personenbezug.
//
// Datensparsamkeit: Ein Event enthält ausschließlich die Felder aus TrackingEvent.
// Keine Namen, keine Formularinhalte, keine Gesundheits- oder Versicherungsangaben,
// keine IP, keine Geräte-ID, keine vollständige URL mit Parametern.

/** Erlaubte Ereignisse. Weitere nur nach Abstimmung ergänzen (siehe docs/DIGITAL_VISION_IMPLEMENTATION.md). */
export const EVENTS = {
  /** Aufruf einer als Landingpage markierten Seite (body[data-landingpage]). */
  landingpage_view: 'Landingpage-Aufruf',
  /** Klick auf einen Link zur Kontaktseite. Sagt nichts über eine gesendete Anfrage aus. */
  contact_click: 'Kontakt-Klick (Weg zur Kontaktseite)',
  /** Klick auf eine tel:-Verknüpfung. */
  tel_click: 'Klick auf Telefonnummer',
  /** Klick auf eine mailto:-Verknüpfung. */
  email_click: 'Klick auf E-Mail-Adresse',
  /** Klick auf den WhatsApp-Link. */
  whatsapp_click: 'Klick auf WhatsApp',
  /** Klick auf die bestehende Online-Terminbuchung (Microsoft Bookings). Keine bestätigte Buchung. */
  booking_click: 'Klick auf Online-Terminbuchung',
  /** Klick auf einen Datei-Download (z. B. Anwärter-Checkliste). */
  download_click: 'Download-Klick',
  /** NUR nach vom Server bestätigtem Versand eines Formulars (Danke-Seite nach erfolgreichem POST). Niemals beim Klick. */
  contact_success: 'Anfrage erfolgreich versendet (bestätigt)',
} as const;

export type EventName = keyof typeof EVENTS;

/** Grobe Herkunft aus utm_source bzw. Referrer – nur diese festen Werte, nie der Rohwert. */
export const CHANNELS = ['direct', 'google', 'instagram', 'facebook', 'linkedin', 'whatsapp', 'empfehlung', 'sonstige'] as const;
export type Channel = (typeof CHANNELS)[number];

export interface TrackingEvent {
  event: EventName;
  /** Pfad ohne Query/Hash, z. B. "/referendariat-nrw.html". */
  page_path: string;
  /** Kennung der Landingpage, falls die Seite eine ist (body[data-landingpage]). */
  landingpage?: string;
  /** Stabile Kennung des angeklickten Elements (data-cta-id), z. B. "lp-referendariat-hero". */
  cta_id?: string;
  /** Bereich der Seite: header, hero, inhalt, abschluss, footer, schnellkontakt, menue. */
  placement?: string;
  channel: Channel;
}

export type TrackingAdapter = (event: TrackingEvent) => void;

const enabled = import.meta.env.PUBLIC_TRACKING_ENABLED === 'true';
/** Nur für lokale Prüfung: schreibt Events in die Konsole und in window.__tnEvents. Sendet nichts. */
const debug = import.meta.env.PUBLIC_TRACKING_DEBUG === 'true';
let adapter: TrackingAdapter | null = null;

/** Integrationsstelle für einen später freigegebenen Anbieter. Ohne Aufruf wird nichts übertragen. */
export function registerAdapter(fn: TrackingAdapter) { adapter = fn; }

export function channelFromLocation(search: string, referrer: string): Channel {
  const src = (new URLSearchParams(search).get('utm_source') ?? '').toLowerCase();
  const known = CHANNELS.find((c) => c === src);
  if (known) return known;
  if (src) return 'sonstige';
  if (!referrer) return 'direct';
  const host = (() => { try { return new URL(referrer).hostname; } catch { return ''; } })();
  if (/google\./.test(host)) return 'google';
  if (/instagram\.com$/.test(host)) return 'instagram';
  if (/facebook\.com$/.test(host)) return 'facebook';
  if (/linkedin\.com$/.test(host)) return 'linkedin';
  return host === location.hostname ? 'direct' : 'sonstige';
}

/** Ordnet einen Link anhand seines Ziels einem Ereignis zu. Gibt null zurück, wenn er nicht gemessen wird. */
export function classifyLink(a: HTMLAnchorElement): EventName | null {
  const href = a.getAttribute('href') ?? '';
  if (href.startsWith('tel:')) return 'tel_click';
  if (href.startsWith('mailto:')) return 'email_click';
  if (href.includes('wa.me/')) return 'whatsapp_click';
  if (href.includes('outlook.office.com/bookwithme')) return 'booking_click';
  if (a.hasAttribute('download')) return 'download_click';
  if (/^\/kontakt(\.html)?(#|\?|$)/.test(href)) return 'contact_click';
  return null;
}

function placementOf(el: Element): string {
  if (el.closest('.quickbar')) return 'schnellkontakt';
  if (el.closest('.mobile-menu')) return 'menue';
  if (el.closest('.site-header')) return 'header';
  if (el.closest('.site-footer')) return 'footer';
  if (el.closest('.hero, .page-hero')) return 'hero';
  if (el.closest('.closing, .cta-band')) return 'abschluss';
  return 'inhalt';
}

export function track(event: EventName, detail: Pick<TrackingEvent, 'cta_id' | 'placement'> = {}) {
  if (!enabled) return;
  const payload: TrackingEvent = {
    event,
    page_path: location.pathname,
    landingpage: document.body.dataset.landingpage || undefined,
    channel: channelFromLocation(location.search, document.referrer),
    ...detail,
  };
  if (debug) {
    const w = window as unknown as { __tnEvents?: TrackingEvent[] };
    (w.__tnEvents ??= []).push(payload);
    console.info('[tracking:debug – nichts gesendet]', payload);
  }
  adapter?.(payload);
}

const SUCCESS_FLAG = 'tn_form_sent';
/** Vom Formular-Code aufzurufen, wenn der Server den Versand bestätigt hat (vor der Weiterleitung zur Danke-Seite). */
export function markFormSuccess() { try { sessionStorage.setItem(SUCCESS_FLAG, '1'); } catch { /* ohne Speicher kein Event */ } }

export function initTracking() {
  // CTA-Kennzeichnung ist unabhängig vom Feature-Flag: sie dokumentiert im Markup, was ein Element wäre.
  document.querySelectorAll<HTMLAnchorElement>('a[href]').forEach((a) => {
    const ev = classifyLink(a);
    if (ev && !a.dataset.cta) a.dataset.cta = ev;
  });
  if (!enabled) return;

  if (document.body.dataset.landingpage) track('landingpage_view');
  document.addEventListener('click', (e) => {
    const a = (e.target as Element).closest?.<HTMLAnchorElement>('a[data-cta]');
    if (!a) return;
    track(a.dataset.cta as EventName, { cta_id: a.dataset.ctaId, placement: placementOf(a) });
  });
  // contact_success: nur auf der Danke-Seite UND nur, wenn der Versand zuvor bestätigt wurde.
  if (/^\/(schaden-)?danke(\.html)?$/.test(location.pathname)) {
    try {
      if (sessionStorage.getItem(SUCCESS_FLAG)) { sessionStorage.removeItem(SUCCESS_FLAG); track('contact_success'); }
    } catch { /* kein Event */ }
  }
}
