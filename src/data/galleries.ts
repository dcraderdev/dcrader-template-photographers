// ─── Gallery data ─────────────────────────────────────────────────────────────
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
  subtitle: string; // e.g. "Napa Valley · September 2024"
  coverImage: string;
  coverAlt: string;
  coverCredit: string;
  images: GalleryImage[];
}

export const galleries: Gallery[] = [
  {
    id: "sophia-james",
    title: "Sophia & James",
    subtitle: "Big Sur · October 2024",
    // Cover: Cassie Lopez / Unsplash  https://unsplash.com/photos/photo-1591604466107-ec97de577aff
    coverImage: "/images/1591604466107-ec97de577aff-800.webp",
    coverAlt: "Couple embracing on a clifftop overlooking the Pacific Ocean at Big Sur",
    coverCredit: "Cassie Lopez / Unsplash",
    images: [
      {
        src: "/images/1591604466107-ec97de577aff-1400.webp",
        alt: "Couple embracing on a clifftop overlooking the Pacific Ocean",
        credit: "Cassie Lopez / Unsplash",
      },
      {
        src: "/images/1469371670807-013ccf25f16a-1400.webp",
        alt: "Wedding ceremony arch decorated with fresh flowers",
        credit: "Thomas AE / Unsplash",
      },
      {
        src: "/images/1525772764200-be829a350797-1400.webp",
        alt: "Bride holding a lush white-and-greenery bouquet",
        credit: "Álvaro CvG / Unsplash",
      },
    ],
  },
  {
    id: "maya-rafael",
    title: "Maya & Rafael",
    subtitle: "Santa Ynez Valley · June 2024",
    // Cover: Nathan Dumlao / Unsplash  https://unsplash.com/photos/photo-1606800052052-a08af7148866
    coverImage: "/images/1606800052052-a08af7148866-800.webp",
    coverAlt: "Bride and groom sharing a first look in a sun-drenched vineyard",
    coverCredit: "Nathan Dumlao / Unsplash",
    images: [
      {
        src: "/images/1606800052052-a08af7148866-1400.webp",
        alt: "Bride and groom sharing a first look in a sun-drenched vineyard",
        credit: "Nathan Dumlao / Unsplash",
      },
      {
        src: "/images/1522673607200-164d1b6ce486-1400.webp",
        alt: "Wedding reception tables with soft candlelight and floral centerpieces",
        credit: "Amy Shamblen / Unsplash",
      },
      {
        src: "/images/1606216794074-735e91aa2c92-1400.webp",
        alt: "Groom looking at the camera before the ceremony",
        credit: "Michael Dam / Unsplash",
      },
    ],
  },
  {
    id: "claire-theo",
    title: "Claire & Théo",
    subtitle: "Yosemite Elopement · August 2024",
    // Cover: Jonathan Borba / Unsplash  https://unsplash.com/photos/photo-1525772764200-be829a350797
    coverImage: "/images/1583939003579-730e3918a45a-800.webp",
    coverAlt: "Newlyweds walking hand in hand through a meadow with Yosemite Valley in the background",
    coverCredit: "Jonathan Borba / Unsplash",
    images: [
      {
        src: "/images/1583939003579-730e3918a45a-1400.webp",
        alt: "Newlyweds walking hand in hand through a meadow with Yosemite Valley behind them",
        credit: "Jonathan Borba / Unsplash",
      },
      {
        src: "/images/1519741497674-611481863552-1400.webp",
        alt: "Couple in wedding attire surrounded by wildflowers at golden hour",
        credit: "Álvaro CvG / Unsplash",
      },
    ],
  },
  {
    id: "nadia-kai",
    title: "Nadia & Kai",
    subtitle: "Malibu · April 2025",
    // Cover: Євгенія Височина / Unsplash
    coverImage: "/images/1537633552985-df8429e8048b-800.webp",
    coverAlt: "Bride laughing with bridesmaids on a Malibu terrace overlooking the ocean",
    coverCredit: "Євгенія Височина / Unsplash",
    images: [
      {
        src: "/images/1537633552985-df8429e8048b-1400.webp",
        alt: "Bride laughing with bridesmaids on a Malibu terrace overlooking the ocean",
        credit: "Євгенія Височина / Unsplash",
      },
      {
        src: "/images/1522413452208-996ff3f3e740-1400.webp",
        alt: "Wedding rings resting on a white linen background",
        credit: "Sandy Millar / Unsplash",
      },
    ],
  },
  {
    id: "isabelle-omar",
    title: "Isabelle & Omar",
    subtitle: "Palm Springs · February 2025",
    // Cover: Rhone / Unsplash
    coverImage: "/images/1511285560929-80b456fea0bc-800.webp",
    coverAlt: "Couple dancing under festoon lights at a desert wedding reception at dusk",
    coverCredit: "Rhone / Unsplash",
    images: [
      {
        src: "/images/1511285560929-80b456fea0bc-1400.webp",
        alt: "Couple dancing under festoon lights at a desert wedding reception at dusk",
        credit: "Rhone / Unsplash",
      },
      {
        src: "/images/1469371670807-013ccf25f16a-1400.webp",
        alt: "Wedding ceremony arch with palm trees silhouetted against a sunset sky",
        credit: "Thomas AE / Unsplash",
      },
    ],
  },
  {
    id: "grace-luca",
    title: "Grace & Luca",
    subtitle: "Carmel-by-the-Sea · November 2024",
    // Cover: Beatriz Pérez Moya / Unsplash
    coverImage: "/images/1583939003579-730e3918a45a-800.webp",
    coverAlt: "Bride in an ivory lace gown standing in a cottage garden at Carmel",
    coverCredit: "Beatriz Pérez Moya / Unsplash",
    images: [
      {
        src: "/images/1583939003579-730e3918a45a-800.webp",
        alt: "Bride in an ivory lace gown standing in a cottage garden at Carmel",
        credit: "Beatriz Pérez Moya / Unsplash",
      },
      {
        src: "/images/1606800052052-a08af7148866-1400.webp",
        alt: "Groom helping bride with her veil in a garden",
        credit: "Nathan Dumlao / Unsplash",
      },
    ],
  },
];
