"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Home,
  LayoutGrid,
  Heart,
  ShoppingBag,
  MessageCircle,
} from "lucide-react";

export function MobileBottomNav() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div
      aria-label="Mobile Bottom Navigation"
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#FFFDF8]/95 backdrop-blur-md border-t border-[#E9DFD1] shadow-[0_-4px_16px_rgba(41,36,33,0.08)] select-none px-2 py-1.5"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        
        {/* 1. Home */}
        <Link
          href="/"
          onClick={() => setActiveTab("home")}
          className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all ${
            activeTab === "home" ? "text-[#8F1028]" : "text-[#766D67] hover:text-[#8F1028]"
          }`}
        >
          <Home className={`w-5 h-5 ${activeTab === "home" ? "stroke-[2.2]" : "stroke-[1.8]"}`} />
          <span className="text-[10px] font-semibold tracking-tight mt-0.5">Home</span>
        </Link>

        {/* 2. Categories */}
        <Link
          href="#categories"
          onClick={() => setActiveTab("categories")}
          className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all ${
            activeTab === "categories" ? "text-[#8F1028]" : "text-[#766D67] hover:text-[#8F1028]"
          }`}
        >
          <LayoutGrid className={`w-5 h-5 ${activeTab === "categories" ? "stroke-[2.2]" : "stroke-[1.8]"}`} />
          <span className="text-[10px] font-semibold tracking-tight mt-0.5">Silks</span>
        </Link>

        {/* 3. WhatsApp Direct Concierge */}
        <a
          href="https://wa.me/919876543210?text=Hello%20Tarun%20Sari,%20I%20would%20like%20to%20view%20your%20bridal%20saree%20collection"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center -mt-4 group"
          aria-label="WhatsApp Bridal Concierge"
        >
          <div className="w-11 h-11 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg group-active:scale-95 transition-transform border-2 border-[#FFFDF8]">
            <MessageCircle className="w-5 h-5 fill-current" />
          </div>
          <span className="text-[9.5px] font-bold text-[#25D366] tracking-tight mt-0.5">Chat</span>
        </a>

        {/* 4. Wishlist */}
        <Link
          href="#featured-sarees"
          onClick={() => setActiveTab("wishlist")}
          className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl relative transition-all ${
            activeTab === "wishlist" ? "text-[#8F1028]" : "text-[#766D67] hover:text-[#8F1028]"
          }`}
        >
          <div className="relative">
            <Heart className={`w-5 h-5 ${activeTab === "wishlist" ? "stroke-[2.2]" : "stroke-[1.8]"}`} />
            <span className="absolute -top-1 -right-1.5 w-2 h-2 rounded-full bg-[#8F1028]" />
          </div>
          <span className="text-[10px] font-semibold tracking-tight mt-0.5">Wishlist</span>
        </Link>

        {/* 5. Bag */}
        <Link
          href="#featured-sarees"
          onClick={() => setActiveTab("cart")}
          className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl relative transition-all ${
            activeTab === "cart" ? "text-[#8F1028]" : "text-[#766D67] hover:text-[#8F1028]"
          }`}
        >
          <div className="relative">
            <ShoppingBag className={`w-5 h-5 ${activeTab === "cart" ? "stroke-[2.2]" : "stroke-[1.8]"}`} />
            <span className="absolute -top-1.5 -right-2 bg-[#8F1028] text-white text-[9px] font-bold min-w-[15px] h-[15px] px-0.5 rounded-full flex items-center justify-center border-1.5 border-[#FFFDF8]">
              0
            </span>
          </div>
          <span className="text-[10px] font-semibold tracking-tight mt-0.5">Bag</span>
        </Link>

      </div>
    </div>
  );
}
