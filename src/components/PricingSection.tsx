"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";
import {
  PRICING_DATA,
  WHATSAPP_BASE,
  type PricingTierKey,
} from "@/data/companions";

export function PricingSection() {
  const [activeTier, setActiveTier] = useState<PricingTierKey>("indian");
  const current = PRICING_DATA[activeTier];

  return (
    <section
      id="pricing"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gold/15"
    >
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold mb-2">
            TRANSPARENT PACKAGES &amp; RATES
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white">
            All-Inclusive Rates
          </h2>
        </div>

        {/* Interactive Category Switcher Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {(["indian", "russian", "vip"] as const).map((key) => {
            const isActive = activeTier === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveTier(key)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? "bg-gold text-black font-semibold"
                    : "bg-card text-neutral-300 border border-gold/20 hover:border-gold/50"
                }`}
              >
                {PRICING_DATA[key].label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3-Column Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {current.packages.map((pkg) => (
          <div
            key={pkg.name}
            className={`relative rounded-2xl p-7 flex flex-col justify-between transition-all ${
              pkg.popular
                ? "bg-cardElevated border-2 border-gold gold-glow"
                : "bg-card gold-border-subtle"
            }`}
          >
            {pkg.popular && (
              <span className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-gold text-black text-[11px] font-bold uppercase tracking-wider">
                Most Popular
              </span>
            )}

            <div>
              <h3 className="font-serif text-2xl font-semibold text-white">
                {pkg.name}
              </h3>
              <p className="text-xs text-neutral-400 mt-1">{pkg.subtitle}</p>

              <div className="my-6 pb-6 border-b border-gold/15">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-gold">
                  {pkg.price}
                </span>
                <span className="text-xs sm:text-sm text-neutral-400 ml-2">
                  / {pkg.unit}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-start gap-2.5 text-sm text-neutral-300"
                  >
                    <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={`${WHATSAPP_BASE}?text=${encodeURIComponent(
                `Hi, I'd like to book the ${current.label} - ${pkg.name} (${pkg.price}).`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full text-center py-3 px-5 rounded-full text-sm font-semibold transition-all ${
                pkg.popular
                  ? "bg-gold hover:bg-gold-light text-black"
                  : "border border-gold/45 text-gold hover:bg-gold hover:text-black"
              }`}
            >
              {pkg.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
