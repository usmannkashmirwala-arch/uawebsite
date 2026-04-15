import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import HeroSlider from "./components/HeroSlider";
import StatsBar from "./components/StatsBar";
import FeaturedDestinations from "./components/FeaturedDestinations";
import ServicesSection from "./components/ServicesSection";
import HowItWorks from "./components/HowItWorks";
import FeaturedPackages from "./components/FeaturedPackages";
import MapSection from "./components/MapSection";
import CTASection from "./components/CTASection";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSlider />
        <StatsBar />
        <ServicesSection />
        <HowItWorks />
        <FeaturedDestinations />
        <FeaturedPackages />
        <MapSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
