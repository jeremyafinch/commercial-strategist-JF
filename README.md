# Commercial Strategist Site

Personal marketing site for Jeremy Finch — product marketing and commercial strategy for hard tech and complex B2B.

## Stack

Static site: `index.html`, `styles.css`, `scripts.js`. No build step.

## Local preview

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8080
```

Then visit http://localhost:8080

## Copy workflow

Edit `COPY.md` (LOCATION IDs map to `index.html`), then apply updates to the live page.

## V2 draft (alternate layout)

- **Live site:** https://work.jeremyafinch.com/ → `index.html`
- **V2 preview:** https://work.jeremyafinch.com/v2/ → `v2/index.html` (same `/styles.css` and `/img/`; `noindex` + `robots.txt` disallow)
- **Copy:** `COPY-v2.md` → `v2/index.html` only. Do not change root `index.html` while iterating on V2.

Local preview:

```bash
python3 -m http.server 8080
# http://localhost:8080/     (production)
# http://localhost:8080/v2/  (draft)
```
