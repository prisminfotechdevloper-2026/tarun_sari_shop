import React from "react";
import { ShieldCheck, Crown, Truck, Sparkles } from "lucide-react";

export function TrustStrip() {
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
      icon: <Sparkles className="w-6 h-6 text-[#8F1028]" />,
      title: "Bespoke Bridal Tailoring",
      subtitle: "Custom blouse styling & hand-finished fall-pico",
    },
  ];

  return (
    <section
      aria-label="Brand trust highlights"
      className="w-full bg-[#FAF4EB] border-b border-[#E9DFD1] py-8 sm:py-10 px-4 sm:px-6 lg:px-10"
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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
    </section>
  );
}
