"use client";

import React, { useState } from "react";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import {
  NEW_ARRIVALS,
  CONCIERGE_PHONE,
  WHATSAPP_BASE,
  type Companion,
} from "@/data/companions";
import { AvatarArt } from "./AvatarArt";

interface NewArrivalsProps {
  onSelectProfile: (companion: Companion) => void;
}

export function NewArrivals({ onSelectProfile }: NewArrivalsProps) {
  const [filter, setFilter] = useState<"All" | "Indian" | "Russian">("All");
  const [showMeta, setShowMeta] = useState(true);

  const filtered = NEW_ARRIVALS.filter((item) =>
    filter === "All" ? true : item.nationality === filter
  );

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
      {/* Header Row */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-white">
            New Arrivals
          </h2>
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-card border border-gold/25 text-xs font-medium text-neutral-200">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            4 New Escort Girls Available Today
          </span>
        </div>

        {/* Interactive Controls */}
        <div className="flex flex-wrap items-center gap-2.5">
          {(["All", "Indian", "Russian"] as const).map((tab) => {
            const label =
              tab === "All"
                ? "All"
                : tab === "Indian"
                ? "iiiii"
                : "rrrrr";
            const active = filter === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setFilter(tab)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  active
                    ? "bg-gold text-black font-semibold"
                    : "bg-card text-neutral-300 border border-gold/20 hover:border-gold/50"
                }`}
              >
                {label}
              </button>
            );
          })}

          <button
            type="button"
            onClick={() => setShowMeta(!showMeta)}
            className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium border transition-all ${
              showMeta
                ? "border-gold/60 text-gold bg-gold/10"
                : "border-neutral-700 text-neutral-400 bg-card"
            }`}
          >
            Show Exact Distance &amp; Age
          </button>
        </div>
      </div>

      {/* 4-Column Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((companion) => (
          <div
            key={companion.id}
            className="group rounded-2xl bg-card gold-border-subtle gold-border-hover overflow-hidden transition-all flex flex-col"
          >
            {/* Portrait Area */}
            <div
              onClick={() => onSelectProfile(companion)}
              className="relative h-64 cursor-pointer"
            >
              <AvatarArt
                name={companion.name}
                nationality={companion.nationality}
                accentHue={companion.accentHue}
                className="w-full h-full"
              />

              {/* Bottom-left New Badge */}
              <span className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-full bg-gold text-black text-[11px] font-bold uppercase tracking-wider">
                New
              </span>

              {/* Top-right Distance & Age Pills */}
              {showMeta && (
                <div className="absolute top-3 right-3 flex items-center gap-1.5">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/75 backdrop-blur-sm border border-gold/25 text-[11px] text-neutral-200">
                    <MapPin className="w-3 h-3 text-gold" />
                    {companion.distanceKm}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-black/75 backdrop-blur-sm border border-gold/25 text-[11px] text-neutral-200">
                    {companion.age} Yrs
                  </span>
                </div>
              )}
            </div>

            {/* Card Body */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3
                  onClick={() => onSelectProfile(companion)}
                  className="font-serif text-xl font-semibold text-white group-hover:text-gold-light transition-colors cursor-pointer"
                >
                  {companion.name}
                </h3>
                <p className="text-sm text-neutral-400 mt-1">
                  {companion.nationality} •{" "}
                  <span className="text-gold font-semibold">{companion.rate}</span>
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2.5 mt-5">
                <a
                  href={`tel:${CONCIERGE_PHONE}`}
                  className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-full bg-gold hover:bg-gold-light text-black text-xs font-semibold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call Now
                </a>
                <a
                  href={`${WHATSAPP_BASE}?text=${encodeURIComponent(
                    `Hi, I would like to book ${companion.name} (${companion.nationality}, ${companion.rate}).`
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
          </div>
        ))}
      </div>
    </section>
  );
}
