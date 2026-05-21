# DESIGN LANGUAGE - Jeremy Finch / Hard Tech Pitch Site
# Version 1.1 - May 2026
# Reference: The Engine, Newlab, PlanetFwd, Greentown Labs, Timah Framer

---

## PHILOSOPHY

Industrial confidence. Every decision should feel considered and sparse.
No decoration for its own sake. No gradients, no shadows, no rounded corners above 3px.
Typography does the heavy lifting. Whitespace creates authority.
The audience is skeptical of polish. Earn trust through restraint, not persuasion.

---

## COLOR

### Palette

```
--color-bg:           #FFFFFF   /* Page background - pure white */
--color-surface:      #F7F7F5   /* Card backgrounds, subtle section fills */
--color-border:       #E2E2E0   /* All borders, dividers, card outlines */
--color-text-primary: #111111   /* Headlines, bold labels */
--color-text-body:    #333333   /* Body copy, descriptors */
--color-text-muted:   #888888   /* Eyebrow labels, metadata, footnotes */
```

### Rules
- **Monochrome only.** No chromatic accent colors. Interactive states use `#111111` on `#FFFFFF` (invert) or `#888888` for secondary hovers.
- Black (`#111111`) for all headlines - no color headlines
- Muted (`#888888`) for all-caps labels only - never for body
- No other hues (no blue, green, orange, purple, red) in the UI
- Logo bar: grayscale filter `filter: grayscale(100%) opacity(35%)`

---

## TYPOGRAPHY

### Font Stack

```css
/* Headlines - IBM Plex Sans (v1.1: replaced Syne; better legibility at display sizes in uppercase) */
font-family: 'IBM Plex Sans', sans-serif;
/* Import: https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@600;700&display=swap */

/* Body */
font-family: 'Inter', sans-serif;

/* UI labels - eyebrows, tags, CTAs, footer (monospace) */
font-family: 'IBM Plex Mono', ui-monospace, monospace;
/* Weights 400, 500 only */
```

**Combined Google Fonts import:**
`https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@600;700&family=Inter:wght@400;500&display=swap`

### Type Scale

Four levels in `styles.css`: **display** (Plex Sans uppercase), **subhead** (Plex 18px sentence case, POV kicker only), **body** (Inter 15px), **meta** (Plex Mono 11–13px labels, CTAs, pills).

```
/* Section eyebrow labels */
font-family: IBM Plex Mono;
font-size: 11px;
font-weight: 500;
letter-spacing: 0.06em;
text-transform: uppercase;
color: var(--color-text-muted);

/* Hero headline */
font-family: IBM Plex Sans;
font-size: clamp(36px, 5vw, 60px);
font-weight: 700;
line-height: 1.15;
text-transform: uppercase;
color: var(--color-text-primary);
letter-spacing: 0.02em;
max-width: 52rem; /* keep long uppercase lines from spanning full container */

/* Section headlines */
font-family: IBM Plex Sans;
font-size: clamp(26px, 3.5vw, 44px);
font-weight: 700;
line-height: 1.2;
letter-spacing: 0.02em;
text-transform: uppercase;
color: var(--color-text-primary);
max-width: 52rem;

/* POV kicker (subhead) */
font-family: IBM Plex Sans;
font-size: 18px;
font-weight: 600;
line-height: 1.35;
color: var(--color-text-primary);

/* Card titles (POV + work) */
font-family: Inter;
font-size: 15px;
font-weight: 500;
line-height: 1.45;
color: var(--color-text-primary);

/* Body copy */
font-family: Inter;
font-size: 15px;
font-weight: 400;
line-height: 1.65;
color: var(--color-text-body);

/* Small body / card descriptors */
font-family: Inter;
font-size: 13px;
font-weight: 400;
line-height: 1.6;
color: var(--color-text-body);

/* Footnotes / honest acknowledgment lines */
font-family: Inter;
font-size: 13px;
font-style: italic;
color: var(--color-text-muted);
```

### Rules
- Headlines always uppercase via CSS `text-transform: uppercase` - never type-set in all-caps manually
- No italic except the honest limit line and any pull quotes
- No bold body copy except card titles and numbered labels
- IBM Plex Sans for any display or heading element; Inter for everything else
- Never mix weights within a single text block
- Display headlines: use weight 700 max (not 800) - keeps uppercase blocks readable
- Uppercase headlines: positive letter-spacing (0.02em-0.03em), never negative tracking
- Long display lines: constrain max-width (~52rem) so headlines don't stretch edge-to-edge

---

## SPACING

### Base Unit: 8px grid

```
--space-xs:   8px
--space-sm:   16px
--space-md:   32px
--space-lg:   64px
--space-xl:   96px
--space-xxl:  180px
--space-gutter: 80px (24px mobile)
--stack-tight: 8px
--stack-default: 16px
--stack-relaxed: 24px
--stack-section: 32px
```

### Section Rhythm
- Section padding: `var(--space-section-y)` vertical, `var(--space-gutter)` horizontal (96px / 80px desktop; 64px / 24px mobile)
- Hero: slightly tighter top (`--space-hero-top`) and bottom (`--space-hero-bottom`)
- POV follows hero with reduced top padding (`--space-lg`)
- Eyebrow → next block: `--stack-default` (16px); eyebrow → grid/about: total 32px via sibling margin
- Headline → body: `--stack-relaxed` (24px); prose → grid: 32px total
- Between cards in a grid: `var(--space-md)` (32px gap; 24px on mobile)
- Max content width: `1100px`, centered with `auto` margins
- Body copy max-width: `640px` (hero lede uses same measure)

