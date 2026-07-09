# Refill Demo

An educational, front-end crypto storefront UI demo inspired by gift-card and mobile-refill marketplaces.

> ⚠️ This is an **educational UI clone** for learning/portfolio purposes. It is **not affiliated with, endorsed by, or connected to Bitrefill**. No purchases, payments, accounts, support, order delivery, refunds, or real integrations are implemented. Brand names and marks belong to their respective owners. No proprietary images or assets were copied — every logo/tile is recreated with CSS, inline SVG, and emoji.

## ✨ What's inside

A single, fully responsive static storefront demo:

- **Sticky header** — visible demo disclaimer, logo, working static catalog search, nav row, mobile hamburger menu
- **Hero** — educational UI positioning with recreated product tiles
- **Recommended & Popular gift cards** — responsive product-card grids with ratings
- **Category rails** — Gaming, Food & Groceries, Travel, Rewards & Discounts (horizontal scroll on mobile)
- **How it works** — 3-step explainer
- **Mobile app preview** — CSS phone mockup with static badges
- **eSIMs & Payment Cards** — dedicated sections so nav targets resolve
- **Phone refills** — carrier tiles
- **Demo scope band** — clearly states static catalog, no checkout, no affiliation
- **Payment methods** — Bitcoin, Lightning, Ethereum, USDC/USDT, Solana, BASE, Polygon, Apple/Google Pay, Visa, Mastercard
- **FAQ accordion** — accessible, keyboard-friendly
- **Footer** — same-page project/catalog links with no fake social/legal destinations

## 🧱 Tech stack

- [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)
- `next/font` (Montserrat)
- Deployed on [Vercel](https://vercel.com/)

All catalog and navigation content lives in a single typed data module (`src/lib/data.ts`), so the UI is fully data-driven.

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
