export type Nationality = "Indian" | "Russian";

export interface Companion {
  id: string;
  name: string;
  nationality: Nationality;
  age: number;
  location: string;
  distanceKm: string;
  category: string;
  rate: string;
  vip: boolean;
  isNew?: boolean;
  languages: string[];
  availability: string;
  accentHue: string;
}

export const CONCIERGE_PHONE = "+917841842125";
export const WHATSAPP_BASE = "https://wa.me/917841842125";

export const NEW_ARRIVALS: Companion[] = [
  {
    id: "new-aanya",
    name: "Aanya",
    nationality: "Indian",
    age: 22,
    location: "Candolim",
    distanceKm: "1.8 km",
    category: "Indian Elite",
    rate: "₹12,000",
    vip: true,
    isNew: true,
    languages: ["English", "Hindi"],
    availability: "24/7 Outcall & Incall",
    accentHue: "from-amber-900/40 via-stone-900 to-black",
  },
  {
    id: "new-sofia",
    name: "Sofia",
    nationality: "Russian",
    age: 22,
    location: "Candolim",
    distanceKm: "2.1 km",
    category: "VIP Moscow Model",
    rate: "₹18,000",
    vip: true,
    isNew: true,
    languages: ["English", "Russian"],
    availability: "24/7 Outcall",
    accentHue: "from-yellow-900/35 via-neutral-900 to-black",
  },
  {
    id: "new-elena",
    name: "Elena",
    nationality: "Russian",
    age: 24,
    location: "Baga",
    distanceKm: "2.6 km",
    category: "St. Petersburg VIP",
    rate: "₹20,000",
    vip: true,
    isNew: true,
    languages: ["English", "Russian"],
    availability: "5-Star Hotel Outcall",
    accentHue: "from-amber-800/30 via-zinc-900 to-black",
  },
  {
    id: "new-kanika",
    name: "Kanika",
    nationality: "Indian",
    age: 22,
    location: "Calangute",
    distanceKm: "1.4 km",
    category: "VIP Mumbai Model",
    rate: "₹15,000",
    vip: true,
    isNew: true,
    languages: ["English", "Hindi", "Marathi"],
    availability: "24/7 Outcall & Incall",
    accentHue: "from-stone-800/50 via-neutral-900 to-black",
  },
];

