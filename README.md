# about-me

Personal profile and blog site — [theopinard.github.io/about-me](https://theopinard.github.io/about-me/)

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

## Adding Content

All content lives in files — no CMS, no database.

### New blog post

Create `src/content/blog/your-slug.md`:

```markdown
---
title: "Post title"
summary: "A short description shown in the list."
url: "https://link-to-external-post"
date: 2024-06-01
publisher: "Publisher name"
---
```

### New talk

Create `src/content/talks/your-slug.md`:

```markdown
---
title: "Talk title"
event: "Conference Name"
year: 2024
description: "Short description of the talk."  # optional
video: "https://..."      # optional
slides: "https://..."     # optional
schedule: "https://..."   # optional — link to the talk page in the conference schedule
---
```

### Profile (bio, work history, skills, education)

Edit `src/data/profile.yaml`.

### Conferences organised

Edit `src/data/conferences.yaml` — add an entry:

```yaml
- name: PyData Berlin 2025
  url: "https://berlin.pydata.org"
  role: Organiser
```

---

## Deployment

Push to `main` → GitHub Actions builds and deploys automatically.

**One-time setup:** In GitHub repo settings → Pages → Source → **GitHub Actions**
