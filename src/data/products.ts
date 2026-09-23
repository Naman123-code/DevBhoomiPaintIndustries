export interface Product {
  id: string;
  slug: string;
  name: string;
  category: "putty" | "cement" | "adhesive" | "grout";
  tagline: string;
  description: string;
  features: string[];
  applications: string[];
  packaging: string[];
  technicalSpecs: {
    label: string;
    value: string;
  }[];
  image: string;
}

export const products: Product[] = [
  {
    id: "c1",
    slug: "white-cement",
    name: "DECORATIVE WHITE CEMENT",
    category: "cement",
    tagline: "Architectural Brilliance and Strength",
    description: "Class 1 white cement, ideal for premium decorative finishes and architectural brilliance.",
    features: [
      "Exceptional whiteness (>90% on Hunter Scale)",
      "High compressive strength",
      "Fine particle size for smooth finish",
      "Compatible with all organic/inorganic pigments"
    ],
    applications: [
      "Terrazzo and mosaic tiles",
      "Decorative architectural concrete",
      "Base for wall putty and paints",
      "Marble and stone laying"
    ],
    packaging: ["1 KG", "5 KG", "50 KG"],
    technicalSpecs: [
      { label: "Whiteness", value: "> 90%" },
      { label: "Fineness (Blaine)", value: "380 - 400 m²/kg" },
      { label: "Compressive Strength (28 Days)", value: "50 MPa Min" },
      { label: "Setting Time", value: "Initial: 110 mins" }
    ],
    image: "/images/white_cement_1789736729812.jpg"
  },
  {
    id: "p1",
    slug: "ss-wall-max-putty",
    name: "PREMIUM WALL PUTTY",
    category: "putty",
    tagline: "The Ultimate Foundation for Your Walls",
    description: "Superior strength, smooth surface, and excellent workability for interior and exterior walls.",
    features: [
      "Extra Whiteness for vibrant paint colors",
      "Excellent adhesion and tensile strength",
      "Water resistant formula prevents dampness",
      "Reduces paint consumption",
      "No curing required"
    ],
    applications: [
      "Interior walls and ceilings",
      "Exterior plastered surfaces",
      "Concrete and cement mortar walls",
      "Renovation of old painted walls"
    ],
    packaging: ["5 KG", "20 KG", "40 KG"],
    technicalSpecs: [
      { label: "Base", value: "White Cement & Polymers" },
      { label: "Appearance", value: "White Powder" },
      { label: "Water Demand", value: "35 - 40% by weight" },
      { label: "Pot Life", value: "2 - 3 Hours" },
      { label: "Setting Time", value: "Initial: 100 mins, Final: 500 mins" }
    ],
    image: "/images/wall_putty_1789736742925.jpg"
  },
  {
    id: "a1",
    slug: "tile-adhesive",
    name: "TILE ADHESIVE",
    category: "adhesive",
    tagline: "Secure Your Spaces Forever",
    description: "Modern floor and wall tiling solutions with robust bonding capabilities.",
    features: [
      "High bond strength",
      "Slip resistant",
      "Extended open time",
      "Water resistant"
    ],
    applications: [
      "Ceramic & Vitrified tiles",
      "Natural stones & Marbles",
      "Swimming pools and wet areas",
      "Tile-on-tile applications"
    ],
    packaging: ["25 KG (Gold)", "25 KG (Silver)"],
    technicalSpecs: [
      { label: "Base", value: "Cementitious Powder" },
      { label: "Mixed Density", value: "1.8 kg/ltr" },
      { label: "Open Time", value: "30 Minutes" },
      { label: "Traffic Time", value: "24 Hours" }
    ],
    image: "/images/tile_adhesive_1789736755757.jpg"
  },
  {
    id: "g1",
    slug: "tile-grout",
    name: "TILE GROUT",
    category: "grout",
    tagline: "Perfect Finishing for Your Tiles",
    description: "Fills gaps between tiles securely and smoothly. Highly durable and stain-resistant.",
    features: [
      "Stain resistant",
      "Prevents fungal growth",
      "Available in multiple colors",
      "Water repellent"
    ],
    applications: [
      "Vitrified & Ceramic tile joints",
      "Marble & Granite joints",
      "Swimming pools",
      "Bathrooms and Kitchens"
    ],
    packaging: ["1 KG", "25 KG"],
    technicalSpecs: [
      { label: "Base", value: "Polymer modified cement" },
      { label: "Joint Width", value: "1mm to 5mm" },
      { label: "Pot Life", value: "45 Minutes" },
      { label: "Curing", value: "Not required" }
    ],
    image: "/images/tile_grout_1789736767453.jpg"
  },
  {
    id: "w1",
    slug: "white-wash",
    name: "WHITE WASH",
    category: "cement",
    tagline: "Brighten Your Walls Instantly",
    description: "High-quality white wash for a traditional, bright, and hygienic finish on your walls.",
    features: [
      "Excellent brightness",
      "Cost-effective solution",
      "Easy application",
      "Eco-friendly"
    ],
    applications: [
      "Interior walls",
      "Exterior boundaries",
      "Commercial storage areas"
    ],
    packaging: ["25 KG"],
    technicalSpecs: [
      { label: "Appearance", value: "White Powder" },
      { label: "Water Demand", value: "As per application consistency" }
    ],
    image: "/images/white_wash.jpg"
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
