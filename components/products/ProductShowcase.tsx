"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  ShoppingBag,
  Check,
  Star,
  ArrowRight,
  Gem,
  Eye,
} from "lucide-react";

export interface SareeProduct {
  id: string;
  name: string;
  category: "banarasi" | "kanchipuram" | "paithani" | "bridal" | "bandhani" | "chanderi";
  weave: string;
  purityBadge: string;
  discountPercent: number;
  price: number;
  originalPrice: number;
  rating: number;
  reviewsCount: number;
  mainImage: string;
  hoverImage: string;
  tag: string;
  href: string;
}

export const FEATURED_SAREES: SareeProduct[] = [
  {
    id: "banarasi-katan-shahi-crimson",
    name: "Shahi Gulabi Meenakari Banarasi Katan Silk Saree",
    category: "banarasi",
    weave: "Pure Katan Silk • Varanasi Master Looms",
    purityBadge: "Silk Mark",
    discountPercent: 18,
    price: 34500,
    originalPrice: 42000,
    rating: 4.9,
    reviewsCount: 42,
    mainImage: "/products/product-1.png",
    hoverImage: "/products/product-1-hover.png",
    tag: "Pure Gold Zari",
    href: "#product-banarasi-crimson",
  },
  {
    id: "kanchipuram-mayil-emerald",
    name: "Mayil Peacock Korvai Pure Kanchipuram Silk Saree",
    category: "kanchipuram",
    weave: "Mulberry Silk • Kanchipuram Looms",
    purityBadge: "Silk Mark",
    discountPercent: 17,
    price: 48000,
    originalPrice: 58000,
    rating: 5.0,
    reviewsCount: 29,
    mainImage: "/products/product-2.png",
    hoverImage: "/products/product-2-hover.png",
    tag: "Temple Korvai",
    href: "#product-kanchipuram-emerald",
  },
  {
    id: "paithani-mor-bangadi-blue",
    name: "Mor-Bangadi Royal Blue Pure Paithani Silk Saree",
    category: "paithani",
    weave: "Yeola Handloom • Pure Muga Silk",
    purityBadge: "Silk Mark",
    discountPercent: 17,
    price: 54000,
    originalPrice: 65000,
    rating: 4.9,
    reviewsCount: 34,
    mainImage: "/products/product-3.png",
    hoverImage: "/products/product-3-hover.png",
    tag: "Peacock Pallu",
    href: "#product-paithani-blue",
  },
  {
    id: "bridal-padmavati-velvet-crimson",
    name: "Rani Padmavati Imperial Zardozi Velvet Bridal Lehenga",
    category: "bridal",
    weave: "Raw Silk & Velvet • Hand Dabka Work",
    purityBadge: "Bridal Couture",
    discountPercent: 20,
    price: 88000,
    originalPrice: 110000,
    rating: 5.0,
    reviewsCount: 18,
    mainImage: "/products/product-4.png",
    hoverImage: "/products/product-4-hover.png",
    tag: "Double Dupatta",
    href: "#product-bridal-velvet",
  },
  {
    id: "bandhani-shikargah-jaipuri-red",
    name: "Jaipuri Shikargah Pure Georgette Bandhani Saree",
    category: "bandhani",
    weave: "Khatri Artisans • Hand-Tied Bandhej",
    purityBadge: "Jaipur Heritage",
    discountPercent: 16,
    price: 28500,
    originalPrice: 34000,
    rating: 4.8,
    reviewsCount: 31,
    mainImage: "/products/product-5.png",
    hoverImage: "/products/product-5-hover.png",
    tag: "Gota Patti Zari",
    href: "#product-bandhani-red",
  },
  {
    id: "chanderi-tissue-noor-peach",
    name: "Noor-E-Chanderi Tissue Organza Saree With Scallop Zari",
    category: "chanderi",
    weave: "Chanderi Silk-Cotton • Gold Booti",
    purityBadge: "Handwoven Silk",
    discountPercent: 13,
    price: 22500,
    originalPrice: 26000,
    rating: 4.9,
    reviewsCount: 24,
    mainImage: "/products/product-6.png",
    hoverImage: "/products/product-6-hover.png",
    tag: "Lightweight Luxe",
    href: "#product-chanderi-peach",
  },
];

