"use client";

import React from "react";
import { X, Phone, MessageCircle, MapPin, ShieldCheck, Clock } from "lucide-react";
import { CONCIERGE_PHONE, WHATSAPP_BASE, type Companion } from "@/data/companions";
import { AvatarArt } from "./AvatarArt";

interface ProfileModalProps {
  companion: Companion | null;
  onClose: () => void;
  onBookCompanion: (companion: Companion) => void;
}

export function ProfileModal({ companion, onClose, onBookCompanion }: ProfileModalProps) {
  if (!companion) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl bg-card border border-gold/35 overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 text-neutral-300 hover:text-white border border-gold/25"
          aria-label="Close profile modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="h-56 relative">
          <AvatarArt
            name={companion.name}
            nationality={companion.nationality}
            accentHue={companion.accentHue}
            className="w-full h-full"
          />
          <div className="absolute bottom-3 left-4 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-gold text-black text-xs font-bold">
              {companion.nationality}
            </span>
            {companion.vip && (
              <span className="px-3 py-1 rounded-full bg-black/80 border border-gold/40 text-gold text-xs font-semibold">
                VIP Verified
              </span>
            )}
          </div>
        </div>

        <div className="p-6 space-y-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-white">
                {companion.name}, {companion.age}
              </h3>
              <p className="text-sm text-neutral-400 mt-0.5">{companion.category}</p>
            </div>
            <div className="text-right">
              <span className="block text-xs text-neutral-400">Starting Rate</span>
              <span className="font-serif text-2xl font-bold text-gold">
                {companion.rate}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="rounded-xl bg-charcoal border border-gold/15 p-3 flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-gold shrink-0" />
              <div>
                <div className="text-neutral-400 text-[11px]">Base Hub</div>
                <div className="text-white font-medium">
                  {companion.location} ({companion.distanceKm})
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-charcoal border border-gold/15 p-3 flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-gold shrink-0" />
              <div>
                <div className="text-neutral-400 text-[11px]">Availability</div>
                <div className="text-white font-medium">{companion.availability}</div>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-charcoal/70 border border-gold/15 p-3.5 text-xs text-neutral-300 flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-gold shrink-0 mt-0.5" />
            <span>
              100% video-verified in Goa. Languages:{" "}
              <strong className="text-white">{companion.languages.join(", ")}</strong>.
              Zero advance payment — settle in cash after meeting.
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
            <button
              type="button"
              onClick={() => onBookCompanion(companion)}
              className="py-2.5 px-4 rounded-full border border-gold/50 text-gold hover:bg-gold/10 text-xs font-semibold transition-colors"
            >
              Pre-fill Booking Form
            </button>
            <a
              href={`tel:${CONCIERGE_PHONE}`}
              className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full bg-gold hover:bg-gold-light text-black text-xs font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              Call Desk
            </a>
            <a
              href={`${WHATSAPP_BASE}?text=${encodeURIComponent(
                `Hi, I'd like to book ${companion.name} (${companion.category}, ${companion.location}) starting at ${companion.rate}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full bg-gold hover:bg-gold-light text-black text-xs font-semibold transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
