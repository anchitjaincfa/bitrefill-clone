// Shared data for the crypto-refill demo homepage.
// Brand tiles are recreated with CSS (background color + wordmark), not copied assets.

export type Product = {
  name: string;
  /** Wordmark shown inside the tile. Defaults to `name`. */
  label?: string;
  range?: string;
  rating?: number;
  /** Tile background (solid color or CSS gradient). */
  bg: string;
  /** Wordmark text color. */
  fg?: string;
  /** Optional cashback / discount badge. */
  badge?: string;
  /** Optional font tweak for the wordmark. */
  labelClass?: string;
};

export type Category = {
  id: string;
  title: string;
  href: string;
  products: Product[];
};

export function productAnchor(name: string, sectionId = "catalog") {
  return `product-${name
    .concat("-", sectionId)
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")}`;
}

export const recommended: Product[] = [
  { name: "Digital Prepaid Visa", label: "VISA", range: "$20 - $1000", rating: 4.8, bg: "#1a1f71", fg: "#ffffff", labelClass: "italic font-black tracking-wide" },
  { name: "Amazon.com", label: "amazon", range: "$5 - $1000", rating: 4.9, bg: "#ffffff", fg: "#111111", labelClass: "font-bold lowercase" },
  { name: "DoorDash", label: "DOORDASH", range: "$15 - $200", rating: 4.9, bg: "#eb1700", fg: "#ffffff", labelClass: "font-extrabold tracking-tight" },
  { name: "Apple", label: "", range: "$2 - $500", rating: 4.9, bg: "linear-gradient(135deg,#f5f5f7,#e9e9ee)", fg: "#111111" },
  { name: "Uber Eats", label: "Uber Eats", range: "$15 - $500", rating: 4.9, bg: "#06c167", fg: "#0b0b0b", labelClass: "font-bold" },
  { name: "Virtual Prepaid Mastercard", label: "", range: "$20 - $500", rating: 4.8, bg: "radial-gradient(circle at 50% 45%,#3a1b17,#0e0708)", fg: "#ffffff" },
];

export const popular: Product[] = [
  { name: "Amazon.com", label: "amazon", range: "$5 - $1000", rating: 4.9, bg: "#ffffff", fg: "#111111", labelClass: "font-bold lowercase" },
  { name: "Apple", label: "", range: "$2 - $500", rating: 4.9, bg: "linear-gradient(135deg,#f5f5f7,#e9e9ee)", fg: "#111111" },
  { name: "Uber", label: "Uber", range: "$15 - $500", rating: 5, bg: "#000000", fg: "#ffffff", labelClass: "font-bold" },
  { name: "Virtual Prepaid Mastercard", label: "", range: "$20 - $500", rating: 4.8, bg: "radial-gradient(circle at 50% 45%,#3a1b17,#0e0708)", fg: "#ffffff" },
  { name: "Digital Prepaid Visa", label: "VISA", range: "$20 - $1000", rating: 4.8, bg: "#1a1f71", fg: "#ffffff", labelClass: "italic font-black tracking-wide" },
  { name: "DoorDash", label: "DOORDASH", range: "$15 - $200", rating: 4.9, bg: "#eb1700", fg: "#ffffff", labelClass: "font-extrabold tracking-tight" },
  { name: "Walmart", label: "Walmart", range: "$5 - $500", rating: 4.9, bg: "#0071ce", fg: "#ffffff", labelClass: "font-bold" },
  { name: "Airbnb", label: "airbnb", range: "$25 - $500", rating: 4.8, bg: "#ff5a5f", fg: "#ffffff", labelClass: "font-bold lowercase" },
];

