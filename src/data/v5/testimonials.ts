// ─── Testimonials ─────────────────────────────────────────────────────────────
// V5 — Vibrant Joyful | Pop & Bloom Photography

export interface Testimonial {
  quote: string;
  name: string;
  weddingInfo: string;
  image: string;
  imageAlt: string;
  imageCredit: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "I don't even know when Bea and Tomás were taking pictures because they were just… there, part of the party. My maid of honor thought Tomás was one of my college friends for the first two hours. The photos came back and I genuinely screamed — every single one looks like we were having the best night of our lives. Because we were!",
    name: "Priya & Marcus",
    weddingInfo: "Barton Springs, Austin · May 2025",
    // Photo: Rhone / Unsplash
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80&fm=webp&fit=crop",
    imageAlt: "Priya and Marcus dancing at their outdoor Austin wedding at Barton Springs",
    imageCredit: "Rhone / Unsplash",
  },
  {
    quote:
      "We told Bea and Tomás our wedding was going to be a little chaotic — big family, mariachi, kids running everywhere — and they said 'perfect, that's our favorite kind.' They weren't lying. They caught my abuela dancing with my husband and I cried for ten minutes straight when I saw that photo. Worth every penny.",
    name: "Cleo & Raúl",
    weddingInfo: "Fiesta Colors, Austin · March 2025",
    // Photo: Cassie Lopez / Unsplash
    image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=400&q=80&fm=webp&fit=crop",
    imageAlt: "Cleo and Raúl at their vibrant fiesta-themed wedding celebration",
    imageCredit: "Cassie Lopez / Unsplash",
  },
  {
    quote:
      "Our wedding was at a concert venue and we were worried photographers wouldn't know how to handle the lighting situation. Bea and Tomás showed up and immediately started geeking out about the stage lights. The photos look like album covers. Our friends will not stop asking for prints.",
    name: "Yuki & Sam",
    weddingInfo: "The Parish, Austin · January 2025",
    // Photo: Євгенія Височина / Unsplash
    image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=400&q=80&fm=webp&fit=crop",
    imageAlt: "Yuki and Sam at their concert-venue wedding at The Parish in Austin",
    imageCredit: "Євгенія Височина / Unsplash",
  },
  {
    quote:
      "Backyard BBQ wedding, food trucks, no real timeline, a dog as ring bearer — we thought we might be too chaotic for a real photographer. Pop & Bloom showed up in boots and immediately started chatting up my dad. By the end of the night they felt like family. The gallery? Absolute magic. Book them immediately.",
    name: "Nia & Eli",
    weddingInfo: "Backyard BBQ Wedding, Austin · June 2024",
    // Photo: Jonathan Borba / Unsplash
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80&fm=webp&fit=crop",
    imageAlt: "Nia and Eli celebrating at their joyful backyard wedding with friends and family",
    imageCredit: "Jonathan Borba / Unsplash",
  },
];
