const popularPackages = [
  {
    destination: "Greek Islands, Greece",
    duration: "10 Days / 9 Nights",
    image: "https://readdy.ai/api/search-image?query=Greek%20islands%20Santorini%20Mykonos%20crystal%20blue%20water%20white%20buildings%20sailing%20boat%20summer%20Mediterranean%20vibrant%20colorful%20paradise&width=800&height=500&seq=pkg1&orientation=landscape",
    highlights: ["Return flights included", "Hotels in Santorini & Mykonos", "Island ferry transfers", "Guided tours of Crete & Rhodes"],
    tag: "Best Seller",
  },
  {
    destination: "Bali, Indonesia",
    duration: "8 Days / 7 Nights",
    image: "https://readdy.ai/api/search-image?query=Bali%20Indonesia%20luxury%20villa%20infinity%20pool%20jungle%20tropical%20lush%20green%20rice%20terraces%20spa%20wellness%20retreat%20serene%20peaceful&width=800&height=500&seq=pkg2&orientation=landscape",
    highlights: ["Return flights from Karachi", "Villa stay in Ubud & Seminyak", "Spa & wellness sessions", "Private driver throughout"],
    tag: "Top Rated",
  },
  {
    destination: "Kenya & Tanzania, Africa",
    duration: "12 Days / 11 Nights",
    image: "https://readdy.ai/api/search-image?query=Africa%20safari%20jeep%20game%20drive%20lions%20elephants%20savanna%20golden%20sunset%20Masai%20Mara%20wildlife%20adventure%20dramatic%20landscape&width=800&height=500&seq=pkg3&orientation=landscape",
    highlights: ["Return flights included", "Safari lodge accommodation", "All meals & game drives", "Masai Mara & Serengeti"],
    tag: "Premium",
  },
  {
    destination: "Dubai, UAE",
    duration: "5 Days / 4 Nights",
    image: "https://readdy.ai/api/search-image?query=Dubai%20skyline%20Burj%20Khalifa%20luxury%20hotels%20desert%20safari%20golden%20sunset%20modern%20architecture%20vibrant%20city%20lights%20spectacular%20view&width=800&height=500&seq=cpkg1&orientation=landscape",
    highlights: ["Return flights from Karachi", "4-star hotel in prime location", "Desert safari experience", "City tour & Burj Khalifa visit"],
    tag: "Most Popular",
  },
  {
    destination: "Istanbul, Turkey",
    duration: "7 Days / 6 Nights",
    image: "https://readdy.ai/api/search-image?query=Istanbul%20Turkey%20Blue%20Mosque%20Hagia%20Sophia%20Bosphorus%20bridge%20vibrant%20bazaar%20colorful%20spices%20historic%20architecture%20golden%20hour&width=800&height=500&seq=cpkg2&orientation=landscape",
    highlights: ["Return flights included", "Boutique hotel in Sultanahmet", "Bosphorus cruise", "Grand Bazaar & Hagia Sophia tours"],
    tag: "Top Rated",
  },
  {
    destination: "Bangkok & Phuket, Thailand",
    duration: "10 Days / 9 Nights",
    image: "https://readdy.ai/api/search-image?query=Thailand%20Bangkok%20temples%20Phuket%20beach%20turquoise%20water%20tropical%20paradise%20vibrant%20street%20food%20markets%20colorful%20tuk%20tuk&width=800&height=500&seq=cpkg3&orientation=landscape",
    highlights: ["Return flights from Karachi", "Hotels in both cities", "Island hopping day trip", "Street food & temple tours"],
    tag: "Great Value",
  },
  {
    destination: "London & Paris, Europe",
    duration: "12 Days / 11 Nights",
    image: "https://readdy.ai/api/search-image?query=London%20Paris%20Europe%20Eiffel%20Tower%20Big%20Ben%20iconic%20landmarks%20vibrant%20city%20streets%20cafes%20romantic%20atmosphere%20beautiful%20architecture&width=800&height=500&seq=cpkg4&orientation=landscape",
    highlights: ["Schengen & UK visa guidance", "Central hotels in both cities", "Eurostar train included", "Guided city tours"],
    tag: "Premium",
  },
  {
    destination: "Kuala Lumpur & Singapore",
    duration: "8 Days / 7 Nights",
    image: "https://readdy.ai/api/search-image?query=Kuala%20Lumpur%20Petronas%20Towers%20Singapore%20Marina%20Bay%20Sands%20vibrant%20modern%20skyline%20tropical%20lush%20gardens%20night%20lights%20spectacular&width=800&height=500&seq=cpkg5&orientation=landscape",
    highlights: ["Return flights included", "4-star hotels both cities", "Gardens by the Bay visit", "Batu Caves & city tours"],
    tag: "Family Favourite",
  },
  {
    destination: "Maldives",
    duration: "6 Days / 5 Nights",
    image: "https://readdy.ai/api/search-image?query=Maldives%20overwater%20bungalow%20crystal%20clear%20turquoise%20lagoon%20white%20sand%20beach%20tropical%20paradise%20romantic%20sunset%20luxury%20resort&width=800&height=500&seq=cpkg6&orientation=landscape",
    highlights: ["Return flights from Karachi", "Overwater or beach villa", "Speedboat transfers", "Snorkeling & water sports"],
    tag: "Honeymoon",
  },
];

export default function PopularPackages() {
  return (
    <section id="popular-packages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-3">Popular Choices</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#0f1c19] leading-tight">Popular Package Destinations</h2>
          </div>
          <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
            Inspiration only; every package is fully customised to your needs.
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {popularPackages.map((pkg) => (
            <div key={pkg.destination} className="group bg-white border border-gray-100 overflow-hidden hover:-translate-y-1 transition-transform duration-300">
              <div className="relative h-48 overflow-hidden">
                <img src={pkg.image} alt={pkg.destination} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute top-3 left-3 bg-white text-[#0f1c19] text-[10px] font-bold px-2.5 py-1 uppercase tracking-widest">{pkg.tag}</span>
                <div className="absolute bottom-3 left-4 text-white">
                  <h3 className="font-black text-base leading-tight">{pkg.destination}</h3>
                  <p className="text-white/65 text-xs mt-0.5 flex items-center gap-1"><i className="ri-time-line"></i>{pkg.duration}</p>
                </div>
              </div>
              <div className="p-5">
                <ul className="space-y-1.5 mb-4">
                  {pkg.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-gray-500 text-xs">
                      <i className="ri-check-line text-[#0f1c19] text-xs flex-shrink-0 mt-0.5"></i>
                      {h}
                    </li>
                  ))}
                </ul>
                <p className="text-[10px] text-gray-400 italic mb-3">Rates not guaranteed, contact us for a personalised quote.</p>
                <a
                  href="https://tally.so/r/9qZjB4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#0f1c19] hover:bg-[#1a2e2a] text-white font-semibold py-2.5 text-xs tracking-wide transition-colors whitespace-nowrap cursor-pointer"
                >
                  Get a Quote <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-400 text-sm mb-4">Don't see your dream destination? We build packages for anywhere in the world.</p>
          <a
            href="https://tally.so/r/9qZjB4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#0f1c19] text-[#0f1c19] hover:bg-[#0f1c19] hover:text-white font-semibold px-7 py-3 text-sm tracking-wide transition-all whitespace-nowrap cursor-pointer"
          >
            Request a Custom Destination <i className="ri-arrow-right-line"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
