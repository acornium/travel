# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

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

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
