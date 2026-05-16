// ─── Testimonials ─────────────────────────────────────────────────────────────

export interface Testimonial {
  quote: string;
  name: string;
  weddingInfo: string;
  // Unsplash couple portraits
  image: string;
  imageAlt: string;
  imageCredit: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Emma has this rare gift — she never makes you feel like you're being photographed. She moves through a wedding like a ghost with a camera. When our gallery arrived I sat with my mom and we both cried for twenty minutes. Every single frame felt like a memory I didn't know I was missing.",
    name: "Sophia & James",
    weddingInfo: "Big Sur, October 2024",
    // Photo: Shea Rouda / Unsplash
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&q=80&fm=webp&fit=crop",
    imageAlt: "Sophia and James, smiling couple at their Big Sur wedding",
    imageCredit: "Shea Rouda / Unsplash",
  },
  {
    quote:
      "We were terrified of being 'posed' in our photos. Emma showed up, asked us to just be ourselves, and delivered 600 images where I swear I don't look stiff in a single one. Our venue asked to use three shots for their own marketing — that's how stunning they are.",
    name: "Maya & Rafael",
    weddingInfo: "Santa Ynez Valley, June 2024",
    // Photo: Candice Picard / Unsplash
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&q=80&fm=webp&fit=crop",
    imageAlt: "Maya and Rafael, couple laughing together at their vineyard reception",
    imageCredit: "Candice Picard / Unsplash",
  },
  {
    quote:
      "We eloped on a Tuesday in Yosemite — just us, our dog, and Emma. I was terrified it would feel small. It felt enormous. She captured the way the light fell through the valley like it was painted. Those photos are the most beautiful thing I own.",
    name: "Claire & Théo",
    weddingInfo: "Yosemite Elopement, August 2024",
    // Photo: Drew Coffman / Unsplash
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&q=80&fm=webp&fit=crop",
    imageAlt: "Claire and Théo, couple standing in a Yosemite meadow on their wedding day",
    imageCredit: "Drew Coffman / Unsplash",
  },
  {
    quote:
      "From the very first email, Emma made us feel like she cared more about our day than her portfolio. Booking her was the best decision we made — after saying yes to each other, obviously.",
    name: "Nadia & Kai",
    weddingInfo: "Malibu, April 2025",
    // Photo: Євгенія Височина / Unsplash
    image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=400&q=80&fm=webp&fit=crop",
    imageAlt: "Nadia and Kai, newlyweds laughing on a Malibu terrace",
    imageCredit: "Євгенія Височина / Unsplash",
  },
];
