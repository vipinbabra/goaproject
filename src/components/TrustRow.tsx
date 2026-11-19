import React from "react";
import { TRUST_CARDS } from "@/data/companions";

export function TrustRow() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TRUST_CARDS.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl bg-card gold-border-subtle p-6 sm:p-7 transition-all hover:border-gold/45"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gold/15 border border-gold/30 text-gold font-serif text-lg font-bold mb-5">
              {card.badge}
            </div>
            <h3 className="font-serif text-xl font-semibold text-white mb-2.5">
              {card.title}
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
