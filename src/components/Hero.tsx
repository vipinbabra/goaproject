import React from "react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-gold/15 bg-obsidian"
    >
      {/* Right-side ambient luxury gradient backdrop */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 80% 45%, rgba(212,175,55,0.16) 0%, rgba(20,18,15,0.6) 45%, #0a0a0a 80%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        <div className="max-w-2xl">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-gold mb-4">
            sdfasdfasdfsdf
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.12] tracking-tight mb-6">
            Experience Luxury Like Never Before
          </h1>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-9 max-w-xl">
           asdfsdfasdfasdfadf
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#directory"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gold hover:bg-gold-light text-black font-semibold text-sm sm:text-base transition-all shadow-lg shadow-gold/15"
            >
              View All Profiles
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-neutral-600 hover:border-gold text-white hover:text-gold-light font-semibold text-sm sm:text-base transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