export const VERIFIED_COMPANIONS: Companion[] = [
  // 15 Indian Companions
  { id: "kanika", name: "Kanika", nationality: "Indian", age: 22, location: "Calangute", distanceKm: "1.4 km", category: "VIP Mumbai Model", rate: "₹12,000", vip: true, languages: ["English", "Hindi"], availability: "24/7 Outcall", accentHue: "from-amber-900/40 via-stone-900 to-black" },
  { id: "riya", name: "Riya", nationality: "Indian", age: 21, location: "Panaji", distanceKm: "3.2 km", category: "College Companion", rate: "₹10,000", vip: false, languages: ["English", "Hindi"], availability: "Evening & Night", accentHue: "from-stone-800/50 via-zinc-900 to-black" },
  { id: "simran", name: "Simran", nationality: "Indian", age: 24, location: "Candolim", distanceKm: "1.9 km", category: "Ex-Cabin Crew VIP", rate: "₹15,000", vip: true, languages: ["English", "Hindi", "Punjabi"], availability: "24/7 Outcall", accentHue: "from-yellow-900/35 via-stone-900 to-black" },
  { id: "neha", name: "Neha", nationality: "Indian", age: 23, location: "Calangute", distanceKm: "1.6 km", category: "Elite Bengaluru Model", rate: "₹14,000", vip: true, languages: ["English", "Hindi", "Kannada"], availability: "24/7 Outcall", accentHue: "from-amber-800/35 via-neutral-900 to-black" },
  { id: "kavya", name: "Kavya", nationality: "Indian", age: 22, location: "Calangute", distanceKm: "1.5 km", category: "Independent Goa Model", rate: "₹12,000", vip: false, languages: ["English", "Hindi", "Konkani"], availability: "Day & Night", accentHue: "from-stone-900/60 via-neutral-900 to-black" },
  { id: "priya", name: "Priya", nationality: "Indian", age: 25, location: "Candolim", distanceKm: "2.0 km", category: "VIP Glamour Escort", rate: "₹15,000", vip: true, languages: ["English", "Hindi"], availability: "5-Star Resorts", accentHue: "from-amber-900/35 via-zinc-900 to-black" },
  { id: "ananya", name: "Ananya", nationality: "Indian", age: 22, location: "Baga", distanceKm: "2.4 km", category: "Fashion Week Model", rate: "₹14,000", vip: true, languages: ["English", "Hindi"], availability: "24/7 Outcall", accentHue: "from-yellow-900/30 via-stone-900 to-black" },
  { id: "ishita", name: "Ishita", nationality: "Indian", age: 23, location: "Vagator", distanceKm: "4.1 km", category: "Delhi Socialite Escort", rate: "₹12,000", vip: false, languages: ["English", "Hindi"], availability: "Evening & Night", accentHue: "from-stone-800/45 via-neutral-900 to-black" },
  { id: "meera", name: "Meera", nationality: "Indian", age: 24, location: "Panaji", distanceKm: "3.5 km", category: "Luxury Hotel Hostess", rate: "₹15,000", vip: true, languages: ["English", "Hindi"], availability: "24/7 Outcall", accentHue: "from-amber-900/40 via-neutral-900 to-black" },
  { id: "tara", name: "Tara", nationality: "Indian", age: 21, location: "Anjuna", distanceKm: "3.8 km", category: "Boho Chic Companion", rate: "₹11,000", vip: false, languages: ["English", "Hindi"], availability: "Day & Evening", accentHue: "from-stone-800/40 via-zinc-900 to-black" },
  { id: "zoya", name: "Zoya", nationality: "Indian", age: 23, location: "Candolim", distanceKm: "2.2 km", category: "Celebrity Portfolio VIP", rate: "₹16,000", vip: true, languages: ["English", "Hindi", "Urdu"], availability: "24/7 VIP Outcall", accentHue: "from-yellow-800/35 via-stone-900 to-black" },
  { id: "nisha", name: "Nisha", nationality: "Indian", age: 22, location: "Calangute", distanceKm: "1.7 km", category: "Fine Dining Companion", rate: "₹12,000", vip: false, languages: ["English", "Hindi"], availability: "Dinner & Night", accentHue: "from-amber-900/30 via-neutral-900 to-black" },
  { id: "pooja", name: "Pooja", nationality: "Indian", age: 25, location: "Baga", distanceKm: "2.7 km", category: "Air Hostess Escort", rate: "₹14,000", vip: true, languages: ["English", "Hindi"], availability: "24/7 Outcall", accentHue: "from-stone-800/50 via-stone-900 to-black" },
  { id: "diya", name: "Diya", nationality: "Indian", age: 22, location: "Morjim", distanceKm: "5.2 km", category: "Independent Elite Girl", rate: "₹12,000", vip: false, languages: ["English", "Hindi"], availability: "North Goa Villas", accentHue: "from-amber-900/35 via-zinc-900 to-black" },
  { id: "sanya", name: "Sanya", nationality: "Indian", age: 24, location: "Panaji", distanceKm: "3.1 km", category: "Casino Lounge VIP", rate: "₹15,000", vip: true, languages: ["English", "Hindi"], availability: "Casino & Yachts", accentHue: "from-yellow-900/35 via-neutral-900 to-black" },

  // 15 Russian Companions
  { id: "sofia", name: "Sofia", nationality: "Russian", age: 22, location: "Candolim", distanceKm: "2.1 km", category: "VIP Moscow Model", rate: "₹18,000", vip: true, languages: ["English", "Russian"], availability: "24/7 Outcall", accentHue: "from-yellow-900/40 via-neutral-900 to-black" },
  { id: "elena", name: "Elena", nationality: "Russian", age: 24, location: "Baga", distanceKm: "2.6 km", category: "St. Petersburg VIP", rate: "₹20,000", vip: true, languages: ["English", "Russian"], availability: "5-Star Outcall", accentHue: "from-amber-800/35 via-stone-900 to-black" },
  { id: "alina", name: "Alina", nationality: "Russian", age: 21, location: "Morjim", distanceKm: "5.0 km", category: "European Bikini Model", rate: "₹16,000", vip: false, languages: ["English", "Russian"], availability: "Beach & Villa", accentHue: "from-stone-800/45 via-zinc-900 to-black" },
  { id: "natasha", name: "Natasha", nationality: "Russian", age: 23, location: "Calangute", distanceKm: "1.9 km", category: "Luxury Yacht Companion", rate: "₹20,000", vip: true, languages: ["English", "Russian"], availability: "Yachts & Resorts", accentHue: "from-amber-900/40 via-neutral-900 to-black" },
  { id: "ksenia", name: "Ksenia", nationality: "Russian", age: 22, location: "Vagator", distanceKm: "4.3 km", category: "Independent Russian", rate: "₹17,000", vip: false, languages: ["English", "Russian"], availability: "Evening & Night", accentHue: "from-stone-900/55 via-zinc-900 to-black" },
  { id: "daria", name: "Daria", nationality: "Russian", age: 25, location: "Panaji", distanceKm: "3.4 km", category: "VIP Casino Escort", rate: "₹22,000", vip: true, languages: ["English", "Russian", "French"], availability: "Casino & VIP Suites", accentHue: "from-yellow-800/40 via-stone-900 to-black" },
  { id: "polina", name: "Polina", nationality: "Russian", age: 21, location: "Anjuna", distanceKm: "3.9 km", category: "Blonde Glamour Model", rate: "₹18,000", vip: false, languages: ["English", "Russian"], availability: "24/7 Outcall", accentHue: "from-amber-900/30 via-neutral-900 to-black" },
  { id: "mila", name: "Mila", nationality: "Russian", age: 23, location: "Candolim", distanceKm: "2.3 km", category: "International Runway", rate: "₹20,000", vip: true, languages: ["English", "Russian"], availability: "5-Star Outcall", accentHue: "from-yellow-900/35 via-zinc-900 to-black" },
  { id: "veronika", name: "Veronika", nationality: "Russian", age: 24, location: "Baga", distanceKm: "2.8 km", category: "Elite Resort Companion", rate: "₹19,000", vip: true, languages: ["English", "Russian"], availability: "24/7 Outcall", accentHue: "from-amber-800/35 via-stone-900 to-black" },
  { id: "anastasia", name: "Anastasia", nationality: "Russian", age: 22, location: "Calangute", distanceKm: "1.6 km", category: "VIP Penthouse Hostess", rate: "₹22,000", vip: true, languages: ["English", "Russian"], availability: "Penthouse & Villas", accentHue: "from-yellow-800/40 via-neutral-900 to-black" },
  { id: "yulia", name: "Yulia", nationality: "Russian", age: 23, location: "Morjim", distanceKm: "5.4 km", category: "Beach Club Companion", rate: "₹17,000", vip: false, languages: ["English", "Russian"], availability: "Clubs & Resorts", accentHue: "from-stone-800/45 via-stone-900 to-black" },
  { id: "katya", name: "Katya", nationality: "Russian", age: 21, location: "Vagator", distanceKm: "4.0 km", category: "Young Siberian Model", rate: "₹16,000", vip: false, languages: ["English", "Russian"], availability: "24/7 Outcall", accentHue: "from-amber-900/35 via-zinc-900 to-black" },
  { id: "irina", name: "Irina", nationality: "Russian", age: 25, location: "Panaji", distanceKm: "3.3 km", category: "Executive Dinner Date", rate: "₹20,000", vip: true, languages: ["English", "Russian"], availability: "Dinner & Casinos", accentHue: "from-yellow-900/35 via-stone-900 to-black" },
  { id: "viktoria", name: "Viktoria", nationality: "Russian", age: 24, location: "Candolim", distanceKm: "2.0 km", category: "5-Star Outcall Specialist", rate: "₹21,000", vip: true, languages: ["English", "Russian"], availability: "5-Star Resorts", accentHue: "from-amber-800/40 via-neutral-900 to-black" },
  { id: "oksana", name: "Oksana", nationality: "Russian", age: 22, location: "Baga", distanceKm: "2.5 km", category: "Party & Nightlife Escort", rate: "₹18,000", vip: false, languages: ["English", "Russian"], availability: "Nightlife & Resorts", accentHue: "from-stone-800/50 via-zinc-900 to-black" },
];

