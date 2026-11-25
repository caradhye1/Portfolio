# Yonder AI case study, v1 (archived 2026-11-25)

The Yonder AI case study as it was live on chin-may.com before it was replaced by
`public/yonder-ai/case-study-hosted.html`.

- `caseStudy.json` — the `yonder-ai` entry from `server/data/caseStudies.json`
- `projectCard.json` — the `yonder-ai` entry from `server/data/projects.json`
- Git tag `archive/yonder-ai-v1` — the full site at commit `d9d79ae`, exactly as deployed

The v1 entry was never removed from `server/data/caseStudies.json`; the new page only takes over the
`/case-study/yonder-ai` route in `src/App.jsx`.

Most v1 images are hosted on `static.wixstatic.com`, not in this repo. If the Wix account is closed,
they disappear; `/uploads/yonder-hero.png` is the only local one.

## Restore v1

Delete the `/case-study/yonder-ai` route and the `ExternalCaseStudy` component in `src/App.jsx`.
The old page renders again from `server/data/caseStudies.json`.

To see it without changing anything: `git checkout archive/yonder-ai-v1`, then `npm run dev:full`.
