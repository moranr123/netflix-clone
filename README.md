# Netflix Clone (React + Vite)

A small Netflix-like SPA built with React + Vite. This repo demonstrates fetching movie data (TMDB), a player page, auth flows, and responsive UI.

## Quick start

Prerequisites:
- Node.js 16+ and npm (Windows: use CMD or PowerShell)

Install and run locally:
```bash
npm install
npm run dev       # start dev server with HMR
```

Build and preview production:
```bash
npm run build
npm run preview   # serve the built dist locally
```

## Environment variables

Keep secrets out of source. Create a `.env.local` (not committed) and add Vite-prefixed vars:

```
VITE_TMDB_KEY=your_tmdb_api_key_here
```

Important: do NOT embed long-lived bearer tokens in the frontend code. Use a server-side proxy if you need to keep secrets private.

## Deployment

This is a static SPA—common hosts:
- Netlify: set build command `npm run build`, publish dir `dist`
- Vercel: connect repo, build command `npm run build`, output `dist`
- Firebase Hosting: set public dir to `dist`
- GitHub Pages: set `base` in `vite.config.js` if serving from a subpath

Run `npm run build` before deploying and add any required env vars in the host dashboard.

## Notes & security
- Replace any hard-coded API/bearer tokens in the code with env vars.
- TMDB API key is fine for client use (read-only) but treat other tokens carefully.

## Contributing
Feel free to open issues or PRs. Keep changes focused and add short commits.

<!-- End of file -->
