# Bitrefill Clone

A pixel-faithful, front-end clone of the [Bitrefill](https://www.bitrefill.com/us/en/) homepage — built from scratch as a demonstration project.

> ⚠️ This is an **educational UI clone** for learning/portfolio purposes. It is **not affiliated with, endorsed by, or connected to Bitrefill**. All brand names and marks belong to their respective owners. No proprietary images or assets were copied — every logo/tile is recreated with CSS, inline SVG, and emoji.

## ✨ What's inside

A single, fully responsive marketing homepage replicating Bitrefill's layout:

- **Sticky header** — promo strip, logo, search, help / currency / balance / cart, nav row, mobile hamburger menu
- **Hero** — "Spend crypto, save big." with cashback CTA and product tiles
- **Recommended & Popular gift cards** — responsive product-card grids with ratings
- **Category rails** — Gaming, Food & Groceries, Travel, Rewards & Discounts (horizontal scroll on mobile)
- **How it works** — 3-step explainer
- **Mobile app banner** — CSS phone mockup with app-store buttons
- **Phone refills** — carrier tiles
- **Trust band** — Trustpilot rating, "Trusted since 2014", daily payments stat
- **Payment methods** — Bitcoin, Lightning, Ethereum, USDC/USDT, Solana, BASE, Polygon, Apple/Google Pay, Visa, Mastercard
- **FAQ accordion** — accessible, keyboard-friendly
- **Footer** — 4 link columns, legal, socials

## 🧱 Tech stack

- [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)
- `next/font` (Montserrat)
- Deployed on [Vercel](https://vercel.com/)

All content lives in a single typed data module (`src/lib/data.ts`), so the UI is fully data-driven.

## 🚀 Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## 📁 Structure

```
src/
├── app/
│   ├── layout.tsx      # root layout, fonts, metadata
│   ├── page.tsx        # homepage composition
│   └── globals.css     # Tailwind v4 theme tokens
├── components/         # Header, Hero, ProductCard, ProductGrid,
│   │                   # CategoryRail, HowItWorks, MobileApp,
│   │                   # TrustSection, PaymentMethods, Faq, Footer
└── lib/
    └── data.ts         # products, categories, payments, faqs, footer
```

## 📝 License

MIT — for the original code in this repo. Brand names/marks are the property of their respective owners.
