// ─── Packages & pricing ───────────────────────────────────────────────────────
// V4 — Modern Minimal | Lena Schultz Studio

export interface Package {
  id: string;
  name: string;
  description: string;
  startingAt: string;
  hours: string;
  highlights: string[];
  featured?: boolean;
}

export const packages: Package[] = [
  {
    id: "essential",
    name: "Essential",
    description: "The ceremony and its immediate gravity. Nothing surplus.",
    startingAt: "€3,500",
    hours: "4 hours",
    highlights: [
      "4 hours of coverage",
      "200+ curated images",
      "Private online gallery",
      "Full print licence",
      "Single location",
    ],
  },
  {
    id: "standard",
    name: "Standard",
    description: "From the preparation room to the first hour of the reception — complete.",
    startingAt: "€6,500",
    hours: "8 hours",
    featured: true,
    highlights: [
      "8 hours of coverage",
      "400+ curated images",
      "Private online gallery",
      "Full print licence",
      "Two locations",
      "Engagement session",
    ],
  },
  {
    id: "bespoke",
    name: "Bespoke",
    description: "Full-day documentation, entirely tailored to your wedding's scope and setting.",
    startingAt: "€9,800",
    hours: "Full day",
    highlights: [
      "Full-day coverage",
      "600+ curated images",
      "Private online gallery",
      "Full print licence",
      "Unlimited locations",
      "Engagement session",
      "Second photographer",
      "Heirloom print box",
    ],
  },
];

export const investmentGuide = {
  headline: "Not certain which collection applies?",
  subline:
    "Request the Studio Guide — a detailed document covering each collection, what is and is not included, and the questions most couples ask before making a decision.",
  ctaLabel: "Request the Studio Guide",
  formUrl: "#investment-guide-form",
};
