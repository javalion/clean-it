# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Clean It — a gamified chore-tracking app (track chores, earn coins/XP, streaks, badges). Currently a fresh Next.js App Router scaffold; UI has not yet been built out beyond the placeholder home page.

## Commands

- `npm run dev` — start the development server (Turbopack disabled by default; uses `next dev`)
- `npm run build` — production build (statically exported, see below)
- `npm run start` — serve the production build
- `npm run lint` — run ESLint (`eslint .`)
- `npm run typecheck` — run TypeScript with no emit (`tsc --noEmit`)

There is no test runner configured in `package.json` yet.

## Architecture

- **Next.js App Router**, TypeScript, React 19. Source lives under `src/app/`.
- **Static export**: `next.config.ts` sets `output: "export"` and `images.unoptimized: true`. This means the app is built as a static SPA — avoid server-only features (API routes, server actions, dynamic SSR/ISR) since they aren't compatible with static export.
- **Path alias**: `@/*` maps to `./src/*` (configured in `tsconfig.json`).
- **Styling**: CSS Modules (`*.module.css`) alongside components, plus `globals.css` for global styles.
- **Linting**: Flat ESLint config (`eslint.config.mjs`) extending `next/core-web-vitals` and `next/typescript` via `FlatCompat`.
