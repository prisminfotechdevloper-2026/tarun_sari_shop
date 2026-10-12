# Spec: Tarun Sari & Lehenga E-Commerce Web Experience

## Objective
Build a world-class, responsive, and luxurious ethnic e-commerce & showcase web platform for **Tarun Sari Shop** ("Tarun Sari & Lehenga").
The application takes design inspiration from:
1. **Farco Website** (`https://farco-website-eta.vercel.app/`): Flawless e-commerce hierarchy, sticky announcement marquee, multi-tier luxury header with search, wishlist/cart badges, sub-category navigation bar, responsive slide-out drawer, and mobile optimization.
2. **Vasansi Jaipur** (`https://www.vasansi.com/`): Authentic royal Indian heritage saree boutique aesthetics, typography, rich fabric categorizations (Banarasi, Kanjivaram, Chanderi, Bandhani, Bridal Lehengas).
3. **Brand Identity & Logo** (`/public/logo/logo.png`):
   - Dominant Regal Maroon / Crimson: `#850518` / `#8F1028`
   - Dark Royal Maroon: `#65091B`
   - Regal Gold Accents: `#C69A52` / `#D4AF37`
   - Champagne Ivory & Silk Cream: `#FFFDF8` / `#F7F0E6`
   - Warm Deep Charcoal Typography: `#292421`

---

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + Custom Brand Design Tokens (`app/globals.css`)
- **Icons**: Lucide React
- **Design System Standards**: ChaiUI & Farco Luxury E-commerce Architecture

---

## Project Structure
```text
tarun_sari_shop/
├── app/
│   ├── globals.css          # Brand design system tokens & base typography
│   ├── layout.tsx           # Global layout with font configurations & metadata
│   └── page.tsx             # Home showcase page
├── components/
│   ├── navbar/
│   │   ├── AnnouncementBar.tsx # Top scrolling marquee ticker with trust points
│   │   ├── MainHeader.tsx      # Logo, search bar, and action badges (Account, Wishlist, Cart)
│   │   ├── CategoryNav.tsx     # Secondary desktop navigation bar for saree categories
│   │   ├── MobileDrawer.tsx    # Responsive slide-in navigation drawer for mobile/tablet
│   │   └── Navbar.tsx          # Unified responsive Navbar component
│   ├── hero/                # Hero banners & artisan storytelling slider
│   ├── categories/          # Saree & Lehenga curated category cards
│   ├── products/            # 6 Luxury Saree product cards & quick view
│   ├── craftsmanship/       # Heritage & pure handloom guarantee section
│   ├── testimonials/        # Real customer reviews & bridal spotlight
│   └── footer/              # Multi-tier luxury footer & newsletter
├── public/
│   ├── logo/
│   │   ├── logo.png         # Official brand logo
│   │   └── image.png
│   └── products/            # Curated Saree imagery
└── tasks/
    ├── spec.md              # Project specification
    ├── plan.md              # Architectural & phased implementation plan
    └── todo.md              # Gated component task list
```

---

## Brand Design Tokens & Palette

| Token | Hex / Value | Role / Usage |
|---|---|---|
| `--color-primary` | `#8F1028` (Crimson Maroon) | Main brand CTA, accents, headers |
| `--color-maroon-dark` | `#65091B` (Deep Maroon) | Announcement bar, dark footer, primary hover |
| `--color-gold` | `#C69A52` (Royal Gold) | Badges, accents, dividers, rating stars |
| `--color-gold-light` | `#E6D0A7` (Champagne Gold) | Subtle borders, highlights, glints |
| `--background` | `#FFFDF8` (Ivory Silk) | Page background |
| `--background-soft` | `#F7F0E6` (Cream Silk) | Section backgrounds, card highlights |
| `--foreground` | `#292421` (Warm Charcoal) | High-contrast readable body text |
| `--border` | `#E9DFD1` (Warm Champagne) | Elegant hairlines and separators |

---

## Six Core Saree Collections Planned
1. **Royal Banarasi Katan Silk Saree** — Handwoven pure zari brocade from Varanasi.
2. **Kanchipuram Pure Zari Silk Saree** — Authentic temple border bridal weave.
3. **Chanderi Handloom Tissue Silk Saree** — Lightweight royal pastel with gold booti.
4. **Bandhani & Gharchola Heritage Silk** — Traditional Rajasthani & Gujarati bridal elegance.
5. **Organza Floral Embroidered Saree** — Modern festive hand-painted organza with scalloped border.
6. **Crimson Bridal Velvet & Raw Silk Lehenga** — Intricate zardozi and dabka craftsmanship.

---

## Boundaries
- **Always do**: Build mobile-first, test all viewports (Mobile 360-480px, Tablet 768-1024px, Desktop 1280px+), verify Next.js builds cleanly with zero errors.
- **Strictly follow user cadence**: Implement component-by-component (Navbar first, then pause for user review & confirmation before moving to Hero).
- **Never do**: Push monolithic changes all at once or skip interactive mobile drawer testing.
