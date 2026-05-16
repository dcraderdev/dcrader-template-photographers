// ─── Testimonials ─────────────────────────────────────────────────────────────

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
      "We told everyone we were 'just going on a trip.' We didn't tell them we were eloping on the Olympic Peninsula until the photos arrived in our inboxes — and honestly, we just let the images do the explaining. Ruby and Wilder found light we didn't know existed, led us to a tide pool nobody else was at, and somehow made our two-hour ceremony feel like the longest, most beautiful afternoon of our lives. I've looked at these photos every single day since we got them.",
    name: "Anya & Finn",
    weddingInfo: "Olympic Peninsula, WA · July 2024",
    // Photo: Álvaro CvG / Unsplash
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=80&fm=webp&fit=crop",
    imageAlt: "Anya and Finn on their elopement at the Olympic Peninsula coast",
    imageCredit: "Álvaro CvG / Unsplash",
  },
  {
    quote:
      "We had been to the Gorge a hundred times — we thought we knew it. Then Ruby and Wilder took us somewhere we'd never found on our own, at a time of day we never would have chosen, and the light was absolutely otherworldly. I'm a pretty stoic person and I openly wept going through the gallery. Theo keeps one of the waterfall photos as his phone background. We are not photo people. We are now. Every couple who wants something real needs to book these two.",
    name: "Saya & Theo",
    weddingInfo: "Columbia River Gorge · September 2024",
    // Photo: Cassie Lopez / Unsplash
    image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=400&q=80&fm=webp&fit=crop",
    imageAlt: "Saya and Theo at their Columbia River Gorge elopement",
    imageCredit: "Cassie Lopez / Unsplash",
  },
  {
    quote:
      "Crater Lake was my dream location and I was terrified it would feel touristy and crowded. Ruby and Wilder planned our whole morning around a spot they'd scouted the day before — nobody else was there, the caldera was completely still, and Cove and I just stood there for a moment not even speaking. I don't think I'll ever have another moment like it. And now I have photographs that prove it was real. That's everything I wanted and more than I knew to ask for.",
    name: "Lila & Cove",
    weddingInfo: "Crater Lake, Oregon · August 2024",
    // Photo: Unsplash
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80&fm=webp&fit=crop",
    imageAlt: "Lila and Cove at the rim of Crater Lake on their elopement day",
    imageCredit: "Unsplash",
  },
  {
    quote:
      "Sage and I are hikers — we'd walked a hundred trails together before we ever thought about a wedding. When we found Ruby & Wilder we just knew. They didn't try to put us in a venue. They asked us where we felt most ourselves and then they built an entire day around that answer. The redwoods were everything. The images look like a movie about the life we actually want to live. Worth every penny, worth every step of the hike in, worth telling everyone you know about.",
    name: "Ivy & Sage",
    weddingInfo: "Redwood Forest, CA · October 2024",
    // Photo: Nathan Dumlao / Unsplash
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&q=80&fm=webp&fit=crop",
    imageAlt: "Ivy and Sage among the ancient redwoods on their wedding day",
    imageCredit: "Nathan Dumlao / Unsplash",
  },
];
