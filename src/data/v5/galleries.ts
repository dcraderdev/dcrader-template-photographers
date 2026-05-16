// ─── Gallery data ─────────────────────────────────────────────────────────────
// V5 — Vibrant Joyful | Pop & Bloom Photography

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
    id: "priya-marcus",
    title: "Priya & Marcus",
    subtitle: "Barton Springs, Austin · May 2025",
    // Cover: Rhone / Unsplash  https://unsplash.com/photos/photo-1511285560929-80b456fea0bc
    coverImage: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80&fm=webp&fit=crop",
    coverAlt: "Couple dancing barefoot at an outdoor Austin summer wedding with string lights",
    coverCredit: "Rhone / Unsplash",
    images: [
      {
        src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1400&q=85&fm=webp&fit=crop",
        alt: "Couple dancing barefoot at an outdoor Austin summer wedding with string lights",
        credit: "Rhone / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1400&q=85&fm=webp&fit=crop",
        alt: "Wedding guests cheering as the couple share their first dance at Barton Springs",
        credit: "Álvaro CvG / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1400&q=85&fm=webp&fit=crop",
        alt: "Bride throwing her bouquet into a crowd of outstretched hands at sunset",
        credit: "Beatriz Pérez Moya / Unsplash",
      },
    ],
  },
  {
    id: "zoe-luis",
    title: "Zoe & Luis",
    subtitle: "Hill Country, Texas · April 2025",
    // Cover: Cassie Lopez / Unsplash  https://unsplash.com/photos/photo-1591604466107-ec97de577aff
    coverImage: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80&fm=webp&fit=crop",
    coverAlt: "Colorful wedding party throwing flower petals at a Texas hill country celebration",
    coverCredit: "Cassie Lopez / Unsplash",
    images: [
      {
        src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1400&q=85&fm=webp&fit=crop",
        alt: "Colorful wedding party throwing flower petals at a Texas hill country celebration",
        credit: "Cassie Lopez / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1400&q=85&fm=webp&fit=crop",
        alt: "The whole wedding party jumping in unison in the Texas bluebonnets",
        credit: "Rhone / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=1400&q=85&fm=webp&fit=crop",
        alt: "Wild-flower ceremony arch bursting with yellow and orange blooms in hill country",
        credit: "Thomas AE / Unsplash",
      },
    ],
  },
  {
    id: "amara-devon",
    title: "Amara & Devon",
    subtitle: "East Austin Rooftop · October 2024",
    // Cover: Євгенія Височина / Unsplash  https://unsplash.com/photos/photo-1537633552985-df8429e8048b
    coverImage: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80&fm=webp&fit=crop",
    coverAlt: "Joyful rooftop wedding in East Austin with the city skyline at sunset",
    coverCredit: "Євгенія Височина / Unsplash",
    images: [
      {
        src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1400&q=85&fm=webp&fit=crop",
        alt: "Joyful rooftop wedding in East Austin with the city skyline at sunset",
        credit: "Євгенія Височина / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1400&q=85&fm=webp&fit=crop",
        alt: "Couple kissing against the warm Austin skyline as the sun dips below the horizon",
        credit: "Cassie Lopez / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1400&q=85&fm=webp&fit=crop",
        alt: "Dance floor overflowing with guests under globe lights on the rooftop",
        credit: "Rhone / Unsplash",
      },
    ],
  },
  {
    id: "cleo-raul",
    title: "Cleo & Raúl",
    subtitle: "Fiesta Colors · March 2025",
    // Cover: Jonathan Borba / Unsplash  https://unsplash.com/photos/photo-1511285560929-80b456fea0bc
    coverImage: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80&fm=webp&fit=crop",
    coverAlt: "Vibrant fiesta-themed wedding with mariachi and colorful papel picado",
    coverCredit: "Jonathan Borba / Unsplash",
    images: [
      {
        src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1400&q=85&fm=webp&fit=crop",
        alt: "Vibrant fiesta-themed wedding with mariachi and colorful papel picado",
        credit: "Jonathan Borba / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1400&q=85&fm=webp&fit=crop",
        alt: "Bride and groom flanked by mariachi band in full charro suits",
        credit: "Євгенія Височина / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1400&q=85&fm=webp&fit=crop",
        alt: "Tables covered in marigold arrangements and papel picado in every color",
        credit: "Beatriz Pérez Moya / Unsplash",
      },
    ],
  },
  {
    id: "yuki-sam",
    title: "Yuki & Sam",
    subtitle: "The Parish, Austin · January 2025",
    // Cover: Álvaro CvG / Unsplash  https://unsplash.com/photos/photo-1519741497674-611481863552
    coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80&fm=webp&fit=crop",
    coverAlt: "Concert-venue wedding at The Parish with electric stage lighting and crowd dancing",
    coverCredit: "Álvaro CvG / Unsplash",
    images: [
      {
        src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1400&q=85&fm=webp&fit=crop",
        alt: "Concert-venue wedding at The Parish with electric stage lighting and crowd dancing",
        credit: "Álvaro CvG / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1400&q=85&fm=webp&fit=crop",
        alt: "Couple on stage at The Parish, confetti falling, crowd cheering below",
        credit: "Rhone / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1400&q=85&fm=webp&fit=crop",
        alt: "Wedding guests moshing and crowd-surfing to the live band at The Parish",
        credit: "Cassie Lopez / Unsplash",
      },
    ],
  },
  {
    id: "nia-eli",
    title: "Nia & Eli",
    subtitle: "Backyard BBQ Wedding · June 2024",
    // Cover: Beatriz Pérez Moya / Unsplash  https://unsplash.com/photos/photo-1583939003579-730e3918a45a
    coverImage: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80&fm=webp&fit=crop",
    coverAlt: "Joyful backyard wedding with fairy lights, food trucks, and friends celebrating",
    coverCredit: "Beatriz Pérez Moya / Unsplash",
    images: [
      {
        src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1400&q=85&fm=webp&fit=crop",
        alt: "Joyful backyard wedding with fairy lights, food trucks, and friends celebrating",
        credit: "Beatriz Pérez Moya / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1400&q=85&fm=webp&fit=crop",
        alt: "Kids chasing fireflies in the yard while adults share a toast under the lights",
        credit: "Jonathan Borba / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1400&q=85&fm=webp&fit=crop",
        alt: "Couple sharing smoked brisket at the BBQ food truck with their wedding guests",
        credit: "Álvaro CvG / Unsplash",
      },
    ],
  },
];
