# Agent notes — My-portfolio

- Next.js 16 (App Router) + Tailwind CSS v4 + TypeScript. All visible site
  content is driven by `src/data/portfolio.ts` — edit that file instead of
  components when changing copy, projects, skills, or stats.
- `output: "standalone"` is set in `next.config.ts` — required by the
  Dockerfile, do not remove.
- Verify changes with `npm run lint` and `npm run build`.
- CI: `.github/workflows/ci.yml`. CD: `deploy.yml` builds a GHCR image and
  SSH-deploys to an Oracle Cloud VM; secrets documented in that file and in
  `docs/DEPLOYMENT.md`.
- Docker: `docker compose up -d` (app only) or `--profile edge` for Caddy HTTPS.
- Commit only to the current working branch.
