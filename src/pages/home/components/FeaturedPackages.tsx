import { Link } from "react-router-dom";
import { travelPackages } from "@/mocks/packages";

export default function FeaturedPackages() {
  const featured = travelPackages.slice(0, 3);

  return (
    <section className="py-24 bg-[#f7f5f2]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-3">Curated For You</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#0f1c19] leading-tight">
              Popular Packages
            </h2>
          </div>
          <Link
            to="/customised-packages#popular-packages"
            className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#0f1c19] border-b border-[#0f1c19] pb-0.5 hover:opacity-60 transition-opacity whitespace-nowrap cursor-pointer"
          >
            All Packages <i className="ri-arrow-right-line"></i>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featured.map((pkg) => (
            <Link
              to="/customised-packages#popular-packages"
              key={pkg.id}
              className="group bg-white overflow-hidden cursor-pointer hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="relative w-full h-56 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-[#0f1c19] text-[10px] font-bold px-2.5 py-1 uppercase tracking-widest">
                    {pkg.badge}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-2">{pkg.destination}</p>
                <h3 className="text-[#0f1c19] font-black text-lg mb-3 leading-snug">{pkg.title}</h3>
                <div className="flex items-center gap-4 mb-5">
                  <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                    <i className="ri-time-line"></i>
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                    <i className="ri-star-fill text-amber-400"></i>
                    <span>{pkg.rating} ({pkg.reviews})</span>
                  </div>
                </div>
                <div className="flex items-center justify-end pt-4 border-t border-gray-100">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#0f1c19] group-hover:opacity-60 transition-opacity">
                    Enquire <i className="ri-arrow-right-line"></i>
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
