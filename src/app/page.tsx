import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import CategoryRail from "@/components/CategoryRail";
import HowItWorks from "@/components/HowItWorks";
import MobileApp from "@/components/MobileApp";
import TrustSection from "@/components/TrustSection";
import PaymentMethods from "@/components/PaymentMethods";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import {
  recommended,
  popular,
  categories,
  phoneRefills,
  esims,
  paymentCards,
} from "@/lib/data";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <ProductGrid
          id="recommended"
          title="Recommended for you"
          products={recommended}
        />
        <ProductGrid
          id="gift-cards"
          title="Popular gift cards"
          subtitle="Static sample gift-card tiles for the demo catalog"
          products={popular}
        />
        <HowItWorks />
        {categories.map((category) => (
          <CategoryRail key={category.id} category={category} />
        ))}
        <MobileApp />
        <ProductGrid
          id="esims"
          title="eSIMs"
          subtitle="Sample travel-data products for layout coverage"
          products={esims}
        />
        <ProductGrid
          id="payment-cards"
          title="Payment Cards"
          subtitle="Static card-style products; no checkout or issuance is available"
          products={paymentCards}
        />
        <ProductGrid
          id="phone-refills"
          title="Phone Refills"
          subtitle="Sample prepaid-carrier tiles for the demo catalog"
          products={phoneRefills}
        />
        <TrustSection />
        <PaymentMethods />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
