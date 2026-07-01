// Shared data for the Bitrefill-style homepage.
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

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "Gift Cards", href: "#gift-cards" },
  { label: "Phone Refills", href: "#phone-refills" },
  { label: "eSIMs", href: "#esims" },
  { label: "Payment Cards", href: "#payment-cards" },
];

export type Step = { title: string; body: string; icon: string };

export const steps: Step[] = [
  { title: "Pick a product", body: "Choose from 8,000+ gift cards, mobile refills, eSIMs and more.", icon: "search" },
  { title: "Pay with crypto", body: "Pay with Bitcoin, Lightning, Ethereum, USDT, USDC and other coins.", icon: "wallet" },
  { title: "Receive instantly", body: "Your code is delivered to your email and account in seconds.", icon: "bolt" },
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
    q: "What is Bitrefill?",
    a: "Bitrefill lets you live on crypto by buying gift cards, mobile refills, eSIMs and paying bills with Bitcoin, Lightning, Ethereum and many other cryptocurrencies. We have 8,000+ products available across 180+ countries.",
  },
  {
    q: "Which brands can I buy gift cards for?",
    a: "You can buy gift cards for thousands of top brands including Amazon, Apple, Uber, Walmart, Airbnb, DoorDash, Google Play, PlayStation, Xbox and many more. Just search for your favorite store.",
  },
  {
    q: "Which cryptocurrencies do you support?",
    a: "We accept Bitcoin, Lightning Network, Ethereum, USDT, USDC, Solana, BASE, Polygon and more. You can also pay with Apple Pay, Google Pay and select debit/credit cards.",
  },
  {
    q: "Do I need an account or a specific wallet?",
    a: "No special wallet is required — Bitrefill works with any standard crypto wallet. You can check out as a guest, though creating an account unlocks order history, rewards and faster checkout.",
  },
  {
    q: "How does the payment process work?",
    a: "Pick a product, choose your denomination, and pay the invoice with your crypto wallet. Once the transaction is confirmed your code is delivered instantly to your email and account.",
  },
  {
    q: "How fast is delivery?",
    a: "Most digital products are delivered within seconds of your payment confirming. Lightning Network payments are near-instant.",
  },
  {
    q: "Do you offer cashback?",
    a: "Yes — many brands offer cashback and discounts when you pay with crypto. Look for the cashback badge on eligible products.",
  },
  {
    q: "How do I get support?",
    a: "Our support team is available via the Help center and live chat. Visit the Help section in the header or contact us directly for order assistance.",
  },
];

export type FooterColumn = { title: string; links: NavItem[] };

export const footerColumns: FooterColumn[] = [
  {
    title: "Live on crypto",
    links: [
      { label: "Gift Cards", href: "#gift-cards" },
      { label: "Phone Refills", href: "#phone-refills" },
      { label: "eSIMs", href: "#esims" },
      { label: "Bitrefill for Agents", href: "#agents" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help", href: "#help" },
      { label: "Contact Us", href: "#contact" },
      { label: "Product Request", href: "#product-request" },
      { label: "Purchase Limits", href: "#limits" },
      { label: "Refund Policy", href: "#refund" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Careers", href: "#careers" },
      { label: "Press", href: "#press" },
      { label: "Blog", href: "#blog" },
      { label: "Reviews", href: "#reviews" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Integrations & API", href: "#api" },
      { label: "Referral Program", href: "#referral" },
      { label: "Influencer & Affiliate", href: "#affiliate" },
      { label: "Crypto Spending Guides", href: "#guides" },
    ],
  },
];
