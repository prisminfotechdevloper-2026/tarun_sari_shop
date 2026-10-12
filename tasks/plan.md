# Implementation Plan: Tarun Sari Shop

## Phase Breakdown (Strictly Component-by-Component Review)

```
[Phase 1: Navbar (All Screens)] ───► User Review & "Proceed"
                                          │
[Phase 2: Hero Section & Carousel] ◄──────┘
               │
               ▼ User Review & "Proceed"
[Phase 3: Category Highlights]
               │
               ▼ User Review & "Proceed"
[Phase 4: 6 Saree Product Showcase Cards]
               │
               ▼ User Review & "Proceed"
[Phase 5: Heritage & Handloom Trust Section]
               │
               ▼ User Review & "Proceed"
[Phase 6: Luxury Footer & Polish]
```

---

### Phase 1: Navbar Component for All Screens (CURRENT TARGET)
- **Top Announcement Bar (Marquee / Trust Points)**:
  - Deep Maroon background (`#65091B`) with Gold accents (`#C69A52`).
  - Seamless ticker with trust points: "Pure Silk Certified", "100% Authentic Handloom", "Free Worldwide Delivery on Bridal Orders", "Handcrafted by Master Weavers".
- **Main Header**:
  - Silk ivory/cream backdrop with subtle champagne border.
  - Brand Logo image display (`/logo/logo.png`) paired with luxury typography "TARUN SARI & LEHENGA".
  - Interactive search bar with placeholder: "Search for Banarasi, Kanjivaram, Chanderi, Lehengas...".
  - Customer Utility Icons:
    - Account / Sign In trigger
    - Wishlist button with count badge
    - Cart button with item count badge
    - Mobile hamburger toggle button
- **Secondary Desktop Navigation Bar**:
  - Horizontal menu:
    - *All Sarees*
    - *Banarasi Silk*
    - *Kanjivaram*
    - *Chanderi & Organza*
    - *Bridal Lehengas*
    - *Festive Edit*
    - *Ready to Ship*
  - Hover underline animation with brand crimson indicator.
- **Mobile / Tablet Slide-out Drawer**:
  - Smooth backdrop and drawer slide animation.
  - Brand header with close button.
  - Mobile search field.
  - Category list with expand/collapse chevron indicators.
  - Quick action links (WhatsApp Consultation, Store Locator, Account Login).
- **Verification**:
  - Verify on Desktop (1440px), Laptop (1024px), Tablet (768px), and Mobile (375px/414px).
  - Test Next.js build compilation.
  - **STOP FOR USER REVIEW**.

---

### Phase 2: Hero Section & Storytelling Slider (NEXT AFTER REVIEW)
- Dual/Triple slide carousel with high-impact bridal & saree banners.
- Clear CTA buttons ("Explore Bridal Edit", "View New Arrivals").
- Floating trust badges & smooth transitions.

---

### Phase 3: Saree Category Navigation & Visual Cards
- Curated grids featuring the core saree traditions (Banarasi, Kanjivaram, Chanderi, Organza, Lehengas).

---

### Phase 4: Product Showcase (6 Authentic Saree Cards)
- 6 curated product cards with realistic saree images, authentic names, weave details, pricing in ₹ (INR), discount tags, wishlist heart, and "Add to Bag".

---

### Phase 5: Craftsmanship & Heritage Section
- Video/Artisan spotlight explaining handloom weaving authenticity, zari purity, and heritage.

---

### Phase 6: Luxury Footer, Customer Care & Final Polish
- Multi-column footer, newsletter subscription, WhatsApp concierge link, and sticky bottom navigation on mobile.