---

## COMPONENTS

### CTA Button
```css
display: inline-flex;
align-items: center;
gap: 8px;
padding: 12px 24px;
border: 1.5px solid var(--color-text-primary);
background: transparent;
font-family: Inter;
font-size: 13px;
font-weight: 500;
letter-spacing: 0.06em;
text-transform: uppercase;
color: var(--color-text-primary);
cursor: pointer;
transition: background 0.15s, color 0.15s;

/* Hover */
background: var(--color-text-primary);
color: var(--color-bg);
```
- Arrow icon (→) after label text
- No border-radius (or max 2px)
- Never filled by default - outlined only
- One primary CTA per section maximum

### Work Cards
```css
background: var(--color-surface);
border: 1px solid var(--color-border);
padding: 28px;
border-radius: 3px;
cursor: pointer;
transition: border-color 0.15s;

/* Hover */
border-color: var(--color-text-primary);
```
- Tag line: Inter 11px uppercase muted, above company name
- Company name: IBM Plex Sans 700 uppercase 20px
- Descriptor: Inter 13px body, 2 lines max
- Pill tags: IBM Plex Mono 11px, `background: var(--color-surface)`, `border: 1px solid var(--color-border)`; on card hover, border/text `#111111`

### Modal
```css
/* Overlay */
background: rgba(0,0,0,0.6);
backdrop-filter: blur(4px);

/* Modal panel */
background: var(--color-bg);
border: 1px solid var(--color-border);
max-width: 680px;
width: 90vw;
max-height: 85vh;
overflow-y: auto;
padding: 48px;
border-radius: 3px;
```
- Close button: × in Inter 500, top-right, no border
- Smooth fade in: `opacity 0.2s ease`
- Mobile: full screen, padding 24px

### Section Eyebrow Label
```
Inter 11px · uppercase · letter-spacing 0.12em · color: muted
Sits 16px above section headline
Never bold
```

### Logo Bar (PREVIOUSLY)
```
Display: flex, gap 48px, align-items center
All logos: grayscale(100%) opacity(35%)
Max logo height: 24px
Label: Inter 11px uppercase muted, margin-bottom 20px
No border, no background, no card container
```

### Pill Tags
```css
font-family: Inter;
font-size: 11px;
font-weight: 500;
letter-spacing: 0.04em;
padding: 4px 10px;
background: var(--color-accent-light);
color: var(--color-accent);
border-radius: 2px;
display: inline-block;
```

### Dividers
```css
border: none;
border-top: 1px solid var(--color-border);
margin: var(--space-lg) 0;
```
- No decorative dividers - only functional section breaks

---

## LAYOUT GRID

```
Desktop: 12-column, 24px gutters, max-width 1100px
Tablet:  8-column, 20px gutters
Mobile:  4-column, 16px gutters, full-width sections
```

### Work Card Grid
- Desktop: 3 columns × 2 rows (3x2)
- Tablet: 2 columns × 3 rows
- Mobile: 1 column × 6 rows

### POV Card Grid
- Desktop: 3 columns × 2 rows
- Mobile: 1 column × 6 rows

---

## MOTION

Principle: subtle and functional only. No motion for decoration.

```css
/* Default transition for all interactive elements */
transition: all 0.15s ease;

/* Modal open/close */
transition: opacity 0.2s ease, transform 0.2s ease;
transform: translateY(8px) → translateY(0) on open

/* Card hover */
border-color only - no scale, no lift, no shadow
```
- No scroll animations
- No parallax
- No entrance animations on load

---

## WHAT TO NEVER DO

- No drop shadows (`box-shadow`) anywhere
- No gradients anywhere
- No border-radius above 3px
- No stock photography or illustrations
- No emoji
- No colored headlines (black only)
- No chromatic accent colors anywhere on the page
- No centered body copy (left-align everything)
- No horizontal rules used decoratively
- No more than two typefaces (IBM Plex Sans + Inter only)
- Do not repeat credential logos/text in more than one location on the page
- Do not use bold for emphasis within body copy paragraphs

---

## VOICE & COPY RULES (for AI code generation)

- **Dashes:** Never use em or en dashes in any user-facing copy, titles, meta text, or design docs. Use a spaced ASCII hyphen instead: ` - ` (e.g. "built with domain experts - not bolted on at the end"). For numeric ranges use a plain hyphen with no spaces (e.g. `2-3`, `0.02em-0.03em`). Applies to the full site and all future edits.
- Section eyebrows: 2-4 words, all-caps, no punctuation
- Headlines: declarative statements, not questions (except contact section)
- Body: short paragraphs, 2-3 sentences max per block
- No exclamation marks
- No phrases like "cutting-edge", "innovative", "passionate", "leverage"
- Credential line appears ONCE - in the hero logo bar only
- CTA text: action-oriented, plain language ("Let's talk about what you're building")

---

## FILE REFERENCES

Fonts:
- IBM Plex Sans 600/700: https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@600;700&display=swap
- Inter 300/400/500/600: https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap
- Combined: https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@600;700&family=Inter:wght@400;500&display=swap

Calendly link: https://calendly.com/jeremyfinch_meeting/15_min
LinkedIn: https://www.linkedin.com/in/jeremyfinch/
Portfolio: https://portfolio.jeremyafinch.com/
