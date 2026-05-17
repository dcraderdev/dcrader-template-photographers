// ─── Testimonials ─────────────────────────────────────────────────────────────
// V4 — Modern Minimal | Lena Schultz Studio

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
      "We had worked with photographers before — commercial shoots, portraits — and we knew what it felt like to be directed. Lena was categorically different. She occupied the room without imposing on it. The images she delivered from our ceremony at Villa d'Este are the finest photographs anyone has ever taken of us. We look at them and feel the silence of that morning.",
    name: "M & F",
    weddingInfo: "Villa d'Este, Lake Como · May 2025",
    // Photo: Shea Rouda / Unsplash
    image: "/images/1519225421980-715cb0215aed-400.webp",
    imageAlt: "M and F, couple at their Lake Como wedding at Villa d'Este",
    imageCredit: "Shea Rouda / Unsplash",
  },
  {
    quote:
      "Lena's work is not sentimental in the way that wedding photography can so easily become. It is precise and a little cold and entirely beautiful — exactly what we wanted for Chambord. Several of our guests who are involved in the arts have asked for her contact details. That tells you everything.",
    name: "H & T",
    weddingInfo: "Château de Chambord · June 2024",
    // Photo: Nathan Dumlao / Unsplash
    image: "/images/1606800052052-a08af7148866-400.webp",
    imageAlt: "H and T, newlyweds in the gardens of Château de Chambord",
    imageCredit: "Nathan Dumlao / Unsplash",
  },
  {
    quote:
      "We chose the Designmuseum specifically because we wanted photographs that looked like photographs — not like wedding photographs. Lena understood this without explanation. She arrived, assessed the light, and produced a body of work that could be exhibited. We are proud of every single image.",
    name: "K & A",
    weddingInfo: "Designmuseum, Copenhagen · March 2025",
    // Photo: Álvaro CvG / Unsplash
    image: "/images/1511285560929-80b456fea0bc-400.webp",
    imageAlt: "K and A, couple in the Designmuseum Copenhagen on their wedding day",
    imageCredit: "Álvaro CvG / Unsplash",
  },
  {
    quote:
      "Our Tuscan wedding was small and unhurried. We did not want a photographer who would manufacture moments. Lena waited for what was real and caught things we had not noticed ourselves — my husband's hand on the stone wall, the way the olive trees looked in the late afternoon. The gallery is genuinely moving.",
    name: "E & L",
    weddingInfo: "Matrimoni, Tuscany · September 2024",
    // Photo: Євгенія Височина / Unsplash
    image: "/images/1537633552985-df8429e8048b-400.webp",
    imageAlt: "E and L, couple at their minimalist Tuscan villa wedding",
    imageCredit: "Євгенія Височина / Unsplash",
  },
];
