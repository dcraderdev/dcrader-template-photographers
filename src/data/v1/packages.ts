// ─── Packages & pricing ───────────────────────────────────────────────────────
// Edit this file to update your packages and pricing.

export interface Package {
  id: string;
  name: string;
  description: string;
  startingAt: string;
  hours: string;
  highlights: string[];
  featured?: boolean; // highlights this card visually
}

export const packages: Package[] = [
  {
    id: "elopement",
    name: "Elopement",
    description: "Just the two of you — and every last second of it.",
    startingAt: "$2,200",
    hours: "Up to 4 hours",
    highlights: [
      "4 hours of coverage",
      "300+ edited images",
      "Private online gallery",
      "Print release included",
      "Two locations",
    ],
  },
  {
    id: "half-day",
    name: "Half-Day",
    description: "The getting ready, the ceremony, the first hour of forever.",
    startingAt: "$3,800",
    hours: "Up to 7 hours",
    featured: true,
    highlights: [
      "7 hours of coverage",
      "500+ edited images",
      "Private online gallery",
      "Print release included",
      "Engagement session",
      "Two photographers",
    ],
  },
  {
    id: "full-day",
    name: "Full Day",
    description: "From sunrise preparations to the last dance — all of it.",
    startingAt: "$5,500",
    hours: "Up to 12 hours",
    highlights: [
      "12 hours of coverage",
      "700+ edited images",
      "Private online gallery",
      "Print release included",
      "Engagement session",
      "Two photographers",
      "Rehearsal dinner coverage",
      "Heirloom photo album",
    ],
  },
];

export const investmentGuide = {
  headline: "Not sure what's right for you?",
  subline:
    "Download the Investment Guide — it covers what each package includes, how to choose, and answers every question couples ask before booking.",
  ctaLabel: "Get the Investment Guide",
  // Replace with your real PDF URL or ConvertKit/Mailchimp form URL
  formUrl: "#investment-guide-form",
};
