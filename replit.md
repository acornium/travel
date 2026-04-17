# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **Frontend framework**: React + Vite
- **Styling**: Tailwind CSS v4
- **UI components**: shadcn/ui

## Travel Affiliate Site (artifacts/travel-site)

Frontend-only travel affiliate site "AviaSales Pro" built with React + Vite + TypeScript + Tailwind CSS.

### Features
- Russian-language travel flight search portal
- Hero section with Travelpayouts widget placeholder
- Blog with 4 placeholder articles about cheap flights
- Destination pages for 5 cities (Moscow, Bangkok, Paris, Istanbul, Dubai)
- Responsive navigation with burger menu for mobile
- TPWidget component for Travelpayouts integration
- SEO metadata via react-helmet-async
- Lucide-react icons throughout

### Key Files
- `artifacts/travel-site/src/App.tsx` — Main app with routing
- `artifacts/travel-site/src/components/layout/Header.tsx` — Responsive header with mobile menu
- `artifacts/travel-site/src/components/layout/Footer.tsx` — Footer with affiliate disclosure
- `artifacts/travel-site/src/components/TPWidget.tsx` — Travelpayouts widget placeholder
- `artifacts/travel-site/src/lib/data/blog-posts.ts` — Blog post data
- `artifacts/travel-site/src/lib/data/destinations.ts` — Destination city data
- `artifacts/travel-site/src/pages/` — All page components

### Dependencies
- react, react-dom, wouter (routing), lucide-react (icons)
- react-helmet-async (SEO), framer-motion (animations)
- Tailwind CSS v4, shadcn/ui components

## Key Commands

- `pnpm --filter @workspace/travel-site run dev` — start dev server locally
- `pnpm --filter @workspace/travel-site run build` — build for production
- `pnpm run typecheck` — full typecheck across all packages

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
