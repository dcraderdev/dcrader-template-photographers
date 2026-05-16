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
    id: "the-micro",
    name: "The Micro",
    description: "A vow, a view, and two hours of pure magic. Perfect for intimate elopements with nowhere to be.",
    startingAt: "$1,800",
    hours: "Up to 2 hours",
    highlights: [
      "2 hours of coverage",
      "150+ edited images",
      "Private online gallery",
      "Full print release",
      "One location",
    ],
  },
  {
    id: "the-adventure",
    name: "The Adventure",
    description: "A full day in the wild — sunrise hike, ceremony in the backcountry, golden hour portraits, and every story in between.",
    startingAt: "$3,500",
    hours: "Full day elopement",
    featured: true,
    highlights: [
      "Full day of coverage",
      "400+ edited images",
      "Private online gallery",
      "Full print release",
      "Location scouting session",
      "Both Ruby & Wilder shooting",
      "Adventure prep guide",
    ],
  },
  {
    id: "the-festival",
    name: "The Festival",
    description: "Multi-day celebration for the couples who want it all — rehearsal dinner, ceremony, and a day-after adventure shoot.",
    startingAt: "$5,200",
    hours: "Multi-day event",
    highlights: [
      "Multi-day coverage",
      "600+ edited images",
      "Private online gallery",
      "Full print release",
      "Location scouting session",
      "Both Ruby & Wilder shooting",
      "Rehearsal dinner coverage",
      "Day-after adventure session",
      "Heirloom photo album",
    ],
  },
];

export const investmentGuide = {
  headline: "Not sure which adventure is yours?",
  subline:
    "Download the Wild Elopement Guide — it covers what every package includes, how to choose your location, and everything adventurous couples ask before they run away with us.",
  ctaLabel: "Get the Wild Elopement Guide",
  // Replace with your real PDF URL or ConvertKit/Mailchimp form URL
  formUrl: "#investment-guide-form",
};
