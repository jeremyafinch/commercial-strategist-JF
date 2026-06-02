# V3 archive (frozen)

Self-contained snapshot of the site at the V3 freeze (June 2026).

| File | Role |
|------|------|
| `index.html` | V3 HTML (images load from repo `img/`) |
| `styles.css` | V3 styles scoped to `.page-v2` |
| `work-carousel.js` | Case study carousels |
| `COPY-v3.md` | Copy at time of freeze |

## Preview

- **GitHub Pages:** `https://work.jeremyafinch.com/archive/v3/` (noindex)
- **Local:** open `archive/v3/index.html` in a browser, or run `./preview.sh` from repo root and visit `/archive/v3/`

## Production

Live site root (`https://work.jeremyafinch.com/`) serves V3 from repo root on `main` until V4 ships.

To restore this exact snapshot at root: `git checkout v3.0 -- index.html styles.css work-carousel.js` or copy files from this folder.
