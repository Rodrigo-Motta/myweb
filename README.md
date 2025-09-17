# Website — React + Vite + TypeScript

Modern React web app powered by Vite, TypeScript, Tailwind CSS, and shadcn/ui.

## Tech Stack

- Vite
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui (Radix UI primitives)

## Getting Started

Prerequisites:
- Node.js 18+ and npm. Install via nvm: https://github.com/nvm-sh/nvm

Install and run:
```sh
npm install
npm run dev
```

Useful scripts:
- `npm run dev` – start Vite dev server
- `npm run build` – production build to `dist/`
- `npm run preview` – preview the production build
- `npm run lint` – run ESLint
- `npm run server` – optional link-preview API (Express) at `/api/link-preview`

Notes:
- During development, a lightweight `/api/link-preview` route is provided by a Vite plugin.
- In production, host `server/` separately if you need server-side link previews.

## Deployment

### GitHub Pages
This repo includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that builds and publishes the site to GitHub Pages.

1. In repository Settings → Pages, set Source to GitHub Actions.
2. Push to `main` (or trigger the workflow manually). The workflow builds the app and publishes `dist/` to Pages.

Base path:
- The workflow sets `VITE_BASE=./` so assets resolve correctly when the site is served from a subpath.
- You can also control this by setting `process.env.VITE_BASE` or editing `base` in `vite.config.ts`.

### Other Hosts
Any static host works. Build with `npm run build` and upload the `dist/` directory to your host (e.g., Netlify, Vercel, Cloudflare Pages, S3+CloudFront).

### Custom Domain (optional)
- For GitHub Pages, configure the custom domain under Settings → Pages. Optionally add a `public/CNAME` file with your domain to keep it versioned.

## Project Structure (high level)
- `src/` – application code (components, pages, utils)
- `public/` – static assets copied as-is
- `server/` – optional Express server for link previews
- `vite.config.ts` – Vite configuration

## License
No license specified.