export const categories: Category[] = [
  {
    id: "gaming",
    title: "Gaming",
    href: "#gaming",
    products: [
      { name: "Roblox", label: "ROBLOX", range: "$10 - $100", rating: 4.9, bg: "#232527", fg: "#ffffff", labelClass: "font-extrabold" },
      { name: "Google Play", label: "Google Play", range: "$10 - $500", rating: 4.8, bg: "#ffffff", fg: "#111111", labelClass: "font-semibold" },
      { name: "Valorant", label: "VALORANT", range: "$10 - $100", rating: 4.9, bg: "#ff4655", fg: "#ffffff", labelClass: "font-extrabold tracking-tight" },
      { name: "PlayStation", label: "PlayStation", range: "$10 - $100", rating: 4.9, bg: "#003791", fg: "#ffffff", labelClass: "font-semibold" },
      { name: "Xbox", label: "XBOX", range: "$10 - $100", rating: 4.9, bg: "#107c10", fg: "#ffffff", labelClass: "font-bold" },
      { name: "Battle.net", label: "Battle.net", range: "$20 - $100", rating: 4.8, bg: "#00aeff", fg: "#0b1a2b", labelClass: "font-bold" },
      { name: "Fortnite", label: "FORTNITE", range: "$10 - $100", rating: 4.9, bg: "linear-gradient(135deg,#8a5cff,#2ac6ff)", fg: "#ffffff", labelClass: "font-extrabold" },
      { name: "GameStop", label: "GameStop", range: "$25 - $200", rating: 4.7, bg: "#000000", fg: "#ffffff", labelClass: "font-bold" },
    ],
  },
  {
    id: "food",
    title: "Food & Groceries",
    href: "#food",
    products: [
      { name: "DoorDash", label: "DOORDASH", range: "$15 - $200", rating: 4.9, bg: "#eb1700", fg: "#ffffff", labelClass: "font-extrabold tracking-tight" },
      { name: "Uber Eats", label: "Uber Eats", range: "$15 - $500", rating: 4.9, bg: "#06c167", fg: "#0b0b0b", labelClass: "font-bold" },
      { name: "Instacart", label: "instacart", range: "$25 - $500", rating: 4.8, bg: "#0aad0a", fg: "#ffffff", badge: "10% back", labelClass: "font-bold lowercase" },
      { name: "Starbucks", label: "Starbucks", range: "$5 - $500", rating: 4.9, bg: "#00704a", fg: "#ffffff", labelClass: "font-semibold" },
      { name: "Kroger", label: "Kroger", range: "$25 - $500", rating: 4.7, bg: "#0d4f9e", fg: "#ffffff", labelClass: "font-bold italic" },
      { name: "Grubhub", label: "GRUBHUB", range: "$10 - $500", rating: 4.7, bg: "#f63440", fg: "#ffffff", labelClass: "font-extrabold" },
      { name: "Chipotle", label: "CHIPOTLE", range: "$10 - $200", rating: 4.8, bg: "#451400", fg: "#ffffff", labelClass: "font-bold tracking-tight" },
      { name: "Domino's", label: "Domino's", range: "$10 - $100", rating: 4.7, bg: "#006491", fg: "#ffffff", labelClass: "font-bold" },
    ],
  },
  {
    id: "travel",
    title: "Travel",
    href: "#travel",
    products: [
      { name: "Uber", label: "Uber", range: "$15 - $500", rating: 5, bg: "#000000", fg: "#ffffff", labelClass: "font-bold" },
      { name: "Airbnb", label: "airbnb", range: "$25 - $500", rating: 4.8, bg: "#ff5a5f", fg: "#ffffff", labelClass: "font-bold lowercase" },
      { name: "Delta Airlines", label: "DELTA", range: "$50 - $1000", rating: 4.7, bg: "#003268", fg: "#ffffff", labelClass: "font-bold tracking-widest" },
      { name: "Chevron & Texaco", label: "Chevron", range: "$25 - $500", rating: 4.6, bg: "#0054a4", fg: "#ffffff", labelClass: "font-bold" },
    ],
  },
  {
    id: "rewards",
    title: "Rewards & Discounts",
    href: "#rewards",
    products: [
      { name: "Gap", label: "GAP", range: "$25 - $500", rating: 4.6, bg: "#002868", fg: "#ffffff", badge: "15% back", labelClass: "font-black tracking-tight" },
      { name: "Bob Evans", label: "Bob Evans", range: "$10 - $100", rating: 4.5, bg: "#c8102e", fg: "#ffffff", badge: "10% back", labelClass: "font-bold" },
      { name: "Instacart", label: "instacart", range: "$25 - $500", rating: 4.8, bg: "#0aad0a", fg: "#ffffff", badge: "10% back", labelClass: "font-bold lowercase" },
      { name: "The Home Depot", label: "HOME DEPOT", range: "$25 - $500", rating: 4.7, bg: "#f96302", fg: "#ffffff", badge: "5% back", labelClass: "font-extrabold" },
    ],
  },
];

