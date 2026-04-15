import HeroNavbar from "@/components/feature/HeroNavbar";
import Footer from "@/components/feature/Footer";

const advantages = [
  {
    icon: "ri-flight-takeoff-line",
    title: "Sabre GDS Access",
    desc: "We book through Sabre — the same professional airline distribution system used by major travel agencies worldwide. Fares and routes simply unavailable on consumer platforms.",
  },
  {
    icon: "ri-time-line",
    title: "Hold Fares for 3 Days",
    desc: "Lock in a fare while you finalise your plans. We can hold most tickets for up to 72 hours without payment — a privilege only available through professional systems.",
  },
  {
    icon: "ri-route-line",
    title: "Complex Routing",
    desc: "Multi-city trips, open-jaw tickets, and unusual connections — we build itineraries that consumer platforms can't even display.",
  },
  {
    icon: "ri-exchange-line",
    title: "Flexible Options",
    desc: "We advise on the most flexible fare classes so you can change or cancel without losing everything if your plans shift.",
  },
  {
    icon: "ri-money-dollar-circle-line",
    title: "Competitive Fares",
    desc: "Access to negotiated fares and consolidator rates that aren't published on any public booking site.",
  },
  {
    icon: "ri-customer-service-2-line",
    title: "Human Support",
    desc: "When something goes wrong mid-trip — a missed connection, a cancellation — you call us. We act immediately on your behalf.",
  },
];

const routes = [
  { from: "Karachi", to: "London", via: "Direct & Connecting", tag: "Popular" },
  { from: "Karachi", to: "Dubai", via: "Direct", tag: "Frequent" },
  { from: "Karachi", to: "Toronto", via: "Connecting", tag: "Long-Haul" },
  { from: "Karachi", to: "Tokyo", via: "Connecting", tag: "Exotic" },
  { from: "Lahore", to: "Istanbul", via: "Direct", tag: "Trending" },
  { from: "Lahore", to: "Paris", via: "Connecting", tag: "Popular" },
  { from: "Lahore", to: "Bangkok", via: "Direct & Connecting", tag: "Popular" },
  { from: "Lahore", to: "New York", via: "Connecting", tag: "Long-Haul" },
  { from: "Islamabad", to: "Kuala Lumpur", via: "Direct & Connecting", tag: "Popular" },
  { from: "Islamabad", to: "Frankfurt", via: "Connecting", tag: "Trending" },
  { from: "Islamabad", to: "Sydney", via: "Connecting", tag: "Long-Haul" },
  { from: "Islamabad", to: "Amsterdam", via: "Connecting", tag: "Popular" },
  { from: "Karachi", to: "Singapore", via: "Connecting", tag: "Trending" },
  { from: "Lahore", to: "Manchester", via: "Connecting", tag: "Frequent" },
  { from: "Islamabad", to: "Barcelona", via: "Connecting", tag: "Exotic" },
  { from: "Karachi", to: "Nairobi", via: "Connecting", tag: "Exotic" },
];

export default function FlightDealsPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero + Navbar combined */}
      <section className="relative w-full min-h-[90vh] flex flex-col overflow-hidden">
        <img
          src="https://static.readdy.ai/image/ab3e1b6ace2898e0dfaefcf807841ab1/ff17f99d24aef279a07d73a3bb07b58c.jpeg"
          alt="Exclusive Flight Deals"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/65" />

        <HeroNavbar />

        <div className="relative z-10 flex-1 flex flex-col justify-end pb-24 px-8 md:px-16 lg:px-24 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-white/60" />
            <span className="text-white/70 text-xs font-medium tracking-[0.2em] uppercase">Flight Deals</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 max-w-3xl tracking-tight">
            Access Fares Before<br />They Disappear.
          </h1>
          <p className="text-white/65 text-base md:text-lg mb-10 max-w-lg font-light leading-relaxed">
            We book flights through Sabre GDS — the professional airline system — giving you fares, routes, and flexibility that simply don't exist on any consumer booking platform.
          </p>
          <a
            href="https://tally.so/r/9qZjB4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/60 text-white font-semibold text-sm tracking-wide hover:bg-white/10 hover:border-white transition-all whitespace-nowrap cursor-pointer w-fit"
          >
            Get Your Flight Details
            <i className="ri-arrow-right-line"></i>
          </a>
        </div>
      </section>

      {/* Sabre GDS Callout */}
      <section className="py-16 bg-[#0f1c19]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-3">Professional System</p>
              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4">
                We Use Sabre GDS
              </h2>
              <p className="text-white/55 text-sm leading-relaxed max-w-lg">
                Sabre is the global distribution system used by airlines, major travel agencies, and corporate travel managers worldwide. It gives us access to inventory, fares, and booking options that are simply not available on Skyscanner, Google Flights, or any consumer platform. This is the same system airlines use internally.
              </p>
            </div>
            <div className="flex-shrink-0 grid grid-cols-2 gap-4">
              {[
                { value: "400+", label: "Airlines" },
                { value: "175+", label: "Countries" },
                { value: "3 Days", label: "Fare Hold" },
                { value: "24/7", label: "Support" },
              ].map((s) => (
                <div key={s.label} className="bg-white/5 border border-white/10 p-6 text-center">
                  <p className="text-2xl font-black text-white">{s.value}</p>
                  <p className="text-white/40 text-xs uppercase tracking-widest mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-3">Why Book Through Us</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#0f1c19] leading-tight">
              What You Get That<br />Others Can't Offer
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100">
            {advantages.map((a) => (
              <div key={a.title} className="bg-white p-8">
                <div className="w-10 h-10 flex items-center justify-center mb-5">
                  <i className={`${a.icon} text-2xl text-[#0f1c19]`}></i>
                </div>
                <h3 className="text-[#0f1c19] font-bold text-base mb-3">{a.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-24 bg-[#f7f5f2]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-3">Routes We Cover</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#0f1c19] leading-tight">
              Global Departures
            </h2>
            <p className="text-gray-400 text-sm mt-4 max-w-lg leading-relaxed">
              Flying from Karachi, Lahore, or Islamabad — we connect you to destinations across Europe, Asia, the Americas, Africa, and beyond.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 mt-10">
            {routes.map((r) => (
              <div key={`${r.from}-${r.to}`} className="bg-white p-6 group cursor-pointer hover:bg-[#0f1c19] transition-colors duration-300">
                <span className="inline-block px-2 py-0.5 bg-gray-100 group-hover:bg-white/10 text-gray-500 group-hover:text-white/50 text-[10px] font-semibold uppercase tracking-widest mb-4 transition-colors">
                  {r.tag}
                </span>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[#0f1c19] group-hover:text-white font-black text-lg transition-colors">{r.from}</span>
                  <i className="ri-arrow-right-line text-gray-300 group-hover:text-white/30 transition-colors"></i>
                  <span className="text-[#0f1c19] group-hover:text-white font-black text-lg transition-colors">{r.to}</span>
                </div>
                <p className="text-gray-400 group-hover:text-white/45 text-xs transition-colors">{r.via}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-4">Ready to Fly?</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#0f1c19] mb-6">Get Your Flight Details Now</h2>
          <p className="text-gray-400 text-base mb-10 max-w-md mx-auto leading-relaxed">
            Share your travel dates and destination — we'll come back with options you won't find anywhere else.
          </p>
          <a
            href="https://tally.so/r/9qZjB4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 bg-[#0f1c19] text-white font-semibold text-sm tracking-wide hover:bg-[#1a2e2a] transition-all whitespace-nowrap cursor-pointer"
          >
            Enquire About Flights
            <i className="ri-arrow-right-line"></i>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
