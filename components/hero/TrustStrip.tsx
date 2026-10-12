"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import { ShieldCheck, Crown, Truck, Scissors, ChevronLeft, ChevronRight } from "lucide-react";

export function TrustStrip() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#8F1028]" />,
      title: "Pure Silk Mark Certified",
      subtitle: "100% natural handloom fabric with authenticity seal",
    },
    {
      icon: <Crown className="w-6 h-6 text-[#8F1028]" />,
      title: "Royal Heritage Looms",
      subtitle: "Direct from master weavers of Varanasi & Kanchi",
    },
    {
      icon: <Truck className="w-6 h-6 text-[#8F1028]" />,
      title: "Complimentary Delivery",
      subtitle: "Free insured express shipping all across India",
    },
    {
      icon: <Scissors className="w-6 h-6 text-[#8F1028]" />,
      title: "Bespoke Bridal Tailoring",
      subtitle: "Custom blouse styling & hand-finished fall-pico",
    },
  ];

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const width = el.clientWidth;
    if (width > 0) {
      const newIndex = Math.round(el.scrollLeft / width);
      const clamped = Math.max(0, Math.min(features.length - 1, newIndex));
      setActiveIndex(clamped);
    }
  }, [features.length]);

  const scrollToIndex = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const targetX = index * el.clientWidth;
    el.scrollTo({
      left: targetX,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  const scrollPrev = () => {
    if (activeIndex > 0) {
      scrollToIndex(activeIndex - 1);
    }
  };

  const scrollNext = () => {
    if (activeIndex < features.length - 1) {
      scrollToIndex(activeIndex + 1);
    }
  };

  // Re-sync on resize
  useEffect(() => {
    const handleResize = () => {
      const el = scrollRef.current;
      if (!el) return;
      el.scrollTo({
        left: activeIndex * el.clientWidth,
        behavior: "instant",
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeIndex]);

  return (
    <section
      aria-label="Brand trust highlights"
      className="w-full bg-[#FAF4EB] border-b border-[#E9DFD1] py-5 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-10 select-none"
    >
      <div className="max-w-[1440px] mx-auto">
        
        {/* Desktop Layout (Large Screens): 4-Column Row */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3.5 p-3 rounded-xl transition-transform hover:-translate-y-0.5"
            >
              <div className="p-2.5 rounded-full bg-[#FFFDF8] border border-[#C69A52]/30 shadow-xs flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="font-serif text-base font-bold text-[#65091B] leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#766D67] mt-1 leading-relaxed">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Small Screen Layout (Mobile / Tablet): Single Item Row Carousel with Right-Bottom Arrows */}
        <div className="lg:hidden">
          {/* Scrollable Single-Item Track */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth w-full"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {features.map((item, idx) => (
              <div
                key={idx}
                className="w-full flex-shrink-0 snap-center"
              >
                <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl bg-white/70 border border-[#E9DFD1] shadow-2xs">
                  <div className="p-2.5 rounded-full bg-[#FFFDF8] border border-[#C69A52]/30 shadow-xs flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-[15px] sm:text-base font-bold text-[#65091B] leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#766D67] mt-0.5 leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Bar: Slide Indicator on Left & Navigation Arrows on Right */}
          <div className="flex items-center justify-between mt-3 pt-1 px-1">
            {/* Step Indicator & Dots */}
            <div className="flex items-center gap-1.5">
              {features.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => scrollToIndex(idx)}
                  aria-label={`Go to feature ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === idx
                      ? "w-5 bg-[#8F1028]"
                      : "w-1.5 bg-[#8F1028]/25 hover:bg-[#8F1028]/50"
                  }`}
                />
              ))}
              <span className="text-[10px] font-semibold text-[#8F1028]/70 ml-1.5 tracking-wider">
                0{activeIndex + 1} / 0{features.length}
              </span>
            </div>

            {/* Right Bottom Scroll Arrows */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={scrollPrev}
                disabled={activeIndex === 0}
                aria-label="Previous feature"
                className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                  activeIndex === 0
                    ? "bg-white/40 text-gray-300 border-gray-200 cursor-not-allowed opacity-40"
                    : "bg-white text-[#8F1028] border-[#8F1028]/20 hover:bg-[#8F1028] hover:text-white shadow-2xs active:scale-95"
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={scrollNext}
                disabled={activeIndex === features.length - 1}
                aria-label="Next feature"
                className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                  activeIndex === features.length - 1
                    ? "bg-white/40 text-gray-300 border-gray-200 cursor-not-allowed opacity-40"
                    : "bg-white text-[#8F1028] border-[#8F1028]/20 hover:bg-[#8F1028] hover:text-white shadow-2xs active:scale-95"
                }`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
