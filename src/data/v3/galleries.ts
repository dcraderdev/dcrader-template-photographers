// ─── Gallery data ─────────────────────────────────────────────────────────────
// Each gallery = one elopement or adventure wedding.
// All Unsplash photos — attribution in comments.

export interface GalleryImage {
  src: string;
  alt: string;
  credit: string; // Unsplash photographer credit
}

export interface Gallery {
  id: string;
  title: string;
  subtitle: string; // e.g. "Olympic Peninsula, WA · July 2024"
  coverImage: string;
  coverAlt: string;
  coverCredit: string;
  images: GalleryImage[];
}

export const galleries: Gallery[] = [
  {
    id: "anya-finn",
    title: "Anya & Finn",
    subtitle: "Olympic Peninsula, WA · July 2024",
    // Cover: Álvaro CvG / Unsplash  https://unsplash.com/photos/photo-1519741497674-611481863552
    coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80&fm=webp&fit=crop",
    coverAlt: "Couple in flowing wedding attire on a rocky Pacific coast beach at sunset",
    coverCredit: "Álvaro CvG / Unsplash",
    images: [
      {
        src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1400&q=85&fm=webp&fit=crop",
        alt: "Couple in flowing wedding attire on a rocky Pacific coast beach at sunset",
        credit: "Álvaro CvG / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1400&q=85&fm=webp&fit=crop",
        alt: "Newlyweds walking barefoot through shallow tide pools on the Olympic coast",
        credit: "Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1400&q=85&fm=webp&fit=crop",
        alt: "Couple laughing together on a driftwood log as waves break behind them",
        credit: "Євгенія Височина / Unsplash",
      },
    ],
  },
  {
    id: "saya-theo",
    title: "Saya & Theo",
    subtitle: "Columbia River Gorge · September 2024",
    // Cover: Cassie Lopez / Unsplash  https://unsplash.com/photos/photo-1591604466107-ec97de577aff
    coverImage: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80&fm=webp&fit=crop",
    coverAlt: "Newlyweds standing in front of Multnomah Falls surrounded by lush green forest",
    coverCredit: "Cassie Lopez / Unsplash",
    images: [
      {
        src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1400&q=85&fm=webp&fit=crop",
        alt: "Newlyweds standing in front of Multnomah Falls surrounded by lush green forest",
        credit: "Cassie Lopez / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1400&q=85&fm=webp&fit=crop",
        alt: "Bride in a flowing champagne dress twirling on a mossy stone path in the gorge",
        credit: "Beatriz Pérez Moya / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1400&q=85&fm=webp&fit=crop",
        alt: "Couple exchanging vows beneath a canopy of old-growth maple trees",
        credit: "Álvaro CvG / Unsplash",
      },
    ],
  },
  {
    id: "lila-cove",
    title: "Lila & Cove",
    subtitle: "Crater Lake, Oregon · August 2024",
    // Cover: Unsplash  https://unsplash.com/photos/photo-1530103862676-de8c9debad1d
    coverImage: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80&fm=webp&fit=crop",
    coverAlt: "Couple at the rim of Crater Lake, Oregon in elopement attire",
    coverCredit: "Unsplash",
    images: [
      {
        src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1400&q=85&fm=webp&fit=crop",
        alt: "Couple at the rim of Crater Lake, Oregon in elopement attire with the caldera behind them",
        credit: "Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1400&q=85&fm=webp&fit=crop",
        alt: "Newlyweds sitting on volcanic rock at the edge of Crater Lake at sunrise",
        credit: "Євгенія Височина / Unsplash",
      },
    ],
  },
  {
    id: "ivy-sage",
    title: "Ivy & Sage",
    subtitle: "Redwood Forest, CA · October 2024",
    // Cover: Nathan Dumlao / Unsplash  https://unsplash.com/photos/photo-1606800052052-a08af7148866
    coverImage: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80&fm=webp&fit=crop",
    coverAlt: "Bride twirling among ancient redwood trees with golden light filtering through",
    coverCredit: "Nathan Dumlao / Unsplash",
    images: [
      {
        src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1400&q=85&fm=webp&fit=crop",
        alt: "Bride twirling among ancient redwood trees with golden cathedral light filtering through the canopy",
        credit: "Nathan Dumlao / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1400&q=85&fm=webp&fit=crop",
        alt: "Couple embracing at the base of an ancient redwood, the trunk dwarfing them both",
        credit: "Cassie Lopez / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1400&q=85&fm=webp&fit=crop",
        alt: "Newlyweds walking a fern-lined trail through the redwood understory, hands intertwined",
        credit: "Beatriz Pérez Moya / Unsplash",
      },
    ],
  },
  {
    id: "maren-jude",
    title: "Maren & Jude",
    subtitle: "Mt. Rainier Meadows · June 2025",
    // Cover: Євгенія Височина / Unsplash  https://unsplash.com/photos/photo-1537633552985-df8429e8048b
    coverImage: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80&fm=webp&fit=crop",
    coverAlt: "Couple in wildflower meadows below Mt. Rainier in matching earthy tones",
    coverCredit: "Євгенія Височина / Unsplash",
    images: [
      {
        src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1400&q=85&fm=webp&fit=crop",
        alt: "Couple in wildflower meadows below Mt. Rainier in matching earthy tones, the peak rising behind them",
        credit: "Євгенія Височина / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1400&q=85&fm=webp&fit=crop",
        alt: "Newlyweds lying in a field of lupine and paintbrush wildflowers, laughing up at the sky",
        credit: "Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1400&q=85&fm=webp&fit=crop",
        alt: "Couple sharing their first kiss as husband and wife with Mt. Rainier glowing behind them at dusk",
        credit: "Álvaro CvG / Unsplash",
      },
    ],
  },
  {
    id: "elle-ren",
    title: "Elle & Ren",
    subtitle: "Cannon Beach, OR · March 2025",
    // Cover: Beatriz Pérez Moya / Unsplash  https://unsplash.com/photos/photo-1583939003579-730e3918a45a
    coverImage: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80&fm=webp&fit=crop",
    coverAlt: "Couple embracing at Haystack Rock at Cannon Beach, Oregon at low tide",
    coverCredit: "Beatriz Pérez Moya / Unsplash",
    images: [
      {
        src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1400&q=85&fm=webp&fit=crop",
        alt: "Couple embracing at Haystack Rock at Cannon Beach, Oregon at low tide with sea stacks in the mist",
        credit: "Beatriz Pérez Moya / Unsplash",
      },
      {
        src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1400&q=85&fm=webp&fit=crop",
        alt: "Newlyweds walking along the waterline at Cannon Beach, waves foaming around their feet",
        credit: "Nathan Dumlao / Unsplash",
      },
    ],
  },
];
