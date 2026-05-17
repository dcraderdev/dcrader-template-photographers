// ─── Gallery data ─────────────────────────────────────────────────────────────
// V4 — Modern Minimal | Lena Schultz Studio

export interface GalleryImage {
  src: string;
  alt: string;
  credit: string;
}

export interface Gallery {
  id: string;
  title: string;
  subtitle: string;
  coverImage: string;
  coverAlt: string;
  coverCredit: string;
  images: GalleryImage[];
}

export const galleries: Gallery[] = [
  {
    id: "m-f-lake-como",
    title: "M & F",
    subtitle: "Villa d'Este, Lake Como · May 2025",
    // Cover: Shea Rouda / Unsplash  https://unsplash.com/photos/photo-1519225421980-715cb0215aed
    coverImage: "/images/1519225421980-715cb0215aed-800.webp",
    coverAlt: "Couple in architectural white space at Villa d'Este, Lake Como",
    coverCredit: "Shea Rouda / Unsplash",
    images: [
      {
        src: "/images/1519225421980-715cb0215aed-1400.webp",
        alt: "Couple in architectural white space at Villa d'Este, Lake Como",
        credit: "Shea Rouda / Unsplash",
      },
      {
        src: "/images/1511285560929-80b456fea0bc-1400.webp",
        alt: "Bride in sculptural gown against white colonnaded walkway at Villa d'Este",
        credit: "Álvaro CvG / Unsplash",
      },
      {
        src: "/images/1469371670807-013ccf25f16a-1400.webp",
        alt: "Ceremony arch framing the still surface of Lake Como at midday",
        credit: "Thomas AE / Unsplash",
      },
    ],
  },
  {
    id: "h-t-chambord",
    title: "H & T",
    subtitle: "Château de Chambord · June 2024",
    // Cover: Nathan Dumlao / Unsplash  https://unsplash.com/photos/photo-1606800052052-a08af7148866
    coverImage: "/images/1606800052052-a08af7148866-800.webp",
    coverAlt: "Newlyweds in the geometric gardens of Château de Chambord, France",
    coverCredit: "Nathan Dumlao / Unsplash",
    images: [
      {
        src: "/images/1606800052052-a08af7148866-1400.webp",
        alt: "Newlyweds in the geometric gardens of Château de Chambord, France",
        credit: "Nathan Dumlao / Unsplash",
      },
      {
        src: "/images/1519225421980-715cb0215aed-1400.webp",
        alt: "Couple beneath a stone archway of Château de Chambord in morning light",
        credit: "Shea Rouda / Unsplash",
      },
      {
        src: "/images/1525772764200-be829a350797-1400.webp",
        alt: "Bride holding a single white peony against the limestone façade",
        credit: "Jonathan Borba / Unsplash",
      },
    ],
  },
  {
    id: "k-a-copenhagen",
    title: "K & A",
    subtitle: "Designmuseum, Copenhagen · March 2025",
    // Cover: Thomas AE / Unsplash  https://unsplash.com/photos/photo-1469371670807-013ccf25f16a
    coverImage: "/images/1469371670807-013ccf25f16a-800.webp",
    coverAlt: "Minimalist ceremony in a light-filled Scandinavian museum space, guests standing in still attention",
    coverCredit: "Thomas AE / Unsplash",
    images: [
      {
        src: "/images/1511285560929-80b456fea0bc-1400.webp",
        alt: "Couple in a Scandinavian design museum with clean white walls and natural light",
        credit: "Álvaro CvG / Unsplash",
      },
      {
        src: "/images/1508214751196-bcfd4ca60f91-1400.webp",
        alt: "Bride standing in a gallery corridor, shadow cast long across the oak floor",
        credit: "Amy Shamblen / Unsplash",
      },
      {
        src: "/images/1606800052052-a08af7148866-1400.webp",
        alt: "Groom adjusting his cuffs beside a mid-century display case",
        credit: "Nathan Dumlao / Unsplash",
      },
    ],
  },
  {
    id: "r-s-berlin",
    title: "R & S",
    subtitle: "Berghain, Berlin · November 2024",
    // Cover: Cassie Lopez / Unsplash  https://unsplash.com/photos/photo-1591604466107-ec97de577aff
    coverImage: "/images/1591604466107-ec97de577aff-800.webp",
    coverAlt: "Couple in industrial architectural space in Berlin with raw concrete walls",
    coverCredit: "Cassie Lopez / Unsplash",
    images: [
      {
        src: "/images/1591604466107-ec97de577aff-1400.webp",
        alt: "Couple in industrial architectural space in Berlin with raw concrete walls",
        credit: "Cassie Lopez / Unsplash",
      },
      {
        src: "/images/1511285560929-80b456fea0bc-1400.webp",
        alt: "Bride silhouetted in a shaft of light through a high industrial window",
        credit: "Álvaro CvG / Unsplash",
      },
      {
        src: "/images/1519225421980-715cb0215aed-1400.webp",
        alt: "Couple standing still in the vast empty main hall of the venue",
        credit: "Shea Rouda / Unsplash",
      },
    ],
  },
  {
    id: "e-l-tuscany",
    title: "E & L",
    subtitle: "Matrimoni, Tuscany · September 2024",
    // Cover: Álvaro CvG / Unsplash  https://unsplash.com/photos/photo-1525772764200-be829a350797
    coverImage: "/images/1525772764200-be829a350797-800.webp",
    coverAlt: "Unadorned reception tables at a Tuscan villa, white linen and natural afternoon light",
    coverCredit: "Álvaro CvG / Unsplash",
    images: [
      {
        src: "/images/1537633552985-df8429e8048b-1400.webp",
        alt: "Minimalist ceremony at a Tuscan villa with olive grove backdrop",
        credit: "Євгенія Височина / Unsplash",
      },
      {
        src: "/images/1606800052052-a08af7148866-1400.webp",
        alt: "Couple walking a cypress-lined lane at dusk in the Tuscan hills",
        credit: "Nathan Dumlao / Unsplash",
      },
      {
        src: "/images/1469371670807-013ccf25f16a-1400.webp",
        alt: "Unadorned stone altar framed by terracotta urns and afternoon light",
        credit: "Thomas AE / Unsplash",
      },
    ],
  },
  {
    id: "j-n-mallorca",
    title: "J & N",
    subtitle: "Mallorca Clifftop · August 2024",
    // Cover: Jonathan Borba / Unsplash  https://unsplash.com/photos/photo-1606216794074-735e91aa2c92
    coverImage: "/images/1606216794074-735e91aa2c92-800.webp",
    coverAlt: "Couple on a Mallorca clifftop at golden hour, Mediterranean below",
    coverCredit: "Jonathan Borba / Unsplash",
    images: [
      {
        src: "/images/1606216794074-735e91aa2c92-1400.webp",
        alt: "Couple on a Mallorca clifftop at golden hour, Mediterranean below",
        credit: "Jonathan Borba / Unsplash",
      },
      {
        src: "/images/1519225421980-715cb0215aed-1400.webp",
        alt: "Bride standing at the cliff edge, white dress moving in the sea wind",
        credit: "Shea Rouda / Unsplash",
      },
      {
        src: "/images/1537633552985-df8429e8048b-1400.webp",
        alt: "Couple seated on the cliff ledge watching the sun descend into the water",
        credit: "Євгенія Височина / Unsplash",
      },
    ],
  },
];
