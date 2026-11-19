"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { LOCATION_PILLS } from "@/data/companions";
import type { DirectoryCategory } from "./CompanionsDirectory";

interface LocationAndBannerProps {
  onSelectCategory: (cat: DirectoryCategory) => void;
  onSelectLocation: (loc: string) => void;
}

export function LocationAndBanner({
  onSelectCategory,
  onSelectLocation,
}: LocationAndBannerProps) {
  const handlePillClick = (pill: (typeof LOCATION_PILLS)[number]) => {
    if ("location" in pill && pill.location) {
      onSelectLocation(pill.location);
    } else if ("filterType" in pill && pill.filterType) {
      onSelectCategory(pill.filterType);
    }
    const el = document.getElementById("directory");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Location & Category Quick Links Box */}
      <div className="rounded-2xl bg-card gold-border-subtle p-6 sm:p-8">
        <h2 className="font-serif text-xl sm:text-2xl font-semibold text-white mb-5">
          Explore in Goa by Location &amp; Category
        </h2>
        <div className="flex flex-wrap gap-2.5">
          {LOCATION_PILLS.map((pill) => (
            <button
              key={pill.label}
              type="button"
              onClick={() => handlePillClick(pill)}
              className="px-4 py-2 rounded-full bg-charcoal border border-gold/25 hover:border-gold text-xs sm:text-sm text-neutral-200 hover:text-gold transition-all"
            >
              {pill.label}
            </button>
          ))}
        </div>
      </div>

      {/* Dedicated Russian Portfolio Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-cardElevated via-card to-charcoal border border-gold/35 p-6 sm:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 gold-glow">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-2">
            Dedicated International Portfolio
          </p>
          <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white mb-3">
            Explore Our Dedicated in Goa Page
          </h3>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            Looking specifically for Goa? Browse our dedicated
            gallery of 15 Moscow, St. Petersburg &amp; Sochi models with area
            filters, Russian-specific tariff packages, and 20-minute 5-star
            hotel arrival.
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            onSelectCategory("Russian");
            document.getElementById("directory")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gold hover:bg-gold-light text-black font-semibold text-sm shrink-0 transition-all"
        >
          View 
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
