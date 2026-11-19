"use client";

import React from "react";
import { Utensils, Building2, Sparkles, Moon, ArrowRight } from "lucide-react";
import {
  VIP_SERVICES,
  DELIVERY_ZONES,
  HOW_IT_WORKS,
  WHATSAPP_BASE,
} from "@/data/companions";
import type { DirectoryCategory } from "./CompanionsDirectory";

interface ServicesAndEditorialProps {
  onSelectCategory: (cat: DirectoryCategory) => void;
}

const ICONS = {
  utensils: Utensils,
  building: Building2,
  sparkles: Sparkles,
  moon: Moon,
};

export function ServicesAndEditorial({ onSelectCategory }: ServicesAndEditorialProps) {
  return (
    <>
      {/* VIP Escort Services Section */}
      <section
        id="services"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gold/15"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold mb-3">
          VIP ESCORT SERVICES IN NORTH &amp; SOUTH GOA
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-10">
          <h2 className="lg:col-span-6 font-serif text-3xl sm:text-4xl font-semibold text-white leading-tight">
            asdfdsfasdfn
          </h2>
          <p className="lg:col-span-6 text-sm sm:text-base text-neutral-400 leading-relaxed">
            Book 100% video-verified sdfsdf asdfsdfdf Goa
            with zero advance payment and 20-minute private delivery to your
            5-star hotel, beach resort, or villa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VIP_SERVICES.map((svc) => {
            const Icon = ICONS[svc.iconName];
            return (
              <div
                key={svc.title}
                className="rounded-2xl bg-card gold-border-subtle gold-border-hover p-6 flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center text-gold mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-white mb-2.5">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {svc.description}
                  </p>
                </div>

                <a
                  href={`${WHATSAPP_BASE}?text=${encodeURIComponent(
                    `Hi, I'd like to inquire about: ${svc.title}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gold hover:text-gold-light"
                >
                  {svc.cta}
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* Editorial / SEO Content & 3-Step How It Works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 border-t border-gold/15 space-y-12">
        <div className="max-w-4xl space-y-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white leading-tight">
            Goaxcort.com: Goa’s Trusted Directory for Verified sdfsdfdf
          </h2>

          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-gold mb-3">
              Why Discerning Travelers Choose Goaxcort Over Legacy Portals
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Unlike unverified classified boards that request upfront UPI
              deposits or send misleading photos, Goaxcort operates on a strict
              Pay-After-Meeting Cash on Delivery policy. Every booking is
              confirmed directly via WhatsApp with private chauffeur dispatch to
              your hotel or villa—ensuring zero risk and complete discretion.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-gold mb-4">
              Curated Portfolio of Indian VIP Models &amp;
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-card gold-border-subtle p-6">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
                  15 LIVE-VERIFIED PROFILES
                </span>
                <h4 className="font-serif text-xl font-semibold text-white mt-2 mb-3">
                  Independent sdfsdf →
                </h4>
                <button
                  type="button"
                  onClick={() => {
                    onSelectCategory("Indian");
                    document.getElementById("directory")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-xs sm:text-sm font-semibold text-gold underline underline-offset-4 hover:text-gold-light"
                >
                  sdfsdfsd Gallery →
                </button>
              </div>

              <div className="rounded-2xl bg-card gold-border-subtle p-6">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
                  15 INTERNATIONAL MODELS
                </span>
                <h4 className="font-serif text-xl font-semibold text-white mt-2 mb-3">
                  sdfsdfsdf →
                </h4>
                <button
                  type="button"
                  onClick={() => {
                    onSelectCategory("Russian");
                    document.getElementById("directory")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-xs sm:text-sm font-semibold text-gold underline underline-offset-4 hover:text-gold-light"
                >
                  Explore Dsdfsd Gallery →
                </button>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-gold mb-4">
              24/7 Hyper-Local Delivery Across North &amp; South Goa
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {DELIVERY_ZONES.map((zone) => (
                <li
                  key={zone.area}
                  className="flex items-center justify-between rounded-xl bg-card border border-gold/15 px-4 py-3 text-sm"
                >
                  <span className="text-neutral-200 font-medium">{zone.area}</span>
                  <span className="text-gold font-semibold">{zone.eta}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 3-Step Horizontal Banner */}
        <div className="rounded-2xl bg-cardElevated border border-gold/30 p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {HOW_IT_WORKS.map((item) => (
            <div key={item.step} className="flex items-center gap-4">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-gold/85">
                {item.step}
              </span>
              <span className="text-sm sm:text-base font-medium text-white">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
