import Footer from "@/components/feature/Footer";
import PackagesHero from "./components/PackagesHero";
import HowWeWork from "./components/HowWeWork";
import MoneySaving from "./components/MoneySaving";
import PopularPackages from "./components/PopularPackages";
import PackagesFAQ from "./components/PackagesFAQ";
import PackagesCTA from "./components/PackagesCTA";

export default function CustomisedPackagesPage() {
  return (
    <div className="min-h-screen">
      <main>
        <PackagesHero />
        <PopularPackages />
        <HowWeWork />
        <MoneySaving />
        <PackagesFAQ />
        <PackagesCTA />
      </main>
      <Footer />
    </div>
  );
}
