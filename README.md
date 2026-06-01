# Commercial Strategist Site

Personal marketing site for Jeremy Finch — product marketing and commercial strategy for hard tech and complex B2B.

## Folder structure

```
├── index.html          ← V2 current draft (edit this)
├── styles.css
├── scripts.js
├── img/
├── copy/
│   ├── COPY-v2.md      ← copy for index.html (active)
│   └── COPY-v1.md      ← copy for archive/v1/index.html
├── archive/
│   └── v1/
│       └── index.html  ← previous site layout (noindex)
├── v1/index.html       ← redirect → /archive/v1/
├── v2/index.html       ← redirect → /
└── design.md
```

## Which file to edit

| Goal | HTML | Copy |
|------|------|------|
| Current draft | `index.html` | `copy/COPY-v2.md` |
| Old layout (reference) | `archive/v1/index.html` | `copy/COPY-v1.md` |

## Preview locally (step by step)

See below in chat, or run:

```bash
cd "/Users/jfinch/Desktop/Commercial Strategist Site"
python3 -m http.server 8080
```

Then open **http://localhost:8080/** in your browser.

## Live site

After `git push`, GitHub Pages serves **https://work.jeremyafinch.com/** from `index.html`.
