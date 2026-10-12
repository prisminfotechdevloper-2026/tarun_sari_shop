import React from "react";
import { Award, ShieldCheck, Truck, Crown, PhoneCall, Gem } from "lucide-react";

export function AnnouncementBar() {
  const highlights = [
    {
      icon: <Gem className="w-3.5 h-3.5 text-[#C69A52] flex-shrink-0" />,
      text: "Pure Silk Mark Certified Handlooms",
    },
    {
      icon: <Crown className="w-3.5 h-3.5 text-[#C69A52] flex-shrink-0" />,
      text: "Royal Bridal Heritage Since 1998",
    },
    {
      icon: <Truck className="w-3.5 h-3.5 text-[#C69A52] flex-shrink-0" />,
      text: "Free Express Shipping Across India",
    },
    {
      icon: <ShieldCheck className="w-3.5 h-3.5 text-[#C69A52] flex-shrink-0" />,
      text: "100% Authentic Handcrafted Weaves",
    },
    {
      icon: <Award className="w-3.5 h-3.5 text-[#C69A52] flex-shrink-0" />,
      text: "Direct from Master Weavers of Varanasi & Kanchipuram",
    },
    {
      icon: <PhoneCall className="w-3.5 h-3.5 text-[#C69A52] flex-shrink-0" />,
      text: "Complimentary Video Call Shopping: +91 98765 43210",
    },
  ];

  return (
    <div
      role="region"
      aria-label="Announcement ticker"
      className="bg-[#65091B] text-[#FFFDF8] w-full py-2 sm:py-2.5 text-[11px] sm:text-xs font-medium border-b border-[#C69A52]/20 select-none overflow-hidden relative z-50"
    >
      <div className="flex w-max animate-marquee items-center whitespace-nowrap">
        {/* First track */}
        <div className="flex items-center flex-shrink-0">
          {highlights.map((item, idx) => (
            <div key={`track1-${idx}`} className="flex items-center flex-shrink-0">
              <div className="flex items-center gap-2">
                {item.icon}
                <span className="tracking-wide text-[#F7F0E6] font-normal">{item.text}</span>
              </div>
              <span
                className="w-1.5 h-1.5 rounded-full bg-[#C69A52] mx-6 sm:mx-8 flex-shrink-0 inline-block shadow-[0_0_6px_rgba(198,154,82,0.6)]"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>

        {/* Duplicate track for seamless infinite marquee loop */}
        <div className="flex items-center flex-shrink-0" aria-hidden="true">
          {highlights.map((item, idx) => (
            <div key={`track2-${idx}`} className="flex items-center flex-shrink-0">
              <div className="flex items-center gap-2">
                {item.icon}
                <span className="tracking-wide text-[#F7F0E6] font-normal">{item.text}</span>
              </div>
              <span
                className="w-1.5 h-1.5 rounded-full bg-[#C69A52] mx-6 sm:mx-8 flex-shrink-0 inline-block shadow-[0_0_6px_rgba(198,154,82,0.6)]"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
