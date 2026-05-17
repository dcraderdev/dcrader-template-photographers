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
    coverImage: "/images/1511285560929-80b456fea0bc-800.webp",
    coverAlt: "Couple dancing barefoot at an outdoor Austin summer wedding with string lights",
    coverCredit: "Rhone / Unsplash",
    images: [
      {
        src: "/images/1511285560929-80b456fea0bc-1400.webp",
        alt: "Couple dancing barefoot at an outdoor Austin summer wedding with string lights",
        credit: "Rhone / Unsplash",
      },
      {
        src: "/images/1519741497674-611481863552-1400.webp",
        alt: "Wedding guests cheering as the couple share their first dance at Barton Springs",
        credit: "Álvaro CvG / Unsplash",
      },
      {
        src: "/images/1583939003579-730e3918a45a-1400.webp",
        alt: "Bride throwing her bouquet into a crowd of outstretched hands at sunset",
        credit: "Beatriz Pérez Moya / Unsplash",
      },
    ],
  },
  {
    id: "zoe-luis",
    title: "Zoe & Luis",
    subtitle: "Hill Country, Texas · April 2025",
    // Cover: Beatriz Pérez Moya / Unsplash  https://unsplash.com/photos/photo-1583939003579-730e3918a45a
    coverImage: "/images/1583939003579-730e3918a45a-800.webp",
    coverAlt: "Couple kissing as joyful guests shower them with flower petals at a Texas hill country wedding",
    coverCredit: "Beatriz Pérez Moya / Unsplash",
    images: [
      {
        src: "/images/1591604466107-ec97de577aff-1400.webp",
        alt: "Colorful wedding party throwing flower petals at a Texas hill country celebration",
        credit: "Cassie Lopez / Unsplash",
      },
      {
        src: "/images/1511285560929-80b456fea0bc-1400.webp",
        alt: "The whole wedding party jumping in unison in the Texas bluebonnets",
        credit: "Rhone / Unsplash",
      },
      {
        src: "/images/1469371670807-013ccf25f16a-1400.webp",
        alt: "Wild-flower ceremony arch bursting with yellow and orange blooms in hill country",
        credit: "Thomas AE / Unsplash",
      },
    ],
  },
  {
    id: "amara-devon",
    title: "Amara & Devon",
    subtitle: "East Austin Rooftop · October 2024",
    // Cover: Álvaro CvG / Unsplash  https://unsplash.com/photos/photo-1525772764200-be829a350797
    coverImage: "/images/1525772764200-be829a350797-800.webp",
    coverAlt: "Vibrant reception tables on an East Austin rooftop, adorned with wildflowers and string lights",
    coverCredit: "Álvaro CvG / Unsplash",
    images: [
      {
        src: "/images/1537633552985-df8429e8048b-1400.webp",
        alt: "Joyful rooftop wedding in East Austin with the city skyline at sunset",
        credit: "Євгенія Височина / Unsplash",
      },
      {
        src: "/images/1591604466107-ec97de577aff-1400.webp",
        alt: "Couple kissing against the warm Austin skyline as the sun dips below the horizon",
        credit: "Cassie Lopez / Unsplash",
      },
      {
        src: "/images/1511285560929-80b456fea0bc-1400.webp",
        alt: "Dance floor overflowing with guests under globe lights on the rooftop",
        credit: "Rhone / Unsplash",
      },
    ],
  },
  {
    id: "cleo-raul",
    title: "Cleo & Raúl",
    subtitle: "Fiesta Colors · March 2025",
    // Cover: Thomas AE / Unsplash  https://unsplash.com/photos/photo-1469371670807-013ccf25f16a
    coverImage: "/images/1469371670807-013ccf25f16a-800.webp",
    coverAlt: "Fiesta-themed wedding ceremony with guests lining the aisle beneath marigold and paper-flower arches",
    coverCredit: "Thomas AE / Unsplash",
    images: [
      {
        src: "/images/1511285560929-80b456fea0bc-1400.webp",
        alt: "Vibrant fiesta-themed wedding with mariachi and colorful papel picado",
        credit: "Jonathan Borba / Unsplash",
      },
      {
        src: "/images/1537633552985-df8429e8048b-1400.webp",
        alt: "Bride and groom flanked by mariachi band in full charro suits",
        credit: "Євгенія Височина / Unsplash",
      },
      {
        src: "/images/1583939003579-730e3918a45a-1400.webp",
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
    coverImage: "/images/1519741497674-611481863552-800.webp",
    coverAlt: "Concert-venue wedding at The Parish with electric stage lighting and crowd dancing",
    coverCredit: "Álvaro CvG / Unsplash",
    images: [
      {
        src: "/images/1519741497674-611481863552-1400.webp",
        alt: "Concert-venue wedding at The Parish with electric stage lighting and crowd dancing",
        credit: "Álvaro CvG / Unsplash",
      },
      {
        src: "/images/1511285560929-80b456fea0bc-1400.webp",
        alt: "Couple on stage at The Parish, confetti falling, crowd cheering below",
        credit: "Rhone / Unsplash",
      },
      {
        src: "/images/1591604466107-ec97de577aff-1400.webp",
        alt: "Wedding guests moshing and crowd-surfing to the live band at The Parish",
        credit: "Cassie Lopez / Unsplash",
      },
    ],
  },
  {
    id: "nia-eli",
    title: "Nia & Eli",
    subtitle: "Backyard BBQ Wedding · June 2024",
    // Cover: Євгенія Височина / Unsplash  https://unsplash.com/photos/photo-1537633552985-df8429e8048b
    coverImage: "/images/1537633552985-df8429e8048b-800.webp",
    coverAlt: "Couple celebrating at golden hour at their backyard wedding, surrounded by close friends and family",
    coverCredit: "Євгенія Височина / Unsplash",
    images: [
      {
        src: "/images/1583939003579-730e3918a45a-1400.webp",
        alt: "Joyful backyard wedding with fairy lights, food trucks, and friends celebrating",
        credit: "Beatriz Pérez Moya / Unsplash",
      },
      {
        src: "/images/1511285560929-80b456fea0bc-1400.webp",
        alt: "Kids chasing fireflies in the yard while adults share a toast under the lights",
        credit: "Jonathan Borba / Unsplash",
      },
      {
        src: "/images/1519741497674-611481863552-1400.webp",
        alt: "Couple sharing smoked brisket at the BBQ food truck with their wedding guests",
        credit: "Álvaro CvG / Unsplash",
      },
    ],
  },
];
