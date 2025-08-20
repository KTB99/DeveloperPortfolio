# DeveloperPortfolio

A Vite + React + TypeScript + Tailwind CSS baseline with shadcn/ui components.

## Project structure
- index.html — app entry HTML
- src/ — source code
  - main.tsx — React bootstrap
  - App.tsx — Example UI with theme toggle and shadcn/ui Button
  - components/ui/button.tsx — shadcn/ui Button component
  - lib/utils.ts — utility to merge Tailwind classes
  - index.css — Tailwind layers and CSS variables for themes
- tailwind.config.ts — Tailwind config with shadcn tokens and animate plugin
- postcss.config.js — PostCSS plugins
- vite.config.ts — Vite configuration
- tsconfig.json — TypeScript config with path aliases

## Notes
- This baseline doesn’t include the full shadcn CLI flow; it includes a minimal, hand-picked component (Button) and tokens. You can add more components later with the shadcn CLI if desired.