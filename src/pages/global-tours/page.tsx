import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeroNavbar from "@/components/feature/HeroNavbar";
import Footer from "@/components/feature/Footer";

const tours = [
  {
    id: "tomorrowland",
    title: "The Tomorrowland Experience",
    dates: "Dec 8–15, 2025",
    link: "/tomorrowland-packages",
    image: "https://storage.readdy-site.link/project_files/79967ff0-018e-4818-aac4-172f0e8c5494/9653cbdf-b39b-412a-9ddd-0a106a78e200_Global-Tours-Tomorrowland-Service-Image-.jpg?v=ac5f5e1e268bc6d877a04802703f34de",
    description: "Bangkok → Pattaya → Tomorrowland. Festival madness, Bangkok exploration, and nights you'll be telling stories about for years. Refundable packages available.",
    tag: "Festival",
    spots: "Limited Spots",
  },
  {
    id: "full-moon",
    title: "Thailand Full Moon Festival",
    dates: "May 26 – Jun 6, 2026",
    link: "/full-moon-festival-thailand-2026",
    image: "https://storage.readdy-site.link/project_files/79967ff0-018e-4818-aac4-172f0e8c5494/e85976d4-9dd9-4b75-ac2c-bee2f2f0e3fd_Global-Tours-Full-Moon-Festival-Service-Image-.jpg?v=7aa3b7a3566b7a45528677a99e91eb8e",
    description: "Bangkok → Koh Samui → Phuket. One of the world's most iconic beach events. 5-star accommodations, sunset dinner cruise, jungle safari, Phi Phi Island tour, and visa included.",
    tag: "Beach & Festival",
    spots: "Filling Fast",
  },
];

const whyDifferent = [
  {
    icon: "ri-group-line",
    title: "Small Groups Only",
    desc: "8 to 15 people maximum on every tour — personal enough to feel exclusive, social enough to share the experience.",
  },
  {
    icon: "ri-checkbox-circle-line",
    title: "Everything Included",
    desc: "Flights, hotels, transfers, activities, and visa — packaged together so you don't have to coordinate anything yourself.",
  },
  {
    icon: "ri-headphone-line",
    title: "24/7 Support On Trip",
    desc: "A UA Travels advisor is available throughout your tour — real support, not a helpline that puts you on hold.",
  },
];

export default function GlobalToursPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#faf9f7]">
      <main>
        {/* Hero */}
        <section className="relative min-h-[90vh] flex flex-col overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(https://storage.readdy-site.link/project_files/79967ff0-018e-4818-aac4-172f0e8c5494/00a55aa7-b91f-409c-a9e9-f175a35c6036_Global-Tours-Page-Header-Image-.jpg?v=1de39dc8b63769fa00ac84ad901ea209)`,
              transform: `translateY(${scrollY * 0.25}px)`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/75" />

          <HeroNavbar />

          <div className="relative z-10 flex-1 flex flex-col justify-end w-full max-w-7xl mx-auto px-6 md:px-10 pb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-white/50" />
              <span className="text-white/60 text-[11px] font-medium tracking-[0.2em] uppercase">Small Groups · Big Experiences</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.0] mb-5 tracking-tight max-w-3xl">
              Global Tours<br />
              <span className="text-white/60">With UA Travels</span>
            </h1>
            <p className="text-white/55 text-base md:text-lg max-w-xl mb-8 leading-relaxed font-light">
              Curated small-group tours to unforgettable destinations — 8 to 15 people, so every experience feels personal.
            </p>
            <a
              href="https://tally.so/r/9qZjB4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/60 text-white font-semibold px-8 py-3.5 text-sm tracking-wide transition-all duration-200 whitespace-nowrap cursor-pointer hover:bg-white/10 hover:border-white w-fit"
            >
              Enquire About a Tour
              <i className="ri-arrow-right-line"></i>
            </a>
          </div>
        </section>

        {/* Tour Cards */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="mb-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-3">Current Tours</p>
              <h2 className="text-3xl md:text-4xl font-black text-[#0f1c19] leading-tight">Tour Packages</h2>
              <p className="text-gray-400 text-sm mt-3 max-w-lg">All tours are limited to small groups for the best experience. Spots fill quickly — register your interest early.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {tours.map((tour) => (
                <Link key={tour.id} to={tour.link} className="group bg-white border border-gray-100 overflow-hidden hover:-translate-y-1 transition-transform duration-300 cursor-pointer block">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="bg-white text-[#0f1c19] text-[10px] font-bold px-2.5 py-1 uppercase tracking-widest">{tour.tag}</span>
                      <span className="bg-[#0f1c19] text-white text-[10px] font-bold px-2.5 py-1 uppercase tracking-widest">{tour.spots}</span>
                    </div>
                    <div className="absolute bottom-4 left-5">
                      <p className="text-white/60 text-xs font-medium tracking-wide mb-1 flex items-center gap-1.5">
                        <i className="ri-calendar-line"></i>{tour.dates}
                      </p>
                      <h3 className="text-white font-black text-xl leading-tight">{tour.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">{tour.description}</p>
                    <span className="inline-flex items-center gap-2 bg-[#0f1c19] group-hover:bg-[#1a2e2a] text-white font-semibold px-7 py-3 text-xs tracking-wide transition-colors whitespace-nowrap cursor-pointer">
                      View Package <i className="ri-arrow-right-line"></i>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Different */}
        <section className="py-20 bg-[#faf9f7]">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="mb-12 text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-3">Our Approach</p>
              <h2 className="text-3xl md:text-4xl font-black text-[#0f1c19]">Why Our Tours Are Different</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {whyDifferent.map((item) => (
                <div key={item.title} className="bg-white border border-gray-100 p-8">
                  <div className="w-10 h-10 flex items-center justify-center mb-5">
                    <i className={`${item.icon} text-2xl text-[#0f1c19]`}></i>
                  </div>
                  <h3 className="text-[#0f1c19] font-black text-base mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#0f1c19]">
          <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-4">Custom Travel</p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Don't See a Tour You're Looking For?</h2>
            <p className="text-white/45 text-sm max-w-md mx-auto mb-8 leading-relaxed">
              Tell us where you want to go — we build customised packages for individuals and groups too.
            </p>
            <a
              href="https://tally.so/r/9qZjB4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#0f1c19] font-semibold px-8 py-3.5 text-sm tracking-wide transition-all duration-200 whitespace-nowrap cursor-pointer hover:bg-white/90"
            >
              Enquire About a Custom Tour <i className="ri-arrow-right-line"></i>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
