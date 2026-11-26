// Centralized gallery data — used by PortfolioGallery (home/portfolio strip)
// and by the Gallery/GalleryFilter components (full Wedding Gallery page).
// Images are the studio's own photography, reused across public/images/.
//
// Every entry now carries a `category` (one of GALLERY_CATEGORIES below) so
// the Wedding Gallery page can filter without touching PortfolioGallery,
// which simply ignores the extra field.

export const GALLERY_CATEGORIES = [
  { slug: "all", label: "All", image: "/golden-images-2/golden99.webp" },
  { slug: "bridal", label: "Bridal", image: "/golden-images-2/golden92.webp" },
  { slug: "groom", label: "Groom", image: "/golden-images-2/golden94.webp" },
  { slug: "decor", label: "Wedding Decor", image: "/images/services/wedding-decor.webp" },
  { slug: "mandap", label: "Mandap", image: "/images/services/mandap-design.webp" },
  { slug: "reception", label: "Reception", image: "/images/services/reception-styling.webp" },
  { slug: "engagement", label: "Engagement", image: "/images/collections/engagement-ceremony.webp" },
  { slug: "mehndi", label: "Mehndi", image: "/assets/mendhi3.jpg" },
  { slug: "haldi", label: "Haldi", image: "/golden-images-2/golden80.webp" },
  { slug: "photography", label: "Wedding Photography", image: "/images/services/photography-coordination.webp" },
  { slug: "floral", label: "Floral Decor", image: "/images/services/floral-design.webp" },
  { slug: "stage", label: "Stage Decor", image: "/images/services/stage-decoration.webp" },
  { slug: "venues", label: "Wedding Venues", image: "/images/hero/aisle-modern-white-gold.webp" },
];

