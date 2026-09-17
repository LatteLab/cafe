# Latte Lab website rebuild

## Approved direction

Rebuild lattelab-web as a Next.js 16 social club website. Warm cream, forest green, espresso type, real Drive artwork, restrained animation. Home stays short; scrapbook is a scrolling paper collage with no physical book. Preserve Git history; no backup copy.

## Pages

- /: concise hero, animated club artwork, join and scrapbook links, small photo strip.
- /about: who we are, what we do, and ethos as a connected story.
- /team: current leadership with verified names and roles.
- /scrapbook: All / Events / Drinks filters, Polaroids, accessible photo viewer and load more.
- /news: existing press, distinguishing Latte Lab coverage from broader MIT coffee stories.
- /join: membership form, separate club application, Instagram, email.
- Email links use mailto:lattelab-exec@mit.edu; no login or contact form.

## Tasks and acceptance

- [x] Inspect clean source tree; create codex/club-website-rebuild.
- [x] Preserve five press records and remove old application source.
- [x] Collect real brand assets and photo selections. User requested placeholder form links; both destinations remain intentionally unset.
- [x] Build Next.js 16 foundation, design tokens, navigation and footer.
- [x] Implement concise animated homepage.
- [x] Implement About, Team and Join.
- [x] Implement scrapbook filtering, viewer and pagination.
- [x] Implement News, metadata, sitemap, redirects and not-found page.
- [x] Verify build, lint, types, interactions, accessibility and responsive screenshots.
- [x] Document maintenance and report any outstanding content gaps.

## Technical decisions

Use App Router / React 19 / TypeScript / Tailwind 4, npm lockfile, optimized local images and fonts. Content lives in typed files. No database required. CSS animation and small client components; honor reduced motion and retain readable content without animation. No production deployment until preview review.

## Progress log

- 2026-09-16: Started from ef72b28, clean working tree. Branch created. Old UI removed after preserving press content. Existing Next.js configuration disabled image optimization and suppressed type errors; new configuration will remove those bypasses.

- Downloaded 9 original brand assets and optimized 15 photos locally. The gallery uses 12 curated entries from Blueprint, SAAS collaboration, and social/recipe-testing collections.
- All six pages implemented. Four gallery filtering tests passed after reproducing missing filtering behavior. Initial production build passed. Browser preview now works in the in-app browser.
- Form destinations intentionally remain placeholders at user request. Team uses verified handbook names/roles and illustrative brand cards; no unverified portrait identities.
- Dependency audit found the previous lockfile retained old Next.js packages; updating to patched Next.js 16 before final verification.

## Final verification — 2026-09-16

- Next.js 16.3.5 production build, ESLint, TypeScript, and all four gallery tests passed. npm audit reported zero vulnerabilities. git diff --check passed.
- Browser-reviewed Home, About, Team, Join, News, and Scrapbook. Mobile widths of 390px and 320px checked; sampled pages have no horizontal overflow. Mobile menu opens and closes after navigation.
- Verified Drinks filtering, load-more rendering all 12 entries, photo modal, Escape dismissal, and focus restoration. Motion has a reduced-motion stylesheet override. This is a focused manual check, not a full accessibility audit.
- HTTP smoke checks passed for all six pages, robots, sitemap, Open Graph image, contact redirect (308), and unknown page (404).
- Added README, canonical CLAUDE.md, formatted source, and Drive asset provenance.

## Deliberate content follow-ups

- Replace the two null form destinations in content/site.ts with public respondent URLs when ready. User explicitly requested placeholders for now.
- Replace illustrated team cards with verified portraits if desired.
- Review copy and photo selection in the local preview before production deployment. Changes remain local on codex/club-website-rebuild; no DNS, Vercel, remote Git, or production changes made.

## Release authorization

- 2026-09-16: User approved merging and production deployment. Tests, lint, types, production build and diff checks passed again before release.

## Join links — 2026-09-17

- Replaced both placeholder destinations with verified public Google Forms links. Resolved the membership editing URL to its canonical respondent URL.
- Clarified hyperlink labels and descriptions to distinguish the membership mailing list from the internal club team application. Both open in a new tab with accessible notice.

## About illustrations — 2026-09-17

- Enlarged the three activity illustrations to 180px on desktop, 130px on tablet, and a 90px-wide mobile column. Updated image sizing hints to retain sharp rendering.
