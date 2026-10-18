import hero from "@/assets/hero.jpg";
import men from "@/assets/men.jpg";
import hair from "@/assets/hair.jpg";
import facial from "@/assets/facial.jpg";

export const SALON = {
  name: "NEU Be UNISEX SALON",
  hindi: "न्यू बे यूनिसेक्स सैलून",
  phoneDisplay: "+91 97172 87494",
  tel: "tel:+919717287494",
  waNumber: "919717287494",
  rating: 4.9,
  reviews: 586,
  addressLines: [
    "Shop No. 11–12, Guru Haridas Road",
    "Behind Medicity, near Pashupati Nath Pharmacy",
    "Islampur Village, Sector 38",
    "Gurugram, Haryana 122018, India",
  ],
  hoursNote: "Open until 9:30 PM (full weekly schedule to be confirmed)",
  mapsQuery:
    "NEU Be Unisex Salon, Guru Haridas Road, Islampur Village, Sector 38, Gurugram 122018",
};

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SALON.mapsQuery)}`;
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(SALON.mapsQuery)}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(SALON.mapsQuery)}&output=embed`;

export const waLink = (msg = "Hello NEU Be UNISEX SALON, I would like to enquire about your services and book an appointment.") =>
  `https://wa.me/${SALON.waNumber}?text=${encodeURIComponent(msg)}`;

export const images = { hero, men, hair, facial };

export type Service = {
  slug: string;
  title: string;
  short: string;
  image: string;
  description: string;
  suits: string;
  involves: string[];
  items: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "hair-styling",
    title: "Hair Styling",
    short: "Cuts, blow-dries and finishing styles shaped around you.",
    image: hair,
    description:
      "From a simple refresh to a new look, our stylists begin with a conversation about your hair, routine and the style you want to wear every day.",
    suits: "Anyone wanting a fresh cut, a polished blow-dry or a style for a busy week.",
    involves: ["A short consultation", "Wash and preparation", "Cut or styling", "Finishing and styling tips"],
    items: ["Haircut and styling", "Hair wash and blow-dry", "Hair spa", "Hair treatments", "Smoothening / keratin (if offered)"],
  },
  {
    slug: "hair-colour",
    title: "Hair Colour",
    short: "Considered colour, from subtle refreshes to new tones.",
    image: hair,
    description:
      "Colour starts with a consultation to understand your base shade, hair history and the result you are hoping for, so we can recommend a suitable approach.",
    suits: "Those covering greys, refreshing a faded shade or exploring highlights.",
    involves: ["Colour consultation", "Shade selection", "Application and processing", "Rinse, care and finish"],
    items: ["Colour consultation", "Global colour (if offered)", "Root touch-up (if offered)", "Highlights (if offered)"],
  },
  {
    slug: "mens-grooming",
    title: "Men's Grooming",
    short: "Sharp haircuts, beard shaping and everyday styling.",
    image: men,
    description:
      "Precise cuts and grooming for men, whether you prefer a classic finish or something more contemporary.",
    suits: "Men looking for a dependable haircut, a tidy beard or a quick style-up.",
    involves: ["Discuss your preferred look", "Cut and detailing", "Beard work if requested", "Styling and product advice"],
    items: ["Men's haircut", "Beard trim and grooming (if offered)", "Hair styling", "Scalp and hair care"],
  },
  {
    slug: "womens-beauty",
    title: "Women's Beauty",
    short: "Cuts, treatments and styling for every occasion.",
    image: hair,
    description:
      "Haircuts, treatments and styling for women — including looks for celebrations and special evenings, where offered.",
    suits: "Women preparing for an event or simply making time for themselves.",
    involves: ["Consultation", "Treatment or styling", "Finishing touches"],
    items: ["Women's haircut and styling", "Hair treatments", "Party styling (if offered)", "Beauty and grooming services"],
  },
  {
    slug: "skincare-facials",
    title: "Skincare & Facials",
    short: "Calm, restorative facials and skin-care rituals.",
    image: facial,
    description:
      "Unhurried skin-care appointments in a relaxing setting, with treatments chosen after understanding your skin and preferences.",
    suits: "Anyone wanting to unwind, refresh tired-looking skin or prepare for an occasion.",
    involves: ["Skin consultation", "Cleansing and treatment", "Massage where included", "Aftercare advice"],
    items: ["Facial treatments", "Face massage (if offered)", "Skin-care services", "Personalised consultations"],
  },
  {
    slug: "waxing-beauty-care",
    title: "Waxing & Beauty Care",
    short: "Everyday beauty essentials, done neatly and hygienically.",
    image: facial,
    description:
      "Essential beauty-care services delivered with attention to comfort and hygiene. Please contact us to confirm the current menu.",
    suits: "Regular self-care and pre-event preparation.",
    involves: ["Discuss the areas and preferences", "Service", "Aftercare advice"],
    items: ["Waxing (if offered)", "Other beauty services confirmed by the salon"],
  },
];

export const GALLERY = [
  { src: hero, alt: "Salon styling stations with round gold mirrors and warm lighting", w: 1600, h: 1104 },
  { src: hair, alt: "Stylist blow-drying long glossy brown hair", w: 1024, h: 1280 },
  { src: men, alt: "Barber shaping a client's beard", w: 1024, h: 1280 },
  { src: facial, alt: "Relaxing facial treatment with towels and candlelight", w: 1024, h: 1280 },
];
