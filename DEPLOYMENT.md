# Deployment Checklist

Run through this before pointing a live domain at the site.

## Content & assets
- [ ] Replace placeholder gradient project tiles in `components/sections/featured-projects.tsx`,
      `components/sections/projects-grid.tsx`, and `config/projects.ts` with real project photography
      (use `next/image` once files are added, sized/compressed as WebP/AVIF).
- [ ] Replace generated `app/icon.tsx` and `app/opengraph-image.tsx` with real logo/brand assets
      if you have final brand photography — or keep the generated versions, they work as-is.
- [ ] Confirm every phone/email/address value in `config/site.ts` is correct and live.
- [ ] Proofread all service `description`, `benefits`, and `process` copy in `config/site.ts`.
- [ ] Add real client testimonials in `components/sections/testimonials.tsx` (currently illustrative).

## Contact form
- [ ] Wire `src/app/api/contact/route.ts` to a real email provider (Resend, Postmark, SendGrid) —
      the Zod validation and route structure are already in place, just add the send call.
- [ ] Set `CONTACT_TO_EMAIL` / provider API key as environment variables (see `.env.example`).
- [ ] Test the full form submission flow end-to-end after wiring the provider.

## SEO
- [ ] Update `NEXT_PUBLIC_SITE_URL` / `siteConfig.url` to the final production domain.
- [ ] Submit `sitemap.xml` to Google Search Console and Bing Webmaster Tools after launch.
- [ ] Verify Open Graph previews render correctly (Facebook Sharing Debugger, Twitter Card Validator).
- [ ] Double-check `robots.ts` still allows indexing (it does by default) once out of staging.

## Performance & QA
- [ ] Run Lighthouse (or PageSpeed Insights) against the deployed URL — target 90+ across the board.
- [ ] Test on real mobile devices, not just browser dev tools, especially the mobile nav and contact form.
- [ ] Click through every nav link, footer link, and CTA button — confirm no dead links.
- [ ] Test keyboard-only navigation (Tab/Shift+Tab/Enter) through the header, mobile menu, and contact form.
- [ ] Test with a screen reader (VoiceOver/NVDA) on at least the homepage and contact page.

## Infrastructure
- [ ] Set up hosting (Vercel is the path of least friction for Next.js App Router).
- [ ] Connect the custom domain and verify HTTPS.
- [ ] Add analytics if desired (Plausible, Vercel Analytics, or GA4 — see `.env.example`).
- [ ] Set up error monitoring (e.g. Sentry) — `app/error.tsx` and `app/global-error.tsx` already
      have a `console.error` call marked for where to send reports.
