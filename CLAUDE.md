# AxisCode — Claude Context

## What this repo is

AxisCode is Brent Arias's personal/professional consulting brand — a contract
vehicle (C2C) for his own services as a senior Chief Architect. There are
no other employees; "AxisCode" and "Brent" are functionally the same entity.
The public site is a single-page credibility brochure aimed at CTOs,
VPs of Engineering, Chief Architects, and founders evaluating senior
architecture / engineering help.

This repo is the **Astro 6.x re-creation** of what used to be a Gatsby site
at `axiscode.com`. The Gatsby version is still live in production at the
time of writing; the contents here are the replacement, refreshed to
emphasize Brent's lean into **agentic coding** (Claude Code, spec-driven
development, MCP-based tooling, Playwright-driven verification, etc.) while
protecting the underlying senior-architect credibility.

The original re-creation was done by **Kilo Code** (Kilo Gateway, likely
Claude Opus 4.6). The user explicitly chose to skip OpenSpec / spec-driven
scaffolding for this job because the scope was tiny. From this point on,
Claude Code is taking over for the final polish + launch.

## Source-of-truth docs

Two markdown files at the repo root capture the intent of the refresh.
Most items in them are already implemented in `src/pages/index.astro`:

- [copy.md](copy.md) — proposed copy (positioning, hero, About, 8 service
  cards, clients, contact, meta/SEO, tone guardrails).
- [design.md](design.md) — design review with concrete recommendations,
  effort ratings, and explicit "skip this" calls. Read §8 for the
  deliberate **not-doing** list before suggesting anything outside it.

Treat both as authoritative for *intent*. They are not perfectly in sync
with the current `index.astro` — verify against the file when uncertain.

## Tech stack & shape

- **Astro 6.1.8**, vanilla. No UI framework, no Tailwind, no CMS,
  no component library. All markup + CSS + tiny inline JS live in
  one file: [src/pages/index.astro](src/pages/index.astro).
- **Node** ≥ 22.12.0 required.
- **Fonts:** Geist (display, headings + CTAs) + JetBrains Mono (accents:
  nav tagline, section eyebrows). Loaded from Google Fonts. Body keeps the
  system stack.
- **Icons:** [Lucide](https://lucide.dev) inline SVGs for services and
  some clients; [Simple Icons](https://simpleicons.org) inline SVGs for
  Amex and Microsoft brand marks. All SVGs use `aria-hidden="true"` +
  `focusable="false"`.
- **Theming:** light/dark via CSS variables on `:root[data-theme=...]`.
  Pre-paint inline script reads `localStorage['axiscode-theme']` and falls
  back to `prefers-color-scheme`. Nav has a sun/moon toggle.

## Commands

```sh
npm run dev      # dev server (Vite). Currently on localhost:4322 in this env.
npm run build    # production build → ./dist/
npm run preview  # serve the build
```

The README.md at the repo root is still the Astro starter boilerplate —
treat it as not-yet-rewritten, not as guidance.

## Files / layout

- `src/pages/index.astro` — the entire site (markup + styles + script).
- `public/images/brent_portrait.jpeg` — Brent's real headshot (not stock).
- `public/images/bg-masthead_network.jpg` — hero background.
- `public/icons/icon-48x48.png` — favicon.
- `copy.md`, `design.md` — intent docs (see above).
- `light-full.png`, `dark-full.png` — Kilo's earlier full-page screenshots
  (pre some recent copy edits, so slightly stale).

The site is one file deliberately. Don't refactor into components for
abstraction's sake — it's a one-pager and changes rarely.

## Brand & tone

- **Brand green:** `#69995D` (light), `#7fb572` (dark). Held in
  `--color-brand` CSS variable.
- **Positioning:** senior chief architect with 25+ years hands-on, now
  compounded by agentic coding. Speed claims must always be paired with
  engineering substance (specs, tests, review). Never imply the agents
  are the engineer — Brent is the engineer; the agents are instruments.
- **Voice:** confident, specific, senior. No AI hype words
  ("revolutionary", "unlock", "game-changer", "AI-powered"). Prefer
  concrete mechanism names ("spec-driven development", "MCP-based
  tooling", "Playwright-verified changes").
- See [copy.md §8](copy.md) for full tone guardrails.

## Working conventions

- The user stages files at the start of a session so the diff vs. Kilo's
  prior work is obvious. Don't rebase / discard staged state without
  asking. New work goes on top of, not in place of, what's staged.
- Verify visual claims with Playwright before reporting "done."
  The dev server is typically already running on port 4322 — navigate to
  `http://localhost:4322/` rather than starting a second server.
- **Scroll-triggered fade-in & Playwright screenshots:** service cards
  are visible by default; JS adds `.js-fade` (initial `opacity: 0`) and
  an IntersectionObserver removes it via `.is-visible` once a card enters
  the viewport. Real users always see them. But Playwright's
  `fullPage: true` captures the document without scrolling, so off-screen
  cards stay faded. Before screenshotting Services, run
  `document.querySelectorAll('.service-card').forEach(c => c.classList.add('is-visible'))`.
