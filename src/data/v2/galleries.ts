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
    // Cover: Álvaro CvG / Unsplash  https://unsplash.com/photos/photo-1525772764200-be829a350797
    coverImage: "/images/1525772764200-be829a350797-800.webp",
    coverAlt: "Candlelit reception tables in a grand New York City wedding venue",
    coverCredit: "Álvaro CvG / Unsplash",
    images: [
      {
        src: "/images/1511285560929-80b456fea0bc-1400.webp",
        alt: "Bride and groom descending the grand staircase at The Plaza Hotel, Manhattan",
        credit: "Unsplash",
      },
      {
        src: "/images/1469371670807-013ccf25f16a-1400.webp",
        alt: "Ceremony arch framed against Midtown Manhattan architecture",
        credit: "Thomas AE / Unsplash",
      },
      {
        src: "/images/1522413452208-996ff3f3e740-1400.webp",
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
    coverImage: "/images/1519225421980-715cb0215aed-800.webp",
    coverAlt: "Couple in sharp black-and-white attire at an industrial Brooklyn loft wedding",
    coverCredit: "Shea Rouda / Unsplash",
    images: [
      {
        src: "/images/1519225421980-715cb0215aed-1400.webp",
        alt: "Couple in sharp black-and-white attire at an industrial Brooklyn loft wedding",
        credit: "Shea Rouda / Unsplash",
      },
      {
        src: "/images/1511285560929-80b456fea0bc-1400.webp",
        alt: "Reception candlelight against exposed brick walls at a Brooklyn loft",
        credit: "Rhone / Unsplash",
      },
      {
        src: "/images/1525772764200-be829a350797-1400.webp",
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
    coverImage: "/images/1606800052052-a08af7148866-800.webp",
    coverAlt: "Couple at the Eiffel Tower at night, Paris elopement",
    coverCredit: "Nathan Dumlao / Unsplash",
    images: [
      {
        src: "/images/1606800052052-a08af7148866-1400.webp",
        alt: "Couple at the Eiffel Tower at night, Paris elopement",
        credit: "Nathan Dumlao / Unsplash",
      },
      {
        src: "/images/1525772764200-be829a350797-1400.webp",
        alt: "Couple walking along the Seine at golden hour, Paris",
        credit: "Jonathan Borba / Unsplash",
      },
    ],
  },
  {
    id: "vera-nikolai",
    title: "Vera & Nikolai",
    subtitle: "Chicago Skyline · July 2024",
    // Cover: Thomas AE / Unsplash  https://unsplash.com/photos/photo-1469371670807-013ccf25f16a
    coverImage: "/images/1469371670807-013ccf25f16a-800.webp",
    coverAlt: "Wedding ceremony at a sophisticated Chicago venue, guests standing in solemn attention",
    coverCredit: "Thomas AE / Unsplash",
    images: [
      {
        src: "/images/1537633552985-df8429e8048b-1400.webp",
        alt: "Couple against the Chicago skyline at twilight, rooftop wedding",
        credit: "Євгенія Височина / Unsplash",
      },
      {
        src: "/images/1519741497674-611481863552-1400.webp",
        alt: "Bride in a structured ivory gown, Chicago skyline out of focus behind her",
        credit: "Álvaro CvG / Unsplash",
      },
    ],
  },
  {
    id: "jade-christian",
    title: "Jade & Christian",
    subtitle: "The High Line, NYC · October 2024",
    // Cover: Michael Dam / Unsplash  https://unsplash.com/photos/photo-1606216794074-735e91aa2c92
    coverImage: "/images/1606216794074-735e91aa2c92-800.webp",
    coverAlt: "Couple in sleek editorial wedding attire photographed in the city at twilight",
    coverCredit: "Michael Dam / Unsplash",
    images: [
      {
        src: "/images/1591604466107-ec97de577aff-1400.webp",
        alt: "Couple embracing on The High Line with the Hudson River and Manhattan skyline behind them",
        credit: "Cassie Lopez / Unsplash",
      },
      {
        src: "/images/1522673607200-164d1b6ce486-1400.webp",
        alt: "Reception tables with minimalist black-and-white florals, High Line event space",
        credit: "Amy Shamblen / Unsplash",
      },
      {
        src: "/images/1606216794074-735e91aa2c92-1400.webp",
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
    coverImage: "/images/1583939003579-730e3918a45a-800.webp",
    coverAlt: "Bride and groom on Miami Beach at sunset, ocean reflecting the last light",
    coverCredit: "Beatriz Pérez Moya / Unsplash",
    images: [
      {
        src: "/images/1583939003579-730e3918a45a-1400.webp",
        alt: "Bride and groom on Miami Beach at sunset, ocean reflecting the last light",
        credit: "Beatriz Pérez Moya / Unsplash",
      },
      {
        src: "/images/1511285560929-80b456fea0bc-1400.webp",
        alt: "Couple dancing under string lights at an outdoor Art Deco reception in Miami",
        credit: "Rhone / Unsplash",
      },
    ],
  },
];