export const TRUST_CARDS = [
  {
    badge: "₹0",
    title: "Zero Advance Payment",
    description:
      "Never pay online deposits or cab charges upfront. Meet your chosen companion at your resort first, then settle directly in cash.",
  },
  {
    badge: "100%",
    title: "Video-Verified Profiles",
    description:
      "Every Indian and Russian companion on Goaxcort is physically verified in Goa to guarantee 100% real, unedited photos.",
  },
  {
    badge: "20m",
    title: "Express Hotel Delivery",
    description:
      "Discreet 20-minute arrival across Calangute, Candolim, Baga, Anjuna, Panaji casinos, and luxury South Goa resorts.",
  },
];

export const LOCATION_PILLS = [
  { label: "Indian sdfsdf in Goa (15)", filterType: "Indian" as const },
  { label: "Russian sdfsdf in Goa (15)", filterType: "Russian" as const },
  { label: "VIP sdfsdf Goa (18)", filterType: "VIP" as const },
  { label: "5-Star Hotel Outcalls", filterType: "All" as const },
  { label: "Calangute sdfsdf", location: "Calangute" },
  { label: "Candolim sdfsdf", location: "Candolim" },
  { label: "Baga sdfsdf", location: "Baga" },
  { label: "Panaji Casino sdfsdf", location: "Panaji" },
  { label: "South Goa sdfsdf", location: "Panaji" },
];

