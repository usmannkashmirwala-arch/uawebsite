import { Link } from "react-router-dom";

const services = [
  {
    title: "Customised Travel Packages",
    desc: "Expert planned international itineraries built around your personality, pace, and interests. 30+ years of expertise.",
    link: "/customised-packages",
    image: "https://storage.readdy-site.link/project_files/79967ff0-018e-4818-aac4-172f0e8c5494/d5cfe567-445e-48f1-8f68-2c71305cad5d_Home-Customised-Package-Service-Image-.jpg?v=906af2be93cbfd40dbe338896029a33c",
    tag: "Most Popular",
  },
  {
    title: "Global Tours",
    desc: "Small-group tours to niche destinations, curated experiences with like-minded travellers.",
    link: "/global-tours",
    image: "https://storage.readdy-site.link/project_files/79967ff0-018e-4818-aac4-172f0e8c5494/a9a10ef5-03c3-4fb7-9e48-d272bf652c5e_Home-Global-Tours-Service-Image-.jpg?v=615e7b2b34d9cf93b6ec670fb4a1ec0c",
    tag: "Limited Spots",
  },
  {
    title: "Discounted Hotel Booking",
    desc: "Premium hotels through exclusive partner portals, chosen carefully, priced better, located right.",
    link: "/hotel-bookings",
    image: "https://storage.readdy-site.link/project_files/79967ff0-018e-4818-aac4-172f0e8c5494/29b3557c-c8db-4183-a02c-e20b8058d246_Home-Hotel-Booking-Service-Image-.jpg?v=41451f535cce7d1881496b9580d39500",
    tag: null,
  },
  {
    title: "Exclusive Flight Deals",
    desc: "Book flights via Sabre GDS with options to hold fares for 3 days. Access routes unavailable on consumer platforms.",
    link: "/flight-deals",
    image: "https://storage.readdy-site.link/project_files/79967ff0-018e-4818-aac4-172f0e8c5494/a8825df7-7cef-4775-a8ca-38071b45f5e5_Home-Flights-Booking-Service-Image-.jpg?v=c69eea45ec263853eb085b7bd489cabc",
    tag: "Sabre GDS",
  },
  {
    title: "Visa Assistance",
    desc: "Expert visa documentation for Schengen, USA, Japan, and 130+ destinations, tailored for Pakistani applicants.",
    link: "/visa-assistance",
    image: "https://storage.readdy-site.link/project_files/79967ff0-018e-4818-aac4-172f0e8c5494/1d266bb5-b702-47b2-9431-0612772f8e61_Home-Visa-Assistance-Service-Image-.jpg?v=964a07a0562047db8583e5f7473568a7",
    tag: null,
  },
  {
    title: "24/7 Support Service",
    desc: "Direct access to experienced advisors throughout your trip. Real humans, not automated chatbots.",
    link: "/support-service",
    image: "https://storage.readdy-site.link/project_files/79967ff0-018e-4818-aac4-172f0e8c5494/47e4127d-1e04-4fad-bab8-636405e6a9fa_Home-247-Service-Image-.jpg?v=407aad191eb5266e02c82f4a214f7ade",
    tag: null,
  },
  {
    title: "Travel Insurance",
    desc: "Embassy recognised coverage up to $100,000, visa-compliant and affordable through our direct provider relationships.",
    link: "/travel-insurance",
    image: "https://storage.readdy-site.link/project_files/79967ff0-018e-4818-aac4-172f0e8c5494/a1e1c31f-83a8-46cb-8ed5-43d03acc42ea_Home-Travel-Insurance-Service-Image-.jpg?v=769a4cb0b423c8ccbea37ddec438425f",
    tag: null,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-28 bg-[#f9f8f6]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#b8a98a] mb-4">What We Offer</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#0f1c19] leading-tight">
              Everything You Need<br />to Travel the World
            </h2>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
            From customised itineraries to visa documentation, we handle every detail so you can focus on the experience.
          </p>
        </div>

        {/* Row 1 — Large hero card + 2 stacked cards */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-4">

          {/* Hero card — Customised Packages (spans 3 cols) */}
          <Link
            to={services[0].link}
            className="group relative overflow-hidden lg:col-span-3 rounded-2xl cursor-pointer"
            style={{ minHeight: "520px" }}
          >
            <img
              src={services[0].image}
              alt={services[0].title}
              className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1c19]/90 via-[#0f1c19]/30 to-transparent" />
            <div className="relative z-10 h-full flex flex-col justify-between p-10" style={{ minHeight: "520px" }}>
              <div>
                {services[0].tag && (
                  <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] bg-[#b8a98a] text-[#0f1c19] px-3 py-1 rounded-full">
                    {services[0].tag}
                  </span>
                )}
              </div>
              <div>
                <h3 className="text-white font-black text-2xl md:text-3xl mb-3 leading-tight">{services[0].title}</h3>
                <p className="text-white/65 text-sm leading-relaxed mb-6 max-w-sm">{services[0].desc}</p>
                <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#b8a98a] group-hover:gap-3 transition-all duration-300">
                  Explore <i className="ri-arrow-right-line text-sm"></i>
                </span>
              </div>
            </div>
          </Link>

          {/* Right column — 2 stacked cards (spans 2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {services.slice(1, 3).map((s) => (
              <Link
                to={s.link}
                key={s.title}
                className="group relative overflow-hidden rounded-2xl cursor-pointer flex-1"
                style={{ minHeight: "248px" }}
              >
                <img
                  src={s.image}
                  alt={s.title}
                  className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1c19]/85 via-[#0f1c19]/25 to-transparent" />
                <div className="relative z-10 h-full flex flex-col justify-between p-7" style={{ minHeight: "248px" }}>
                  <div>
                    {s.tag && (
                      <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] bg-white/15 text-white px-3 py-1 rounded-full backdrop-blur-sm">
                        {s.tag}
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1.5 leading-snug">{s.title}</h3>
                    <p className="text-white/55 text-xs leading-relaxed mb-4">{s.desc}</p>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#b8a98a] group-hover:gap-2.5 transition-all duration-300">
                      Explore <i className="ri-arrow-right-line"></i>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Row 2 — 3 equal cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          {services.slice(3, 6).map((s) => (
            <Link
              to={s.link}
              key={s.title}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              style={{ minHeight: "340px" }}
            >
              <img
                src={s.image}
                alt={s.title}
                className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1c19]/95 via-[#0f1c19]/50 to-[#0f1c19]/10" />
              <div className="relative z-10 h-full flex flex-col justify-between p-8" style={{ minHeight: "340px" }}>
                <div>
                  {s.tag && (
                    <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] bg-white/15 text-white px-3 py-1 rounded-full backdrop-blur-sm">
                      {s.tag}
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2 leading-snug">{s.title}</h3>
                  <p className="text-white/75 text-xs leading-relaxed mb-4">{s.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#b8a98a] group-hover:gap-2.5 transition-all duration-300">
                    Explore <i className="ri-arrow-right-line"></i>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Row 3 — Travel Insurance full-width banner */}
        <Link
          to={services[6].link}
          className="group relative overflow-hidden rounded-2xl flex cursor-pointer"
          style={{ minHeight: "180px" }}
        >
          <img
            src={services[6].image}
            alt={services[6].title}
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-[#0f1c19]/72 group-hover:bg-[#0f1c19]/80 transition-colors duration-300" />
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-10 w-full">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b8a98a] mb-2">Peace of Mind</p>
              <h3 className="text-white font-black text-xl md:text-2xl mb-1">{services[6].title}</h3>
              <p className="text-white/55 text-sm leading-relaxed max-w-lg">{services[6].desc}</p>
            </div>
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#b8a98a] whitespace-nowrap group-hover:gap-3 transition-all duration-300 flex-shrink-0 border border-[#b8a98a]/40 px-6 py-3 rounded-full group-hover:border-[#b8a98a] group-hover:bg-[#b8a98a]/10">
              Learn More <i className="ri-arrow-right-line"></i>
            </span>
          </div>
        </Link>

      </div>
    </section>
  );
}
