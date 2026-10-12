"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSlider() {
  return (
    <div className="w-full flex flex-col font-sans select-none">
      
      {/* ========================================================
          DESKTOP HERO POSTER (Farco Architecture: aspect 21/9 or 2.5/1)
          Model on Right Side | Clean Text on Left Side
      ======================================================== */}
      <section
        role="region"
        aria-label="Tarun Sari & Lehenga Desktop Hero"
        className="relative w-full aspect-[21/10] lg:aspect-[2.2/1] min-h-[560px] lg:min-h-[620px] max-h-[820px] overflow-hidden bg-[#FAF0E7] hidden md:block"
      >
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/hero/hero-desktop-1.png"
            alt="Tarun Sari & Lehenga Royal Heritage Bridal Collection"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top lg:object-[center_top]"
          />

          {/* Left-side Content Container */}
          <div className="relative z-10 w-full h-full max-w-[1440px] mx-auto px-10 lg:px-16 flex items-center">
            <div className="max-w-md lg:max-w-xl space-y-3 sm:space-y-4">
              
              {/* Eyebrow with decorative gold/bronze lines and gem icon */}
              <div className="flex items-center gap-3">
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#5A2E0D] uppercase font-sans">
                  THE BRIDAL EDIT
                </span>
                <div className="flex items-center gap-1.5 opacity-90" aria-hidden="true">
                  <span className="w-8 sm:w-16 h-[1.5px] bg-[#6E3C14]" />
                  <svg className="w-3 h-3 text-[#6E3C14] fill-current" viewBox="0 0 24 24">
                    <polygon points="12,2 15,9 22,12 15,15 12,22 9,15 2,12 9,9" />
                  </svg>
                  <span className="w-8 sm:w-16 h-[1.5px] bg-[#6E3C14]" />
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-[54px] text-[#1A030C] leading-[1.08] tracking-tight font-bold">
                Sarees for <br />
                Your Most <br />
                <span className="italic text-[#8F1028] font-semibold">Precious Moments</span>
              </h1>

              {/* Description */}
              <p className="text-black text-xs sm:text-base max-w-md leading-relaxed font-medium">
                Timeless pure handloom creations crafted to celebrate heritage, traditions and royal bridal celebrations.
              </p>

              {/* CTA Button */}
              <div className="pt-2 sm:pt-4">
                <Link
                  href="#bridal-lehengas"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-sm bg-[#380614] hover:bg-[#22020B] text-[#FFF5EA] text-xs sm:text-sm font-semibold tracking-wide shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 group"
                >
                  <span className="text-white" >Explore Bridal Collection</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#E6D0A7]" />
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          MOBILE HERO POSTER (Farco Architecture: Dedicated Portrait Banner)
          Model in Lower Frame | Clean Text in Upper Frame
      ======================================================== */}
      <section
        role="region"
        aria-label="Tarun Sari & Lehenga Mobile Hero"
        className="relative w-full h-[580px] sm:h-[640px] overflow-hidden bg-[#FAF0E7] block md:hidden"
      >
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/hero/hero-mobile-1.png"
            alt="Tarun Sari & Lehenga Royal Heritage Bridal Collection"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top sm:object-[center_top]"
          />

          {/* Top-aligned Content Container */}
          <div className="relative z-10 w-full h-full px-5 pt-8 flex flex-col justify-start">
            <div className="max-w-[320px] space-y-2.5">
              
              {/* Eyebrow */}
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold tracking-[0.22em] text-[#5A2E0D] uppercase font-sans">
                  THE BRIDAL EDIT
                </span>
                <div className="flex items-center gap-1 opacity-90" aria-hidden="true">
                  <span className="w-6 h-[1.5px] bg-[#6E3C14]" />
                  <svg className="w-2.5 h-2.5 text-[#6E3C14] fill-current" viewBox="0 0 24 24">
                    <polygon points="12,2 15,9 22,12 15,15 12,22 9,15 2,12 9,9" />
                  </svg>
                  <span className="w-6 h-[1.5px] bg-[#6E3C14]" />
                </div>
              </div>

              {/* Headline */}
              <h1 className="font-serif text-[26px] sm:text-[30px] text-[#1A030C] leading-[1.1] tracking-tight font-bold">
                Sarees for Your Most <br />
                <span className="italic text-[#8F1028] font-semibold">Precious Moments</span>
              </h1>

              {/* Description */}
              <p className="text-[#1F191B] text-xs max-w-[280px] leading-relaxed font-medium">
                Timeless pure handloom creations crafted to celebrate heritage, traditions and royal bridal celebrations.
              </p>

              {/* CTA Button */}
              <div className="pt-2">
                <Link
                  href="#bridal-lehengas"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#380614] hover:bg-[#22020B] text-[#FFF5EA] text-xs font-semibold tracking-wide shadow-md active:scale-95 group"
                >
                  <span className="text-white" >Explore Bridal Collection</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-[#E6D0A7]" />
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
