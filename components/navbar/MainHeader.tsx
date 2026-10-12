"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  User,
  Heart,
  ShoppingBag,
  Menu,
  Video,
  X,
} from "lucide-react";

interface MainHeaderProps {
  onOpenMobileMenu: () => void;
  onOpenMobileSearch?: () => void;
  wishlistCount?: number;
  cartCount?: number;
}

export function MainHeader({
  onOpenMobileMenu,
  wishlistCount = 2,
  cartCount = 0,
}: MainHeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Future routing or filter handler
      console.log("Searching for:", searchQuery);
    }
  };

  return (
    <div className="bg-[#FFFDF8] w-full py-2.5 sm:py-3.5 px-3.5 sm:px-6 lg:px-10 border-b border-[#E9DFD1] relative z-40 transition-colors">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-3 sm:gap-6 md:gap-8">
        
        {/* Brand Logo & Wordmark */}
        <Link
          href="/"
          className="flex items-center gap-2.5 sm:gap-3.5 group flex-shrink-0"
          aria-label="Tarun Sari & Lehenga Home"
        >
          <div className="w-11 h-13 sm:w-13 sm:h-15 relative flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo/logo-mark.png"
              alt="Tarun Sari & Lehenga Insignia"
              fill
              sizes="(max-width: 640px) 36px, 44px"
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-2xl font-bold tracking-[0.14em] sm:tracking-[0.18em] text-[#8F1028] leading-none">
              TARUN
            </span>
            <span className="text-[8.5px] sm:text-[10px] font-semibold tracking-[0.26em] sm:tracking-[0.32em] text-[#C69A52] uppercase leading-none mt-1 sm:mt-1.5">
              SARI & LEHENGA
            </span>
            <span className="hidden xl:inline text-[7.5px] tracking-[0.2em] text-[#766D67] uppercase font-light mt-0.5">
              Handloom • Bridal • Heritage
            </span>
          </div>
        </Link>

        {/* Center Search Bar (Desktop & Tablet) */}
        <div className="hidden md:flex items-center flex-1 max-w-xl xl:max-w-2xl mx-2 lg:mx-6">
          <form onSubmit={handleSearchSubmit} className="relative w-full flex items-center">
            <div className="relative w-full flex items-center bg-[#FAF6F0] rounded-full border border-[#E9DFD1] hover:border-[#C69A52] focus-within:border-[#8F1028] focus-within:bg-white transition-colors duration-200 shadow-2xs">
              <button
                type="submit"
                aria-label="Submit search"
                className="pl-4 sm:pl-5 pr-2 py-2.5 text-[#8F1028] hover:opacity-80 transition-opacity cursor-pointer outline-none focus:outline-none"
              >
                <Search className="w-4.5 h-4.5 text-[#8F1028]" />
              </button>
              <input
                type="text"
                placeholder="Search Banarasi Silk, Kanjivaram, Chanderi, Bridal Lehengas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-3 py-2.5 bg-transparent text-sm text-[#292421] placeholder:text-[#766D67]/70 placeholder:font-normal outline-none focus:outline-none border-none ring-0 shadow-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="p-1 mr-3 text-[#766D67] hover:text-[#8F1028] outline-none focus:outline-none cursor-pointer"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Right Actions & Utilities */}
        <div className="flex items-center gap-2.5 sm:gap-4 md:gap-6 text-[#8F1028] flex-shrink-0">
          
          {/* Video Consultation (Hidden on small screens) */}
          <Link
            href="#consultation"
            className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#C69A52]/40 bg-[#F7F0E6]/60 text-[#8F1028] hover:bg-[#F7F0E6] text-xs font-medium transition-colors"
            title="Book a live virtual bridal appointment"
          >
            <Video className="w-3.5 h-3.5 text-[#C69A52]" />
            <span>Virtual Concierge</span>
          </Link>

          {/* User Account */}
          <div className="relative">
            <Link
              href="#account"
              className="flex flex-col items-center justify-center group focus:outline-none cursor-pointer p-1 sm:p-0"
              aria-label="User Account"
            >
              <User className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#8F1028] group-hover:scale-105 transition-transform" />
              <span className="hidden sm:block text-[10px] sm:text-[11px] font-semibold text-[#8F1028] mt-1 leading-none tracking-tight">
                Account
              </span>
            </Link>
          </div>

          {/* Wishlist */}
          <div className="relative">
            <Link
              href="#wishlist"
              className="flex flex-col items-center justify-center group focus:outline-none cursor-pointer p-1 sm:p-0"
              aria-label="View Wishlist"
            >
              <div className="relative">
                <Heart className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#8F1028] group-hover:scale-105 transition-transform" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-[#C69A52] text-[#FFFDF8] text-[9px] font-bold min-w-[16px] h-4 px-1 rounded-full flex items-center justify-center border border-[#FFFDF8] shadow-xs">
                    {wishlistCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:block text-[10px] sm:text-[11px] font-semibold text-[#8F1028] mt-1 leading-none tracking-tight">
                Wishlist
              </span>
            </Link>
          </div>

          {/* Cart / Shopping Bag */}
          <div className="relative">
            <Link
              href="#cart"
              className="flex flex-col items-center justify-center group focus:outline-none cursor-pointer p-1 sm:p-0"
              aria-label="Shopping Bag"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#8F1028] group-hover:scale-105 transition-transform" />
                <span className="absolute -top-1.5 -right-2 bg-[#8F1028] text-white text-[9px] font-bold min-w-[16px] h-4 px-1 rounded-full flex items-center justify-center border border-[#FFFDF8] shadow-xs">
                  {cartCount}
                </span>
              </div>
              <span className="hidden sm:block text-[10px] sm:text-[11px] font-semibold text-[#8F1028] mt-1 leading-none tracking-tight">
                Bag
              </span>
            </Link>
          </div>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            type="button"
            onClick={onOpenMobileMenu}
            className="md:hidden p-1.5 rounded-lg text-[#8F1028] hover:bg-[#F7F0E6] cursor-pointer transition-colors"
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

      </div>
    </div>
  );
}
