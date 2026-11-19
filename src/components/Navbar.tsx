"use client";

import React, { useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { CONCIERGE_PHONE, WHATSAPP_BASE } from "@/data/companions";

interface NavbarProps {
  onSelectFilter?: (filter: "All" | "Indian" | "Russian") => void;
}

const NAV_LINKS = [
  { label: "Home", href: "#home", filter: null },
  { label: "zxcv", href: "#directory", filter: "Indian" as const },
  { label: "zxcv", href: "#directory", filter: "Russian" as const },
  { label: "Services", href: "#services", filter: null },
  { label: "Pricing", href: "#pricing", filter: null },
  { label: "FAQ", href: "#faq", filter: null },
  { label: "Contact", href: "#contact", filter: null },
];

export function Navbar({ onSelectFilter }: NavbarProps) {
  const [active, setActive] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (label: string, filter: "Indian" | "Russian" | null) => {
    setActive(label);
    setMobileOpen(false);
    if (filter && onSelectFilter) {
      onSelectFilter(filter);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-obsidian/95 backdrop-blur-md border-b border-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Left: Brand Logo */}
        <a
          href="#home"
          onClick={() => handleNavClick("Home", null)}
          className="font-serif text-2xl sm:text-3xl tracking-wider font-semibold shrink-0"
        >
          <span className="text-gold">GOA</span>
          <span className="text-white">XCORT</span>
        </a>

        {/* Center: Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((item) => {
            const isActive = active === item.label;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => handleNavClick(item.label, item.filter)}
                className={`text-sm font-medium transition-colors pb-1 border-b-2 ${
                  isActive
                    ? "text-gold border-gold"
                    : "text-neutral-300 border-transparent hover:text-gold-light"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right: Action Buttons */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href={`tel:${CONCIERGE_PHONE}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gold hover:bg-gold-light text-black text-xs sm:text-sm font-semibold transition-all"
          >
            <Phone className="w-3.5 h-3.5" />
            Call Now
          </a>
          <a
            href={WHATSAPP_BASE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gold hover:bg-gold-light text-black text-xs sm:text-sm font-semibold transition-all"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            Book on WhatsApp
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg text-neutral-300 hover:text-gold border border-gold/20"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-charcoal border-b border-gold/20 px-4 py-5 space-y-4">
          <div className="flex flex-col space-y-3">
            {NAV_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => handleNavClick(item.label, item.filter)}
                className={`text-sm font-medium ${
                  active === item.label ? "text-gold" : "text-neutral-300"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 pt-2 border-t border-gold/15">
            <a
              href={`tel:${CONCIERGE_PHONE}`}
              className="flex-1 text-center px-4 py-2.5 rounded-full bg-gold text-black text-sm font-semibold"
            >
              Call Now
            </a>
            <a
              href={WHATSAPP_BASE}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-2.5 rounded-full bg-gold text-black text-sm font-semibold"
            >
              Book on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
