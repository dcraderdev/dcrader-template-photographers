// ─── Packages & pricing ───────────────────────────────────────────────────────
// V5 — Vibrant Joyful | Pop & Bloom Photography

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
    id: "the-spark",
    name: "The Spark",
    description: "The ceremony, the first kiss, the first dance — the hits, captured.",
    startingAt: "$2,500",
    hours: "6 hours",
    highlights: [
      "6 hours of coverage",
      "300+ edited images",
      "Private online gallery",
      "Print release included",
      "One photographer (Bea or Tomás)",
    ],
  },
  {
    id: "the-celebration",
    name: "The Celebration",
    description: "Getting ready through the last song — the full, unedited joy of your day.",
    startingAt: "$4,200",
    hours: "Full day",
    featured: true,
    highlights: [
      "Full-day coverage",
      "500+ edited images",
      "Private online gallery",
      "Print release included",
      "Both photographers (Bea & Tomás)",
      "Engagement session",
    ],
  },
  {
    id: "the-whole-fiesta",
    name: "The Whole Fiesta",
    description: "Rehearsal dinner, wedding day, brunch-after — two days, zero FOMO.",
    startingAt: "$6,000",
    hours: "2-day multi-event",
    highlights: [
      "2 full days of coverage",
      "700+ edited images",
      "Private online gallery",
      "Print release included",
      "Both photographers (Bea & Tomás)",
      "Engagement session",
      "Rehearsal dinner coverage",
      "Day-after hangover brunch session",
    ],
  },
];

export const investmentGuide = {
  headline: "Not sure which package is your vibe?",
  subline:
    "Download the Party Planning Guide — it breaks down what's in each package, how to choose, and answers every question couples ask before booking. (It's also just a fun read.)",
  ctaLabel: "Get the Party Planning Guide",
  formUrl: "#investment-guide-form",
};
