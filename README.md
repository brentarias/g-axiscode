# AxisCode

The source for [axiscode.com](https://axiscode.com), the personal /
professional consulting site of **Brent Arias**. AxisCode is a
software-engineering consultancy and contract vehicle (C2C) for Brent's
own services as a senior Chief Architect — there have never been other
employees behind the brand.

## History

The original site was built with **Gatsby** and ran for several years as
a general overview of Brent's offerings. In 2026 it was re-created from
scratch as a tiny, dependency-light **Astro 6.x** site, and the copy was
rewritten to emphasize Brent's strong lean into **agentic coding**:
Claude Code, spec-driven development, MCP-based tooling, Playwright-driven
verification, and the workflows that compound 25+ years of hands-on
engineering experience into multi-fold delivery speed.

The original Astro re-creation was scaffolded by **Kilo Code** (Kilo
Gateway, with Claude Opus 4.6). Final polish — fade-in fallback, Open
Graph wiring, LinkedIn link, skip-to-content, trust-signal strip,
flagship-card treatment, README — was done with **Claude Code** (Claude
Opus 4.7).

The Gatsby site lives on the `gatsby-legacy` branch and tag
(`gatsby-final`) for archival reference.

## Tech

- **[Astro](https://astro.build) 6.1.x** — no UI framework, no Tailwind,
  no CMS, no component library.
- Vanilla CSS + tiny inline JS for the theme toggle and a scroll-triggered
  fade-in on the service cards.
- **Geist** (display) + **JetBrains Mono** (accents) from Google Fonts.
- Inline-SVG icons: [Lucide](https://lucide.dev) for services and most
  client glyphs; [Simple Icons](https://simpleicons.org) for the Amex
  and Microsoft brand marks.
- Light/dark theming via CSS variables with `localStorage` persistence
  and a pre-paint inline script to avoid flash-of-incorrect-theme.

The entire site is one Astro file: [src/pages/index.astro](src/pages/index.astro).
This is deliberate — the site is a one-page brochure that changes rarely;
splitting it into components would add ceremony without value.

## Source-of-truth design / copy docs

- [copy.md](copy.md) — proposed copy with positioning thesis, hero
  variants, About / Services / Clients / Contact bodies, meta/SEO, and
  tone guardrails.
- [design.md](design.md) — design review with concrete recommendations,
  effort scores, and explicit "skip this" calls. Section 8 lists what
  was deliberately **not** done.

Both are mostly already implemented in `index.astro`. They remain in the
repo as the record of *intent* behind the refresh.

## Develop

```sh
npm install
npm run dev      # local dev server on http://localhost:4321
npm run build    # production build → ./dist/
npm run preview  # preview the production build
```

Node ≥ 22.12.0 required.

## Project layout

```
.
├── src/pages/index.astro       The entire site
├── public/
│   ├── images/                 Hero background, portrait
│   └── icons/                  Favicon
├── copy.md, design.md          Refresh source-of-truth (intent docs)
├── CLAUDE.md                   Context for AI pair-programmers
└── README.md                   This file
```
