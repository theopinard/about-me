# CLAUDE.md — Project Context

See README.md for commands and content management instructions.

## Stack
- **Framework**: Astro 4.x — do not upgrade to 5.x without checking sitemap compatibility
- **CSS**: Plain CSS with custom properties — no Tailwind, no CSS-in-JS
- **Content**: One Astro Content Collection (`src/content/site/`) with consolidated home, blog, talks, and community Markdown entries
- **Deployment**: GitHub Actions → GitHub Pages at `https://theopinard.github.io/about-me/`

## Important Paths
- `src/layouts/BaseLayout.astro` — shared HTML shell, nav, footer, SEO meta
- `src/styles/global.css` — all styles, CSS custom properties (`--accent`, etc.)
- `src/content/config.ts` — Zod schemas for Content Collections
- `astro.config.mjs` — site URL and base path (required for correct GitHub Pages routing)
- `.github/workflows/deploy.yml` — CI/CD pipeline

## Known Constraints
- `@astrojs/sitemap` is pinned to `^3.2.1` — versions 3.7+ use `astro:routes:resolved` which only exists in Astro 5
- The `base` URL from `import.meta.env.BASE_URL` is normalised (trailing slash stripped) in `BaseLayout.astro` before use in links — don't change this pattern
- The site is served from `/about-me/` (not root), so all internal links must be prefixed with `base`

## Design Principles
- Zero JS shipped to the browser
- System font stack — no external font loading
- Single accent colour via `--accent` CSS variable
- Content-first: adding new content never requires touching templates
