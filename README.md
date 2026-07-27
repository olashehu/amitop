# AMITOP — Company Website

Modern, premium, responsive marketing site for AMITOP, a Nigerian network infrastructure
and electrical systems company. Built with Next.js App Router, TypeScript, Tailwind CSS,
shadcn/ui, Framer Motion, React Hook Form, and Zod.

## Getting started

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Folder architecture

```
src/
  app/                     # App Router routes (server components by default)
    layout.tsx             # Root layout: fonts, global SEO metadata, header/footer shell
    page.tsx                # Homepage
    globals.css             # Design tokens (CSS variables) + base styles
    sitemap.ts               # Auto-generated sitemap.xml
    robots.ts                 # Auto-generated robots.txt
    services/                 # (Phase 3) service listing + [slug] detail pages
    about/                     # (Phase 4)
    projects/                   # (Phase 4)
    contact/                     # (Phase 4) contact form page
  components/
    ui/                     # Reusable primitives (button, container, card, form, etc.)
    layout/                 # Header, footer, nav — structural chrome
    sections/               # Page-level composed sections (hero, services grid, etc.)
  config/
    site.ts                 # Single source of truth: nav, services data, company info
  lib/
    utils.ts                 # cn() class merge helper
  types/                      # Shared TypeScript types
```

**Principle:** everything is a server component unless it needs interactivity
(state, event handlers, browser APIs) — those are explicitly marked `"use client"`
(e.g. `site-header.tsx` for the mobile menu).

## Design tokens

| Token | Hex | Usage |
|---|---|---|
| Primary | `#0F172A` | Header, footer, dark surfaces, headings |
| Secondary | `#2563EB` | Primary CTAs, links, active states |
| Accent | `#06B6D4` | Highlights, icons, signal/energy motifs |
| Background | `#FFFFFF` | Page background |
| Text | `#111827` | Body copy |

Typeface: **Inter** (variable font, loaded via `next/font/google`, zero layout shift).

## Build phases

- [x] **Phase 1 — Architecture & Foundation**: project scaffold, design tokens, global
      layout, header/footer, SEO plumbing (metadata, sitemap, robots), reusable UI primitives.
- [x] **Phase 2 — Homepage**: hero, services overview grid, why-choose-us, stats, featured
      projects, testimonials, final CTA — with Framer Motion scroll reveals.
- [x] **Phase 3 — Services**: `/services` index + 11 individual `/services/[slug]` pages
      generated from `config/site.ts`, with `generateStaticParams` and per-page metadata.
- [x] **Phase 4 — About, Projects, Contact**: company story page, project/portfolio grid,
      contact page with React Hook Form + Zod validated inquiry form.
- [x] **Phase 5 — SEO & Performance pass**: JSON-LD structured data, generated OG/favicon
      images, web manifest, accessibility contrast/aria pass.
- [x] **Phase 6 — Polish & deployment readiness**: custom 404/error/loading states,
      back-to-top micro-interaction, deployment checklist (`DEPLOYMENT.md`).

See `DEPLOYMENT.md` before pointing a live domain at this site.
