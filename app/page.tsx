import React from "react";
import { Hero } from "@/components/hero";
import { CategoriesGrid } from "@/components/categories";

export default function Home() {
  return (
    <main className="flex-1 w-full bg-[#FFFDF8]">
      {/* Hero Section with Farco Dual Banner & Trust Strip */}
      <Hero />

      {/* Phase 3: Featured Saree Categories Grid */}
      <CategoriesGrid />
    </main>
  );
}
