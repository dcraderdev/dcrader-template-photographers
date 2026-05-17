// ─── Testimonials ─────────────────────────────────────────────────────────────
// V2 Bold Editorial — Daria Volkov Photography

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
      "We hired Daria because her portfolio looked like a fashion spread, not a wedding album — and that is exactly what she delivered. She walked The Plaza like she owned it. Every composition was intentional, every shadow used. We've had editors ask who shot our wedding. That doesn't happen by accident.",
    name: "Isabella & Marco",
    weddingInfo: "The Plaza, New York · March 2025",
    // Photo: Shea Rouda / Unsplash
    image: "/images/1519225421980-715cb0215aed-400.webp",
    imageAlt: "Isabella and Marco, dressed in sharp evening wear at their Plaza Hotel wedding",
    imageCredit: "Shea Rouda / Unsplash",
  },
  {
    quote:
      "Daria doesn't photograph weddings — she directs them. Not in a controlling way, but in the way that a great film director shapes a scene: she saw angles we never would have found, moved us into light we didn't know was there, and made the whole thing feel effortless. Our gallery is genuinely the most beautiful set of images either of us has ever seen.",
    name: "Sofía & James",
    weddingInfo: "Paris · September 2024",
    // Photo: Nathan Dumlao / Unsplash
    image: "/images/1606800052052-a08af7148866-400.webp",
    imageAlt: "Sofía and James, couple laughing at their Paris elopement",
    imageCredit: "Nathan Dumlao / Unsplash",
  },
  {
    quote:
      "We wanted editorial, not sentimental — and Daria understood that immediately. She didn't try to soften our aesthetic or talk us into 'warmer' shots. She showed up with the same vision we had and then executed it at a level we couldn't have imagined. The black-and-whites from The High Line belong in a gallery.",
    name: "Jade & Christian",
    weddingInfo: "The High Line, NYC · October 2024",
    // Photo: Cassie Lopez / Unsplash
    image: "/images/1591604466107-ec97de577aff-400.webp",
    imageAlt: "Jade and Christian, couple in contemporary wedding attire on The High Line",
    imageCredit: "Cassie Lopez / Unsplash",
  },
  {
    quote:
      "Daria is the most technically precise photographer I've ever worked with — and I'm an architect, so I notice these things. The geometry in her framing is immaculate. She worked the Chicago skyline like a backdrop she'd scouted for months. When our gallery arrived, my first thought was: these are not wedding photos. These are photographs. There is a difference.",
    name: "Vera & Nikolai",
    weddingInfo: "Chicago Skyline · July 2024",
    // Photo: Євгенія Височина / Unsplash
    image: "/images/1537633552985-df8429e8048b-400.webp",
    imageAlt: "Vera and Nikolai, couple against the Chicago skyline at their rooftop wedding",
    imageCredit: "Євгенія Височина / Unsplash",
  },
];