export const VIP_SERVICES = [
  {
    title: "Fine Dining & Club Dates",
    description:
      "Book articulate, English-speaking sdfsdf in Goa for candlelit dinners, beach club tables, and VIP nightlife across Panaji, Assagao, Candolim, and Baga.",
    cta: "Inquire on WhatsApp",
    iconName: "utensils" as const,
  },
  {
    title: "5-Star Hotel & Villa Outcalls",
    description:
      "Express 20-minute doorstep arrival of independent Goa sdfsdf and Russian sdfsdf in Goa to luxury resorts across Calangute, Baga, Vagator, and South Goa.",
    cta: "Arrange Hotel Visit",
    iconName: "building" as const,
  },
  {
    title: "Casino & Yacht Companions",
    description:
      "Hire glamorous Indian VIP models and Russian sdfsdf Goa for Mandovi River private yacht parties, Deltin Royale, and Big Daddy Casino VIP lounges.",
    cta: "Book VIP Escort",
    iconName: "sparkles" as const,
  },
  {
    title: "Full-Night & Weekend Stays",
    description:
      "Reserve verified sdfsdf in Goa or international Russian models for unhurried overnight packages and 24-hour villa retreats with Cash on Delivery.",
    cta: "Plan Extended Stay",
    iconName: "moon" as const,
  },
];

export const DELIVERY_ZONES = [
  { area: "Calangute & Baga", eta: "15–25 Mins" },
  { area: "Candolim & Sinquerim", eta: "20–30 Mins" },
  { area: "Anjuna, Vagator & Morjim", eta: "25–40 Mins" },
  { area: "Panaji Casino & South Goa", eta: "30–60 Mins" },
];

export const HOW_IT_WORKS = [
  { step: "01", title: "Select From 30 Verified Profiles" },
  { step: "02", title: "Confirm via WhatsApp or Call" },
  { step: "03", title: "20-Min Arrival & Cash on Delivery" },
];

export type PricingTierKey = "indian" | "russian" | "vip";

