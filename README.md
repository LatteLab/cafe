# Cafe historical source

The active public website has moved to [LatteLab/brewroom, under apps/cafe](https://github.com/LatteLab/brewroom/tree/main/apps/cafe). The member portal lives in `apps/portal` in the same repository.

Both Vercel projects deploy from `LatteLab/brewroom`. Pushing this repository does not update [lattelab.org](https://lattelab.org). Use [Brewroom's setup guide](https://github.com/LatteLab/brewroom#readme) and [deployment guide](https://github.com/LatteLab/brewroom/blob/main/docs/deployment.md).

Keep this repository for history and unpublished local work. The instructions below apply to this snapshot; active development uses Brewroom's pnpm workspace.

## Run the historical snapshot locally

Requires Node.js 22.6 or newer.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Pages: Home, About, Team, Scrapbook, News, and Join.

## Checks

```sh
npm test
npm run lint
npm run typecheck
npm run build
```

## Edit content

Use `content/site.ts` for links and team, `content/scrapbook.ts` for gallery entries, and `content/press.json` for press. Both Join links use public Google Forms respondent URLs configured in content/site.ts. Brand and photo provenance is recorded in `content/asset-sources.json`.

See `CLAUDE.md` for maintenance guidance and `IMPLEMENTATION.md` for the rebuild log and remaining content work.
