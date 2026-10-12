"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export interface SareeCategory {
  id: string;
  name: string;
  tag: string;
  count: string;
  image: string;
  href: string;
  badge?: string;
}

export const SAREE_CATEGORIES: SareeCategory[] = [
  {
    id: "banarasi",
    name: "Banarasi Katan Silk",
    tag: "Varanasi Pure Zari",
    count: "180+ Designs",
    image: "/categories/category-banarasi.png",
    href: "#banarasi-silk",
    badge: "Silk Mark",
  },
  {
    id: "kanchipuram",
    name: "Kanchipuram Silk",
    tag: "Temple Korvai Borders",
    count: "140+ Designs",
    image: "/categories/category-kanchipuram.png",
    href: "#kanchipuram",
    badge: "Pure Zari",
  },
  {
    id: "chanderi",
    name: "Chanderi & Organza",
    tag: "Lightweight Weaves",
    count: "95+ Designs",
    image: "/categories/category-chanderi.png",
    href: "#chanderi-organza",
  },
  {
    id: "bridal-lehengas",
    name: "Bridal Lehengas",
    tag: "Zardozi & Velvet",
    count: "60+ Coutures",
    image: "/categories/category-bridal.png",
    href: "#bridal-lehengas",
    badge: "Royal Bridal",
  },
  {
    id: "bandhani",
    name: "Bandhani & Gharchola",
    tag: "Jaipur Heritage Tie & Dye",
    count: "85+ Designs",
    image: "/categories/category-bandhani.png",
    href: "#bandhani",
  },
  {
    id: "paithani",
    name: "Paithani Silks",
    tag: "Peacock Pallu Weaves",
    count: "75+ Designs",
    image: "/categories/category-paithani.png",
    href: "#paithani-silk",
    badge: "Heritage",
  },
  {
    id: "ready-to-ship",
    name: "Ready to Ship Silks",
    tag: "Express Dispatch",
    count: "120+ In Stock",
    image: "/categories/category-ready.png",
    href: "#ready-to-ship",
    badge: "24h Dispatch",
  },
];

export function CategoriesGrid() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll > 0) {
      setScrollProgress((el.scrollLeft / maxScroll) * 100);
    }
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const handleScroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollAmount = el.clientWidth * 0.75;
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="categories"
      aria-label="Shop by Saree Category"
      className="w-full bg-[#FCFAF7] py-12 sm:py-16 md:py-24 relative overflow-hidden border-b border-[#E9DFD1]/80 select-none"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header (Farco Architecture: Left Heading & Right Carousel Arrows) */}
        <div className="flex items-end justify-between mb-6 sm:mb-10 lg:mb-12 gap-4">
          <div className="space-y-1.5 sm:space-y-2.5">
            
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="w-5 sm:w-6 h-[1.5px] bg-[#C69A52]" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.24em] text-[#C69A52]">
                CURATED SILK COLLECTIONS
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1A030C] tracking-tight">
              Shop By Category
            </h2>

            {/* Subtitle */}
            <p className="text-gray-600 text-xs sm:text-base max-w-xl font-normal leading-relaxed line-clamp-2 sm:line-clamp-none">
              Explore our handcrafted pure silk sarees, sculpted with certified Silk Mark authenticity and centuries-old royal Indian heritage.
            </p>
          </div>

          {/* Carousel Arrow Controls (Farco Interactive Slider) */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            <button
              type="button"
              onClick={() => handleScroll("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll categories left"
              className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-[#8F1028]/15 flex items-center justify-center transition-all cursor-pointer ${
                canScrollLeft
                  ? "bg-white text-[#8F1028] hover:bg-[#8F1028] hover:text-white hover:border-[#8F1028] shadow-sm active:scale-95"
                  : "bg-white/40 text-gray-300 border-gray-200 cursor-not-allowed opacity-40"
              }`}
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll("right")}
              disabled={!canScrollRight}
              aria-label="Scroll categories right"
              className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-[#8F1028]/15 flex items-center justify-center transition-all cursor-pointer ${
                canScrollRight
                  ? "bg-white text-[#8F1028] hover:bg-[#8F1028] hover:text-white hover:border-[#8F1028] shadow-sm active:scale-95"
                  : "bg-white/40 text-gray-300 border-gray-200 cursor-not-allowed opacity-40"
              }`}
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Farco Smooth Horizontal Scrollable Category Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-3 sm:gap-5 md:gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-2 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-12 lg:px-12"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {SAREE_CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className="group flex-shrink-0 w-[140px] sm:w-[180px] md:w-[210px] lg:w-[230px] snap-start flex flex-col items-center text-center p-2.5 sm:p-4 md:p-5 rounded-2xl sm:rounded-3xl bg-white border border-[#8F1028]/10 hover:border-[#8F1028]/35 hover:shadow-xl transition-all duration-300 active:scale-[0.98]"
            >
              {/* Category Image Frame */}
              <div className="relative w-full aspect-square rounded-xl sm:rounded-2xl bg-[#FAF0E7]/60 mb-2.5 sm:mb-3.5 overflow-hidden border border-[#8F1028]/5 group-hover:bg-[#FAF0E7] transition-colors flex items-center justify-center">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 640px) 140px, (max-width: 768px) 180px, 230px"
                  className="object-cover object-top group-hover:scale-108 transition-transform duration-500 drop-shadow-2xs"
                />

                {/* Subtle Badge */}
                {cat.badge && (
                  <span className="absolute top-2 right-2 bg-[#8F1028]/95 text-white text-[9px] font-bold px-2 py-0.5 rounded-full backdrop-blur-xs tracking-wider uppercase shadow-2xs border border-[#C69A52]/30">
                    {cat.badge}
                  </span>
                )}
              </div>

              {/* Category Title */}
              <h3 className="font-serif font-bold text-xs sm:text-base md:text-lg text-[#1A030C] group-hover:text-[#8F1028] transition-colors line-clamp-1 capitalize tracking-wide w-full px-0.5">
                {cat.name}
              </h3>

              {/* Tag / Item Count */}
              <span className="text-[10px] sm:text-[11px] text-[#C69A52] font-semibold tracking-wider uppercase mt-1">
                {cat.count}
              </span>

              {/* Farco Hover Explore Action */}
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-[#8F1028]/70 group-hover:text-[#8F1028] mt-1.5 transition-colors">
                Explore <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>

        {/* Farco Mobile Scroll Progress Indicator */}
        <div className="sm:hidden flex items-center justify-center gap-1.5 mt-5">
          <div className="w-20 h-1 bg-[#8F1028]/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#8F1028] rounded-full transition-all duration-100 ease-out"
              style={{ width: `${Math.max(20, scrollProgress)}%` }}
            />
          </div>
        </div>

        {/* Farco Bottom CTA */}
        <div className="mt-8 sm:mt-12 text-center">
          <Link
            href="#all-sarees"
            className="inline-flex items-center gap-2.5 px-7 sm:px-9 py-3 sm:py-3.5 rounded-full bg-[#8F1028] text-white font-bold text-xs sm:text-sm tracking-wide shadow-md hover:bg-[#65091B] hover:shadow-lg transition-all duration-300 active:scale-95 group cursor-pointer"
          >
            <span>View All Collections</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}
