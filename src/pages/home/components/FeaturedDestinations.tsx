import { Link } from "react-router-dom";
import { destinations } from "@/mocks/destinations";

export default function FeaturedDestinations() {
  const featured = destinations.slice(0, 6);

  return (
    <section className="py-24 bg-[#f7f5f2]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-3">Explore the World</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#0f1c19] leading-tight">
              Top Destinations
            </h2>
          </div>
          <a
            href="https://tally.so/r/9qZjB4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#0f1c19] border-b border-[#0f1c19] pb-0.5 hover:opacity-60 transition-opacity whitespace-nowrap cursor-pointer"
          >
            Plan a Trip <i className="ri-arrow-right-line"></i>
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((dest) => (
            <Link
              to="/customised-packages"
              key={dest.id}
              className="group relative overflow-hidden cursor-pointer"
            >
              <div className="w-full h-72 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white/55 text-[10px] font-semibold uppercase tracking-widest mb-1">{dest.category}</p>
                <h3 className="text-white font-black text-xl leading-tight">{dest.name}</h3>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-white/60 text-xs">{dest.tagline}</span>
                  <span className="w-7 h-7 flex items-center justify-center border border-white/40 text-white group-hover:bg-white group-hover:text-[#0f1c19] transition-all">
                    <i className="ri-arrow-right-line text-xs"></i>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
