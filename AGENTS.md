# Port Arthur — Project Contract (LOCAL)

Local rules for this repo. Global behavioral policy is NOT inlined here; it is fetched at
boot and signed (hash + nonce). This file is the local map only.

rules: mcp://localhost:8888/mcp/hermes/rules@1

## What this is
Digital presence for the Port Arthur Pub & Brewhouse (est. 1918), Lindholmen, Gothenburg —
an ultra-fast single-page site replacing an outdated WordPress build, using Vite + React +
Vanilla CSS with automated booking localization (README.md).

## Non-negotiable (local)
- Single-page Vite + React app; production bundle outputs to `dist/` via `npm run build` (README.md:5,31).
- Menu and schedule are parsed dynamically from static JSON data (`/src/data/menu.json`) — edit the data, not frontend code (README.md:78,82).
- Deployed under `runthetable.app` subdomains via Vercel/Netlify with build command `npm run build` and output dir `dist` (README.md:61-64).

## Commands
- `npm run dev` — Vite dev server at localhost:5173 (README.md:22, package.json)
- `npm run build` — production bundle to `dist/` (README.md:29)
- `npm run lint` — ESLint (package.json)
- `npm run preview` — Vite preview (package.json)

## Code graph
The repo is indexed in `.mex/graph.db`. First action on a task: `mex graph scope "<task>"`.
Never naive-grep the whole tree; expand nodes with `mex graph get <id> --detail source` and
check impact with `mex impact <symbol|file>`.

## Navigation
At session start read `.mex/ROUTER.md` + relevant `.mex/context/*` before acting. Update the
vault project card (10-Projects/PortArthur.md) when status/architecture changes.
