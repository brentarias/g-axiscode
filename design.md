# AxisCode — Design Review (Part 2)

This document inventories what actually needs to change on the remade site,
with concrete recommendations and honest "skip this" calls where the juice
isn't worth the squeeze. The guiding principle: **this is a one-page
consulting site — tasteful modernization, not a redesign.**

Scoring convention per item:

- **Effort**: S (≤15 min), M (≤1 hr), L (half-day+).
- **Verdict**: ✅ recommended, ⚠ optional, ❌ skip.

---

## 1. Nav tagline alignment — ALREADY FIXED

The original `align-items: baseline` put the smaller "· agentic engineering"
on the logo's baseline, which made its optical center sit *below* the logo's
optical center — the "skewed down" appearance you noticed.

**Fix applied:** `align-items: center` + `line-height: 1` on the logo, and a
1-pixel upward nudge on the tagline so its optical center sits against the
logo's cap-height rather than the x-height line. Verified with a Playwright
screenshot: the tagline now reads as a deliberate, balanced pairing.

No further action needed here.

---

## 2. Typography (your question 2a)

### Current state

`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
sans-serif` — pure system stack. It renders cleanly, costs nothing, and is
100% inoffensive. It also has zero brand personality.

### Recommendation  ✅  (Effort: S)

Keep the system stack for body text. **Add one display face for H1/H2/H3**,
and **add one monospace face for the nav tagline and select accents**
(section eyebrows, service-card titles if we want, the footer). The mono
accent is the single highest-leverage change on this whole page: it
immediately signals "engineer", which is exactly the positioning we locked
in during Part 1.

Concrete pick (all free via Google Fonts, one `<link>` each):

- **Headings:** `Geist` or `Space Grotesk`. Geist is Vercel's neo-grotesque,
  reads modern without being trendy; Space Grotesk is slightly warmer. Either
  works — I lean Geist.
- **Mono accent:** `JetBrains Mono` or `Geist Mono`. JetBrains Mono is the
  safe, readable choice. Geist Mono pairs cleanly with Geist if we go that
  route.
- **Body:** keep the system stack. (Swapping in Inter is also fine, but the
  system stack already performs well and costs zero bytes.)

Where the mono accent should appear:

- Nav tagline (`· agentic engineering`) — reinforces "engineering" every time
  the nav is visible.
- The three section eyebrow labels if/when we add them (see §5 below).
- Optionally: service-card h3 titles. This one is a style call; I'd try it
  and see.

Where the mono accent should **not** appear:

- Body paragraphs. Monospace body is a readability tax.
- Large H1/H2. Keep those as a clean sans.

### Skip  ❌

- Serif revival (Fraunces, IBM Plex Serif, etc.). Would read "editorial," not
  "engineering."
- Variable-width display faces with character (Clash Display, Migra, etc.).
  Too much personality for a credibility-first consulting page.

---

## 3. Iconography (your question 2b)

### Current state

All icons are inline Heroicons (outline, 24×24, 1.5 stroke). The grid is
consistent, but three of the service glyphs and all six client glyphs are
weak:

| Card                    | Current glyph          | Problem                                                |
|-------------------------|------------------------|--------------------------------------------------------|
| App Modernization       | `puzzle-piece`         | Tabs/notches render jagged at 48 px — looks deformed.  |
| Digital Transformation  | `sparkles`             | Three-star cluster feels magical/AI-ish, not strategic.|
| CI/CD & Automation      | `arrows-left-right` in a loop | Thin arrows clip at this size — reads as "cropped". |
| Amex                    | `globe-alt`            | Generic. Original site had the real Amex brand mark.   |
| Microsoft               | `academic-cap`         | Wrong metaphor. Original had the four-square brand.    |
| Silicon Valley Bank     | `globe-alt`            | Duplicate of Amex glyph.                               |
| Circle K                | `map-pin`              | OK, but brand mark would be better.                    |
| Christian Care Ministry | `heart`                | Fine; no clean brand mark exists.                      |
| GameStop                | `puzzle-piece`         | Duplicate of App Modernization; looks deformed.        |

Two fixes are needed, and they are different for services vs clients.

### 3a. Services — swap the library  ✅  (Effort: M, ~30 min)

Move from Heroicons to **Lucide** (`lucide.dev`). Lucide is the de-facto
2024–2026 choice for modern sites: denser, more consistent stroke, and has
clean glyphs for the three trouble cards. Suggested mapping:

| Card                    | Lucide icon            |
|-------------------------|------------------------|
| Agentic Delivery        | `terminal` (keep the terminal concept — already good)    |
| Cloud Migration         | `cloud-upload`         |
| Scaling & Performance   | `gauge` or `zap`       |
| App Modernization       | `layers` or `refresh-ccw-dot` |
| Data Engineering        | `database`             |
| Security & Compliance   | `shield-check`         |
| Digital Transformation  | `compass` or `git-branch-plus` (strategy/direction, not sparkles) |
| CI/CD & Automation      | `git-branch` or `workflow` |

