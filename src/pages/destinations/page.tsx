import { useState } from "react";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import DestinationHero from "./components/DestinationHero";
import DestinationCard from "./components/DestinationCard";
import { destinations, categories } from "@/mocks/destinations";

export default function DestinationsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = destinations.filter((d) => {
    const matchCat = activeCategory === "All" || d.category === activeCategory;
    const matchSearch =
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-[#faf9f7]">
      <Navbar />
      <main>
        <DestinationHero />

        {/* Filters */}
        <section className="py-10 bg-white border-b border-gray-100 sticky top-20 z-30">
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center gap-4 justify-between">
            {/* Search */}
            <div className="relative w-full sm:w-80">
              <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-gray-200 text-sm text-gray-700 focus:outline-none focus:border-orange-400 bg-[#faf9f7]"
              />
            </div>

            {/* Category Tabs */}
            <div className="flex items-center gap-2 flex-wrap justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    activeCategory === cat
                      ? "bg-orange-500 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-orange-50 hover:text-orange-500"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Destination Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex items-center justify-between mb-8">
              <p className="text-gray-500 text-sm">
                Showing <strong className="text-gray-900">{filtered.length}</strong> destinations
                {activeCategory !== "All" && ` in ${activeCategory}`}
              </p>
            </div>

            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filtered.map((dest) => (
                  <DestinationCard key={dest.id} dest={dest} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-orange-50 text-orange-400 mx-auto mb-4">
                  <i className="ri-map-2-line text-3xl"></i>
                </div>
                <h3 className="text-gray-900 font-bold text-xl mb-2">No destinations found</h3>
                <p className="text-gray-500 text-sm">Try adjusting your search or filter.</p>
              </div>
            )}
          </div>
        </section>

        {/* Interactive Map */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-10">
              <span className="text-orange-500 text-sm font-bold uppercase tracking-widest">Interactive Map</span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2">Find Your Next Adventure</h2>
              <p className="text-gray-500 mt-3 max-w-lg mx-auto text-sm">
                Explore our destinations on the map and discover hidden gems around the world.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-gray-200 h-[500px]">
              <iframe
                title="UA Trips Destinations Map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d20000000!2d20!3d20!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
