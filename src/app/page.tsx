"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { NewArrivals } from "@/components/NewArrivals";
import { TrustRow } from "@/components/TrustRow";
import {
  CompanionsDirectory,
  type DirectoryCategory,
} from "@/components/CompanionsDirectory";
import { LocationAndBanner } from "@/components/LocationAndBanner";
import { ServicesAndEditorial } from "@/components/ServicesAndEditorial";
import { PricingSection } from "@/components/PricingSection";
import { FaqSection } from "@/components/FaqSection";
import { BookingSection } from "@/components/BookingSection";
import { Footer } from "@/components/Footer";
import { ProfileModal } from "@/components/ProfileModal";
import type { Companion } from "@/data/companions";

export default function HomePage() {
  const [directoryCategory, setDirectoryCategory] =
    useState<DirectoryCategory>("All");
  const [locationFilter, setLocationFilter] = useState<string | null>(null);
  const [selectedProfile, setSelectedProfile] = useState<Companion | null>(null);
  const [preselectedBooking, setPreselectedBooking] = useState<
    string | undefined
  >(undefined);

  const handleBookFromModal = (companion: Companion) => {
    setPreselectedBooking(
      `${companion.name} (${companion.category} • ${companion.location})`
    );
    setSelectedProfile(null);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-obsidian text-white">
      <Navbar
        onSelectFilter={(filter) => {
          setDirectoryCategory(filter);
          setLocationFilter(null);
        }}
      />

      <main>
        <Hero />
        <NewArrivals onSelectProfile={setSelectedProfile} />
        <TrustRow />
        <CompanionsDirectory
          activeCategory={directoryCategory}
          onCategoryChange={setDirectoryCategory}
          locationFilter={locationFilter}
          onClearLocation={() => setLocationFilter(null)}
          onSelectProfile={setSelectedProfile}
        />
        <LocationAndBanner
          onSelectCategory={(cat) => {
            setDirectoryCategory(cat);
            setLocationFilter(null);
          }}
          onSelectLocation={(loc) => {
            setDirectoryCategory("All");
            setLocationFilter(loc);
          }}
        />
        <ServicesAndEditorial
          onSelectCategory={(cat) => {
            setDirectoryCategory(cat);
            setLocationFilter(null);
          }}
        />
        <PricingSection />
        <FaqSection />
        <BookingSection preselectedCompanion={preselectedBooking} />
      </main>

      <Footer />

      <ProfileModal
        companion={selectedProfile}
        onClose={() => setSelectedProfile(null)}
        onBookCompanion={handleBookFromModal}
      />
    </div>
  );
}
