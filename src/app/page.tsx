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
import { recommended, popular, categories, phoneRefills } from "@/lib/data";

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
          subtitle="8,000+ gift cards you can buy with crypto"
          products={popular}
        />
        <HowItWorks />
        {categories.map((category) => (
          <CategoryRail key={category.id} category={category} />
        ))}
        <MobileApp />
        <ProductGrid
          id="phone-refills"
          title="Phone Refills"
          subtitle="Top up any prepaid phone with crypto — 500+ operators in 150+ countries"
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
