// ─── Gallery data ─────────────────────────────────────────────────────────────
// V2 Bold Editorial — Daria Volkov Photography
// Each gallery = one wedding or event.
// All Unsplash photos — attribution in comments.

export interface GalleryImage {
  src: string;
  alt: string;
  credit: string; // Unsplash photographer credit
}

export interface Gallery {
  id: string;
  title: string;
  subtitle: string; // e.g. "The Plaza, New York · March 2025"
  coverImage: string;
  coverAlt: string;
  coverCredit: string;
  images: GalleryImage[];
}

export const galleries: Gallery[] = [
  {
    id: "isabella-marco",
    title: "Isabella & Marco",
    subtitle: "The Plaza, New York · March 2025",
    // Cover: Unsplash  https://unsplash.com/photos/1511285560929-80b456fea0bc
    coverImage: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80&fm=webp&fit=crop",
    coverAlt: "Bride and groom descending the grand staircase at The Plaza Hotel, Manhattan",
    coverCredit: "Unsplash",
    images: [
      {
        src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1400&q=85&fm=webp&fit=crop",
        alt: "Bride and groom descending the grand staircase at The Plaza Hotel, Manhattan",
        credit: "Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=1400&q=85&fm=webp&fit=crop",
        alt: "Ceremony arch framed against Midtown Manhattan architecture",
        credit: "Thomas AE / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1522413452208-996ff3f3e740?w=1400&q=85&fm=webp&fit=crop",
        alt: "Wedding rings against a white marble surface",
        credit: "Sandy Millar / Unsplash",
      },
    ],
  },
  {
    id: "camille-ethan",
    title: "Camille & Ethan",
    subtitle: "Brooklyn Loft · January 2025",
    // Cover: Shea Rouda / Unsplash  https://unsplash.com/photos/1519225421980-715cb0215aed
    coverImage: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80&fm=webp&fit=crop",
    coverAlt: "Couple in sharp black-and-white attire at an industrial Brooklyn loft wedding",
    coverCredit: "Shea Rouda / Unsplash",
    images: [
      {
        src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1400&q=85&fm=webp&fit=crop",
        alt: "Couple in sharp black-and-white attire at an industrial Brooklyn loft wedding",
        credit: "Shea Rouda / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1400&q=85&fm=webp&fit=crop",
        alt: "Reception candlelight against exposed brick walls at a Brooklyn loft",
        credit: "Rhone / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1525772764200-be829a350797?w=1400&q=85&fm=webp&fit=crop",
        alt: "Bridal bouquet of white roses and eucalyptus against a dark loft wall",
        credit: "Álvaro CvG / Unsplash",
      },
    ],
  },
  {
    id: "sofia-james",
    title: "Sofía & James",
    subtitle: "Paris · September 2024",
    // Cover: Nathan Dumlao / Unsplash  https://unsplash.com/photos/1606800052052-a08af7148866
    coverImage: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80&fm=webp&fit=crop",
    coverAlt: "Couple at the Eiffel Tower at night, Paris elopement",
    coverCredit: "Nathan Dumlao / Unsplash",
    images: [
      {
        src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1400&q=85&fm=webp&fit=crop",
        alt: "Couple at the Eiffel Tower at night, Paris elopement",
        credit: "Nathan Dumlao / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1525772764200-be829a350797?w=1400&q=85&fm=webp&fit=crop",
        alt: "Couple walking along the Seine at golden hour, Paris",
        credit: "Jonathan Borba / Unsplash",
      },
    ],
  },
  {
    id: "vera-nikolai",
    title: "Vera & Nikolai",
    subtitle: "Chicago Skyline · July 2024",
    // Cover: Євгенія Височина / Unsplash  https://unsplash.com/photos/1537633552985-df8429e8048b
    coverImage: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80&fm=webp&fit=crop",
    coverAlt: "Couple against the Chicago skyline at twilight, rooftop wedding",
    coverCredit: "Євгенія Височина / Unsplash",
    images: [
      {
        src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1400&q=85&fm=webp&fit=crop",
        alt: "Couple against the Chicago skyline at twilight, rooftop wedding",
        credit: "Євгенія Височина / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1400&q=85&fm=webp&fit=crop",
        alt: "Bride in a structured ivory gown, Chicago skyline out of focus behind her",
        credit: "Álvaro CvG / Unsplash",
      },
    ],
  },
  {
    id: "jade-christian",
    title: "Jade & Christian",
    subtitle: "The High Line, NYC · October 2024",
    // Cover: Cassie Lopez / Unsplash  https://unsplash.com/photos/1591604466107-ec97de577aff
    coverImage: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80&fm=webp&fit=crop",
    coverAlt: "Couple embracing on The High Line with the Hudson River and Manhattan skyline behind them",
    coverCredit: "Cassie Lopez / Unsplash",
    images: [
      {
        src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1400&q=85&fm=webp&fit=crop",
        alt: "Couple embracing on The High Line with the Hudson River and Manhattan skyline behind them",
        credit: "Cassie Lopez / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1400&q=85&fm=webp&fit=crop",
        alt: "Reception tables with minimalist black-and-white florals, High Line event space",
        credit: "Amy Shamblen / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1400&q=85&fm=webp&fit=crop",
        alt: "Groom in a tailored black tuxedo before the ceremony",
        credit: "Michael Dam / Unsplash",
      },
    ],
  },
  {
    id: "ana-pierce",
    title: "Ana & Pierce",
    subtitle: "Miami Beach · February 2025",
    // Cover: Beatriz Pérez Moya / Unsplash  https://unsplash.com/photos/1583939003579-730e3918a45a
    coverImage: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80&fm=webp&fit=crop",
    coverAlt: "Bride and groom on Miami Beach at sunset, ocean reflecting the last light",
    coverCredit: "Beatriz Pérez Moya / Unsplash",
    images: [
      {
        src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1400&q=85&fm=webp&fit=crop",
        alt: "Bride and groom on Miami Beach at sunset, ocean reflecting the last light",
        credit: "Beatriz Pérez Moya / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1400&q=85&fm=webp&fit=crop",
        alt: "Couple dancing under string lights at an outdoor Art Deco reception in Miami",
        credit: "Rhone / Unsplash",
      },
    ],
  },
];
