"use client";

import React, { useState, useEffect } from "react";
import { Phone, MessageCircle, CheckCircle2 } from "lucide-react";
import {
  NEW_ARRIVALS,
  VERIFIED_COMPANIONS,
  CONCIERGE_PHONE,
  WHATSAPP_BASE,
} from "@/data/companions";

interface BookingSectionProps {
  preselectedCompanion?: string;
}

export function BookingSection({ preselectedCompanion }: BookingSectionProps) {
  const allOptions = [
    ...NEW_ARRIVALS.map((c) => `${c.name} (${c.category} • ${c.location})`),
    ...VERIFIED_COMPANIONS.map((c) => `${c.name} (${c.category} • ${c.location})`),
  ];

  const [companion, setCompanion] = useState(allOptions[0]);
  const [hotelArea, setHotelArea] = useState("");
  const [duration, setDuration] = useState("4 Hours Dinner Date");
  const [preferredTime, setPreferredTime] = useState("Tonight, 9:00 PM");
  const [submittedMsg, setSubmittedMsg] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedCompanion) {
      setCompanion(preselectedCompanion);
    }
  }, [preselectedCompanion]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Priority Booking Request:%0A• Companion: ${encodeURIComponent(
      companion
    )}%0A• Hotel/Area: ${encodeURIComponent(
      hotelArea || "North Goa 5-Star Resort"
    )}%0A• Package: ${encodeURIComponent(
      duration
    )}%0A• Time: ${encodeURIComponent(preferredTime)}`;
    setSubmittedMsg(
      `Priority request prepared for ${companion} (${duration}, ${preferredTime}).`
    );
    window.open(`${WHATSAPP_BASE}?text=${message}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gold/15"
    >
      <div className="rounded-3xl bg-cardElevated border border-gold/30 p-7 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column */}
        <div className="lg:col-span-5 space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            24/7 PRIVATE DESK
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white leading-tight">
            Direct &amp; Confidential Booking
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            Zero advance payment. Instant photo &amp; availability confirmation
            from our Goa VIP Concierge Desk with 20-minute private chauffeur
            dispatch.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={`tel:${CONCIERGE_PHONE}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold hover:bg-gold-light text-black text-sm font-semibold transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Concierge Desk
            </a>
            <a
              href={WHATSAPP_BASE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-600 hover:border-gold text-white hover:text-gold text-sm font-semibold transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Message on WhatsApp
            </a>
          </div>
        </div>

        {/* Right Column: Instant Concierge Request Form */}
        <div className="lg:col-span-7 rounded-2xl bg-charcoal border border-gold/25 p-6 sm:p-8">
          <h3 className="font-serif text-2xl font-semibold text-white mb-6">
            Instant Concierge Request
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-neutral-400 mb-1.5">
                  Preferred Companion
                </label>
                <select
                  value={companion}
                  onChange={(e) => setCompanion(e.target.value)}
                  className="w-full rounded-xl bg-card border border-gold/25 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-gold"
                >
                  {allOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-400 mb-1.5">
                  Hotel / Area in Goa
                </label>
                <input
                  type="text"
                  value={hotelArea}
                  onChange={(e) => setHotelArea(e.target.value)}
                  placeholder="e.g. Taj Fort Aguada, Candolim"
                  className="w-full rounded-xl bg-card border border-gold/25 px-3.5 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-gold"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-400 mb-1.5">
                  Package Duration
                </label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full rounded-xl bg-card border border-gold/25 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-gold"
                >
                  <option>2 Hours Express Session</option>
                  <option>4 Hours Dinner Date</option>
                  <option>Full Night (8 Hours)</option>
                  <option>24-Hour Villa Retreat</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-400 mb-1.5">
                  Preferred Time
                </label>
                <input
                  type="text"
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full rounded-xl bg-card border border-gold/25 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-gold"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-2 py-3.5 px-6 rounded-full bg-gold hover:bg-gold-light text-black font-semibold text-sm sm:text-base transition-colors"
            >
              Generate Priority WhatsApp Booking
            </button>

            {submittedMsg && (
              <div className="flex items-center gap-2 text-xs text-emerald-400 pt-1">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{submittedMsg}</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
