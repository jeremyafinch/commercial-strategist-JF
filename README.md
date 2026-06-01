# Commercial Strategist Site

Personal marketing site for Jeremy Finch — product marketing and commercial strategy for hard tech and complex B2B.

## Versions

| Version | Status | Site root | Copy | Preview archive |
|---------|--------|-----------|------|-----------------|
| **V3** | Active draft | `index.html` | `copy/COPY-v3.md` | — (root is V3) |
| **V2** | Frozen (Jun 2026) | `archive/v2/index.html` | `copy/COPY-v2.md` | `/archive/v2/` |
| **V1** | Frozen | `archive/v1/index.html` | `copy/COPY-v1.md` | `/archive/v1/` |

Git tag **`v2.0`** marks the V2 freeze on `main` for easy revert.

## Folder structure

```
├── index.html              ← V3 working draft (what you edit)
├── styles.css
├── work-carousel.js
├── img/
├── copy/
│   ├── COPY-v3.md          ← active copy master
│   ├── COPY-v2.md          ← frozen (do not edit)
│   └── COPY-v1.md
├── archive/
│   ├── v2/                 ← frozen V2 snapshot (self-contained CSS/JS)
│   └── v1/
├── v2/index.html           ← redirect → /archive/v2/
├── v3/index.html           ← redirect → /
└── design.md
```

## Which file to edit

| Goal | HTML | Copy |
|------|------|------|
| Current work (V3) | `index.html` | `copy/COPY-v3.md` |
| Reference V2 | `archive/v2/index.html` | `copy/COPY-v2.md` |
| Reference V1 | `archive/v1/index.html` | `copy/COPY-v1.md` |

## Preview locally (no Terminal)

1. Open **Finder** → **Desktop** → **Commercial Strategist Site**.
2. Double-click **`index.html`** for the V3 draft.

Optional: `./preview.sh` then open http://localhost:8080/ (V2 archive at http://localhost:8080/archive/v2/).

## Live site

After `git push`, GitHub Pages serves **https://work.jeremyafinch.com/** from root `index.html` (V3 once deployed).

`/archive/` paths are `noindex` in `robots.txt`.

## Revert to V2

```bash
git checkout v2.0 -- index.html styles.css work-carousel.js copy/COPY-v3.md
# or browse the frozen snapshot at archive/v2/
```
