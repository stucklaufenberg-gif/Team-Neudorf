#!/usr/bin/env python3
"""Einmalige Inhaltsmigration: legacy/*.html (Stand der Live-Website) -> src/pages/*.astro

Übernimmt Texte, Überschriften, FAQ, strukturierte Daten und Meta-Angaben WÖRTLICH
aus der bestehenden Website. Es werden keine Inhalte erfunden oder umformuliert –
nur das Markup wird für das neue Designsystem bereinigt (Inline-Styles -> Klassen,
Bilder -> optimierte <Picture>, Links -> absolute Pfade, CTA-Band -> Komponente).

Aufruf:  python3 scripts/migrate-legacy.py          (überspringt HAND_EDITED)
         python3 scripts/migrate-legacy.py --all    (überschreibt alles)
"""
import html, json, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
LEGACY = ROOT / "legacy"
OUT = ROOT / "src" / "pages"

# Startseite ist neu gestaltet (src/pages/index.astro) und wird nie generiert.
SKIP = {"index.html"}
# Seiten, die nach der Migration von Hand weiterentwickelt wurden.
HAND_EDITED: set[str] = set()


def style_to_classes(style: str) -> list[str]:
    s = style.replace(" ", "").lower()
    cls: list[str] = []
    if "background:#d4ab5a" in s:
        return ["tag--gold"]
    if "width:70px" in s:
        return ["success-icon"]
    if "display:flex" in s:
        cls.append("chip-row")
        if "justify-content:center" in s:
            cls.append("chip-row--center")
    if "display:block" in s:
        cls.append("u-block")
    if "text-align:center" in s:
        cls.append("text-center")
    if "max-width:none" in s:
        cls.append("u-max-none")
    elif "max-width:" in s:
        cls.append("container--narrow")
    if "color:var(--muted)" in s:
        cls.append("u-muted")
    if "font-size:" in s:
        cls.append("u-small")
    m = re.search(r"margin-top:(-?[\d.]+)rem", s) or re.search(r"margin:([\d.]+)rem0", s)
    if m:
        v = float(m.group(1))
        cls.append("u-mt-0" if v <= 0 else "u-mt-xs" if v < 0.7 else "u-mt-s" if v <= 1 else "u-mt-m" if v < 2 else "u-mt-l" if v < 2.2 else "u-mt-xl")
    elif "margin-top:0" in s:
        cls.append("u-mt-0")
    m = re.search(r"margin-bottom:([\d.]+)(rem)?", s) or re.search(r"margin:[\d.]+rem0([\d.]+)rem", s)
    if m:
        cls.append("u-mb-0" if float(m.group(1)) == 0 else "u-mb-m")
    return cls


def merge_style(tag: str) -> str:
    """style="..." in Klassen überführen und mit vorhandenem class-Attribut vereinen."""
    m = re.search(r'\sstyle="([^"]*)"', tag)
    if not m:
        return tag
    extra = style_to_classes(m.group(1))
    tag = tag.replace(m.group(0), "")
    if not extra:
        return tag
    c = re.search(r'class="([^"]*)"', tag)
    if c:
        return tag.replace(c.group(0), 'class="%s"' % " ".join([c.group(1)] + extra))
    return re.sub(r"^<(\w+)", lambda x: '<%s class="%s"' % (x.group(1), " ".join(extra)), tag)


def fix_href(m: re.Match) -> str:
    attr, url = m.group(1), m.group(2)
    if re.match(r"^(https?:|mailto:|tel:|#|/)", url):
        return m.group(0)
    if url.startswith("index.html"):
        url = "/" + url[len("index.html"):]
    else:
        url = "/" + url
    return '%s="%s"' % (attr, url)


