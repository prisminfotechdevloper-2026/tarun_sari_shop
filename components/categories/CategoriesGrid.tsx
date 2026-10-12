"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Gem, Sparkles } from "lucide-react";

export interface CategoryCardData {
  id: string;
  title: string;
  origin: string;
  count: string;
  image: string;
  href: string;
  badge?: string;
  filter: "all" | "silk" | "bridal" | "lightweight" | "ready";
  isPopular?: boolean;
}

const CATEGORIES_DATA: CategoryCardData[] = [
  {
    id: "banarasi",
    title: "Banarasi Katan Silk",
    origin: "Varanasi Master Looms",
    count: "180+ Designs",
    image: "/categories/category-banarasi.png",
    href: "#banarasi-silk",
    badge: "Silk Mark Certified",
    filter: "silk",
    isPopular: true,
  },
  {
    id: "kanchipuram",
    title: "Kanchipuram Pure Zari",
    origin: "Temple Korvai Borders",
    count: "140+ Designs",
    image: "/categories/category-kanchipuram.png",
    href: "#kanchipuram",
    badge: "Pure Gold Zari",
    filter: "silk",
  },
  {
    id: "chanderi",
    title: "Chanderi & Organza",
    origin: "Lightweight Sheer Weaves",
    count: "95+ Designs",
    image: "/categories/category-chanderi.png",
    href: "#chanderi-organza",
    badge: "Summer Festive",
    filter: "lightweight",
  },
  {
    id: "bridal-lehengas",
    title: "Bridal Lehengas",
    origin: "Heirloom Velvet & Zardozi",
    count: "60+ Coutures",
    image: "/categories/category-bridal.png",
    href: "#bridal-lehengas",
    badge: "Royal Bridal",
    filter: "bridal",
    isPopular: true,
  },
  {
    id: "bandhani",
    title: "Bandhani & Gharchola",
    origin: "Jaipur Heritage Tie & Dye",
    count: "85+ Designs",
    image: "/categories/category-bandhani.png",
    href: "#bandhani",
    badge: "Handcrafted Gota",
    filter: "bridal",
  },
  {
    id: "ready-to-ship",
    title: "Ready to Ship Silks",
    origin: "24-Hour Express Dispatch",
    count: "120+ In Stock",
    image: "/categories/category-ready.png",
    href: "#ready-to-ship",
    badge: "Express Shipping",
    filter: "ready",
  },
];

const FILTER_TABS = [
  { id: "all", label: "All Collections" },
  { id: "silk", label: "Pure Handloom Silks" },
  { id: "bridal", label: "Bridal & Festive" },
  { id: "lightweight", label: "Chanderi & Organza" },
  { id: "ready", label: "Ready to Ship" },
];

export function CategoriesGrid() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredCategories = CATEGORIES_DATA.filter(
    (cat) => activeFilter === "all" || cat.filter === activeFilter
  );

  return (
    <section
      id="categories"
      aria-label="Shop by Saree Category"
      className="w-full bg-white py-12 sm:py-16 md:py-24 relative overflow-hidden border-b border-[#E9DFD1]"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Header (Farco Architecture: Asymmetric Left Head & Right Link) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
          <div className="space-y-1 sm:space-y-2.5">
            
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="w-5 sm:w-6 h-[1.5px] bg-[#C69A52]" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.22em] sm:tracking-[0.26em] text-[#C69A52] flex items-center gap-1.5">
                <Gem className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C69A52]" />
                Curated Silk Traditions
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1A030C] tracking-tight">
              Shop By Category
            </h2>

            {/* Subtitle */}
            <p className="text-gray-600 text-xs sm:text-base max-w-xl font-normal leading-relaxed line-clamp-2 sm:line-clamp-none">
              Explore our iconic handloom saree traditions, celebrated for pure zari brocades, generational craftsmanship, and certified Silk Mark authenticity.
            </p>
          </div>

          {/* Right Header Link */}
          <Link
            href="#all-sarees"
            className="group inline-flex items-center gap-2 self-start sm:self-end text-xs sm:text-sm font-semibold text-[#8F1028] hover:text-[#65091B] transition-colors pb-0.5 sm:pb-1 border-b border-[#8F1028]/20 hover:border-[#8F1028]"
          >
            <span>View All Collections</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Interactive Filter Pills */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar pb-2 mb-8 sm:mb-10">
          {FILTER_TABS.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`whitespace-nowrap px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#8F1028] text-white shadow-sm"
                    : "bg-[#FAF4EB] text-[#292421] hover:bg-[#F2E7D7] border border-[#E9DFD1]/80"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* 6 Modern Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {filteredCategories.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group relative aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden bg-[#FAF0E7] border border-[#E9DFD1] hover:border-[#C69A52] shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-end"
            >
              {/* Category Photography with Smooth Slow Zoom */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                />

                {/* Soft gradient at bottom so the card floats crisply */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              </div>

              {/* Top-Right Badge */}
              {item.badge && (
                <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-10">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm backdrop-blur-md ${
                      item.isPopular
                        ? "bg-[#8F1028]/95 text-white border border-[#C69A52]/40"
                        : "bg-white/90 text-[#1A030C] border border-[#E9DFD1]"
                    }`}
                  >
                    {item.isPopular && <Sparkles className="w-2.5 h-2.5 text-[#E6D0A7]" />}
                    {item.badge}
                  </span>
                </div>
              )}

              {/* Floating Bottom Luxury Glass Card (Modern Farco Look) */}
              <div className="relative z-10 m-3.5 sm:m-4 bg-white/95 backdrop-blur-md rounded-xl p-4 sm:p-4.5 border border-[#E9DFD1] shadow-lg group-hover:border-[#C69A52]/80 group-hover:bg-white transition-all duration-300 flex items-center justify-between gap-3">
                <div className="flex-1 min-w-0">
                  
                  {/* Origin */}
                  <span className="text-[10px] font-bold tracking-[0.18em] text-[#C69A52] uppercase block truncate mb-0.5">
                    {item.origin}
                  </span>

                  {/* Title */}
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#1A030C] group-hover:text-[#8F1028] transition-colors leading-snug truncate">
                    {item.title}
                  </h3>

                  {/* Count */}
                  <span className="text-[11px] text-gray-500 font-medium block mt-0.5">
                    {item.count}
                  </span>
                </div>

                {/* Circular Action Arrow */}
                <div className="w-9 h-9 rounded-full bg-[#FAF4EB] border border-[#E9DFD1] flex items-center justify-center text-[#8F1028] group-hover:bg-[#8F1028] group-hover:text-white transition-all duration-300 flex-shrink-0 shadow-2xs group-hover:scale-105">
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>

            </Link>
          ))}
        </div>

        {/* Farco-style Bottom CTA */}
        <div className="mt-10 sm:mt-14 text-center">
          <Link
            href="#all-sarees"
            className="inline-flex items-center gap-2.5 px-7 sm:px-9 py-3 sm:py-3.5 rounded-full bg-[#8F1028] text-white font-semibold text-xs sm:text-sm tracking-wide shadow-md hover:shadow-lg hover:bg-[#65091B] transition-all duration-300 group cursor-pointer"
          >
            <span>Explore All 500+ Handloom Sarees</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}
