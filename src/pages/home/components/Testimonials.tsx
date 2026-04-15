import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Adventure Traveler",
    location: "London, UK",
    avatar: "https://readdy.ai/api/search-image?query=professional%20woman%20portrait%20smiling%20confident%20outdoor%20natural%20light%20warm%20tones&width=200&height=260&seq=t1&orientation=portrait",
    quote: "UA Trips turned my dream safari into reality. Every detail was perfectly planned, from the lodge to the game drives. I saw the Big Five on day one. Absolutely life-changing experience.",
    destination: "Kenya Safari",
    rating: 5,
  },
  {
    id: 2,
    name: "James Okonkwo",
    role: "Honeymoon Traveler",
    location: "Lagos, Nigeria",
    avatar: "https://readdy.ai/api/search-image?query=professional%20man%20portrait%20smiling%20confident%20outdoor%20natural%20light%20warm%20tones&width=200&height=260&seq=t2&orientation=portrait",
    quote: "Our Maldives honeymoon was beyond perfect. The overwater villa, the private dinners on the beach, the snorkeling. UA Trips handled everything flawlessly. We are already planning our next trip.",
    destination: "Maldives Escape",
    rating: 5,
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Solo Explorer",
    location: "Mumbai, India",
    avatar: "https://readdy.ai/api/search-image?query=professional%20indian%20woman%20portrait%20smiling%20confident%20outdoor%20natural%20light%20warm%20tones&width=200&height=260&seq=t3&orientation=portrait",
    quote: "As a solo female traveler, safety was my biggest concern. UA Trips not only kept me safe but made me feel like a VIP throughout my Greek island hopping adventure. 10/10 would recommend.",
    destination: "Greek Islands",
    rating: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="py-24 bg-[#0f1c19]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/35 mb-3">Real Stories</p>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Travellers Love Us
            </h2>
          </div>
          <div className="flex items-center gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`transition-all duration-300 cursor-pointer ${
                  i === active ? "w-8 h-1 bg-white" : "w-4 h-1 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Portrait */}
          <div className="lg:col-span-2">
            <div className="w-full h-80 lg:h-[420px] overflow-hidden">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-full h-full object-cover object-top transition-all duration-500"
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3 flex flex-col justify-center py-4">
            <div className="text-white/15 text-8xl font-black leading-none mb-6 select-none">&ldquo;</div>
            <p className="text-white text-xl md:text-2xl leading-relaxed mb-10 font-light">
              {t.quote}
            </p>
            <div className="flex items-center gap-1 mb-6">
              {Array.from({ length: t.rating }).map((_, i) => (
                <i key={i} className="ri-star-fill text-amber-400 text-sm"></i>
              ))}
            </div>
            <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-white/10">
              <div>
                <p className="text-white font-bold">{t.name}</p>
                <p className="text-white/40 text-sm mt-0.5">{t.role} &bull; {t.location}</p>
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-white/40 border border-white/15 px-4 py-2">
                {t.destination}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
