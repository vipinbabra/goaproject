"use client";

import React, { useState } from "react";
import { Plus, Minus, Phone, MessageCircle } from "lucide-react";
import { FAQ_ITEMS, CONCIERGE_PHONE, WHATSAPP_BASE } from "@/data/companions";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section
      id="faq"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gold/15"
    >
      <div className="max-w-3xl mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold mb-2">
          FREQUENTLY ASKED QUESTIONS
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white">
          Book &amp; Goa — Complete Guide
        </h2>
      </div>

      {/* 8 Accordion Items */}
      <div className="space-y-3 mb-10">
        {FAQ_ITEMS.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={item.num}
              className={`rounded-2xl transition-all ${
                isOpen
                  ? "bg-cardElevated border border-gold/40"
                  : "bg-card gold-border-subtle"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
              >
                <span className="text-sm sm:text-base font-medium text-white">
                  <span className="text-gold font-serif font-semibold mr-3">
                    {item.num}.
                  </span>
                  {item.question}
                </span>
                <span className="w-8 h-8 rounded-full border border-gold/35 flex items-center justify-center text-gold shrink-0">
                  {isOpen ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </span>
              </button>

              {isOpen && (
                <div className="px-6 pb-5 pt-0 text-sm text-neutral-300 leading-relaxed pl-14">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* FAQ CTA Box */}
      <div className="rounded-2xl bg-cardElevated border border-gold/30 p-6 sm:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white">
            Still have in Goa?
          </h3>
          <p className="text-sm text-neutral-400 mt-1">
            Our 24/7 Goa VIP Concierge Desk replies within 60 seconds on WhatsApp.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <a
            href={WHATSAPP_BASE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold hover:bg-gold-light text-black text-sm font-semibold transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Ask on WhatsApp
          </a>
          <a
            href={`tel:${CONCIERGE_PHONE}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-600 hover:border-gold text-white hover:text-gold text-sm font-semibold transition-colors"
          >
            <Phone className="w-4 h-4" />
            Call 24/7 Desk
          </a>
        </div>
      </div>
    </section>
  );
}
