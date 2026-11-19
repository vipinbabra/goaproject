"use client";

import React from "react";
import { Phone, MessageCircle, ArrowRight, X } from "lucide-react";
import {
  VERIFIED_COMPANIONS,
  CONCIERGE_PHONE,
  WHATSAPP_BASE,
  type Companion,
} from "@/data/companions";
import { AvatarArt } from "./AvatarArt";

export type DirectoryCategory = "All" | "Indian" | "Russian" | "VIP";

interface CompanionsDirectoryProps {
  activeCategory: DirectoryCategory;
  onCategoryChange: (cat: DirectoryCategory) => void;
  locationFilter: string | null;
  onClearLocation: () => void;
  onSelectProfile: (companion: Companion) => void;
}

export function CompanionsDirectory({
  activeCategory,
  onCategoryChange,
  locationFilter,
  onClearLocation,
  onSelectProfile,
}: CompanionsDirectoryProps) {
  const vipCount = VERIFIED_COMPANIONS.filter((c) => c.vip).length;

  const filtered = VERIFIED_COMPANIONS.filter((c) => {
    const matchesCat =
      activeCategory === "All"
        ? true
        : activeCategory === "VIP"
        ? c.vip
        : c.nationality === activeCategory;
    const matchesLoc = locationFilter
      ? c.location.toLowerCase() === locationFilter.toLowerCase()
      : true;
    return matchesCat && matchesLoc;
  });

  const tabs: { key: DirectoryCategory; label: string }[] = [
    { key: "All", label: `All (${VERIFIED_COMPANIONS.length})` },
    { key: "Indian", label: "Indian (15)" },
    { key: "Russian", label: "Russian (15)" },
    { key: "VIP", label: `VIP (${vipCount})` },
  ];

  return (
    <section
      id="directory"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 border-t border-gold/15"
    >
      {/* Header Row */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-9">
        <div>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white">
            Verified Companions
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-2">
            Showing {filtered.length} verified models (15 Indian &amp; 15 Russian).
            Tap any card to inspect full profile details &amp; rates.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2.5">
          {tabs.map((tab) => {
            const isActive = activeCategory === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => onCategoryChange(tab.key)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? "border border-gold text-gold bg-gold/10 font-semibold"
                    : "border border-neutral-800 bg-card text-neutral-300 hover:border-gold/40"
                }`}
              >
                {tab.label}
              </button>
            );
          })}

          {locationFilter && (
            <button
              type="button"
              onClick={onClearLocation}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-gold text-black text-xs font-semibold"
            >
              Area: {locationFilter}
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* 3-Column Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((companion) => (
          <div
            key={companion.id}
            className="rounded-2xl bg-card gold-border-subtle gold-border-hover p-5 transition-all flex flex-col justify-between gap-4"
          >
            {/* Top Row: Thumbnail + Meta */}
            <div className="flex items-start gap-4">
              <div
                onClick={() => onSelectProfile(companion)}
                className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0 cursor-pointer border border-gold/25"
              >
                <AvatarArt
                  name={companion.name}
                  nationality={companion.nationality}
                  accentHue={companion.accentHue}
                  className="w-full h-full"
                />
                <span className="absolute bottom-1.5 left-1.5 px-2 py-0.5 rounded bg-black/80 text-[10px] font-semibold text-gold border border-gold/30">
                  {companion.nationality}
                </span>
              </div>

              <div className="flex-1 min-w-0">
                {/* Top-right Location & Age pills */}
                <div className="flex flex-wrap items-center justify-end gap-1.5 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-charcoal border border-neutral-800 text-[11px] text-neutral-300">
                    {companion.location}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-charcoal border border-neutral-800 text-[11px] text-neutral-300">
                    {companion.age} Yrs
                  </span>
                </div>

                <h3
                  onClick={() => onSelectProfile(companion)}
                  className="font-serif text-xl font-semibold text-white hover:text-gold-light cursor-pointer truncate"
                >
                  {companion.name}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 mt-0.5">
                  {companion.category} •{" "}
                  <span className="text-gold font-semibold">{companion.rate}</span>
                </p>

                <button
                  type="button"
                  onClick={() => onSelectProfile(companion)}
                  className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-gold underline underline-offset-4 hover:text-gold-light"
                >
                  Full Escort Profile
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Footer Action Buttons */}
            <div className="grid grid-cols-2 gap-2.5 pt-2 border-t border-gold/10">
              <a
                href={`tel:${CONCIERGE_PHONE}`}
                className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-full bg-gold hover:bg-gold-light text-black text-xs font-semibold transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                Call Now
              </a>
              <a
                href={`${WHATSAPP_BASE}?text=${encodeURIComponent(
                  `Hi, I want to check availability for ${companion.name} (${companion.location}, ${companion.rate}).`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-full bg-gold hover:bg-gold-light text-black text-xs font-semibold transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
