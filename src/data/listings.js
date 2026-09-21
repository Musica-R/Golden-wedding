// Listing directory — the vendor/service entries shown inside each
// category's listing page. Kept as plain data, separate from the
// components that render it (ListingGrid / ListingCard).
//
// Content here is illustrative placeholder data curated in-house, in the
// same spirit as the rest of the site's studio-written copy. Photography
// reuses the studio's existing image library until category-specific
// listing photography is available — swap the `image` paths as real
// vendor photography comes in.
import categories from "./categories";

// A broad pool of existing site images, cycled across listings so the
// grid doesn't repeat the same photo back to back.
const imagePool = [
  "/images/services/stage-decoration.webp",
  "/images/services/photography-coordination.webp",
  "/images/services/entrance-decor.webp",
  "/images/services/table-styling.webp",
  "/images/services/floral-design.webp",
  "/images/services/reception-styling.webp",
  "/images/services/lighting-ambience.webp",
  "/images/services/destination-wedding-planning.webp",
  "/images/services/wedding-planning.webp",
  "/images/services/mandap-design.webp",
  "/images/services/wedding-decor.webp",
  "/images/portfolio/meera-arjun-1.webp",
  "/images/portfolio/meera-arjun-2.webp",
  "/images/portfolio/meera-arjun-3.webp",
  "/images/portfolio/amara-rohan-1.webp",
  "/images/portfolio/amara-rohan-2.webp",
  "/images/portfolio/amara-rohan-3.webp",
  "/images/portfolio/isha-vikram-1.webp",
  "/images/portfolio/isha-vikram-2.webp",
  "/images/portfolio/isha-vikram-3.webp",
  "/images/portfolio/diya-kabir-1.webp",
  "/images/portfolio/diya-kabir-2.webp",
  "/images/portfolio/diya-kabir-3.webp",
  "/images/portfolio/ananya-dev-1.webp",
  "/images/portfolio/ananya-dev-2.webp",
  "/images/portfolio/ananya-dev-3.webp",
  "/images/portfolio/priya-siddharth-1.webp",
  "/images/portfolio/priya-siddharth-2.webp",
  "/images/portfolio/priya-siddharth-3.webp",
  "/images/collections/royal-wedding.webp",
  "/images/collections/traditional-south-indian.webp",
  "/images/collections/contemporary-wedding.webp",
  "/images/collections/floral-wedding.webp",
  "/images/collections/destination-wedding.webp",
  "/images/collections/intimate-wedding.webp",
  "/images/collections/reception-decor.webp",
  "/images/collections/engagement-ceremony.webp",
  "/images/gallery/gallery-1-tall.webp",
  "/images/gallery/gallery-2-wide.webp",
  "/images/gallery/gallery-3-square.webp",
  "/images/gallery/gallery-4-tall.webp",
  "/images/gallery/gallery-5-square.webp",
  "/images/gallery/gallery-6-wide.webp",
  "/images/gallery/gallery-7-square.webp",
  "/images/gallery/gallery-8-tall.webp",
  "/images/misc/instagram-1.webp",
  "/images/misc/instagram-2.webp",
  "/images/misc/instagram-3.webp",
  "/images/misc/instagram-4.webp",
  "/images/misc/instagram-5.webp",
  "/images/misc/instagram-6.webp",
];

