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
    coverImage: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80&fm=webp&fit=crop",
    coverAlt: "Couple embracing on a clifftop overlooking the Pacific Ocean at Big Sur",
    coverCredit: "Cassie Lopez / Unsplash",
    images: [
      {
        src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1400&q=85&fm=webp&fit=crop",
        alt: "Couple embracing on a clifftop overlooking the Pacific Ocean",
        credit: "Cassie Lopez / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=1400&q=85&fm=webp&fit=crop",
        alt: "Wedding ceremony arch decorated with fresh flowers",
        credit: "Thomas AE / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1525772764200-be829a350797?w=1400&q=85&fm=webp&fit=crop",
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
    coverImage: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80&fm=webp&fit=crop",
    coverAlt: "Bride and groom sharing a first look in a sun-drenched vineyard",
    coverCredit: "Nathan Dumlao / Unsplash",
    images: [
      {
        src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1400&q=85&fm=webp&fit=crop",
        alt: "Bride and groom sharing a first look in a sun-drenched vineyard",
        credit: "Nathan Dumlao / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1400&q=85&fm=webp&fit=crop",
        alt: "Wedding reception tables with soft candlelight and floral centerpieces",
        credit: "Amy Shamblen / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1400&q=85&fm=webp&fit=crop",
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
    coverImage: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80&fm=webp&fit=crop",
    coverAlt: "Newlyweds walking hand in hand through a meadow with Yosemite Valley in the background",
    coverCredit: "Jonathan Borba / Unsplash",
    images: [
      {
        src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1400&q=85&fm=webp&fit=crop",
        alt: "Newlyweds walking hand in hand through a meadow with Yosemite Valley behind them",
        credit: "Jonathan Borba / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1400&q=85&fm=webp&fit=crop",
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
    coverImage: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80&fm=webp&fit=crop",
    coverAlt: "Bride laughing with bridesmaids on a Malibu terrace overlooking the ocean",
    coverCredit: "Євгенія Височина / Unsplash",
    images: [
      {
        src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1400&q=85&fm=webp&fit=crop",
        alt: "Bride laughing with bridesmaids on a Malibu terrace overlooking the ocean",
        credit: "Євгенія Височина / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1522413452208-996ff3f3e740?w=1400&q=85&fm=webp&fit=crop",
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
    coverImage: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80&fm=webp&fit=crop",
    coverAlt: "Couple dancing under festoon lights at a desert wedding reception at dusk",
    coverCredit: "Rhone / Unsplash",
    images: [
      {
        src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1400&q=85&fm=webp&fit=crop",
        alt: "Couple dancing under festoon lights at a desert wedding reception at dusk",
        credit: "Rhone / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=1400&q=85&fm=webp&fit=crop",
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
    coverImage: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80&fm=webp&fit=crop",
    coverAlt: "Bride in an ivory lace gown standing in a cottage garden at Carmel",
    coverCredit: "Beatriz Pérez Moya / Unsplash",
    images: [
      {
        src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=85&fm=webp&fit=crop",
        alt: "Bride in an ivory lace gown standing in a cottage garden at Carmel",
        credit: "Beatriz Pérez Moya / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1400&q=85&fm=webp&fit=crop",
        alt: "Groom helping bride with her veil in a garden",
        credit: "Nathan Dumlao / Unsplash",
      },
    ],
  },
];
