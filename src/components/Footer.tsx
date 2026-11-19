import React from "react";
import { CONCIERGE_PHONE } from "@/data/companions";

export function Footer() {
  return (
    <footer className="border-t border-gold/15 bg-charcoal mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="font-serif text-2xl font-semibold tracking-wider">
              <span className="text-gold">GOA</span>
              <span className="text-white">XCORT</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Goa’s premier VIP companionship directory featuring 100%
              video-verified Indian &amp; Russian models with zero advance
              payment and 20-minute 5-star hotel delivery.
            </p>
            <p className="text-sm font-semibold text-gold">
              24/7 Concierge:{" "}
              <a href={`tel:${CONCIERGE_PHONE}`} className="hover:underline">
                {CONCIERGE_PHONE}
              </a>
            </p>
          </div>

          {/* Column 2: Categories */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white mb-4">
              Categories
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li><a href="#directory" className="hover:text-gold transition-colors">Goa</a></li>
              <li><a href="#directory" className="hover:text-gold transition-colors">Indian in Goa</a></li>
              <li><a href="#directory" className="hover:text-gold transition-colors">zxcvzxcvGoa</a></li>
              <li><a href="#directory" className="hover:text-gold transition-colors">VIP Goa</a></li>
            </ul>
          </div>

          {/* Column 3: Top Goa Hubs */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white mb-4">
              Top Goa Hubs
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li><a href="#directory" className="hover:text-gold transition-colors">Calangute</a></li>
              <li><a href="#directory" className="hover:text-gold transition-colors">Candolim</a></li>
              <li><a href="#directory" className="hover:text-gold transition-colors">Baga</a></li>
              <li><a href="#directory" className="hover:text-gold transition-colors">Panaji Casino</a></li>
              <li><a href="#directory" className="hover:text-gold transition-colors">South Goa</a></li>
            </ul>
          </div>

          {/* Column 4: Information */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white mb-4">
              Information
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li><a href="#services" className="hover:text-gold transition-colors">5-Star Hotel Outcalls</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Contact 24/7 Desk</a></li>
              <li><a href="#faq" className="hover:text-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#faq" className="hover:text-gold transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-gold/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <span>© 2026 Goaxcort.com. All rights reserved.</span>
          <span>Strictly 18+ Adult Companionship &amp; Social Escort Agency.</span>
        </div>
      </div>
    </footer>
  );
}