Implementation: Lucide ships ~1.5 KB gzipped per icon as inline SVG. Easiest
path is just copy-paste the SVG from `lucide.dev` into the existing
`<svg class="service-icon">` slots — no runtime dependency added.

### 3b. Clients — use real brand logos where they exist  ✅  (Effort: M)

Generic icons on client names undersell you. The original site had real
brand marks for Amex and Microsoft; restore that.

Source: **Simple Icons** (`simpleicons.org`) — MIT-licensed inline-SVG brand
logos. Legally fine for "we worked with these companies" usage (attribution
not required, though the names remain trademarks of their owners).

Mapping:

| Client                    | Simple Icons slug            | Notes |
|---------------------------|------------------------------|-------|
| American Express          | `americanexpress`            | ✅ available |
| Microsoft                 | `microsoft`                  | ✅ available |
| Silicon Valley Bank       | —                            | Not in Simple Icons. Use a tasteful generic (`landmark` / `building-columns` from Lucide). |
| Circle K                  | `circlek`                    | ✅ available |
| Christian Care Ministry   | —                            | Not in Simple Icons. Keep `heart` (from Lucide). |
| GameStop                  | `gamestop`                   | ✅ available |

Render treatment: on the dark clients strip, strip fills to white so the
brand marks read as monochrome silhouettes. This avoids implying
endorsement, keeps the row visually uniform, and sidesteps brand-color
collisions with the dark background.

### 3c. Portrait  ⚠  (Effort: S — your call)

Not asked, but worth flagging: the current portrait (`brent_portrait.jpeg`)
reads as stock. If that's actually you, great — ignore this. If it's a
placeholder, replace with a real headshot before launch. The About section
is where credibility is earned, and the face carries a lot of that weight.

---

## 4. Layout (your question 2c)

### 4a. Bento grids  ❌

**Skip.** Bento works when you have 10–20 heterogeneous tiles of different
weights (image + stat + quote + logo + chart + …). You have 8 homogeneous
service cards, all "icon + title + 2 sentences." Forcing bento on that would
produce asymmetric whitespace without adding information density.

### 4b. Anti-grid / organic flow  ❌

Same reasoning. Anti-grid is a portfolio / agency aesthetic. Your site is a
credibility page, not a portfolio. A clean, symmetric grid *is* a signal of
engineering discipline — the layout itself supports the positioning.

### 4c. What to actually do on layout  ✅  (Effort: S–M)

Small, targeted polish that keeps the current structure:

1. **Tighten the service card.** Add a 1-pixel top border in the brand green
   that only appears on hover — turns the shadow-lift into a two-part
   response. ~10 min.
2. **Subtle icon plate.** Wrap each service icon in a soft tinted square
   (e.g. `rgba(105, 153, 93, 0.08)` with 10px radius). Adds visual weight
   without extra color. ~10 min.
3. **Section eyebrows.** Above each section title, add a small uppercase
   mono label in the brand green (e.g. `// 02 · services`). This gives
   sections a beat, and is the natural home for the new mono font. Cheap,
   high-impact. ~15 min.
