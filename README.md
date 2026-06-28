# about-me

Personal profile and blog site - [theopinard.github.io/about-me](https://theopinard.github.io/about-me/)

Built with [Astro](https://astro.build), deployed via GitHub Actions to GitHub Pages.

---

## Development

```bash
npm install
npm run dev      # dev server at localhost:4321
npm run build    # build to dist/
npm run preview  # preview built site
```

---

## Editing Content

Editable site content is centralized in `src/content/site/`:

- `home.md` - profile, bio, work history, education, skills, and selected talks
- `blog.md` - all blog post metadata in the `posts` array
- `talks.md` - all talk metadata in the `talks` array
- `community.md` - community page copy, metrics, and conferences

Stable page anchors come from each blog post or talk `id`, for example `/blog#2025-from-trees-to-transformers`.

## Assets

Public assets live under `public/assets/`:

- `assets/profile/` - profile photo
- `assets/community/` - community page photos
- `assets/blog/` - blog thumbnails
- `assets/logos/` - conference, event, and community logos

Store asset paths in content without the `/about-me` base path, for example:

```yaml
image: assets/blog/plista.webp
logo: assets/logos/europython-2023.webp
```

Astro page code prepends `import.meta.env.BASE_URL`, so these paths work under GitHub Pages.

---

## Deployment

Push to `main` -> GitHub Actions builds and deploys automatically.

**One-time setup:** In GitHub repo settings -> Pages -> Source -> **GitHub Actions**
