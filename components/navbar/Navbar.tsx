"use client";

import React, { useState, useEffect } from "react";
import { AnnouncementBar } from "./AnnouncementBar";
import { MainHeader } from "./MainHeader";
import { CategoryNav } from "./CategoryNav";
import { MobileDrawer } from "./MobileDrawer";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Robust jitter-free auto-hide on scroll down and reveal on scroll up
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateNavbar = () => {
      const currentScrollY = window.scrollY;

      // When near the top, always show navbar and reset elevation shadow
      if (currentScrollY <= 80) {
        setIsVisible(true);
        setIsScrolled(false);
        lastScrollY = currentScrollY;
        ticking = false;
        return;
      }

      setIsScrolled(true);

      const scrollDelta = currentScrollY - lastScrollY;

      // Require meaningful scroll delta (14px) to prevent micro-jitter & momentum bounces
      if (Math.abs(scrollDelta) > 14) {
        if (scrollDelta > 0 && currentScrollY > 120) {
          // Intentional scroll DOWN -> smoothly hide to top
          setIsVisible(false);
        } else if (scrollDelta < 0) {
          // Intentional scroll UP -> smoothly reveal top to bottom
          setIsVisible(true);
        }
        lastScrollY = currentScrollY;
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`w-full z-50 sticky top-0 flex flex-col font-sans transition-transform duration-300 ease-out will-change-transform ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${isScrolled ? "shadow-[0_4px_20px_rgba(41,36,33,0.12)]" : ""}`}
      >
        {/* Tier 1: Marquee Announcement Bar */}
        <AnnouncementBar />

        {/* Tier 2: Main Brand Header with Search & User Actions */}
        <MainHeader
          onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
          wishlistCount={3}
          cartCount={1}
        />

        {/* Tier 3: Secondary Category Navigation (Desktop/Tablet) */}
        <CategoryNav />
      </header>

      {/* Responsive Slide-out Mobile & Tablet Drawer */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
