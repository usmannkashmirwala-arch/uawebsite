import { useState } from "react";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import { travelPackages, packageCategories } from "@/mocks/packages";

const badgeColors: Record<string, string> = {
  "Best Seller": "bg-orange-500",
  "Top Rated": "bg-teal-600",
  "Premium": "bg-amber-600",
  "Seasonal": "bg-rose-500",
  "Honeymoon": "bg-pink-500",
  "Adventure": "bg-green-600",
};

export default function TravelPackagesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("popular");

  const filtered = travelPackages
    .filter((p) => activeCategory === "All" || p.category === activeCategory)
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return b.reviews - a.reviews;
    });

  return (
    <div className="min-h-screen bg-[#faf9f7]">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative h-[420px] md:h-[500px] overflow-hidden">
          <img
            src="https://readdy.ai/api/search-image?query=travel%20suitcase%20passport%20world%20map%20adventure%20planning%20vacation%20holiday%20vibrant%20colorful%20flat%20lay%20overhead%20shot&width=1600&height=500&seq=pkghero&orientation=landscape"
            alt="Travel Packages"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/65"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <span className="text-orange-400 text-sm font-bold uppercase tracking-widest mb-4">All-Inclusive</span>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4">
              Travel Packages
            </h1>
            <p className="text-white/80 text-lg max-w-xl">
              Handcrafted itineraries with flights, hotels, and experiences — all bundled for the best value.
            </p>
          </div>
        </section>

        {/* Filters Bar */}
        <section className="py-8 bg-white border-b border-gray-100 sticky top-20 z-30">
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center gap-4 justify-between">
            <div className="flex items-center gap-2 flex-wrap justify-center">
              {packageCategories.map((cat) => (
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
            <div className="flex items-center gap-2">
              <span className="text-gray-500 text-sm whitespace-nowrap">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:border-orange-400 bg-white cursor-pointer"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Top Rated</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <p className="text-gray-500 text-sm mb-8">
              Showing <strong className="text-gray-900">{filtered.length}</strong> packages
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((pkg) => (
                <div
                  key={pkg.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-orange-200 transition-all duration-300"
                >
                  <div className="relative w-full h-56 overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`${badgeColors[pkg.badge] || "bg-gray-700"} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                        {pkg.badge}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                      <i className="ri-star-fill text-yellow-400 text-xs"></i>
                      <span className="text-gray-800 text-xs font-bold">{pkg.rating}</span>
                      <span className="text-gray-400 text-xs">({pkg.reviews})</span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <i className="ri-map-pin-line text-orange-500 text-sm"></i>
                      <span className="text-orange-500 text-xs font-semibold">{pkg.destination}</span>
                      <span className="ml-auto text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{pkg.category}</span>
                    </div>
                    <h3 className="text-gray-900 font-black text-lg mb-1">{pkg.title}</h3>
                    <p className="text-gray-400 text-xs mb-3">{pkg.highlights}</p>
                    <div className="flex items-center gap-4 mb-4 flex-wrap">
                      <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                        <i className="ri-time-line"></i>
                        <span>{pkg.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                        <i className="ri-group-line"></i>
                        <span>{pkg.groupSize}</span>
                      </div>
                    </div>
                    {/* Includes */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {pkg.includes.map((inc) => (
                        <span key={inc} className="bg-green-50 text-green-700 text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
                          <i className="ri-check-line text-xs"></i>{inc}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div>
                        <span className="text-gray-400 text-xs line-through">${pkg.originalPrice.toLocaleString()}</span>
                        <p className="text-gray-900 font-black text-xl">
                          ${pkg.price.toLocaleString()}
                          <span className="text-gray-400 text-xs font-normal"> /person</span>
                        </p>
                        <span className="text-green-600 text-xs font-semibold">
                          Save ${(pkg.originalPrice - pkg.price).toLocaleString()}
                        </span>
                      </div>
                      <button className="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold rounded-full transition-colors whitespace-nowrap cursor-pointer">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Book With Us */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="bg-[#1a2e2a] rounded-3xl p-8 md:p-12">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-black text-white">What&apos;s Always Included</h2>
                <p className="text-gray-400 mt-3">Every UA Trips package comes with these guarantees</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: "ri-shield-check-line", label: "Travel Insurance", desc: "Full coverage included" },
                  { icon: "ri-customer-service-2-line", label: "24/7 Support", desc: "Always here for you" },
                  { icon: "ri-price-tag-3-line", label: "Best Price", desc: "Price match guarantee" },
                  { icon: "ri-passport-line", label: "Visa Help", desc: "Expert assistance" },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-orange-500/20 text-orange-400 mx-auto mb-3">
                      <i className={`${item.icon} text-2xl`}></i>
                    </div>
                    <p className="text-white font-bold text-sm">{item.label}</p>
                    <p className="text-gray-400 text-xs mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
