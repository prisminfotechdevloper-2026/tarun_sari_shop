"use client";

import React from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export interface CategoryItem {
  name: string;
  href: string;
  tag?: string;
  isHot?: boolean;
}

const CATEGORIES: CategoryItem[] = [
  { name: "All Sarees", href: "#all-sarees" },
  { name: "Banarasi Silk", href: "#banarasi-silk", tag: "Handwoven" },
  { name: "Kanchipuram", href: "#kanchipuram" },
  { name: "Chanderi & Organza", href: "#chanderi-organza" },
  { name: "Bridal Lehengas", href: "#bridal-lehengas", isHot: true },
  { name: "Bandhani & Georgette", href: "#bandhani" },
  { name: "Ready to Ship", href: "#ready-to-ship" },
  { name: "Heritage Edit", href: "#heritage" },
];

export function CategoryNav() {
  return (
    <div className="bg-[#FAF4EB] w-full hidden md:block border-b border-[#E9DFD1]/80 shadow-[0_2px_8px_rgba(41,36,33,0.03)] relative z-30">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <nav
          className="flex items-center justify-center lg:justify-start gap-6 lg:gap-9 py-2.5 overflow-x-auto no-scrollbar"
          aria-label="Category Navigation"
        >
          {CATEGORIES.map((cat) => (
            <div key={cat.name} className="relative group flex-shrink-0">
              <Link
                href={cat.href}
                className="text-[13.5px] lg:text-[14.5px] whitespace-nowrap tracking-wide transition-colors duration-200 inline-flex items-center gap-1.5 py-1 text-[#4A3E3D] group-hover:text-[#8F1028] font-medium"
              >
                <span>{cat.name}</span>

                {/* Badge tags */}
                {cat.isHot && (
                  <span className="inline-flex items-center gap-0.5 text-[9.5px] font-bold px-1.5 py-0.5 rounded-full bg-[#8F1028] text-white uppercase tracking-wider scale-90 group-hover:scale-95 transition-transform">
                    <Sparkles className="w-2.5 h-2.5" />
                    Bridal
                  </span>
                )}
                {cat.tag && !cat.isHot && (
                  <span className="inline-flex items-center text-[9px] font-semibold px-1.5 py-0.2 rounded-full border border-[#C69A52]/60 text-[#8F1028] bg-[#FFFDF8] uppercase tracking-wider scale-90">
                    {cat.tag}
                  </span>
                )}

                {/* Hover Underline Glint */}
                <span className="absolute -bottom-1 left-0 h-[2px] bg-[#8F1028] transition-all duration-200 w-0 group-hover:w-full rounded-full" />
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
