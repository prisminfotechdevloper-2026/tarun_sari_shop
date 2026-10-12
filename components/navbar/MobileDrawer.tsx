"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  Search,
  ChevronRight,
  Phone,
  Video,
  Sparkles,
  ShoppingBag,
  Heart,
  MessageCircle,
} from "lucide-react";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const MOBILE_CATEGORIES = [
  { name: "All Sarees", href: "#all-sarees", desc: "Complete handloom catalog" },
  { name: "Banarasi Katan Silk", href: "#banarasi-silk", tag: "Handwoven Zari" },
  { name: "Kanchipuram Silk", href: "#kanchipuram", tag: "Pure Gold Weave" },
  { name: "Chanderi & Organza", href: "#chanderi-organza", tag: "Lightweight Elegance" },
  { name: "Bridal Lehengas", href: "#bridal-lehengas", isHot: true, desc: "Bespoke bridal couture" },
  { name: "Bandhani & Georgette", href: "#bandhani", desc: "Heritage tie & dye" },
  { name: "Ready to Ship", href: "#ready-to-ship", tag: "Express Dispatch" },
  { name: "Heritage Atelier", href: "#heritage", desc: "Rare heirloom craft" },
];

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const [mobileSearch, setMobileSearch] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden flex justify-end" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#292421]/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-in drawer container */}
      <div className="relative w-full max-w-[340px] sm:max-w-[380px] bg-[#FFFDF8] h-full shadow-2xl flex flex-col z-10 overflow-hidden border-l border-[#E9DFD1] animate-in slide-in-from-right duration-300">
        
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#E9DFD1] bg-[#FAF4EB]">
          <Link href="/" onClick={onClose} className="flex items-center gap-2.5">
            <div className="w-9 h-11 relative flex-shrink-0">
              <Image
                src="/logo/logo-mark.png"
                alt="Tarun Sari & Lehenga Insignia"
                fill
                sizes="36px"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-base font-bold tracking-[0.14em] text-[#8F1028] leading-none">
                TARUN
              </span>
              <span className="text-[8.5px] font-semibold tracking-[0.24em] text-[#C69A52] uppercase leading-none mt-1">
                SARI & LEHENGA
              </span>
            </div>
          </Link>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-[#8F1028] hover:bg-[#F7F0E6] cursor-pointer transition-colors outline-none focus:outline-none"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="px-5 pt-4 pb-2">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onClose();
            }}
            className="relative"
          >
            <input
              type="text"
              placeholder="Search Banarasi, Lehengas..."
              value={mobileSearch}
              onChange={(e) => setMobileSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2.5 bg-[#FAF6F0] border border-[#E9DFD1] rounded-full text-xs text-[#292421] placeholder:text-[#766D67] focus:outline-none focus:border-[#8F1028] focus:bg-white transition-colors"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8F1028]" />
          </form>
        </div>

        {/* Scrollable Categories List */}
        <div className="flex-1 overflow-y-auto px-4 py-2 custom-scrollbar">
          <p className="text-[10px] font-bold tracking-widest text-[#8F1028]/70 uppercase px-3 pt-2 pb-1">
            Explore Collections
          </p>

          <div className="space-y-1 mt-1">
            {MOBILE_CATEGORIES.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                onClick={onClose}
                className="flex items-center justify-between px-3.5 py-3 rounded-lg text-sm font-medium text-[#292421] hover:bg-[#FAF4EB] hover:text-[#8F1028] transition-colors group"
              >
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="group-hover:translate-x-0.5 transition-transform">
                      {cat.name}
                    </span>
                    {cat.isHot && (
                      <span className="inline-flex items-center gap-0.5 text-[8.5px] font-bold px-1.5 py-0.2 rounded-full bg-[#8F1028] text-white">
                        <Sparkles className="w-2 h-2" /> Bridal
                      </span>
                    )}
                  </div>
                  {cat.tag && (
                    <span className="text-[10px] text-[#766D67] mt-0.5 font-normal">
                      {cat.tag}
                    </span>
                  )}
                </div>
                <ChevronRight className="w-4 h-4 text-[#C69A52] group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>

          {/* Quick Concierge Banner */}
          <div className="mt-4 p-3.5 rounded-xl bg-[#F7F0E6] border border-[#E9DFD1] space-y-2">
            <p className="text-[11px] font-semibold text-[#8F1028] flex items-center gap-1.5">
              <Video className="w-3.5 h-3.5 text-[#C69A52]" />
              Virtual Bridal Styling
            </p>
            <p className="text-[11px] text-[#766D67] leading-relaxed">
              Experience private video shopping with our master stylists before you buy.
            </p>
            <Link
              href="#consultation"
              onClick={onClose}
              className="inline-flex items-center justify-center w-full py-2 rounded-lg bg-[#8F1028] text-white text-xs font-semibold hover:bg-[#65091B] transition-colors"
            >
              Book Free Video Call
            </Link>
          </div>
        </div>

        {/* Footer Quick Links & Contact */}
        <div className="border-t border-[#E9DFD1] p-4 bg-[#FAF4EB] space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <Link
              href="#wishlist"
              onClick={onClose}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg border border-[#E9DFD1] bg-white text-xs font-semibold text-[#292421] hover:border-[#8F1028]"
            >
              <Heart className="w-3.5 h-3.5 text-[#8F1028]" />
              Wishlist
            </Link>
            <Link
              href="#cart"
              onClick={onClose}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg border border-[#E9DFD1] bg-white text-xs font-semibold text-[#292421] hover:border-[#8F1028]"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#8F1028]" />
              My Bag
            </Link>
          </div>

          <div className="flex items-center justify-between text-xs text-[#766D67] pt-1 px-1">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#8F1028] hover:underline font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              WhatsApp Help
            </a>
            <a
              href="tel:+919876543210"
              className="flex items-center gap-1 text-[#8F1028] hover:underline font-medium"
            >
              <Phone className="w-3.5 h-3.5" />
              +91 98765 43210
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