export interface PricingPackage {
  name: string;
  subtitle: string;
  price: string;
  unit: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export const PRICING_DATA: Record<PricingTierKey, { label: string; packages: PricingPackage[] }> = {
  indian: {
    label: "Indian Elite",
    packages: [
      {
        name: "Express Introduction",
        subtitle: "2 Hours Session",
        price: "₹15,000",
        unit: "Incall or Outcall",
        features: [
          "100% video-verified Indian companion",
          "Zero advance or booking fee required",
          "Discreet 20-minute arrival in North Goa",
        ],
        cta: "Reserve 2 Hours",
      },
      {
        name: "Evening & Social",
        subtitle: "4 Hours Dinner Date",
        price: "₹25,000",
        unit: "Complimentary Cab",
        popular: true,
        features: [
          "Fine dining, beach club, or resort suite",
          "Complimentary private chauffeur transfer",
          "Pay directly in cash after meeting",
        ],
        cta: "Book 4 Hours on WhatsApp",
      },
      {
        name: "Overnight Luxury",
        subtitle: "Full Night (8 Hours)",
        price: "₹40,000",
        unit: "Sunset to Morning",
        features: [
          "Unhurried overnight resort or villa stay",
          "Priority selection from top Indian models",
          "Complete privacy & zero hidden charges",
        ],
        cta: "Reserve Full Night",
      },
    ],
  },
  russian: {
    label: "Russian Models",
    packages: [
      {
        name: "Express Introduction",
        subtitle: "2 Hours Session",
        price: "₹20,000",
        unit: "Incall or Outcall",
        features: [
          "Verified Moscow & St. Petersburg models",
          "Zero advance payment — Cash on Delivery",
          "20-minute 5-star hotel room arrival",
        ],
        cta: "Reserve 2 Hours",
      },
      {
        name: "Evening & Social",
        subtitle: "4 Hours Dinner Date",
        price: "₹32,000",
        unit: "Complimentary Cab",
        popular: true,
        features: [
          "Ideal for Panaji casinos & yacht parties",
          "Fluent English-speaking European models",
          "Complimentary round-trip private cab",
        ],
        cta: "Book 4 Hours on WhatsApp",
      },
      {
        name: "Overnight Luxury",
        subtitle: "Full Night (8 Hours)",
        price: "₹55,000",
        unit: "Sunset to Morning",
        features: [
          "Full-night private villa or 5-star suite",
          "All-inclusive chauffeur & concierge care",
          "100% real-photo guarantee on arrival",
        ],
        cta: "Reserve Full Night",
      },
    ],
  },
  vip: {
    label: "Celebrity / VIP",
    packages: [
      {
        name: "Private VIP Meet",
        subtitle: "2 Hours Session",
        price: "₹30,000",
        unit: "5-Star Outcall",
        features: [
          "Runway, portfolio & celebrity-tier models",
          "Dedicated concierge coordination",
          "Zero upfront deposit policy",
        ],
        cta: "Reserve 2 Hours",
      },
      {
        name: "Red Carpet & Yacht",
        subtitle: "4 Hours VIP Date",
        price: "₹45,000",
        unit: "Complimentary Cab",
        popular: true,
        features: [
          "Private yacht charters & VIP casino lounges",
          "Bespoke wardrobe & evening etiquette",
          "Priority 24/7 dispatch across North & South Goa",
        ],
        cta: "Book 4 Hours on WhatsApp",
      },
      {
        name: "24-Hour Villa Retreat",
        subtitle: "Full Night / Extended",
        price: "₹75,000",
        unit: "All-Inclusive",
        features: [
          "Extended luxury villa or resort retreat",
          "Top-tier Indian or Russian VIP companion",
          "Strict NDA-level discretion & privacy",
        ],
        cta: "Reserve Full Night",
      },
    ],
  },
};

export const FAQ_ITEMS = [
  {
    num: "01",
    question: "Are all companion photos of sdfsdf in Goa on Goaxcort 100% real and video-verified?",
    answer:
      "Yes. Every Indian and Russian companion listed on Goaxcort.com is physically verified in Goa by our concierge team. We guarantee 100% real, unedited photos—if the companion who arrives at your hotel does not match her profile, you owe nothing.",
  },
  {
    num: "02",
    question: "Do I need to pay any advance deposit when booking Goa essdforts or Russian sdfsdf in Goa?",
    answer:
      "Never. We operate on a strict ₹0 advance payment policy. You do not pay any online deposit, registration fee, or cab charge upfront. Meet your chosen companion at your resort first, then settle directly in cash.",
  },
  {
    num: "03",
    question: "What are the standard rates for Indian Goa sdfsdf and Russian #sdfsdfsdf Goa?",
    answer:
      "Indian elite companions start from ₹10,000–₹15,000 depending on location and profile, while verified Russian models start from ₹16,000–₹22,000. Full 2-hour, 4-hour, and overnight all-inclusive packages are listed transparently in the Pricing section above.",
  },
  {
    num: "04",
    question: "How quickly can sdfdf in Goa arrive at resorts in North Goa and South Goa?",
    answer:
      "Our private chauffeur dispatch reaches Calangute, Baga, and Candolim in 15–30 minutes, Anjuna, Vagator, and Morjim in 25–40 minutes, and Panaji casinos or South Goa 5-star resorts within 30–60 minutes.",
  },
  {
    num: "05",
    question: "Are your Russian #sdfsdfsdf in Goa fluent in English and available for casino or dinner dates?",
    answer:
      "Yes. All our Russian and European companions speak conversational English and are experienced social dates for Panaji floating casinos (Deltin Royale, Big Daddy), Mandovi yacht charters, and fine-dining restaurants.",
  },
  {
    num: "06",
    question: "Which 5-star hotels and private villas allow smooth outcall entry for Goa #sdfsdfsdf?",
    answer:
      "We coordinate discreet guest-friendly outcalls to major luxury resorts across Candolim, Sinquerim, Calangute, Baga, Panaji, and South Goa. Simply share your hotel name and room number after confirming on WhatsApp.",
  },
  {
    num: "07",
    question: "How is my personal privacy protected when booking #sdfsdfsdf in Goa through Goaxcort?",
    answer:
      "Your phone number, hotel details, and booking history are never stored or shared with third parties. All WhatsApp chats and concierge coordination remain strictly confidential.",
  },
  {
    num: "08",
    question: "Can I reserve Indian or Russian #sdfsdfsdf Goa for full-day villa stays or weekend retreats?",
    answer:
      "Yes. Overnight (8-hour) and 24-hour villa retreat packages can be arranged directly through our 24/7 VIP Concierge Desk via WhatsApp or phone.",
  },
];
