import HeroNavbar from "@/components/feature/HeroNavbar";
import Footer from "@/components/feature/Footer";
import { Link } from "react-router-dom";

const hotels = [
  {
    name: "Burj Al Arab",
    location: "Dubai, UAE",
    tag: "Iconic Luxury",
    image: "https://readdy.ai/api/search-image?query=Burj%20Al%20Arab%20Dubai%20iconic%20sail-shaped%20luxury%20hotel%20exterior%20at%20golden%20sunset%20reflecting%20in%20calm%20water%20dramatic%20sky%20UAE%20architecture&width=800&height=600&seq=hotel1&orientation=landscape",
  },
  {
    name: "Capella Bangkok",
    location: "Bangkok, Thailand",
    tag: "Riverside Elegance",
    image: "https://readdy.ai/api/search-image?query=luxury%20riverside%20hotel%20Bangkok%20Thailand%20elegant%20pool%20terrace%20overlooking%20Chao%20Phraya%20river%20tropical%20lush%20greenery%20golden%20hour&width=800&height=600&seq=hotel2&orientation=landscape",
  },
  {
    name: "Çırağan Palace Kempinski",
    location: "Istanbul, Turkey",
    tag: "Ottoman Grandeur",
    image: "https://readdy.ai/api/search-image?query=Ciragan%20Palace%20Kempinski%20Istanbul%20Ottoman%20palace%20luxury%20hotel%20Bosphorus%20waterfront%20historic%20architecture%20dramatic%20sunset%20Turkey&width=800&height=600&seq=hotel3&orientation=landscape",
  },
  {
    name: "Hotel de Russie",
    location: "Rome, Italy",
    tag: "European Prestige",
    image: "https://readdy.ai/api/search-image?query=luxury%20boutique%20hotel%20Rome%20Italy%20elegant%20courtyard%20garden%20terrace%20historic%20building%20European%20architecture%20warm%20afternoon%20light&width=800&height=600&seq=hotel4&orientation=landscape",
  },
  {
    name: "Amanjiwo",
    location: "Java, Indonesia",
    tag: "Jungle Sanctuary",
    image: "https://readdy.ai/api/search-image?query=Amanjiwo%20luxury%20resort%20Java%20Indonesia%20Borobudur%20temple%20view%20infinity%20pool%20lush%20tropical%20jungle%20dramatic%20misty%20mountains&width=800&height=600&seq=hotel5&orientation=landscape",
  },
  {
    name: "Singita Grumeti",
    location: "Serengeti, Tanzania",
    tag: "Safari Luxury",
    image: "https://readdy.ai/api/search-image?query=luxury%20safari%20lodge%20Serengeti%20Tanzania%20infinity%20pool%20overlooking%20savanna%20wildlife%20sunset%20dramatic%20African%20landscape%20exclusive&width=800&height=600&seq=hotel6&orientation=landscape",
  },
];

const benefits = [
  {
    icon: "ri-building-line",
    title: "Exclusive Partner Portals",
    desc: "We access hotel inventory through professional B2B portals unavailable to the public — giving you better rates and added benefits.",
  },
  {
    icon: "ri-map-pin-line",
    title: "Location Intelligence",
    desc: "We know which neighbourhoods actually make sense for your trip — not just which hotels look good on a website.",
  },
  {
    icon: "ri-gift-line",
    title: "Added Benefits",
    desc: "Room upgrades, early check-in, late check-out, and complimentary amenities negotiated through our long-standing relationships.",
  },
  {
    icon: "ri-shield-check-line",
    title: "Verified Quality",
    desc: "Every hotel we recommend has been vetted by our team. We only suggest properties we would stay in ourselves.",
  },
];

export default function HotelBookingsPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero + Navbar combined */}
      <section className="relative w-full min-h-[90vh] flex flex-col overflow-hidden">
        <img
          src="https://static.readdy.ai/image/ab3e1b6ace2898e0dfaefcf807841ab1/bf43ed546b60549a74a8a3cf2ad5e771.png"
          alt="Luxury Hotel Bookings"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />

        <HeroNavbar />

        <div className="relative z-10 flex-1 flex flex-col justify-end pb-24 px-8 md:px-16 lg:px-24 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-white/60" />
            <span className="text-white/70 text-xs font-medium tracking-[0.2em] uppercase">Hotel Bookings</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 max-w-3xl tracking-tight">
            Chosen Carefully.<br />Located Right.
          </h1>
          <p className="text-white/65 text-base md:text-lg mb-10 max-w-lg font-light leading-relaxed">
            We book hotels through exclusive partner portals and long-standing relationships — giving you access to better rates, added benefits, and the right locations for your trip.
          </p>
          <a
            href="https://tally.so/r/9qZjB4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/60 text-white font-semibold text-sm tracking-wide hover:bg-white/10 hover:border-white transition-all whitespace-nowrap cursor-pointer w-fit"
          >
            Get The Best Hotel Deals
            <i className="ri-arrow-right-line"></i>
          </a>
        </div>
      </section>

      {/* Why Book With Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-3">Why Book With Us</p>
              <h2 className="text-4xl md:text-5xl font-black text-[#0f1c19] leading-tight">
                Beyond What You<br />Find Online
              </h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Consumer booking platforms show you what hotels want you to see. We show you what actually makes sense for your trip.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white p-8">
                <div className="w-10 h-10 flex items-center justify-center mb-5">
                  <i className={`${b.icon} text-2xl text-[#0f1c19]`}></i>
                </div>
                <h3 className="text-[#0f1c19] font-bold text-base mb-3">{b.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Hotels */}
      <section className="py-24 bg-[#f7f5f2]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-3">Handpicked Properties</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#0f1c19] leading-tight">
              Exotic Hotels Around the World
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {hotels.map((hotel) => (
              <div key={hotel.name} className="group relative overflow-hidden cursor-pointer">
                <div className="w-full h-72 overflow-hidden">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/15 backdrop-blur-sm text-white text-[10px] font-semibold uppercase tracking-widest border border-white/20">
                    {hotel.tag}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white/55 text-[10px] font-semibold uppercase tracking-widest mb-1">{hotel.location}</p>
                  <h3 className="text-white font-black text-xl leading-tight">{hotel.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-[#0f1c19]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-3">The Process</p>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              How We Book Your Hotel
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
            {[
              { step: "01", title: "Tell Us Your Trip", desc: "Share your destination, dates, travel style, and any preferences. We listen carefully." },
              { step: "02", title: "We Research & Recommend", desc: "We search our partner portals and shortlist 2-3 options that genuinely fit your trip — not just the most expensive ones." },
              { step: "03", title: "Confirmed & Supported", desc: "Once you choose, we handle the booking and stay available throughout your stay if anything needs adjusting." },
            ].map((item) => (
              <div key={item.step} className="bg-[#0f1c19] p-10">
                <p className="text-white/15 font-black text-5xl mb-6">{item.step}</p>
                <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-4">Ready to Book?</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#0f1c19] mb-6">Find Your Perfect Hotel</h2>
          <p className="text-gray-400 text-base mb-10 max-w-md mx-auto leading-relaxed">
            Tell us where you're going and we'll find the right hotel at the right location for the right value.
          </p>
          <a
            href="https://tally.so/r/9qZjB4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 bg-[#0f1c19] text-white font-semibold text-sm tracking-wide hover:bg-[#1a2e2a] transition-all whitespace-nowrap cursor-pointer"
          >
            Get Hotel Recommendations
            <i className="ri-arrow-right-line"></i>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
