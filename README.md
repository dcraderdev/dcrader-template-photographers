# Wedding Photographer Landing Page Template

A polished, photo-first landing page template for wedding & event photographers — built to make Squarespace feel outdated.

**Demo:** [Live Site](https://dcrader-template-photographers.vercel.app)  
**Future subdomain:** [photographers.dcrader.dev](https://photographers.dcrader.dev)

---

## Stack

- [Astro](https://astro.build) — static site generator
- [Tailwind CSS v4](https://tailwindcss.com) — utility-first styling
- [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) + [Manrope](https://fonts.google.com/specimen/Manrope) — type pairing
- Deployed on [Vercel](https://vercel.com) free tier

## Features

- Full-bleed cinematic hero with Ken Burns animation
- Gallery grid with cursor-follow tilt (desktop) and lightbox
- Scroll-reveal animations throughout
- Custom dusty-rose cursor dot/ring
- Warm inquiry form with budget range selector
- 3-tier package cards with featured highlight
- Email capture for Investment Guide lead-gen
- Instagram-style footer grid
- Fully accessible (semantic HTML, ARIA labels, keyboard navigation)

## Personalization — 3 files

| File | What to edit |
|------|-------------|
| `src/data/photographer.ts` | Name, tagline, bio, portrait, hero image, process steps |
| `src/data/galleries.ts` | Wedding galleries — cover images and lightbox photos |
| `src/data/packages.ts` | Package names, pricing, what's included |

## Quick start

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # production build → dist/
```

## Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

Or connect the GitHub repo in the Vercel dashboard — it auto-detects Astro.

## Photo credits

All demo photos are from [Unsplash](https://unsplash.com) and attributed in component comments. Replace with client photography before going live.

---

*One of five industry landing-page templates by [dcrader.dev](https://dcrader.dev)*