// Per-category business detail: starting price (INR), the cities it's
// offered from, and a one-line description used across its listings.
const details = {
  outfit: {
    price: 12000,
    cities: ["Kochi", "Kozhikode", "Thrissur"],
    desc: "Custom-tailored and ready ensembles for every wedding function, fitted in-studio.",
  },
  "jewellery-accessories": {
    price: 15000,
    cities: ["Kochi", "Kottayam", "Thrissur"],
    desc: "Temple-inspired and contemporary sets available to rent or buy, with styling included.",
  },
  mehndi: {
    price: 6000,
    cities: ["Kochi", "Kozhikode", "Thiruvananthapuram"],
    desc: "Bridal and guest mehndi artists known for fine detail work and natural henna.",
  },
  "decor-ideas": {
    price: 45000,
    cities: ["Kochi", "Thrissur", "Munnar"],
    desc: "Theme-led mandap, stage and entrance concepts designed around your venue.",
  },
  "wedding-card-designs": {
    price: 4000,
    cities: ["Kochi", "Kozhikode", "Thrissur"],
    desc: "Traditional scroll cards to modern digital invites, printed or animated.",
  },
  "wedding-photography": {
    price: 35000,
    cities: ["Kochi", "Thiruvananthapuram", "Kozhikode"],
    desc: "Full-day candid and traditional coverage teams with same-week previews.",
  },
  "groom-wear": {
    price: 10000,
    cities: ["Kochi", "Kozhikode", "Thrissur"],
    desc: "Sherwanis, bandhgalas and Indo-western sets, tailored and steamed on delivery.",
  },
  "bridal-makeup-hair": {
    price: 18000,
    cities: ["Kochi", "Thiruvananthapuram", "Kozhikode"],
    desc: "HD and airbrush bridal make-up artists with trial sessions included.",
  },
  photographers: {
    price: 20000,
    cities: ["Kochi", "Thrissur", "Kozhikode"],
    desc: "Independent photographers available for single-day and multi-function bookings.",
  },
  makeup: {
    price: 5000,
    cities: ["Kochi", "Kozhikode", "Thiruvananthapuram"],
    desc: "On-call make-up artists for engagement, sangeet and guest party looks.",
  },
  "planning-decor": {
    price: 60000,
    cities: ["Kochi", "Thiruvananthapuram", "Munnar"],
    desc: "End-to-end planners handling design, vendors and on-ground execution.",
  },
  "virtual-planning": {
    price: 8000,
    cities: ["Remote", "Kochi", "Thiruvananthapuram"],
    desc: "Video consultations covering mood boards, vendor shortlists and budgeting.",
  },
  "music-dance": {
    price: 15000,
    cities: ["Kochi", "Thrissur", "Kozhikode"],
    desc: "Live bands, DJs and choreographers for sangeet, reception and baraat.",
  },
  "invites-gifts": {
    price: 300,
    cities: ["Kochi", "Kozhikode", "Thrissur"],
    desc: "Personalised return-gift hampers, favours and welcome boxes per guest.",
  },
  food: {
    price: 700,
    cities: ["Kochi", "Thiruvananthapuram", "Thrissur"],
    desc: "Regional wedding caterers with live counters and plated service, per plate.",
  },
  "pre-wedding-shoot": {
    price: 22000,
    cities: ["Munnar", "Kochi", "Thiruvananthapuram"],
    desc: "Location and concept-led pre-wedding shoots including styling assistance.",
  },
  "bridal-wear": {
    price: 25000,
    cities: ["Kochi", "Kozhikode", "Thrissur"],
    desc: "Bridal lehengas, Kanjivaram sarees and gowns from trusted boutiques.",
  },
  pandits: {
    price: 9000,
    cities: ["Kochi", "Thrissur", "Kozhikode"],
    desc: "Priests experienced in regional rituals, with muhurtham guidance included.",
  },
  "bridal-grooming": {
    price: 12000,
    cities: ["Kochi", "Thiruvananthapuram", "Kozhikode"],
    desc: "Pre-wedding skin, hair and wellness packages scheduled over several weeks.",
  },
   "post-wedding-shoot": {
    price: 22000,
     cities: ["Kochi", "Thrissur", "Kozhikode"],
    desc: "Location and concept-led post-wedding shoots including styling assistance.",
  },
};

const suffixes = ["Studio", "House", "Collective", "Atelier", "Boutique", "Co."];

let imgIdx = 0;
function nextImage() {
  const img = imagePool[imgIdx % imagePool.length];
  imgIdx += 1;
  return img;
}

const listings = [];

categories.forEach((cat, ci) => {
  const meta = details[cat.slug];
  for (let i = 0; i < 3; i += 1) {
    const city = meta.cities[i % meta.cities.length];
    const suffix = suffixes[(ci + i) % suffixes.length];
    listings.push({
      id: `${cat.slug}-${i + 1}`,
      categorySlug: cat.slug,
      category: cat.name,
      name: `${city} ${cat.name.split(" ")[0]} ${suffix}`,
      description: meta.desc,
      location: city,
      price: `Starting from \u20B9${(meta.price + i * Math.round(meta.price * 0.2)).toLocaleString("en-IN")}`,
      image: nextImage(),
      rating: (4.4 + ((ci + i) % 5) * 0.1).toFixed(1),
    });
  }
});

export default listings;