def convert(name: str) -> str:
    src = (LEGACY / name).read_text(encoding="utf-8")
    title = html.unescape(re.search(r"<title>(.*?)</title>", src, re.S).group(1).strip())
    desc_m = re.search(r'<meta name="description" content="([^"]*)"', src)
    desc = html.unescape(desc_m.group(1)) if desc_m else ""
    noindex = bool(re.search(r'<meta name="robots" content="noindex', src))
    head = src.split("</head>")[0]
    jsonld = [json.loads(x) for x in re.findall(r'<script type="application/ld\+json">(.*?)</script>', head, re.S)]

    body = re.search(r"<main[^>]*>(.*?)</main>", src, re.S).group(1)
    body = re.sub(r"<!--.*?-->", "", body, flags=re.S)

    # Skripte unangetastet lassen (Platzhalter), Rest transformieren
    scripts: list[str] = []
    def stash(m):
        scripts.append(m.group(1))
        return "@@SCRIPT%d@@" % (len(scripts) - 1)
    body = re.sub(r"<script>(.*?)</script>", stash, body, flags=re.S)

    # Geschweifte Klammern im Text maskieren (Astro-Syntax), bevor Komponenten eingefügt werden
    body = body.replace("{", "&#123;").replace("}", "&#125;")

    # Bilder -> <Picture>
    imports: dict[str, str] = {}
    def img(m):
        tag = m.group(0)
        srcp = re.search(r'src="assets/images/([^"]+)"', tag).group(1)
        # Die bisherige Seite nutzt teils ein Kompositbild (stefan.jpg, Logo-Wand). Für den Relaunch
        # wird durchgehend das echte Porträtfoto verwendet (Vorgabe: authentische Porträts).
        if srcp == "stefan.jpg":
            srcp = "stefan-portrait.jpg"
        alt = re.search(r'alt="([^"]*)"', tag).group(1)
        klass = re.search(r'class="([^"]*)"', tag)
        var = "img" + re.sub(r"\W", "_", srcp.rsplit(".", 1)[0]).title().replace("_", "")
        imports[var] = srcp
        hero = "fetchpriority" in tag
        portrait = "stefan" in srcp
        widths = "[480, 900]" if portrait else "[640, 1000, 1400, 1920]"
        sizes = "(max-width: 900px) 90vw, 420px" if portrait else "(max-width: 900px) 100vw, 50vw"
        return '<Picture src={%s} alt="%s" formats={["avif", "webp"]} widths={%s} sizes="%s"%s%s />' % (
            var, alt, widths, sizes,
            ' class="%s"' % klass.group(1) if klass else "",
            ' loading="eager" fetchpriority="high"' if hero else ' loading="lazy"')
    body = re.sub(r"<img\b[^>]*>", img, body)

    # CTA-Band -> Komponente (mit animierten Silk-Lines)
    uses_cta = False
    def cta(m):
        nonlocal uses_cta
        sec = m.group(0)
        eb = re.search(r'<span class="eyebrow">(.*?)</span>', sec, re.S)
        h2 = re.search(r"<h2[^>]*>(.*?)</h2>", sec, re.S)
        p = re.search(r"<p[^>]*>(.*?)</p>", sec, re.S)
        links = re.findall(r'<a class="btn[^"]*" href="([^"]+)"[^>]*>(.*?)</a>', sec, re.S)
        if not (h2 and len(links) == 1):
            return sec
        uses_cta = True
        href, label = links[0]
        return '<CtaBand eyebrow="%s" href="%s" label="%s">\n<Fragment slot="title">%s</Fragment>\n%s</CtaBand>' % (
            eb.group(1).strip() if eb else "", href, label.strip(), h2.group(1).strip(),
            "<p>%s</p>\n" % p.group(1).strip() if p else "")
    body = re.sub(r'<section class="section section--brand cta-band">.*?</section>', cta, body, flags=re.S)

    body = re.sub(r"<[a-zA-Z][^<>]*\sstyle=\"[^\"]*\"[^<>]*>", lambda m: merge_style(m.group(0)), body)
    body = re.sub(r'(href|action)="([^"]+)"', fix_href, body)
    body = re.sub(r"@@SCRIPT(\d+)@@", lambda m: "<script is:inline>%s</script>" % scripts[int(m.group(1))], body)
    body = re.sub(r"\n\s*\n+", "\n", body).strip()

    path = "/" + name
    fm = ["---",
          "// Automatisch aus legacy/%s migriert (scripts/migrate-legacy.py)." % name,
          "// Inhalte stammen wörtlich von der bestehenden Website www.team-neudorf.de.",
          "import Base from '../layouts/Base.astro';"]
    if uses_cta:
        fm.append("import CtaBand from '../components/CtaBand.astro';")
    if imports:
        fm.append("import { Picture } from 'astro:assets';")
        for var, p in imports.items():
            fm.append("import %s from '../assets/images/%s';" % (var, p))
    fm.append("const jsonLd: unknown[] = %s;" % json.dumps(jsonld, ensure_ascii=False, indent=2))
    fm.append("---")
    open_tag = '<Base title=%s description=%s path="%s"%s jsonLd={jsonLd}>' % (
        "{%s}" % json.dumps(title, ensure_ascii=False), "{%s}" % json.dumps(desc, ensure_ascii=False),
        path, " noindex" if noindex else "")
    return "\n".join(fm) + "\n" + open_tag + "\n" + body + "\n</Base>\n"


def main():
    all_ = "--all" in sys.argv
    for f in sorted(LEGACY.glob("*.html")):
        if f.name in SKIP or (f.name in HAND_EDITED and not all_):
            continue
        (OUT / f.name.replace(".html", ".astro")).write_text(convert(f.name), encoding="utf-8")
        print("ok ", f.name)


if __name__ == "__main__":
    main()