const FILTER_TABS = [
  { id: "all", label: "All Masterpieces" },
  { id: "banarasi", label: "Banarasi Silks" },
  { id: "kanchipuram", label: "Kanchipuram" },
  { id: "paithani", label: "Paithani" },
  { id: "bridal", label: "Bridal Lehengas" },
  { id: "bandhani", label: "Bandhani & Festive" },
  { id: "chanderi", label: "Chanderi & Organza" },
];

export function ProductShowcase() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [wishlist, setWishlist] = useState<Record<string, boolean>>({});
  const [cartItems, setCartItems] = useState<Record<string, boolean>>({});

  const toggleWishlist = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleCart = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCartItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredProducts = FEATURED_SAREES.filter(
    (item) => activeFilter === "all" || item.category === activeFilter
  );

  return (
    <section
      id="featured-sarees"
      aria-label="Featured Saree Products"
      className="w-full bg-white py-12 sm:py-16 md:py-24 relative overflow-hidden border-b border-[#E9DFD1]/80 select-none"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Header Section (Farco Asymmetric Hierarchy) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4 sm:gap-6">
          <div className="space-y-1.5 sm:space-y-2.5">
            
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="w-5 sm:w-6 h-[1.5px] bg-[#C69A52]" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.24em] text-[#C69A52] flex items-center gap-1.5">
                <Gem className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C69A52]" />
                SIGNATURE MASTERPIECES
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1A030C] tracking-tight">
              Featured Silk Sarees
            </h2>

            {/* Subtitle */}
            <p className="text-gray-600 text-xs sm:text-base max-w-xl font-normal leading-relaxed line-clamp-2 sm:line-clamp-none">
              Hand-loomed over weeks with certified Silk Mark purity, authentic gold zari motifs, and generational craftsmanship from Varanasi, Kanchi, and Jaipur.
            </p>
          </div>

          {/* Right Header Link */}
          <Link
            href="#all-products"
            className="group inline-flex items-center gap-2 self-start sm:self-end text-xs sm:text-sm font-semibold text-[#8F1028] hover:text-[#65091B] transition-colors pb-0.5 sm:pb-1 border-b border-[#8F1028]/20 hover:border-[#8F1028]"
          >
            <span>View All Bestsellers</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Interactive Filter Pills */}
        <div
          className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar pb-2 mb-8 sm:mb-10"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
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

        {/* 6 Curated Product Showcase Cards Grid (Farco Modern Architecture) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
          {filteredProducts.map((item) => {
            const isWishlisted = !!wishlist[item.id];
            const isInCart = !!cartItems[item.id];

            return (
              <div
                key={item.id}
                className="group relative flex flex-col bg-white rounded-2xl sm:rounded-3xl border border-gray-100/90 hover:border-[#C69A52]/60 hover:shadow-xl hover:shadow-[#8F1028]/6 transition-all duration-300 p-2 sm:p-4"
              >
                {/* Product Image Frame with Dual Hover Zoom & Swap */}
                <Link
                  href={item.href}
                  className="block relative w-full aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-b from-[#FAF0E7]/60 to-[#FAF0E7]/25"
                >
                  {/* Primary Image */}
                  <Image
                    src={item.mainImage}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
                    className="object-cover object-top transition-all duration-500 ease-out group-hover:scale-105 group-hover:opacity-0"
                  />

                  {/* Hover Image (Close-up Zari / Pallu Detail) */}
                  <Image
                    src={item.hoverImage}
                    alt={`${item.name} detail`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
                    className="object-cover object-center opacity-0 group-hover:opacity-100 group-hover:scale-108 transition-all duration-700 ease-out"
                  />

                  {/* Top-Left Badges (Silk Mark & Discount) */}
                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex flex-col items-start gap-1 z-10 pointer-events-none">
                    <span className="inline-flex items-center gap-1 bg-[#8F1028] text-white text-[8px] sm:text-[10px] font-bold uppercase tracking-wider px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full shadow-xs w-fit">
                      <Gem className="w-2.5 h-2.5 text-[#E6D0A7]" />
                      {item.purityBadge}
                    </span>

                    {item.discountPercent > 0 && (
                      <span className="inline-block bg-[#C69A52] text-[#1A030C] text-[8px] sm:text-[10px] font-extrabold uppercase px-1.5 sm:px-2 py-0.5 rounded-full shadow-xs w-fit">
                        {item.discountPercent}% OFF
                      </span>
                    )}
                  </div>

                  {/* Top-Right Wishlist Heart Toggle */}
                  <button
                    type="button"
                    aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                    onClick={(e) => toggleWishlist(item.id, e)}
                    className={`absolute top-2 right-2 sm:top-3 sm:right-3 z-10 w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                      isWishlisted
                        ? "bg-white text-[#8F1028] shadow-md scale-105"
                        : "bg-white/90 backdrop-blur-xs text-gray-500 hover:text-[#8F1028] hover:bg-white hover:scale-110 shadow-xs"
                    }`}
                  >
                    <Heart
                      size={15}
                      strokeWidth={isWishlisted ? 2.2 : 1.8}
                      className={`sm:w-4.5 sm:h-4.5 ${
                        isWishlisted ? "fill-[#8F1028] text-[#8F1028]" : ""
                      }`}
                    />
                  </button>

                  {/* Desktop Quick Look Hover Banner */}
                  <div className="hidden sm:flex absolute inset-x-3 bottom-3 z-10 items-center justify-center py-2 px-3 bg-white/95 backdrop-blur-md rounded-xl text-xs font-semibold text-[#1A030C] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm gap-1.5 border border-[#E9DFD1]/80">
                    <Eye className="w-3.5 h-3.5 text-[#8F1028]" />
                    <span>Quick Preview</span>
                  </div>
                </Link>

                {/* Product Content Details */}
                <div className="flex flex-col flex-1 pt-2 sm:pt-3.5 px-0.5 sm:px-1">
                  
                  {/* Fabric & Weave Origin */}
                  <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#C69A52] mb-1 line-clamp-1">
                    {item.weave}
                  </p>

                  {/* Title */}
                  <Link href={item.href} className="block">
                    <h3 className="font-serif text-xs sm:text-[15px] md:text-base font-bold text-[#1A030C] group-hover:text-[#8F1028] transition-colors line-clamp-1 mb-1 sm:mb-1.5 leading-snug">
                      {item.name}
                    </h3>
                  </Link>

                  {/* Rating Stars */}
                  <div className="flex items-center gap-1.5 mb-2 sm:mb-3">
                    <div className="flex items-center text-amber-500">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <span className="text-[10px] sm:text-xs text-gray-500 font-medium">
                      ({item.reviewsCount})
                    </span>
                  </div>

                  {/* Bottom Row: Price & Add to Bag Trigger (Farco Architecture) */}
                  <div className="mt-auto pt-2 sm:pt-2.5 border-t border-gray-100/90 flex items-center justify-between gap-1">
                    <div className="flex flex-col min-w-0">
                      <div className="flex items-baseline gap-1.5 sm:gap-2 flex-wrap">
                        <span className="font-extrabold text-xs sm:text-base md:text-lg text-[#1A030C] leading-tight">
                          ₹{item.price.toLocaleString("en-IN")}
                        </span>
                        {item.originalPrice > item.price && (
                          <span className="text-gray-400 line-through text-[10px] sm:text-xs font-normal">
                            ₹{item.originalPrice.toLocaleString("en-IN")}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Circular Add to Bag Button */}
                    <button
                      type="button"
                      aria-label={isInCart ? "In shopping bag" : "Add to shopping bag"}
                      onClick={(e) => toggleCart(item.id, e)}
                      className={`shrink-0 w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                        isInCart
                          ? "bg-[#8F1028] text-white shadow-sm scale-105"
                          : "bg-[#FAF4EB] text-[#8F1028] hover:bg-[#8F1028] hover:text-white hover:scale-105 shadow-2xs border border-[#E9DFD1]/70"
                      }`}
                      title={isInCart ? "In Bag" : "Add to Bag"}
                    >
                      {isInCart ? (
                        <Check size={14} strokeWidth={2.2} className="sm:w-4 sm:h-4 text-white" />
                      ) : (
                        <ShoppingBag size={14} strokeWidth={1.8} className="sm:w-4 sm:h-4" />
                      )}
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Farco-style Bottom CTA Button */}
        <div className="mt-10 sm:mt-14 text-center">
          <Link
            href="#all-products"
            className="inline-flex items-center gap-2.5 px-7 sm:px-9 py-3 sm:py-3.5 rounded-full bg-[#8F1028] text-white font-bold text-xs sm:text-sm tracking-wide shadow-md hover:bg-[#65091B] hover:shadow-lg transition-all duration-300 active:scale-95 group cursor-pointer"
          >
            <span>Explore All 500+ Handloom Sarees</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}
