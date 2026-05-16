// ─── Packages & pricing ───────────────────────────────────────────────────────
// V2 Bold Editorial — Daria Volkov Photography

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
    description: "Just the two of you. One city. Every frame a statement.",
    startingAt: "$3,200",
    hours: "Up to 4 hours",
    highlights: [
      "4 hours of coverage",
      "300+ edited images",
      "Private online gallery",
      "Full print release",
      "Up to two locations",
    ],
  },
  {
    id: "half-day",
    name: "Half-Day",
    description: "The prep, the ceremony, the first moments of married life — all of it.",
    startingAt: "$5,500",
    hours: "Up to 7 hours",
    featured: true,
    highlights: [
      "7 hours of coverage",
      "500+ edited images",
      "Private online gallery",
      "Full print release",
      "Pre-wedding portrait session",
      "Second photographer",
    ],
  },
  {
    id: "full-day",
    name: "Full Day",
    description: "From the first curl of the curling iron to the last song of the night.",
    startingAt: "$8,500",
    hours: "Up to 12 hours",
    highlights: [
      "12 hours of coverage",
      "800+ edited images",
      "Private online gallery",
      "Full print release",
      "Pre-wedding portrait session",
      "Second photographer",
      "Rehearsal dinner coverage",
      "Heirloom fine-art album",
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
