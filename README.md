# Commercial Strategist Site

Personal marketing site for Jeremy Finch — product marketing and commercial strategy for hard tech and complex B2B.

## Versions

| Version | Status | Site root | Copy | Preview archive |
|---------|--------|-----------|------|-----------------|
| **V4** | Active draft (`v4` branch) | `index.html` on `v4` | `copy/COPY-v4.md` | — (not live until merge) |
| **V3** | **Production** (`main`) | `index.html` | `copy/COPY-v3.md` (frozen) | `/archive/v3/` |
| **V2** | Frozen (Jun 2026) | `archive/v2/index.html` | `copy/COPY-v2.md` | `/archive/v2/` |
| **V1** | Frozen | `archive/v1/index.html` | `copy/COPY-v1.md` | `/archive/v1/` |

Git tags: **`v3.0`** (V3 freeze), **`v2.0`** (V2 freeze).

## Branch workflow

| Branch | Role | Live site |
|--------|------|-----------|
| **`main`** | Frozen V3 production | https://work.jeremyafinch.com/ |
| **`v4`** | V4 working draft (UX experiments, copy, layout) | Unchanged until merged to `main` |

```bash
# Start V4 work locally
git checkout v4

# Ship V4 to production (when ready)
git checkout main
git merge v4
git push origin main
```

## Folder structure

```
├── index.html              ← production on main (V3); V4 draft on branch v4
├── styles.css
├── work-carousel.js
├── img/
├── copy/
│   ├── COPY-v4.md          ← active on branch v4
│   ├── COPY-v3.md          ← frozen on main
│   ├── COPY-v2.md
│   └── COPY-v1.md
├── archive/
│   ├── v3/                 ← frozen V3 snapshot
│   ├── v2/
│   └── v1/
├── v3/index.html           ← redirect → /archive/v3/
└── v2/index.html           ← redirect → /archive/v2/
```

## Which file to edit

| Goal | Branch | HTML | Copy |
|------|--------|------|------|
| **Live site (V3)** | `main` | frozen — hotfixes only | `copy/COPY-v3.md` (frozen) |
| **V4 draft** | `v4` | `index.html` | `copy/COPY-v4.md` |
| Reference V3 archive | any | `archive/v3/index.html` | `archive/v3/COPY-v3.md` |
| Reference V2 | any | `archive/v2/index.html` | `copy/COPY-v2.md` |

## Preview locally

- **Production (V3):** double-click `index.html` on `main`
- **V4 draft:** `git checkout v4`, then double-click `index.html`
- **Archives:** `./preview.sh` → http://localhost:8080/archive/v3/

## Live site

GitHub Pages serves **https://work.jeremyafinch.com/** from **`main`** branch root. Pushes to **`v4` only** do not change the live URL.

`/archive/` paths are `noindex` in `robots.txt`.

## Revert to V3

```bash
git checkout v3.0 -- index.html styles.css work-carousel.js copy/COPY-v3.md
# or browse archive/v3/
```
