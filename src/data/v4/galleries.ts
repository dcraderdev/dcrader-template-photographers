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
    coverImage: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80&fm=webp&fit=crop",
    coverAlt: "Couple in architectural white space at Villa d'Este, Lake Como",
    coverCredit: "Shea Rouda / Unsplash",
    images: [
      {
        src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1400&q=85&fm=webp&fit=crop",
        alt: "Couple in architectural white space at Villa d'Este, Lake Como",
        credit: "Shea Rouda / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1400&q=85&fm=webp&fit=crop",
        alt: "Bride in sculptural gown against white colonnaded walkway at Villa d'Este",
        credit: "Álvaro CvG / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=1400&q=85&fm=webp&fit=crop",
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
    coverImage: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80&fm=webp&fit=crop",
    coverAlt: "Newlyweds in the geometric gardens of Château de Chambord, France",
    coverCredit: "Nathan Dumlao / Unsplash",
    images: [
      {
        src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1400&q=85&fm=webp&fit=crop",
        alt: "Newlyweds in the geometric gardens of Château de Chambord, France",
        credit: "Nathan Dumlao / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1400&q=85&fm=webp&fit=crop",
        alt: "Couple beneath a stone archway of Château de Chambord in morning light",
        credit: "Shea Rouda / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1520854221256-17d7dc783f06?w=1400&q=85&fm=webp&fit=crop",
        alt: "Bride holding a single white peony against the limestone façade",
        credit: "Jonathan Borba / Unsplash",
      },
    ],
  },
  {
    id: "k-a-copenhagen",
    title: "K & A",
    subtitle: "Designmuseum, Copenhagen · March 2025",
    // Cover: Álvaro CvG / Unsplash  https://unsplash.com/photos/photo-1511285560929-80b456fea0bc
    coverImage: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80&fm=webp&fit=crop",
    coverAlt: "Couple in a Scandinavian design museum with clean white walls and natural light",
    coverCredit: "Álvaro CvG / Unsplash",
    images: [
      {
        src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1400&q=85&fm=webp&fit=crop",
        alt: "Couple in a Scandinavian design museum with clean white walls and natural light",
        credit: "Álvaro CvG / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=1400&q=85&fm=webp&fit=crop",
        alt: "Bride standing in a gallery corridor, shadow cast long across the oak floor",
        credit: "Amy Shamblen / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1400&q=85&fm=webp&fit=crop",
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
    coverImage: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80&fm=webp&fit=crop",
    coverAlt: "Couple in industrial architectural space in Berlin with raw concrete walls",
    coverCredit: "Cassie Lopez / Unsplash",
    images: [
      {
        src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1400&q=85&fm=webp&fit=crop",
        alt: "Couple in industrial architectural space in Berlin with raw concrete walls",
        credit: "Cassie Lopez / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1400&q=85&fm=webp&fit=crop",
        alt: "Bride silhouetted in a shaft of light through a high industrial window",
        credit: "Álvaro CvG / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1400&q=85&fm=webp&fit=crop",
        alt: "Couple standing still in the vast empty main hall of the venue",
        credit: "Shea Rouda / Unsplash",
      },
    ],
  },
  {
    id: "e-l-tuscany",
    title: "E & L",
    subtitle: "Matrimoni, Tuscany · September 2024",
    // Cover: Євгенія Височина / Unsplash  https://unsplash.com/photos/photo-1537633552985-df8429e8048b
    coverImage: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80&fm=webp&fit=crop",
    coverAlt: "Minimalist ceremony at a Tuscan villa with olive grove backdrop",
    coverCredit: "Євгенія Височина / Unsplash",
    images: [
      {
        src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1400&q=85&fm=webp&fit=crop",
        alt: "Minimalist ceremony at a Tuscan villa with olive grove backdrop",
        credit: "Євгенія Височина / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1400&q=85&fm=webp&fit=crop",
        alt: "Couple walking a cypress-lined lane at dusk in the Tuscan hills",
        credit: "Nathan Dumlao / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=1400&q=85&fm=webp&fit=crop",
        alt: "Unadorned stone altar framed by terracotta urns and afternoon light",
        credit: "Thomas AE / Unsplash",
      },
    ],
  },
  {
    id: "j-n-mallorca",
    title: "J & N",
    subtitle: "Mallorca Clifftop · August 2024",
    // Cover: Jonathan Borba / Unsplash  https://unsplash.com/photos/photo-1530103862676-de8c9debad1d
    coverImage: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80&fm=webp&fit=crop",
    coverAlt: "Couple on a Mallorca clifftop at golden hour, Mediterranean below",
    coverCredit: "Jonathan Borba / Unsplash",
    images: [
      {
        src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1400&q=85&fm=webp&fit=crop",
        alt: "Couple on a Mallorca clifftop at golden hour, Mediterranean below",
        credit: "Jonathan Borba / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1400&q=85&fm=webp&fit=crop",
        alt: "Bride standing at the cliff edge, white dress moving in the sea wind",
        credit: "Shea Rouda / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1400&q=85&fm=webp&fit=crop",
        alt: "Couple seated on the cliff ledge watching the sun descend into the water",
        credit: "Євгенія Височина / Unsplash",
      },
    ],
  },
];
