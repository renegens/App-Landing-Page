# AGENTS.md

Website for Giant Solutions (GIANT PL P.C.), the consultancy of George Gens: AI engineering consulting, the book *AI for Developers*, and a smaller custom software and robotics line. Live at https://giant-solutions.eu, deployed by Netlify from `master`.

## What we are building

**Goal.** Turn giant-solutions.eu from a mobile app studio page into the home of an AI engineering consultant. The site has two jobs: sell consulting to software teams, and promote the book so its readers become leads.

**Audience.**
- *Buyers:* engineering leads and managers at software companies whose developers already use AI coding agents, but whose review, security and QA have not caught up.
- *Readers:* developers who use AI agents. The book is written for them, and some of them bring it to their company.

**Core message** (from the book, chapter 2): agents made typing cheap. The bottleneck is now deciding what to build and checking that it works. Everything on the site should support that idea.

**How the pieces connect.** Free chapter and essays → interest in the book → book purchase → consulting enquiry.

**Pages.**

| Page | Purpose |
|---|---|
| `/` | Positioning, the problem, three offers, book teaser, "also: custom software and robotics", Minimal Agenda |
| `/services/` | The three offers in detail, how an engagement works, working principles |
| `/book/` | Teaser: who it is for, quotes, full contents, chapter 2 free, "coming soon" |
| `/corporate/` | Legally required company registry details and financial statements |
| `/calendar/`, `/greatparent/`, etc. | Frozen app privacy and terms pages (see Rule 1) |

**The three offers** (`src/data/offers.ts`): AI Opportunity Assessment → Team setup sprint → Ongoing support. Each one starts small and earns the next step.

**Decided.**
- Brand: "Giant Solutions" with George Gens as the person behind it. No client or employer names.
- AI consulting comes first; custom software and robotics are a secondary "also" line.
- Visual identity from the September 2026 redesign: dark slate, cyan accent, Manrope and IBM Plex Mono, cyan "G" mark (`public/favicon.svg`).
- Static Astro site, no backend. Checkout, booking and email are external services linked from `src/config.ts`.
- Only Minimal Agenda (Android) is listed as a live app.

**Not decided yet (do not invent answers).**
- Book sales platform (Leanpub or own checkout) → `book.buyUrl`.
- Whether the assessment is paid at booking or starts with a free call, and pricing in general.
- Booking tool to replace the Google Form → `site.contactUrl`.
- Email list tool. Needs a website privacy policy first.

**Roadmap.**
1. ✅ Move to Astro, new home, services, book teaser and corporate pages, legacy URLs guarded.
2. ✅ Favicon, share image, sitemap, robots.txt.
3. When decided: buy button, booking link, email signup plus a website privacy policy.
4. `/writing/`: essays adapted from the book (chapter 17 for managers is a good first one).
5. Case studies as client work happens, anonymised unless the client agrees.

## Commands

```sh
npm install
npm run dev                      # local server at http://localhost:4321
npm run build                    # astro build + legacy URL check; fails if a frozen file changed
npm run check:live -- https://giant-solutions.eu   # same check against a deployed site or preview
```

Requires Node 22.23 or newer (Netlify uses Node 24, set in `netlify.toml`).

## Rule 1: never break the frozen files

Everything in `public/` is **frozen**. Shipped iOS and Android apps hard-code these URLs for their privacy policies and terms, and the app stores require them to stay reachable:

- `public/calendar/`, `public/greatparent/`, `public/baby-activity-planner/`, `public/can-we-meet/`, `public/timezone-tangle/`, `public/active-reps/`
- `public/dist/output.css`: the old Tailwind 3 stylesheet those pages load from `/dist/output.css`. Never regenerate or delete it.
- `public/corporate/ΟΙΚΟΝΟΜΙΚΕΣ ΚΑΤΑΣΤΑΣΕΙΣ 2025.pdf`: published financial statements.
- `public/*.svg`: old images that may be linked from outside.

Do not edit, move, rename or reformat these files, including their wrong `<title>` tags.

Exceptions: `favicon.svg`, `favicon.ico`, `apple-touch-icon.png`, `og.png` and `robots.txt` in `public/` belong to the new site and are not frozen (they are listed in `notFrozen` in `scripts/check-legacy.mjs`). Add any new non-legacy file in `public/` to that list. `scripts/legacy-manifest.json` stores a SHA-256 hash of each one, and `npm run build` fails if any of them changes.

If a frozen file has to change on purpose (for example, an app's privacy policy is updated):
1. Make the change and say so explicitly in the commit message.
2. Run `node scripts/check-legacy.mjs --write` to record the new hashes.
3. Commit the updated manifest in the same commit.

Adding a new app's legal pages works the same way: add them under `public/<app>/` and re-record.

Also keep these URLs working: `/corporate/` and `/corporate.html` (Netlify serves `corporate/index.html` for both through its pretty-URLs feature; there is deliberately no redirect, and `npm run check:live` tests both). Links on the corporate page must be absolute (`/corporate/...`) so they work from both URLs.

## Layout

```
src/config.ts           site name, contact link, book buy link, app list: change settings here
src/data/offers.ts      the three consulting offers (home page + /services)
src/data/book.ts        book table of contents and quotes
src/content/book/excerpt.md   free chapter shown on /book
src/layouts/Base.astro  <head>, nav, footer; keeps the google-site-verification meta tag
src/pages/              index, services, book, corporate, 404
src/styles/global.css   Tailwind 4 theme (Manrope, IBM Plex Mono) and prose styles
public/                 frozen files, see Rule 1
scripts/check-legacy.mjs  frozen file and URL check
```

The Astro build output goes to `dist/` (ignored by git). `public/dist/` is a different folder: the frozen stylesheet.

## Content rules

- **No client or employer names**, anywhere on the site, unless George adds one himself.
- Write in plain English, with short sentences and no hype. First person ("I") for George's work; "Giant Solutions" for the company.
- Do not invent facts: no years of experience, client counts, results or testimonials that George has not provided.
- Book text comes from `~/Work/AI Book/` (`Book Draft.md`, `Chapter Titles.md`). It is copied, not linked, so the site changes only when someone updates it on purpose. Quotes must be word for word from the draft. Never publish `[YOUR STORY: ...]` or `[MEASURE: ...]` markers.
- The book's sales platform is not chosen yet. Set `book.buyUrl` in `src/config.ts` to switch `/book` from "Coming soon" to a buy button. Do not hard-code checkout links in pages.
- Contact goes through the Google Form in `site.contactUrl` until a booking tool is chosen.
- The site collects no personal data and sets no cookies. If you add a form, analytics, newsletter or payments, a website privacy policy (GDPR) must be added first.

## Style

- Dark theme: `slate-950` background, cyan accents. Use the `Eyebrow` and `Button` components instead of restyling by hand.
- Every page must work at phone width with no horizontal scroll.
- Use `Base.astro` for every new page so the `<head>` meta and Search Console verification stay consistent.

## Before you finish

1. `npm run build` passes, including the legacy check.
2. Check changed pages at phone and desktop width in `npm run dev`.
3. For a deploy, run `npm run check:live -- <preview-url>` against the Netlify deploy preview before merging to `master`.
