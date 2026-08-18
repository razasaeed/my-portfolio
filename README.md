# Muhammad Raza Saeed — Personal Site

Staff Software Engineer portfolio: experience, expertise, selected work and a contact form. Content lives in `src/data/` so copy can be updated without changing UI components.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Deploy on GitHub Pages

This repo includes a GitHub Actions workflow that builds a static export and publishes it to GitHub Pages on every push to `main`.

- User site (`USERNAME.github.io`): `https://USERNAME.github.io`
- Project site (`my-portfolio`): `https://USERNAME.github.io/my-portfolio`

GitHub Pages cannot run a Node mailer. The contact form posts to **FormSubmit** (free, no card). The first send opens FormSubmit’s confirmation page / email — confirm `razasaeed135@gmail.com` once. After that, messages arrive in Gmail and the visitor is returned to the site.

## Deploy on Vercel

1. Import the GitHub repository in [Vercel](https://vercel.com/new).
2. Set the environment variables below.
3. Deploy.

Or from the CLI:

```bash
npx vercel
```

## Environment variables

Copy `.env.example` to `.env.local` and fill in values:

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Yes in production | Canonical origin for SEO, sitemap and Open Graph |
| `NEXT_PUBLIC_GITHUB_URL` | No | GitHub profile URL. Leave empty to hide GitHub links |

## Files to add

| File | Path | Notes |
| --- | --- | --- |
| Headshot | `public/profile.jpg` | Until this exists, the hero shows an initials placeholder |
| Resume | `public/Muhammad_Raza_Saeed_Resume.pdf` | Download Resume already points here |

## Content you can edit later

- `src/data/profile.ts` — name, summary, about, education
- `src/data/experience.ts` — roles and responsibilities
- `src/data/projects.ts` — featured work
- `src/data/skills.ts` — expertise groups
- `src/data/services.ts` — client services
- `src/data/philosophy.ts` — working principles and currently exploring
- `src/data/site.ts` — nav, resume path, GitHub, site URL
