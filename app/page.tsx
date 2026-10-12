import React from "react";
import { Hero } from "@/components/hero";
import { CategoriesGrid } from "@/components/categories";
import { ProductShowcase } from "@/components/products";
import { HeritageSection } from "@/components/heritage";

export default function Home() {
  return (
    <main className="flex-1 w-full bg-[#FFFDF8]">
      {/* Phase 2: Hero Section with Dual Posters & Trust Strip */}
      <Hero />

      {/* Phase 3: Curated Silk Categories Horizontal Slider */}
      <CategoriesGrid />

      {/* Phase 4: Product Showcase (6 Authentic Saree Cards) */}
      <ProductShowcase />

      {/* Phase 5: Heritage & Artisan Craftsmanship Banner */}
      <HeritageSection />
    </main>
  );
}
