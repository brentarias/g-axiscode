# AxisCode — Proposed Copy (Revision 1)

Target audience: CTOs, VPs of Engineering, Chief Architects, and founders who
already know they need serious engineering help on cloud / distributed / data /
platform problems and are evaluating *how fast* and *how credibly* it can be
delivered.

Positioning thesis (the thing every section should reinforce):

> Senior architect with 25+ years of hands-on engineering, now compounded by
> agentic coding workflows. The result is enterprise-grade software shipped at
> a multiple of the usual pace — without substituting judgment for autocomplete.

Two things we are deliberately threading:

1. Emphasize agentic delivery speed (Claude Code, spec-driven development,
   MCP-based tooling, Playwright-driven verification, etc).
2. Protect the hard-won credibility of the original site — this is a chief
   architect, not a prompt jockey.

---

## 0. Implementation status (May 2026)

The work below has shipped in [src/pages/index.astro](src/pages/index.astro).
This section is the retrospective summary; the rest of the document is
preserved as the original copy rationale and alternate-line library.

### Shipped as-recommended

- §1 Navigation tagline (`· agentic engineering`).
- §2 Hero — Recommended headline and sub-line, with one tweak: the word
  "modern" was dropped from "modern agentic coding" so the line reads
  "...with agentic coding — cloud, data, and platform work...".
- §3 About — Recommended body; CTA kept as `Contact Brent!`.
- §4 Services — all 8 cards as written. Agentic Delivery sits first and
  carries a small `// flagship` mono badge (see additions below).
  Internationalization was dropped, as planned.
- §7 Meta/SEO — `<title>`, `<meta name="description">`, OG title and
  description as recommended (Twitter meta was dropped; see deviation
  below).

### Shipped with different wording

- **§5 Clients one-liner** — proposed:
  > "Trusted by enterprises that can't afford to get architecture wrong."

  Shipped:
  > "From whiteboard to production — for enterprises that take both
  > seriously."

  Reason: the proposed line over-indexed on "architect" alone, while
  Brent also engages in hard-core hands-on coding and now agentic
  engineering. The shipped line preserves the structural "for enterprises
  that…" cadence while broadening the positioning across architect /
  hands-on engineer / agentic operator.

- **§6 Contact** — shipped the **Alternate** ("closer to current tone")
  body — `Ready to start your next project with AxisCode?...` — not the
  Recommended ("Bring the hardest piece of your roadmap…"). Both lines
  remain in the doc as legitimate options for a later revision.

- **§7 Twitter meta** — originally all `twitter:*` tags were dropped in
  favor of a full Open Graph block, on the theory that Twitter/X falls
  back to OG. That fallback covers title/description/image but **not**
  the card layout: without `twitter:card: summary_large_image`, X renders
  a small summary instead of the large banner. Reinstated June 2026 with
  the minimal set (`card`, `title`, `description`, `image`, `image:alt`).
  No `twitter:site` handle is declared — `@mystagogue` remains unused.

### Copy that shipped in addition to this doc

- **Trust-signal strip** in the hero, mono uppercase, on white at ~70%
  opacity:
  > `25+ YEARS HANDS-ON  |  FORTUNE 500 CLIENTS  |  SPECS · TESTS · REVIEW`

  Three short statements separated by thin vertical dividers, beneath
  the CTA. Carries seniority, breadth, and engineering discipline in the
  most-seen real estate.

- **Flagship pill** on the Agentic Delivery service card: `// flagship`
  (mono, brand-green, lowercase — slashes echo the section eyebrows).

- **LinkedIn contact item**: visible link text
  `linkedin.com/in/brentarias`, sitting next to phone and email under
  the Contact heading.

- **Skip-to-content link** (keyboard-only, hidden until focus):
  `Skip to main content`.

### Items not yet revisited

- Whether to flip §6 Contact from the Alternate to the Recommended
  body before launch.
- Whether to generate a custom 1200×630 OG image (currently using the
  1680×1050 hero asset as a stand-in).

---

## 1. Navigation

Unchanged: `AxisCode | About | Services | Clients | Contact`.

Optional: add a small tagline after the logo, e.g. `AxisCode · agentic
engineering`.

---

## 2. Hero

### Recommended

> **Enterprise-grade software, delivered at agentic speed.**
>
> Chief-architect consulting that fuses 25+ years of hands-on engineering with
> modern agentic coding — cloud, data, and platform work shipped in a fraction
> of the usual time.
>
> CTA: **See How**

### Alternate A — more architect-forward

> **Cloud architecture and modernization, accelerated by agentic engineering.**
>
> The same deep, battle-tested architecture practice you'd expect from a
> seasoned chief architect — now compounded by spec-driven, AI-augmented
> delivery.
>
> CTA: **Find Out More**

### Alternate B — more punchy / outcome-forward

> **Ship what used to take a quarter. In a sprint.**
>
> Senior architecture and engineering, delivered through disciplined agentic
> workflows — so complex cloud, data, and modernization work lands weeks or
> months ahead of schedule.
>
> CTA: **Talk to Brent**

Notes:

- The hero CTA on the current site is `Find Out More`. That is fine but a
  little passive for an architect brand; `See How` or `Talk to Brent` converts
  better.
- Whichever headline we pick, the *sub-line must carry both halves of the
  story* — "senior / architect / engineering" AND "agentic / accelerated".
  Losing either half is what turns the site into either a boring 2019
  consultancy or another vibe-coding landing page.

---

## 3. About — "From C-Suite to 'boiler room'"