export const phoneRefills: Product[] = [
  { name: "T-Mobile PIN", label: "T·Mobile", bg: "#e20074", fg: "#ffffff", labelClass: "font-bold" },
  { name: "AT&T", label: "AT&T", bg: "#00a8e0", fg: "#ffffff", labelClass: "font-extrabold" },
  { name: "Ultra Mobile", label: "Ultra", bg: "#5b2a86", fg: "#ffffff", labelClass: "font-bold" },
  { name: "Verizon", label: "verizon", bg: "#ffffff", fg: "#cd040b", labelClass: "font-bold lowercase" },
  { name: "Lyca Mobile", label: "lyca", bg: "#f36f21", fg: "#ffffff", labelClass: "font-bold lowercase" },
  { name: "Metro by T-Mobile", label: "Metro", bg: "#6c1cd1", fg: "#ffffff", labelClass: "font-bold" },
  { name: "Boost Mobile", label: "boost", bg: "#f7941e", fg: "#ffffff", labelClass: "font-extrabold lowercase" },
  { name: "Cricket", label: "cricket", bg: "#66cc33", fg: "#ffffff", labelClass: "font-bold lowercase" },
];

export const esims: Product[] = [
  { name: "Global eSIM", label: "GLOBAL", range: "1GB - 20GB", rating: 4.7, bg: "#111827", fg: "#ffffff", labelClass: "font-extrabold tracking-wide" },
  { name: "USA eSIM", label: "USA", range: "3GB - 30GB", rating: 4.8, bg: "#2563eb", fg: "#ffffff", labelClass: "font-extrabold" },
  { name: "Europe eSIM", label: "EUROPE", range: "1GB - 50GB", rating: 4.7, bg: "#0f766e", fg: "#ffffff", labelClass: "font-bold tracking-wide" },
  { name: "Asia eSIM", label: "ASIA", range: "1GB - 20GB", rating: 4.6, bg: "#7c2d12", fg: "#ffffff", labelClass: "font-bold tracking-wide" },
];

export const paymentCards: Product[] = [
  { name: "Digital Prepaid Visa", label: "VISA", range: "$20 - $1000", rating: 4.8, bg: "#1a1f71", fg: "#ffffff", labelClass: "italic font-black tracking-wide" },
  { name: "Virtual Prepaid Mastercard", label: "", range: "$20 - $500", rating: 4.8, bg: "radial-gradient(circle at 50% 45%,#3a1b17,#0e0708)", fg: "#ffffff" },
  { name: "Travel Rewards Card", label: "TRAVEL", range: "$25 - $500", rating: 4.6, bg: "#0e7490", fg: "#ffffff", labelClass: "font-black tracking-wide" },
  { name: "Shopping Rewards Card", label: "REWARDS", range: "$25 - $500", rating: 4.6, bg: "#be123c", fg: "#ffffff", labelClass: "font-black tracking-wide" },
];

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "Gift Cards", href: "#gift-cards" },
  { label: "Phone Refills", href: "#phone-refills" },
  { label: "eSIMs", href: "#esims" },
  { label: "Payment Cards", href: "#payment-cards" },
  { label: "FAQ", href: "#faq" },
];

export type Step = { title: string; body: string; icon: string };

export const steps: Step[] = [
  { title: "Browse the catalog", body: "Explore sample gift cards, refills, eSIMs and payment-card layouts.", icon: "search" },
  { title: "Review payment UI", body: "See static examples of crypto and card payment methods in a checkout-style surface.", icon: "wallet" },
  { title: "Use as a reference", body: "Study the responsive layout and component structure without processing real orders.", icon: "bolt" },
];

export type Payment = { name: string; symbol: string; color: string };

