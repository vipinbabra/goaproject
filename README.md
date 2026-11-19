# GOAXCORT — Next.js (App Router + Tailwind CSS + TypeScript)

A Next.js implementation inspired by [goaxcort.com](https://www.goaxcort.com/), featuring a dark luxury theme (`#0a0a0a` / `#14120f` / `#d4af37`), `Playfair Display` + `Inter` typography, interactive companion filters, pricing tier tabs, FAQ accordions, profile detail modal, and an instant WhatsApp booking form.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `src/app/layout.tsx` — Root layout with Google Fonts (`Playfair Display` & `Inter`)
- `src/app/page.tsx` — Main page composing all sections and shared filter/modal state
- `src/data/companions.ts` — All 4 New Arrivals, 30 Verified Companions (15 Indian, 15 Russian), pricing tiers, services, delivery zones, and FAQ items
- `src/components/` — Modular React components (`Navbar`, `Hero`, `NewArrivals`, `TrustRow`, `CompanionsDirectory`, `LocationAndBanner`, `ServicesAndEditorial`, `PricingSection`, `FaqSection`, `BookingSection`, `ProfileModal`, `Footer`)
