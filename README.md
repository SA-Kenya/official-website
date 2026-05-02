# SA Kenya Website

This repository now uses Astro to build the SA Kenya website for GitHub Pages.

## Stack

- Astro static site generation
- GitHub Pages deployment via GitHub Actions
- Markdown content collections for blog posts
- Structured pamphlet metadata and GA4 event tracking

## Local development

```bash
npm install
npm run dev
```

## Main sections

- `/sip/` for Support for Institutions and Professionals
- `/sip/professionals/` for therapists, counselors, rehab teams, and institutions
- `/sip/clergy/` for pastors, priests, chaplains, and ministry leaders
- `/pamphlets/` for the literature library
- `/blog/` for outreach and site updates

## Deployment

Pushes to `main` trigger the GitHub Pages workflow in `.github/workflows/deploy.yml`.
