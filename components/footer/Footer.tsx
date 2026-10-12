"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Gem,
  Truck,
} from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
      }, 4000);
    }
  };

  return (
    <footer
      aria-label="Tarun Sari & Lehenga Footer"
      className="w-full bg-[#1A030C] text-[#FFFDF8] relative overflow-hidden border-t-2 border-[#C69A52]/40 select-none"
    >
      {/* Background Decorative Gold Watermark Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#C69A52]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-[#8F1028]/10 blur-3xl pointer-events-none" />

      {/* Tier 1: Royal VIP Privé Newsletter Subscription Strip */}
      <div className="border-b border-[#C69A52]/20 bg-[#65091B]/50 py-10 sm:py-14 px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">
          
          <div className="text-center lg:text-left space-y-1.5 max-w-xl">
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <span className="w-5 h-[1.5px] bg-[#C69A52]" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.24em] text-[#C69A52] flex items-center gap-1.5">
                <Gem className="w-3.5 h-3.5 text-[#C69A52]" />
                TARUN ROYAL PRIVÉ
              </span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-[#FFFDF8] tracking-tight">
              Invitations to Private Handloom Releases
            </h3>
            <p className="text-xs sm:text-sm text-[#E6D0A7]/80 leading-relaxed">
              Join our royal patron list to receive private invitations to rare Varanasi silk drops, bridal styling previews, and seasonal concierge exhibitions.
            </p>
          </div>

          {/* Subscription Form */}
          <div className="w-full lg:w-auto min-w-[320px] sm:min-w-[420px]">
            {isSubscribed ? (
              <div className="flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#C69A52]/20 border border-[#C69A52]/60 text-[#E6D0A7] text-xs sm:text-sm font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#C69A52]" />
                <span>Welcome to Tarun Royal Privé. Invitation dispatched!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative flex items-center">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-5 pr-32 py-3.5 rounded-full bg-white/10 border border-[#C69A52]/30 text-xs sm:text-sm text-[#FFFDF8] placeholder:text-gray-400 focus:outline-none focus:border-[#C69A52] focus:bg-white/15 transition-all shadow-inner"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 px-5 py-2.5 rounded-full bg-[#8F1028] hover:bg-[#A31430] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md cursor-pointer flex items-center gap-1 active:scale-95"
                >
                  <span>Join Privé</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
            <p className="text-[10px] text-gray-400 text-center lg:text-left mt-2 px-2">
              We respect your privacy. Zero spam — only pure handloom curations.
            </p>
          </div>

        </div>
      </div>

      {/* Tier 2: Main Footer Navigation & Boutique Information Grid (4 Columns) */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Column 1: Brand Insignia & Legacy Story (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full bg-[#65091B] border border-[#C69A52]/50 flex items-center justify-center p-1.5 shadow-md group-hover:scale-105 transition-transform">
                <Image
                  src="/logo/logo-mark.png"
                  alt="Tarun Sari & Lehenga Insignia"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-[0.2em] text-[#FFFDF8] leading-none">
                  TARUN
                </span>
                <span className="text-[9px] font-medium tracking-[0.32em] text-[#C69A52] uppercase leading-none mt-1">
                  SARI & LEHENGA
                </span>
                <span className="text-[8px] tracking-[0.2em] text-gray-400 uppercase mt-0.5">
                  Handlooms Est. 1998
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-[13px] text-gray-300 leading-relaxed">
              Purveyors of authentic Indian handlooms, certified Silk Mark weaves, and royal bridal couture. Crafted on traditional pit looms across Varanasi, Kanchipuram, and Jaipur.
            </p>

            {/* Social Media Links */}
            <div className="space-y-2 pt-1">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#C69A52] block">
                Follow Royal Chronicles
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:border-[#C69A52] hover:bg-[#8F1028] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:border-[#C69A52] hover:bg-[#8F1028] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#1A030C" />
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:border-[#C69A52] hover:bg-[#8F1028] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Curated Silk Collections (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-sm sm:text-base font-bold text-[#E6D0A7] uppercase tracking-wider border-b border-[#C69A52]/20 pb-2">
              Curated Collections
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li>
                <Link href="#banarasi-silk" className="hover:text-[#C69A52] transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C69A52]/60" />
                  Banarasi Katan Silk Sarees
                </Link>
              </li>
              <li>
                <Link href="#kanchipuram" className="hover:text-[#C69A52] transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C69A52]/60" />
                  Kanchipuram Pure Zari Silks
                </Link>
              </li>
              <li>
                <Link href="#paithani-silk" className="hover:text-[#C69A52] transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C69A52]/60" />
                  Royal Paithani Peacock Weaves
                </Link>
              </li>
              <li>
                <Link href="#bridal-lehengas" className="hover:text-[#C69A52] transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C69A52]/60" />
                  Imperial Velvet Bridal Lehengas
                </Link>
              </li>
              <li>
                <Link href="#bandhani" className="hover:text-[#C69A52] transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C69A52]/60" />
                  Jaipuri Bandhani & Gharchola
                </Link>
              </li>
              <li>
                <Link href="#chanderi-organza" className="hover:text-[#C69A52] transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C69A52]/60" />
                  Chanderi & Sheer Organza
                </Link>
              </li>
              <li>
                <Link href="#ready-to-ship" className="hover:text-[#C69A52] transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C69A52]/60" />
                  Ready to Ship (24h Dispatch)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Client Concierge & Authenticity (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-sm sm:text-base font-bold text-[#E6D0A7] uppercase tracking-wider border-b border-[#C69A52]/20 pb-2">
              Bespoke Services
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li>
                <Link href="#heritage" className="hover:text-[#C69A52] transition-colors">
                  Silk Mark Purity Guide
                </Link>
              </li>
              <li>
                <Link href="#heritage" className="hover:text-[#C69A52] transition-colors">
                  Virtual Video Draping
                </Link>
              </li>
              <li>
                <Link href="#heritage" className="hover:text-[#C69A52] transition-colors">
                  Custom Blouse Tailoring
                </Link>
              </li>
              <li>
                <Link href="#heritage" className="hover:text-[#C69A52] transition-colors">
                  Fall-Pico Hand Finishing
                </Link>
              </li>
              <li>
                <Link href="#heritage" className="hover:text-[#C69A52] transition-colors">
                  Pure Silk Saree Care Guide
                </Link>
              </li>
              <li>
                <Link href="#heritage" className="hover:text-[#C69A52] transition-colors">
                  Worldwide Insured Shipping
                </Link>
              </li>
              <li>
                <Link href="#heritage" className="hover:text-[#C69A52] transition-colors">
                  15-Day Exchange Guarantee
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Flagship Boutiques & Direct Concierge (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-sm sm:text-base font-bold text-[#E6D0A7] uppercase tracking-wider border-b border-[#C69A52]/20 pb-2">
              Flagship Boutiques
            </h4>
            
            <div className="space-y-3.5 text-xs text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C69A52] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#FFFDF8] block">Varanasi Flagship:</span>
                  <span>Kashi Vishwanath Corridor, Varanasi, UP 221001</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C69A52] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#FFFDF8] block">Jaipur Heritage Store:</span>
                  <span>M.I. Road, Near Ajmeri Gate, Jaipur, RJ 302001</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#C69A52] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#FFFDF8] block">Bridal Concierge Helpline:</span>
                  <a href="tel:+919876543210" className="hover:text-[#C69A52] transition-colors">
                    +91 98765 43210 (10 AM - 8 PM IST)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#C69A52] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#FFFDF8] block">Direct Concierge Email:</span>
                  <a href="mailto:concierge@tarunsarishop.com" className="hover:text-[#C69A52] transition-colors">
                    concierge@tarunsarishop.com
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Tier 3: Quality Trust Seals, Payment Gateway Badges & Legal Copyright */}
      <div className="border-t border-[#C69A52]/20 bg-black/40 py-6 sm:py-8 px-4 sm:px-6 lg:px-12 text-xs text-gray-400 relative z-10">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          
          {/* Trust Guarantees */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 text-[11px] text-[#E6D0A7]/90 font-medium">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C69A52]" />
              Silk Mark Organization Certified
            </span>
            <span className="flex items-center gap-1.5">
              <Gem className="w-3.5 h-3.5 text-[#C69A52]" />
              100% Pure Zari Guarantee
            </span>
            <span className="flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-[#C69A52]" />
              Free Insured Shipping Across India
            </span>
          </div>

          {/* Secure Payment Badges */}
          <div className="flex items-center gap-2 text-[11px] font-semibold text-gray-300">
            <span className="text-gray-400">Accepted:</span>
            <span className="px-2 py-0.5 rounded bg-white/10 text-white font-mono text-[10px] border border-white/10">UPI</span>
            <span className="px-2 py-0.5 rounded bg-white/10 text-white font-mono text-[10px] border border-white/10">VISA</span>
            <span className="px-2 py-0.5 rounded bg-white/10 text-white font-mono text-[10px] border border-white/10">MasterCard</span>
            <span className="px-2 py-0.5 rounded bg-white/10 text-white font-mono text-[10px] border border-white/10">RuPay</span>
            <span className="px-2 py-0.5 rounded bg-white/10 text-white font-mono text-[10px] border border-white/10">NetBanking</span>
          </div>
        </div>

        {/* Copyright & Legal Links */}
        <div className="max-w-[1440px] mx-auto mt-6 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-gray-500 text-center sm:text-left">
          <p>
            © 2026 Tarun Sari & Lehenga. All Rights Reserved. Crafted with generational pride in India.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#heritage" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="#heritage" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
            <span>•</span>
            <Link href="#heritage" className="hover:text-gray-300 transition-colors">Silk Mark Compliance</Link>
          </div>
        </div>
      </div>

      {/* Extra bottom padding on mobile so content isn't covered by sticky bottom bar */}
      <div className="h-16 md:hidden" />
    </footer>
  );
}
