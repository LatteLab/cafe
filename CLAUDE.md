@AGENTS.md

# Latte Lab public website

This repository is the public social club website, not the member portal in latte-lab-frontend.
Next.js 16 App Router, React 19, TypeScript, Tailwind 4. Node >=22.6; use npm and commit package-lock.json.

## Product direction

Keep the homepage short. Warm cream, forest green, espresso typography, original Drive beaver artwork, real club photography. Emphasize community, campus pop-ups, and shared coffee. No coffee-science section, member login, or contact form. Scrapbook is a scrolling paper collage, never a literal book.

## Maintenance

- IMPLEMENTATION.md is the single active rebuild plan and progress log. Update it rather than adding duplicate plans.
- content/site.ts holds navigation, team, and links. Membership and club application are intentionally null pending public respondent URLs; the Join page renders accessible disabled placeholders. Replace each with its real URL to enable it.
- content/scrapbook.ts contains curated photos and captions. Extend its typed entries to add memories. Assets are local optimized WebP files.
- content/asset-sources.json records original Drive IDs, not expiring download URLs.
- content/press.json preserves earlier press records. Distinguish direct club coverage from wider MIT coffee stories.
- Team names and roles follow the handbook reviewed September 16, 2026. Illustrations are intentional until individually verified portraits are available.
- Contact is mailto:lattelab-exec@mit.edu. Canonical metadata uses https://lattelab.org.
- Honor reduced motion, visible keyboard focus, semantic headings, and useful image alt text. Gallery uses a native dialog with Escape and focus restoration.

## Verification and release

Run npm test, npm run lint, npm run typecheck, npm run build. Check mobile navigation, gallery filters/load-more/dialog, and page widths in a browser. The user approved production deployment on September 16, 2026 after local preview. AWS apex DNS was previously pointed at CloudFront and must be separately verified before any domain cutover.
