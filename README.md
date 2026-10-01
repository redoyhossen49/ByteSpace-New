# ByteSpace

A responsive online course marketplace for browsing, filtering, and reviewing courses — built as a polished front-end application with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

---

## Highlights

- **Marketing home page** — hero with working search, brand marquee, category discovery, stats, creator CTA, testimonials
- **Course catalog** — live search, price/level/category filters, 4 sort orders, and pagination with an empty state
- **Course detail** — lazy-loaded video preview, curriculum, key points, progress bar, and a rating summary with per-star filtering
- **Creator profiles** — studios and learner profiles, each with a filterable course grid and follow toggle
- **Auth screens** — dedicated sign-in and sign-up layouts on their own route group chrome
- **Fully static** — 57 routes prerendered via `generateStaticParams()` for instant loads and SEO metadata per page

## Engineering notes

- **Accessible by hand** — custom listbox with `aria-haspopup`/Escape/outside-click dismissal, `role="tablist"`, `role="progressbar"`, `aria-current` navigation states
- **Performance-conscious** — `next/image` everywhere, a click-to-load YouTube facade, and a marquee animation that respects `prefers-reduced-motion`
- **Lean dependency footprint** — 4 runtime dependencies, no UI kit or component library; every component in `app/components` is written from scratch
- **Type-safe data** — courses, creators, and reviews live in typed modules, with the average rating derived from the same breakdown that renders the bars
- **Clean architecture** — route groups separate marketing chrome from auth chrome, and the filter/sort system is reused across the catalog and creator pages

## Tech stack

Next.js 16 (App Router) · React 19 · TypeScript (strict) · Tailwind CSS v4 · react-icons

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
pnpm build   # production build
pnpm start   # serve the build
pnpm lint    # eslint
```

Requires Node 22+ (see `.nvmrc`).

## Scope

This is a front-end build with static seed data, intended as a design and engineering showcase. Payments, authentication, and persistence are not wired up — the `Enroll Now`, `Cart`, and `Follow` controls are presentational, and the auth forms do not submit. Some footer and category links point to routes that are not yet built.