export const payments: Payment[] = [
  { name: "Bitcoin", symbol: "₿", color: "#f7931a" },
  { name: "Lightning", symbol: "⚡", color: "#792ee5" },
  { name: "Ethereum", symbol: "Ξ", color: "#627eea" },
  { name: "USDC", symbol: "$", color: "#2775ca" },
  { name: "USDT", symbol: "₮", color: "#26a17b" },
  { name: "Solana", symbol: "◎", color: "#14f195" },
  { name: "BASE", symbol: "B", color: "#0052ff" },
  { name: "Polygon", symbol: "⬡", color: "#8247e5" },
  { name: "Li.Fi", symbol: "◆", color: "#f5b1cc" },
  { name: "Apple Pay", symbol: "", color: "#000000" },
  { name: "Google Pay", symbol: "G", color: "#4285f4" },
  { name: "Visa", symbol: "VISA", color: "#1a1f71" },
  { name: "Mastercard", symbol: "●●", color: "#eb001b" },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "What is Refill Demo?",
    a: "Refill Demo is an educational UI clone inspired by crypto gift-card storefronts. It is not affiliated with Bitrefill and does not process purchases, payments, accounts or support requests.",
  },
  {
    q: "Can I buy gift cards here?",
    a: "No. Product names, prices, ratings, cashback badges and payment methods are static sample content for portfolio and learning purposes only.",
  },
  {
    q: "Why are real brands shown?",
    a: "The catalog uses recreated text tiles to demonstrate how a marketplace UI behaves with recognizable product categories. No official logos, proprietary assets or brand integrations are included.",
  },
  {
    q: "Does search work?",
    a: "Yes. Search filters the static demo catalog and jumps to matching product tiles on this page.",
  },
  {
    q: "Does the site store data?",
    a: "No. There is no backend, database, authentication, cart, checkout or analytics code in this project.",
  },
  {
    q: "Can I reuse this project?",
    a: "Yes, for the original code in this repo. Brand names and marks remain the property of their respective owners.",
  },
  {
    q: "Why does the UI look commerce-oriented?",
    a: "The goal is to demonstrate marketplace layout, filtering, product tiles, payment chips and responsive sections without implementing a real commerce system.",
  },
  {
    q: "Where is the real service?",
    a: "This project is independent. Visit the official provider websites directly for real purchases or account support.",
  },
];

export type FooterColumn = { title: string; links: NavItem[] };

export const footerColumns: FooterColumn[] = [
  {
    title: "Demo sections",
    links: [
      { label: "Gift Cards", href: "#gift-cards" },
      { label: "Phone Refills", href: "#phone-refills" },
      { label: "eSIMs", href: "#esims" },
      { label: "Payment Cards", href: "#payment-cards" },
    ],
  },
  {
    title: "Project",
    links: [
      { label: "About the Demo", href: "#about-demo" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Payment Methods", href: "#payment-methods" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Catalog",
    links: [
      { label: "Recommended", href: "#recommended" },
      { label: "Gaming", href: "#gaming" },
      { label: "Food & Groceries", href: "#food" },
      { label: "Rewards & Discounts", href: "#rewards" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Disclaimer", href: "#disclaimer" },
      { label: "App Preview", href: "#app-preview" },
      { label: "Travel", href: "#travel" },
      { label: "Payment Cards", href: "#payment-cards" },
    ],
  },
];

const catalogSections = [
  { sectionId: "recommended", sectionTitle: "Recommended", products: recommended },
  { sectionId: "gift-cards", sectionTitle: "Popular gift cards", products: popular },
  ...categories.map((category) => ({
    sectionId: category.id,
    sectionTitle: category.title,
    products: category.products,
  })),
  { sectionId: "esims", sectionTitle: "eSIMs", products: esims },
  { sectionId: "payment-cards", sectionTitle: "Payment Cards", products: paymentCards },
  { sectionId: "phone-refills", sectionTitle: "Phone Refills", products: phoneRefills },
];

export const catalogSearchItems = catalogSections.flatMap((section) =>
  section.products.map((product) => ({
    product,
    sectionId: section.sectionId,
    sectionTitle: section.sectionTitle,
    href: `#${productAnchor(product.name, section.sectionId)}`,
  })),
);