const gallery = [
  // --- Original studio gallery (kept exactly as before, category added) ---
  {
    src: "/golden-images-2/golden29.webp",
    full: "/golden-images-2/golden29.webp",
    caption: "Welcome signage, garden ceremony",
    size: "tall",
    category: "decor",
  },
  {
    src: "/golden-images-1/golden21.webp",
    full: "/golden-images-1/golden21.webp",
    caption: "Ceremony aisle, modern white & gold",
    size: "wide",
    category: "venues",
  },
  {
    src: "/golden-images-1/golden25.webp",
    full: "/golden-images-1/golden25.webp",
    caption: "Floral hoop wedding cake",
    size: "square",
    category: "reception",
  },
  {
    src: "/golden-images-1/golden5.webp",
    full: "/golden-images-1/golden5.webp",
    caption: "Floral stand detail",
    size: "tall",
    category: "floral",
  },
  {
    src: "/images/gallery/gallery-5-square.webp",
    full: "/images/gallery/gallery-5-square.webp",
    caption: "Illuminated floral backdrop",
    size: "square",
    category: "stage",
  },
  {
    src: "/golden-images-1/golden13.webp",
    full: "/golden-images-1/golden13.webp",
    caption: "Hanging floral ceremony arch",
    size: "wide",
    category: "mandap",
  },
  {
    src: "/images/gallery/gallery-7-square.webp",
    full: "/images/gallery/gallery-7-square.webp",
    caption: "Carved gold stage detail",
    size: "square",
    category: "stage",
  },
  {
    src: "/golden-images-2/golden34.webp",
    full: "/golden-images-2/golden34.webp",
    caption: "Traditional brass lamp ritual",
    size: "tall",
    category: "haldi",
  },

  // --- Bridal ---
  {
    src: "/golden-images-2/golden94.webp",
    full: "/golden-images-2/golden94.webp",
    caption: "Bridal portrait, temple silk saree",
    size: "tall",
    category: "bridal",
  },
  {
    src: "/golden-images-2/golden84.webp",
    full: "/golden-images-2/golden84.webp",
    caption: "Bride at the mandap, temple ceremony",
    size: "square",
    category: "bridal",
  },
  {
    src: "/golden-images-2/golden88.webp",
    full: "/golden-images-2/golden88.webp",
    caption: "Bridal jewellery and floral detailing",
    size: "wide",
    category: "bridal",
  },

  // --- Groom ---
  {
    src: "/golden-images-2/golden31.webp",
    full: "/golden-images-2/golden31.webp",
    caption: "Groom's entry, poolside reception",
    size: "square",
    category: "groom",
  },
  {
    src: "/golden-images-2/golden80.webp",
    full: "/golden-images-2/golden80.webp",
    caption: "Groom at the gold mandap",
    size: "tall",
    category: "groom",
  },
  {
    src: "/golden-images-2/golden28.webp",
    full: "/golden-images-2/golden28.webp",
    caption: "Groom's party, traditional attire",
    size: "wide",
    category: "groom",
  },

  // --- Wedding Decor ---
  {
    src: "/golden-images-2/golden91.webp",
    full: "/golden-images-2/golden91.webp",
    caption: "Full-venue decor styling",
    size: "wide",
    category: "decor",
  },
  {
    src: "/golden-images-2/golden38.webp",
    full: "/golden-images-2/golden38.webp",
    caption: "Floral entrance installation",
    size: "square",
    category: "decor",
  },
  {
    src: "/golden-images-2/golden52.webp",
    full: "/golden-images-2/golden52.webp",
    caption: "Warm lighting design, evening ceremony",
    size: "tall",
    category: "decor",
  },

  // --- Mandap ---
  {
    src: "/images/services/mandap-design.webp",
    full: "/images/services/mandap-design.webp",
    caption: "Hand-carved pillar mandap",
    size: "tall",
    category: "mandap",
  },
  {
    src: "/images/hero/hero-grand-mandap.webp",
    full: "/images/hero/hero-grand-mandap.webp",
    caption: "Grand gold mandap, full view",
    size: "wide",
    category: "mandap",
  },
  {
    src: "/images/collections/traditional-south-indian.webp",
    full: "/images/collections/traditional-south-indian.webp",
    caption: "Temple-style mandap, banana leaf motifs",
    size: "square",
    category: "mandap",
  },

  // --- Reception ---
  {
    src: "/golden-images-1/golden9.webp",
    full: "/golden-images-1/golden9.webp",
    caption: "Reception stage and table styling",
    size: "wide",
    category: "reception",
  },
  {
    src: "/images/collections/reception-decor.webp",
    full: "/images/collections/reception-decor.webp",
    caption: "Tablescape, banquet reception",
    size: "square",
    category: "reception",
  },
  {
    src: "/golden-images-1/golden14.webp",
    full: "/golden-images-1/golden14.webp",
    caption: "Place setting detail, gold and ivory",
    size: "tall",
    category: "reception",
  },

  // --- Engagement ---
  {
    src: "/images/collections/engagement-ceremony.webp",
    full: "/images/collections/engagement-ceremony.webp",
    caption: "Ring ceremony, private garden",
    size: "tall",
    category: "engagement",
  },
  {
    src: "/images/collections/intimate-wedding.webp",
    full: "/images/collections/intimate-wedding.webp",
    caption: "Roka celebration, close family",
    size: "square",
    category: "engagement",
  },
  {
    src: "/golden-images-1/golden23.webp",
    full: "/golden-images-2/golden23.webp",
    caption: "Engagement portrait, evening light",
    size: "wide",
    category: "engagement",
  },

  // --- Mehndi ---
  {
    src: "/assets/mendhhi.jpg",
    full: "/assets/mendhhi.jpg",
    caption: "Mehndi function, floral backdrop",
    size: "wide",
    category: "mehndi",
  },
  {
    src: "/assets/mendhi2.jpg",
    full: "/assets/mendhi2.jpg",
    caption: "Bridal mehndi detail",
    size: "square",
    category: "mehndi",
  },
  {
    src: "/assets/mendhi3.jpg",
    full: "/assets/mendhi3.jpg",
    caption: "Mehndi seating, cushions and drapes",
    size: "tall",
    category: "mehndi",
  },

  // --- Haldi ---
  {
    src: "/images/misc/instagram-1.webp",
    full: "/images/misc/instagram-1.webp",
    caption: "Haldi ceremony, marigold styling",
    size: "square",
    category: "haldi",
  },
  {
    src: "/images/misc/statement-2-entrance.webp",
    full: "/images/misc/statement-2-entrance.webp",
    caption: "Marigold entrance for haldi function",
    size: "wide",
    category: "haldi",
  },

  // --- Wedding Photography ---
  {
    src: "/images/services/photography-coordination.webp",
    full: "/images/services/photography-coordination.webp",
    caption: "Photography team in coordination",
    size: "wide",
    category: "photography",
  },
  {
    src: "/images/portfolio/amara-rohan-cover.webp",
    full: "/images/portfolio/amara-rohan-cover.webp",
    caption: "Candid ceremony coverage",
    size: "tall",
    category: "photography",
  },
  {
    src: "/images/portfolio/meera-arjun-cover.webp",
    full: "/images/portfolio/meera-arjun-cover.webp",
    caption: "Wide ceremony frame, floral proscenium",
    size: "square",
    category: "photography",
  },

  // --- Floral Decor ---
  {
    src: "/images/services/floral-design.webp",
    full: "/images/services/floral-design.webp",
    caption: "Fresh floral installation, close detail",
    size: "square",
    category: "floral",
  },
  {
    src: "/images/collections/50.jpg",
    full: "/images/collections/50.jpg",
    caption: "Floral canopy, ceremony seating",
    size: "tall",
    category: "floral",
  },
  {
    src: "/images/collections/52.webp",
    full: "/images/collections/52.webp",
    caption: "Floating floral installation",
    size: "wide",
    category: "floral",
  },

  // --- Stage Decor ---
  {
    src: "/images/services/stage-decoration.webp",
    full: "/images/services/stage-decoration.webp",
    caption: "Reception stage, layered drapery",
    size: "wide",
    category: "stage",
  },
  {
    src: "/images/portfolio/isha-vikram-cover.webp",
    full: "/images/portfolio/isha-vikram-cover.webp",
    caption: "Poolside stage, clear-roof marquee",
    size: "tall",
    category: "stage",
  },

  // --- Wedding Venues ---
  {
    src: "/images/hero/aisle-modern-white-gold.webp",
    full: "/images/hero/aisle-modern-white-gold.webp",
    caption: "Modern white and gold ceremony aisle",
    size: "wide",
    category: "venues",
  },
  {
    src: "/images/collections/royal-wedding.webp",
    full: "/images/collections/royal-wedding.webp",
    caption: "Palace courtyard venue",
    size: "square",
    category: "venues",
  },
  {
    src: "/images/collections/destination-wedding.webp",
    full: "/images/collections/destination-wedding.webp",
    caption: "Backwater destination venue, Kerala",
    size: "tall",
    category: "venues",
  },
];

export default gallery;
