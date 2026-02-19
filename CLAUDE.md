# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
bun dev          # Start dev server (Turbopack, port 3000)
bun run build    # Production build
bun start        # Start production server
bun run lint     # ESLint (flat config, core-web-vitals + TypeScript)
```

Package manager is **bun** (not npm/yarn). Always use `bun add` for dependencies.

## Tech Stack

- **Next.js 16.1.6** with App Router and Turbopack
- **React 19** with React Compiler enabled (`reactCompiler: true` in next.config.ts) — no manual `useMemo`/`useCallback` needed
- **Tailwind CSS v4** via `@tailwindcss/postcss` — uses `@theme inline` for design tokens, not a tailwind.config file
- **Framer Motion 12** for animations
- **Lucide React** for icons
- **TypeScript** in strict mode with `@/*` path alias mapping to project root

## Architecture

### Design System (globals.css)

All colors are defined as `@theme inline` CSS variables. **Strictly use `#1B4580` as primary color.**

- `--color-primary: #1B4580` and variants (`-light`, `-dark`, `-deeper`)
- `--color-accent: #E8B931` (warm gold, used sparingly)
- `--font-display: Sora` (headings h1-h3), `--font-sans: Geist` (body text)
- CSS utilities: `.noise-overlay`, `.gradient-text`, `.glass`, `.divider-line`, `.shimmer`

Never use raw hex values in components — always reference theme tokens (`text-primary`, `bg-bg-light`, etc.).

### Content Data Layer (lib/data.ts)

All website content lives in `lib/data.ts` as typed constants. Pages import and render from this single source. This makes content updates trivial and prepares for future CMS integration. Key exports: `NAV_ITEMS`, `PROGRAMS`, `HOME_STATS`, `ABOUT_STATS`, various FAQ arrays, `PARTNER_LOGOS`, value proposition arrays.

### Animation System (lib/animations.ts)

Centralized Framer Motion variants: `fadeUp`, `fadeIn`, `slideInLeft`, `slideInRight`, `staggerContainer`, `scaleIn`, `heroStagger`. Every animated component imports from here for visual consistency.

### Dynamic Icons (lib/utils.ts)

`getIcon(name: string)` resolves Lucide icon names from data strings. Uses `unknown` cast to satisfy TypeScript. The `cn()` utility wraps `clsx` for className merging.

### Component Organization

- **`components/ui/`** — Atomic building blocks (Button, Card, StatCounter, Accordion, SectionHeading, LogoCarousel, ImagePlaceholder). These are the smallest reusable units.
- **`components/sections/`** — Page sections composed from UI components (HeroBanner, StatsGrid, CTABanner, ContactForm, ProgramCard, SegmentButtons, TestimonialSlider). Used across multiple pages.
- **`components/layout/`** — Navbar (client, glassmorphism with scroll detection), Footer (server), PageWrapper (client, entry animation).
- **`components/home/`**, **`components/products/`** — Page-specific components that aren't reusable.

### Client vs Server Component Split

- All `app/*/page.tsx` files are **Server Components** (no `"use client"`)
- Interactive/animated components use `"use client"` (Navbar, Button, StatCounter, Card, HeroBanner, etc.)
- Static presentation components are Server Components (Footer, SectionHeading, ImagePlaceholder)
- Page-specific client components (e.g., `AboutContent.tsx`, `BusinessContent.tsx`) are co-located with their page

### Page Routes

`/` (Home), `/about`, `/programs`, `/products`, `/contact`, `/careers`, `/for-learners`, `/for-businesses`, `/for-governments`, `/for-universities` — all statically generated.

### Key Patterns

- HeroBanner has parallax scroll (`useScroll`/`useTransform`), `pt-24` for navbar clearance, `compact` prop for shorter heroes
- Scroll-triggered animations use `whileInView="visible"` with `viewport={{ once: true, margin: "-100px" }}`
- The Navbar starts transparent over hero sections, transitions to glassmorphism (`backdrop-blur`) on scroll >50px
- Image placeholders exist throughout — use `ImagePlaceholder` component where real images will go later