4. **Container max-width audit.** The hero text feels edge-to-edge at
   wide viewports. Cap hero paragraph at ~640 px (it's already close).

### 4d. Saturated accents / earthy textures  ⚠

The green (`#69995D`) is already saturated and earthy — the advice you
heard already applies. Optional polish:

- Add a *very* subtle film-grain / noise texture overlay on the About
  section (1–2% opacity SVG noise). Humanizes a flat color field. ~5 min.
- Warm the green about 3° toward olive if going dark mode (see §5). In
  light mode, leave it.

### 4e. Section transitions  ⚠

Currently the sections switch color abruptly: dark purple hero → green About
→ white Services → dark Clients. This is period-accurate for 2019 but feels
choppy in 2026. Optional: add a 4rem vertical gradient fade between adjacent
sections of different colors. Low effort, noticeably smoother. Easy to
revert if you don't like it.

---

## 5. Dark / light mode (your question 2d)

### Recommendation  ✅  (Effort: M, ~1 hr)

Do it. It's expected on any 2026 professional site, it's the natural pay-off
for the CSS-variables approach already present in the file, and the current
palette translates cleanly.

Scope:

1. **CSS variables, theme-scoped.** The file already uses `--color-primary`
   etc. Add `--color-bg`, `--color-bg-alt`, `--color-text`,
   `--color-text-light`, `--color-surface`, `--color-border` for both
   themes. Drive everything off those.
2. **Source of truth.** Start from
   `@media (prefers-color-scheme: dark)` — zero JS, respects the OS. Then
   add a toggle in the nav that writes `data-theme="light|dark"` on
   `<html>` and overrides the media-query preference. Persist in
   `localStorage`. ~30 LOC total.
3. **Per-section behavior in dark mode:**
   - Hero: unchanged. Purple gradient over the network image already reads
     as dark-mode-native. Maybe deepen the overlay by 10%.
   - About (green panel): keep the green; it's a brand color, not a theme
     color. Optionally shift 3° toward a deeper olive so it harmonizes with
     a darker surround.
   - Services: white cards → `#1a1a1a` cards with a `#2a2a2a` border and the
     existing hover lift.
   - Clients: already dark. In light mode, currently `#333`. In dark mode,
     either leave as-is or shift to `#0d0d0d` for more contrast.
   - Contact: `--color-bg` becomes near-black; brand green accents stay.
   - Footer: already dark; leave alone.
4. **Toggle UI.** Small sun/moon icon button in the nav, right side,
   before the links. Use Lucide `sun` / `moon`.
5. **Accessibility gotcha.** The green on dark has to pass 4.5:1 contrast
   against `#1a1a1a`. `#69995D` on `#1a1a1a` measures ~5.8:1 — passes. The
   lighter variant `#7fb572` (or similar) may be needed for small mono
   labels; check each case.

This is the single most modern-feeling improvement on the list, and the
CSS-variables-first approach means light mode stays pixel-identical to
what's there today.

---

## 6. Things you didn't ask about but matter

Short list — each is honest "small touch, worth doing" stuff.

1. **Dynamic footer year.**  ✅  S. `Copyright © 2026 - AxisCode` is
   hardcoded. Replace with `new Date().getFullYear()` in a server-rendered
   Astro expression so it never goes stale.
2. **`aria-hidden="true"` on decorative SVGs.**  ✅  S. All the icons
   currently announce themselves to screen readers as unlabeled images.
   Add `aria-hidden="true"` and `focusable="false"` to every decorative
   SVG. 5-minute accessibility win.
3. **`prefers-reduced-motion` guard.**  ✅  S. Wrap the hover transforms
   and any new scroll animations in
   `@media (prefers-reduced-motion: no-preference) { … }`. Standard 2026
   hygiene.
4. **Scroll-triggered fade-in on service cards.**  ⚠  M. Tasteful if done
   with a single IntersectionObserver and `opacity 0 → 1` + 8 px rise.
   Skip if we want the page to feel instant.
5. **`"Let's Get In Touch!"` heading.**  ⚠  S. Minor tone-mismatch with
   the senior-architect copy we wrote in Part 1 (exclamation feels 2019).
   You already locked the alternate text, so treat this as: if we ever
   revisit, drop the exclamation and say `"Let's talk."`.
6. **`og:image`.**  ⚠  S. Twitter card is set to `summary` without an
   explicit OG image; link previews will be bland. Generate or pick a
   1200×630 and wire up `og:image` + `twitter:image` pointing at it.
7. **`@mystagogue` Twitter handle.**  ⚠  S. Still in the head meta. Verify
   it's current; otherwise remove.
8. **Skip-to-content link.**  ⚠  S. For keyboard users. 3 lines of CSS,
   one anchor.

---

## 7. Proposed implementation order (if you accept most of this)

This ordering minimizes rework because each step lays groundwork the next
one uses.

1. Typography: add Google Fonts link + set up CSS variables for
   `--font-sans`, `--font-display`, `--font-mono`. (No visual change yet.)
2. Apply display font to headings; apply mono to nav tagline.
3. Add the three-section eyebrows using the new mono.
4. Swap service icons to Lucide; swap client icons to Simple Icons where
   available; set `aria-hidden` + `focusable="false"` while we're in those
   tags anyway.
5. Card polish (icon plate, hover top-border, noise on About).
6. Dark mode — CSS variables theme, `prefers-color-scheme` first, then the
   nav toggle.
7. Small hygiene: dynamic year, `prefers-reduced-motion`, skip-link,
   `og:image`, verify Twitter handle.

Steps 1–4 together are roughly 1.5–2 hours and deliver most of the visible
"2026 refresh." Step 5 is optional gloss. Step 6 is the standout feature
and takes about another hour. Step 7 is housekeeping.

---

## 8. What we are deliberately NOT doing

Just to make the "no" list explicit, so nothing is missed accidentally:

- No bento grid, no anti-grid, no masonry.
- No full typography overhaul — system stack stays for body.
- No hero redesign. The purple + network image already works.
- No page-wide animation framework (Framer Motion, GSAP). Not warranted.
- No CMS. Content fits in one Astro file and changes rarely.
- No component library / Tailwind migration. The handcrafted CSS is fine
  for a site this size and is easier to hand-tune for the mono-accent
  details we're adding.
