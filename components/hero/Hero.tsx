import React from "react";
import { HeroSlider } from "./HeroSlider";
import { TrustStrip } from "./TrustStrip";

export function Hero() {
  return (
    <section aria-label="Hero Section" className="w-full flex flex-col">
      <HeroSlider />
      <TrustStrip />
    </section>
  );
}