Keep the existing section heading — it still works and has character.

### Recommended body

> Need project-saving triage in an IT department? Digital transformation that
> actually moves a P&L? Across financial services, healthcare, and retail,
> Brent Arias has the battle-hardened experience to turn the ship — and now
> the agentic toolchain to do it faster than the market expects.
>
> As a hands-on Chief Architect, Brent maps the technology and the process,
> engages directly with stakeholders and technical leads, and writes and
> reviews code alongside his agents. Specs are treated as source of truth,
> tests as guardrails, and AI as a force multiplier — not a substitute for
> judgment. The deliverable is software a senior engineer would be proud to
> own, produced at a pace that used to be impossible.

### Alternate (shorter, higher-contrast)

> Project-saving triage, cloud migrations, and digital transformations across
> financial services, healthcare, and retail. Brent Arias has spent 25+ years
> as a hands-on architect and engineer — and now runs that same engineering
> discipline through a modern agentic toolchain (Claude Code, spec-driven
> development, MCP-based tooling, Playwright-driven verification).
>
> The combination is rare on purpose: the depth of a senior architect, the
> output of an entire team. No vibe coding, no hand-waving — just specs,
> tests, and shipped software.

CTA: **Contact Brent!** (unchanged)

---

## 4. Services

Recommendation: **keep the 8-card grid**, but (a) refresh descriptions so the
agentic delivery posture shows up everywhere, and (b) replace the weakest card
(*Internationalization* — narrow, dated, and currently represented by an odd
glyph) with a more representative flagship: **Agentic Delivery**.

If you'd rather keep all eight originals, the Agentic Delivery card can be
promoted to a 9th card or moved to the top-left as the "hero" service.

Headings and bodies below.

### 4.1 Agentic Delivery  *(new — recommended to feature first)*

> Spec-driven development with Claude Code, OpenSpec, MCP-based tooling, and
> Playwright-verified changes. Large refactors, greenfield services, and
> platform work delivered at multiples of hand-coded pace — reviewed and
> owned by a senior engineer.

### 4.2 Cloud Migration

> Data-center analysis and sizing, cost projections, platform selection
> (serverless, SaaS, PaaS, Kubernetes) and implementation. BC/DR design,
> landing zones, and Infrastructure as Code — scaffolded and hardened with
> agentic workflows.

### 4.3 Scaling & Performance

> Elastic computation design, load and performance testing, and maintainable
> coding practices that hold up under growth. Bottlenecks profiled, fixes
> specified, and regressions fenced off with automated checks.

### 4.4 App Modernization

> Refactoring monoliths for containers, PaaS, or microservices. Database
> migration to cloud-native storage. Legacy codebases brought forward with
> agent-assisted refactors that are reviewable, test-covered, and safe to
> deploy.

### 4.5 Data Engineering

> EAI, ODS, and data-lake design and build-out. Telemetry and high-volume,
> event-driven processing. Pipelines specified, generated, and hardened with
> agentic tooling — so data platforms ship in weeks, not quarters.

### 4.6 Security & Compliance

> Security-by-design and privacy-by-design. IAM design and configuration.
> SIEM/SOAR instrumentation. Encryption in transit and at rest. Controls
> expressed as code and kept in sync with a living spec.

### 4.7 Digital Transformation

> Operations and business-strategy reinvention. Organizational alignment and
> education. Technology selection and roll-out — with a clear path from
> strategy to shipped software, not a deck that dies on a shelf.

### 4.8 CI/CD & Automation

> Performance and test automation. Infrastructure as Code (IaC). Pipeline as
> code. Ephemeral test environments. Pipelines that agents can read, extend,
> and debug alongside your team.

*(Drop "Internationalization" unless there is a current client signal for it.
It was a niche service on the old site and is not central to the new
positioning.)*

---

## 5. Clients

No copy changes required. Same logos:

- Amex
- Microsoft
- Silicon Valley Bank
- Circle K
- Christian Care Ministry
- GameStop

Optional: add a one-liner beneath the section title to make the list work
harder, e.g.:

> **Trusted by enterprises that can't afford to get architecture wrong.**

---

## 6. Contact

### Recommended

> **Let's talk.**
>
> Bring the hardest piece of your roadmap. If it's a fit, you'll leave the
> call with a concrete plan, a realistic timeline, and a sense of how much
> faster it can move.
>
> +1 (602) 692-8088 · barias@axiscode.com

### Alternate (closer to current tone)

> **Let's Get In Touch!**
>
> Ready to start your next project with AxisCode? You can reach Brent Arias
> by phone or e-mail.
>
> +1 (602) 692-8088 · barias@axiscode.com

---

## 7. Meta / SEO

- `<title>`: `AxisCode — Agentic-accelerated cloud architecture & engineering`
- `<meta name="description">`: `Senior architecture and engineering consulting for cloud, data, and platform work — delivered at agentic speed by Brent Arias.`
- Twitter/OG title: `AxisCode — Agentic engineering for serious software`
- Twitter/OG description: same as meta description.

---

## 8. Tone guardrails (for anything written later)

- Confident, specific, senior. No breathless AI hype, no "revolutionary",
  no "unlock", no "game-changer".
- Always pair speed claims with engineering substance (specs, tests, review).
- Prefer concrete mechanisms ("spec-driven development", "MCP-based tooling",
  "Playwright-verified changes") over generic phrases ("AI-powered").
- Never imply the agents are the engineer. Brent is the engineer; the agents
  are instruments he plays.
