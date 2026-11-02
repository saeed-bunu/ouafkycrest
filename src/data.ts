import { getPropertyImage } from "./propertyImages";

export type Property = {
  id: string;
  title: string;
  location: string;
  price?: number;
  sqm?: string;
  image: string;
  tag?: string; // Optional listing label, such as "Premium".
  description: string;
};

export const properties: Property[] = [
  // ==============================
  // DEI-DEI ULTRA MODERN MARKET
  // ==============================
  {
    id: "dei-dei-meat-shop",
    title: "Meat Shop",
    location: "Dei-Dei Ultra Modern Market",
    price: 8097735,
    sqm: "3 SQM",
    image: getPropertyImage("dei-dei-meat-shop"),
    tag: "Ground Floor",
    description: "Prime ground floor commercial space designed specifically for butchery and meat sales. 50% initial deposit, balance spread across 6 months.",
  },
  {
    id: "dei-dei-open-stall",
    title: "Open Stall",
    location: "Dei-Dei Ultra Modern Market",
    price: 4264000,
    sqm: "3 SQM",
    image: getPropertyImage("dei-dei-open-stall"),
    tag: "Ground Floor",
    description: "Affordable and highly visible open stall on the ground floor of the new market. Ideal for general goods and fast-moving consumer items.",
  },
  {
    id: "dei-dei-lockup-3sqm",
    title: "Lock-up Shop (3 SQM)",
    location: "Dei-Dei Ultra Modern Market",
    price: 11805950,
    sqm: "3 SQM",
    image: getPropertyImage("dei-dei-lockup-3sqm"),
    tag: "Ground Floor",
    description: "Compact secure lock-up shop on the ground floor. Excellent for electronics, phone accessories, or small retail.",
  },
  {
    id: "dei-dei-lockup-6sqm",
    title: "Lock-up Shop (6 SQM)",
    location: "Dei-Dei Ultra Modern Market",
    price: 8745750,
    sqm: "6 SQM",
    image: getPropertyImage("dei-dei-lockup-6sqm"),
    tag: "First Floor",
    description: "First-floor lock-up shop offering great visibility and security. Perfect for fashion, cosmetics, or service-based businesses.",
  },
  {
    id: "dei-dei-lockup-9sqm",
    title: "Lock-up Shop (9 SQM)",
    location: "Dei-Dei Ultra Modern Market",
    price: 16234200,
    sqm: "9 SQM",
    image: getPropertyImage("dei-dei-lockup-9sqm"),
    tag: "First Floor",
    description: "Spacious 9 SQM lock-up shop. Provides ample room for inventory display and customer walk-ins. Highly lucrative commercial investment.",
  },
  {
    id: "dei-dei-lockup-12sqm",
    title: "Lock-up Shop (12 SQM)",
    location: "Dei-Dei Ultra Modern Market",
    price: 12025000,
    sqm: "12 SQM",
    image: getPropertyImage("dei-dei-lockup-12sqm"),
    tag: "First Floor",
    description: "Large 12 SQM lock-up shop on the first floor. Excellent for larger retail operations or wholesale display.",
  },
  {
    id: "dei-dei-lockup-16sqm",
    title: "Lock-up Shop (16 SQM)",
    location: "Dei-Dei Ultra Modern Market",
    price: 16234200,
    sqm: "16 SQM",
    image: getPropertyImage("dei-dei-lockup-16sqm"),
    tag: "First Floor",
    description: "Premium large shop space (16 SQM) for established brands and retailers looking for a prominent location in the Dei-Dei corridor.",
  },
  {
    id: "dei-dei-lockup-25sqm",
    title: "Lock-up Shop (25 SQM)",
    location: "Dei-Dei Ultra Modern Market",
    price: 20969000,
    sqm: "25 SQM",
    image: getPropertyImage("dei-dei-lockup-25sqm"),
    tag: "First Floor",
    description: "Extremely spacious 25 SQM first-floor shop. Can be used as a large showroom or partitioned for multiple retail purposes.",
  },
  {
    id: "dei-dei-warehouse",
    title: "Warehouse",
    location: "Dei-Dei Ultra Modern Market",
    price: 63130000,
    sqm: "36 SQM",
    image: getPropertyImage("dei-dei-warehouse"),
    tag: "Ground Floor",
    description: "Massive ground floor warehouse space for bulk storage and distribution. Essential for serious traders in the Dei-Dei corridor.",
  },
  {
    id: "dei-dei-cold-room",
    title: "Cold Room",
    location: "Dei-Dei Ultra Modern Market",
    price: 57496335,
    sqm: "37 SQM",
    image: getPropertyImage("dei-dei-cold-room"),
    tag: "Ground Floor",
    description: "Specialized ground floor cold room facility. Perfect for perishable goods, frozen foods, and agricultural storage.",
  },
  {
    id: "dei-dei-toilet",
    title: "Commercial Toilet Facility",
    location: "Dei-Dei Ultra Modern Market",
    price: 5246840,
    sqm: "49 SQM",
    image: getPropertyImage("dei-dei-toilet"),
    tag: "Ground Floor",
    description: "Commercial sanitation facility investment. A high-traffic utility unit within the market ecosystem.",
  },

  // ==============================
  // PALMERA RESIDENCE, KARSANA
  // ==============================
  {
    id: "palmera-180sqm",
    title: "4 Bedroom Terrace",
    location: "Palmera Residence, Karsana",
    price: 26100000,
    sqm: "180 SQM",
    image: getPropertyImage("palmera-180sqm"),
    tag: "Premium",
    description: "Beautifully designed 4-bedroom terrace in the serene Palmera Residence. Features modern architecture, secure title (FCDA/C of O), and a great investment value.",
  },
  {
    id: "palmera-250sqm",
    title: "4 Bedroom Semi-Detached",
    location: "Palmera Residence, Karsana",
    price: 38135000,
    sqm: "250 SQM",
    image: getPropertyImage("palmera-250sqm"),
    tag: "Premium",
    description: "Spacious semi-detached duplex offering premium living. Located in Karsana, one of Abuja's fastest-growing residential hubs. Built for generations.",
  },
  {
    id: "palmera-350sqm",
    title: "4 Bedroom Fully Detached",
    location: "Palmera Residence, Karsana",
    price: 50750000,
    sqm: "350 SQM",
    image: getPropertyImage("palmera-350sqm"),
    tag: "Premium",
    description: "Fully detached 4-bedroom home with ample parking, green environment, and modern finishing. Secure your future in this high-value estate.",
  },
  {
    id: "palmera-450sqm",
    title: "4 Bedroom Fully Detached",
    location: "Palmera Residence, Karsana",
    price: 65250000,
    sqm: "450 SQM",
    image: getPropertyImage("palmera-450sqm"),
    tag: "Luxury",
    description: "Expansive 450 SQM detached home. This property offers unmatched space, luxury, and a secure environment for your family.",
  },
  {
    id: "palmera-750sqm",
    title: "2 Bedroom Apartment",
    location: "Palmera Residence, Karsana",
    price: 108750000,
    sqm: "750 SQM",
    image: getPropertyImage("palmera-750sqm"),
    tag: "Luxury",
    description: "Expansive luxury apartment with premium amenities. Perfect for high-net-worth individuals seeking comfort and security in Abuja.",
  },
  {
    id: "palmera-900sqm",
    title: "3 Bedroom Apartment",
    location: "Palmera Residence, Karsana",
    price: 130500000,
    sqm: "900 SQM",
    image: getPropertyImage("palmera-900sqm"),
    tag: "Luxury",
    description: "The ultimate luxury living experience. A massive 900 SQM apartment featuring top-tier finishes, maximum privacy, and premium estate amenities.",
  },
  {
    id: "palmera-amenities",
    title: "Palmera Residence Amenities",
    location: "Palmera Residence, Karsana",
    image: getPropertyImage("palmera-amenities"),
    tag: "Estate amenities",
    description: "Explore the shared recreation and outdoor fitness spaces at Palmera Residence. Contact our team for details on the amenities and current availability.",
  },
];
