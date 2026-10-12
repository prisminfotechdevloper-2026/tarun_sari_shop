"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  Video,
  X,
  CheckCircle2,
  Phone,
  MessageCircle,
  Gem,
  ArrowRight,
  Play,
  Users,
} from "lucide-react";

export function HeritageSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    weddingDate: "",
    sareeInterest: "Banarasi Katan Silk",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setIsModalOpen(false);
    }, 2800);
  };

  return (
    <section
      id="heritage"
      aria-label="Artisan Heritage and Craftsmanship"
      className="w-full bg-[#FAF4EB] py-14 sm:py-20 lg:py-28 relative overflow-hidden border-b border-[#E9DFD1] select-none"
    >
      {/* Subtle royal background watermark arch */}
      <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-[#C69A52]/5 blur-3xl pointer-events-none" />
      <div className="absolute -left-24 -top-24 w-96 h-96 rounded-full bg-[#8F1028]/5 blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        {/* Main Grid: Story on Left, Visual Montage on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left Column (7 cols on lg): Narrative & Trust Pillars */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">

            {/* Header & Eyebrow */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-2">
                <span className="w-5 sm:w-6 h-[1.5px] bg-[#C69A52]" />
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.24em] text-[#C69A52] flex items-center gap-1.5">
                  <Gem className="w-3.5 h-3.5 text-[#C69A52]" />
                  ARTISAN HERITAGE & PURITY
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1A030C] tracking-tight leading-tight">
                Woven by Master Hands, <br />
                <span className="italic text-[#8F1028] font-semibold">
                  Preserved Across Generations
                </span>
              </h2>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed pt-1">
                Every Tarun saree is not merely fabric — it is a living symphony of pure mulberry silk and authentic zari, crafted on traditional wooden pit looms in Varanasi, Kanchipuram, and Paithan. A single bridal drape demands 180 to 240 hours of patient, millimeter-precise hand-shuttling by master weavers whose lineages date back to royal court ateliers.
              </p>
            </div>

            {/* Three Craftsmanship Trust Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">

              {/* Pillar 1 */}
              <div className="bg-white/80 backdrop-blur-xs rounded-2xl p-4 border border-[#E9DFD1] hover:border-[#C69A52]/60 hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#FFFDF8] border border-[#C69A52]/30 flex items-center justify-center text-[#8F1028] mb-3 shadow-2xs">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-sm text-[#1A030C] mb-1">
                  Silk Mark Certified
                </h3>
                <p className="text-[11px] text-gray-500 leading-normal">
                  100% natural pure silk thread with tamper-proof certification tag.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="bg-white/80 backdrop-blur-xs rounded-2xl p-4 border border-[#E9DFD1] hover:border-[#C69A52]/60 hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#FFFDF8] border border-[#C69A52]/30 flex items-center justify-center text-[#8F1028] mb-3 shadow-2xs">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-sm text-[#1A030C] mb-1">
                  Real Zari Guarantee
                </h3>
                <p className="text-[11px] text-gray-500 leading-normal">
                  Electroplated gold & silver zari tested to retain lifelong sheen.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="bg-white/80 backdrop-blur-xs rounded-2xl p-4 border border-[#E9DFD1] hover:border-[#C69A52]/60 hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#FFFDF8] border border-[#C69A52]/30 flex items-center justify-center text-[#8F1028] mb-3 shadow-2xs">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-sm text-[#1A030C] mb-1">
                  Direct Weaver Guild
                </h3>
                <p className="text-[11px] text-gray-500 leading-normal">
                  Zero intermediaries, directly empowering 500+ master loom families.
                </p>
              </div>

            </div>

            {/* Heritage Numbers / Trust Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-3 border-y border-[#E9DFD1]">
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#8F1028] block">
                  25+
                </span>
                <span className="text-[11px] text-[#766D67] font-semibold uppercase tracking-wider block mt-0.5">
                  Years of Trust
                </span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#8F1028] block">
                  500+
                </span>
                <span className="text-[11px] text-[#766D67] font-semibold uppercase tracking-wider block mt-0.5">
                  Master Looms
                </span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#8F1028] block">
                  45,000+
                </span>
                <span className="text-[11px] text-[#766D67] font-semibold uppercase tracking-wider block mt-0.5">
                  Royal Brides
                </span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#8F1028] block">
                  100%
                </span>
                <span className="text-[11px] text-[#766D67] font-semibold uppercase tracking-wider block mt-0.5">
                  Silk Mark Purity
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#8F1028] text-white font-bold text-xs sm:text-sm tracking-wide shadow-md hover:bg-[#65091B] hover:shadow-lg transition-all duration-300 active:scale-95 cursor-pointer"
              >
                <Video className="w-4 h-4 text-[#E6D0A7]" />
                <span>Request a Live Video Showcase</span>
              </button>

              <a
                href="https://wa.me/919876543210?text=Hello%20Tarun%20Sari,%20I%20would%20like%20to%20know%20more%20about%20your%20handloom%20sarees"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-white text-[#1A030C] border border-[#E9DFD1] hover:border-[#C69A52] font-semibold text-xs sm:text-sm shadow-xs hover:bg-[#FAF4EB] transition-all duration-300 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Master Drapist</span>
              </a>
            </div>

          </div>

          {/* Right Column (5 cols on lg): Editorial Montage Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white aspect-[4/5] bg-[#FFFDF8]">

              {/* Background Photography: Royal Palace Corridor */}
              <Image
                src="/heritage/heritage-corridor.png"
                alt="Tarun Sari Handloom Heritage Corridor"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Top Silk Mark Hologram Badge */}
              <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 px-3.5 border border-[#C69A52]/40 shadow-lg flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#8F1028] flex items-center justify-center text-white">
                  <ShieldCheck className="w-4 h-4 text-[#E6D0A7]" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#8F1028] block leading-none">
                    Certified Silk Mark
                  </span>
                  <span className="text-[9px] text-gray-500 font-medium block mt-0.5">
                    Govt. of India Quality Seal
                  </span>
                </div>
              </div>

              {/* Center Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  aria-label="Watch Artisan Loom Story"
                  className="group relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 backdrop-blur-md border-2 border-[#C69A52] text-[#8F1028] shadow-2xl hover:scale-110 hover:bg-[#8F1028] hover:text-white transition-all duration-300 cursor-pointer"
                >
                  <Play className="w-6 h-6 sm:w-7 sm:h-7 ml-1 fill-current" />
                  <span className="absolute -bottom-8 whitespace-nowrap text-[11px] font-bold text-white tracking-widest uppercase drop-shadow-md bg-black/40 px-2.5 py-0.5 rounded-full">
                    Watch Loom Process
                  </span>
                </button>
              </div>

              {/* Bottom Artisan Card */}
              <div className="absolute bottom-4 inset-x-4 z-10 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 border border-[#E9DFD1] shadow-xl flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <span className="text-[9.5px] font-bold tracking-[0.2em] text-[#C69A52] uppercase block">
                    Varanasi Master Looms
                  </span>
                  <p className="font-serif text-sm sm:text-base font-bold text-[#1A030C] truncate">
                    180+ Hours of Pure Zari Weaving
                  </p>
                  <span className="text-[10px] text-gray-500 font-medium block mt-0.5">
                    Tested natural silk fibers & handcrafted borders
                  </span>
                </div>

                <div className="w-9 h-9 rounded-full bg-[#8F1028] flex items-center justify-center text-white flex-shrink-0 shadow-xs">
                  <Gem className="w-4 h-4 text-[#E6D0A7]" />
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Accessible Interactive Bridal Concierge Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-lg bg-[#FFFDF8] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E9DFD1] max-h-[90vh] overflow-y-auto no-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-[#8F1028] hover:bg-gray-100 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {formSubmitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center border border-emerald-200">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1A030C]">
                  Concierge Appointment Requested!
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
                  Our master saree consultant will connect with you via WhatsApp & Video Call within 30 minutes to showcase handpicked weaves directly from our Varanasi loomed vault.
                </p>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-4 h-1 bg-[#C69A52] rounded-full" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#C69A52]">
                    Bespoke Video Experience
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A030C] mb-2">
                  Request a Live Video Showcase
                </h3>
                <p className="text-xs text-gray-600 mb-6 leading-relaxed">
                  See our sarees and bridal collections live from the comfort of your home before visiting our store.                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1A030C] mb-1">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Radhika Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E9DFD1] bg-white text-sm text-[#1A030C] focus:border-[#8F1028] focus:ring-1 focus:ring-[#8F1028] outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#1A030C] mb-1">
                        WhatsApp Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E9DFD1] bg-white text-sm text-[#1A030C] focus:border-[#8F1028] focus:ring-1 focus:ring-[#8F1028] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#1A030C] mb-1">
                        Wedding / Occasion Date
                      </label>
                      <input
                        type="date"
                        value={formData.weddingDate}
                        onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#E9DFD1] bg-white text-sm text-[#1A030C] focus:border-[#8F1028] focus:ring-1 focus:ring-[#8F1028] outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1A030C] mb-1">
                      Preferred Saree Style
                    </label>
                    <select
                      value={formData.sareeInterest}
                      onChange={(e) => setFormData({ ...formData, sareeInterest: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E9DFD1] bg-white text-sm text-[#1A030C] focus:border-[#8F1028] focus:ring-1 focus:ring-[#8F1028] outline-none"
                    >
                      <option value="Banarasi Katan Silk">Banarasi Katan Silk (Varanasi)</option>
                      <option value="Kanchipuram Temple Silk">Kanchipuram Pure Zari Silk</option>
                      <option value="Paithani Peacock Saree">Pure Paithani Silk (Yeola)</option>
                      <option value="Bridal Velvet Lehenga">Imperial Bridal Lehenga & Dupatta</option>
                      <option value="Bandhani Gharchola">Jaipuri Bandhani & Gharchola</option>
                      <option value="Chanderi Organza">Lightweight Chanderi & Organza</option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-full bg-[#8F1028] text-white font-bold text-xs sm:text-sm tracking-wide shadow-md hover:bg-[#65091B] transition-all cursor-pointer"
                    >
                      Request Live Video Demo
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-2 pt-1 text-[11px] text-gray-500">
                    <Phone className="w-3.5 h-3.5 text-[#8F1028]" />
                    <span>Instant assistance? Call us directly: +91 98765 43210</span>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
