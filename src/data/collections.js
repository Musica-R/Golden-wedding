// Wedding Collections — distinct from individual portfolio weddings.
// Each collection represents a style/category the studio designs for.
// Images are the studio's own photography (public/images/collections/).
const collections = [
  {
    slug: "traditional-south-indian",
    name: "Traditional South Indian Wedding",
    description:
      "Temple-inspired mandaps, banana leaf motifs and jasmine in every corner — ceremony design rooted in ritual.",
    location: "Kochi, Thrissur, Guruvayur",
    eventType: "Traditional Ceremony",
    image: "/images/collections/traditional-south-indian.webp",
    size: "tall",
  },
  {
    slug: "royal-wedding",
    name: "Royal Wedding",
    description:
      "Palace courtyards, hand-painted frescoes and décor built to match centuries of architecture.",
    location: "Kochi, Thiruvananthapuram",
    eventType: "Palace Celebration",
    image: "/images/collections/royal-wedding.webp",
    size: "wide",
  },
  {
    slug: "contemporary-wedding",
    name: "Contemporary Wedding",
    description:
      "Clean lines, sculptural florals and a modern palette for couples who want tradition, reimagined.",
    location: "Kochi, Thiruvananthapuram, Kozhikode",
    eventType: "Modern Ceremony",
    image: "/images/collections/contemporary-wedding.webp",
    size: "square",
  },
  {
    slug: "floral-wedding",
    name: "Floral Wedding",
    description:
      "Hand-tied garlands, floating installations and canopies built entirely from fresh seasonal blooms.",
    location: "Munnar, Wayanad",
    eventType: "Floral Design",
    image: "/images/collections/floral-wedding.webp",
    size: "tall",
  },
  {
    slug: "destination-wedding",
    name: "Destination Wedding",
    description:
      "Full logistics and local sourcing for celebrations across Kerala's backwaters, hills and coast — design built for the setting.",
    location: "Kerala",
    eventType: "Destination",
    image: "/images/collections/destination-wedding.webp",
    size: "wide",
  },
  {
    slug: "intimate-wedding",
    name: "Intimate Wedding",
    description:
      "Small guest lists, close attention and décor scaled to feel personal rather than sparse.",
    location: "Private Gardens & Estates",
    eventType: "Micro Wedding",
    image: "/images/collections/intimate-wedding.webp",
    size: "square",
  },
  {
    slug: "reception-decor",
    name: "Reception Décor",
    description:
      "Tablescapes, staging and lighting composed for how a reception actually moves — and photographs.",
    location: "Banquet & Rooftop Venues",
    eventType: "Reception",
    image: "/images/collections/reception-decor.webp",
    size: "tall",
  },
  {
    slug: "engagement-ceremony",
    name: "Engagement Ceremony",
    description:
      "The first chapter — ring ceremonies and roka celebrations styled with warmth and restraint.",
    location: "Private Residences & Gardens",
    eventType: "Engagement",
    image: "/images/collections/engagement-ceremony.webp",
    size: "wide",
  },
  //news
  {
    slug: "floral-wedding-01",
    collectionSlug: "floral-wedding",
    name: "Floral Canopy",
    description:
      "A romantic ceremony canopy overflowing with fresh seasonal flowers and delicate greenery.",
    location: "Munnar",
    eventType: "Floral Ceremony",
    image: "/images/collections/50.jpg",
    size: "tall",
  },

  {
    slug: "floral-wedding-02",
    collectionSlug: "floral-wedding",
    name: "Blooming Entrance",
    description:
      "A dramatic entrance installation created with layers of seasonal flowers and natural foliage.",
    location: "Kochi",
    eventType: "Wedding Entrance",
    image: "/images/collections/51.webp",
    size: "wide",
  },

  {
    slug: "floral-wedding-03",
    collectionSlug: "floral-wedding",
    name: "Floating Florals",
    description:
      "Suspended floral arrangements creating an immersive overhead installation for the celebration.",
    location: "Wayanad",
    eventType: "Floral Installation",
    image: "/images/collections/52.webp",
    size: "square",
  },

  {
    slug: "floral-wedding-04",
    collectionSlug: "floral-wedding",
    name: "Floral Tablescape",
    description:
      "An elegant dining setup featuring hand-tied blooms, candles and seasonal foliage.",
    location: "Kozhikode",
    eventType: "Reception",
    image: "/images/collections/53.webp",
    size: "tall",
  },

  // =====================================================
  // DESTINATION WEDDING
  // =====================================================

  {
    slug: "destination-wedding-01",
    collectionSlug: "destination-wedding",
    name: "Backwater Ceremony",
    description:
      "A destination ceremony designed around Kerala's tranquil backwaters and natural landscape.",
    location: "Alleppey",
    eventType: "Destination Ceremony",
    image: "/images/collections/54.webp",
    size: "wide",
  },

  {
    slug: "destination-wedding-02",
    collectionSlug: "destination-wedding",
    name: "Garden Celebration",
    description:
      "An outdoor celebration surrounded by tropical greenery and soft floral installations.",
    location: "Kumarakom",
    eventType: "Garden Ceremony",
    image: "/images/collections/55.webp",
    size: "tall",
  },

  {
    slug: "destination-wedding-03",
    collectionSlug: "destination-wedding",
    name: "Sunset Reception",
    description:
      "An open-air reception styled around the warm atmosphere of a Kerala sunset.",
    location: "Kochi",
    eventType: "Sunset Reception",
    image: "/images/collections/56.webp",
    size: "square",
  },

  {
    slug: "destination-wedding-04",
    collectionSlug: "destination-wedding",
    name: "Tropical Tablescape",
    description:
      "A destination-inspired tablescape combining tropical foliage with elegant contemporary details.",
    location: "Kovalam",
    eventType: "Reception",
    image: "/images/collections/57.webp",
    size: "wide",
  },

  // =====================================================
  // INTIMATE WEDDING
  // =====================================================

  {
    slug: "intimate-wedding-01",
    collectionSlug: "intimate-wedding",
    name: "Garden Ceremony",
    description:
      "A private garden ceremony designed with intimate floral arrangements and warm natural details.",
    location: "Thekkady",
    eventType: "Intimate Ceremony",
    image: "/images/collections/58.webp",
    size: "square",
  },

  {
    slug: "intimate-wedding-02",
    collectionSlug: "intimate-wedding",
    name: "Private Vows",
    description:
      "A quiet ceremony setting designed to feel personal, warm and deeply connected.",
    location: "Munnar",
    eventType: "Private Ceremony",
    image: "/images/collections/59.webp",
    size: "tall",
  },

  {
    slug: "intimate-wedding-03",
    collectionSlug: "intimate-wedding",
    name: "Family Tablescape",
    description:
      "A close-knit dining experience styled around natural textures and delicate florals.",
    location: "Kottayam",
    eventType: "Private Reception",
    image: "/images/collections/60.webp",
    size: "wide",
  },

  {
    slug: "intimate-wedding-04",
    collectionSlug: "intimate-wedding",
    name: "Evening Garden",
    description:
      "A softly illuminated garden celebration created for a small gathering of family and friends.",
    location: "Wayanad",
    eventType: "Evening Celebration",
    image: "/images/collections/61.webp",
    size: "square",
  },
];

export default collections;
