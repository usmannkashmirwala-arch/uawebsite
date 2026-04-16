import HeroNavbar from "@/components/feature/HeroNavbar";
import Footer from "@/components/feature/Footer";

const values = [
  {
    icon: "ri-heart-line",
    title: "Relationship First",
    desc: "We build long-term relationships with our clients. Most of our business comes from repeat travellers and referrals, which tells us everything.",
  },
  {
    icon: "ri-eye-line",
    title: "Radical Transparency",
    desc: "No hidden fees, no inflated markups, no surprises. We tell you exactly what you're paying for and why.",
  },
  {
    icon: "ri-award-line",
    title: "Expertise Over Volume",
    desc: "We don't try to be the biggest agency. We focus on being the most knowledgeable and most trusted for the clients we serve.",
  },
  {
    icon: "ri-global-line",
    title: "Real World Knowledge",
    desc: "Our team has personally travelled to most of the destinations we recommend. We advise from experience, not brochures.",
  },
];

const milestones = [
  { year: "1990s", event: "Founded in Karachi with a focus on international airline ticketing and corporate travel." },
  { year: "2000s", event: "Expanded into customised leisure travel packages as demand for international tourism grew." },
  { year: "2010s", event: "Built exclusive hotel partnerships and launched visa assistance services for Pakistani travellers." },
  { year: "2020s", event: "Launched group tours to niche destinations and expanded our digital presence to serve clients across Pakistan." },
];

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero + Navbar combined */}
      <section className="relative w-full min-h-[90vh] flex flex-col overflow-hidden">
        <img
          src="https://static.readdy.ai/image/ab3e1b6ace2898e0dfaefcf807841ab1/be655cffda1ac56f80b6c257d992e2ff.jpeg"
          alt="About UA Travels"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/65" />

        <HeroNavbar />

        <div className="relative z-10 flex-1 flex flex-col justify-end pb-24 px-8 md:px-16 lg:px-24 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-white/60" />
            <span className="text-white/70 text-xs font-medium tracking-[0.2em] uppercase">About Us</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 max-w-3xl tracking-tight">
            Built on Legacy.
          </h1>
          <p className="text-white/65 text-base md:text-lg mb-10 max-w-lg font-light leading-relaxed">
            We are a family-run travel business shaped by decades of real industry experience. What began as a passion for travel and aviation has grown into a service-driven agency built on long-term relationships.
          </p>
          <a
            href="https://wa.me/message/S2FTRUXB6BO4F1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/60 text-white font-semibold text-sm tracking-wide hover:bg-white/10 hover:border-white transition-all whitespace-nowrap cursor-pointer w-fit"
          >
            Get In Touch
            <i className="ri-arrow-right-line"></i>
          </a>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-3">Our Story</p>
              <h2 className="text-4xl md:text-5xl font-black text-[#0f1c19] leading-tight mb-6">
                30+ Years of<br />Real Experience
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                UA Travels & Tours was founded in Karachi with a simple belief: travel should be economical, transparent, and stress-free. Over three decades, that belief has guided every decision we've made.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                We started with airline ticketing and corporate travel. As international tourism grew among Pakistani travellers, we expanded into customised leisure packages, hotel bookings, visa assistance, and group tours.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Today, we serve thousands of travellers every year, from first-time international travellers to seasoned explorers looking for something beyond the ordinary. Our clients come back because they trust us, and they refer their families and friends because we deliver.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-[480px] overflow-hidden">
                <img
                  src="https://static.readdy.ai/image/ab3e1b6ace2898e0dfaefcf807841ab1/e362408d69c2ac9338dd4c3dbb31ea64.jpeg"
                  alt="Karachi, Pakistan"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-[#0f1c19] p-6 hidden lg:block">
                <p className="text-3xl font-black text-white">30+</p>
                <p className="text-white/45 text-xs uppercase tracking-widest mt-1">Years in Business</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#0f1c19]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10">
            {[
              { value: "30+", label: "Years of Expertise" },
              { value: "12,000+", label: "Happy Travellers" },
              { value: "50+", label: "Countries Covered" },
              { value: "98%", label: "Satisfaction Rate" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center lg:items-start lg:px-10 first:lg:pl-0 last:lg:pr-0">
                <p className="text-3xl font-black text-white tracking-tight">{s.value}</p>
                <p className="text-white/45 text-xs mt-1 tracking-wide uppercase font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-3">What We Stand For</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#0f1c19] leading-tight">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100">
            {values.map((v) => (
              <div key={v.title} className="bg-white p-8">
                <div className="w-10 h-10 flex items-center justify-center mb-5">
                  <i className={`${v.icon} text-2xl text-[#0f1c19]`}></i>
                </div>
                <h3 className="text-[#0f1c19] font-bold text-base mb-3">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[#f7f5f2]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-3">Our Journey</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#0f1c19] leading-tight">
              Three Decades of Growth
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
            {milestones.map((m) => (
              <div key={m.year} className="bg-white p-8">
                <p className="text-4xl font-black text-[#0f1c19]/15 mb-4">{m.year}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0f1c19]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-4">Work With Us</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Let&apos;s Plan Your Next Trip</h2>
          <p className="text-white/45 text-base mb-10 max-w-md mx-auto leading-relaxed">
            Whether it's your first international trip or your fiftieth, we bring the same care and expertise to every journey.
          </p>
          <a
            href="https://wa.me/message/S2FTRUXB6BO4F1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-[#0f1c19] font-semibold text-sm tracking-wide hover:bg-white/90 transition-all whitespace-nowrap cursor-pointer"
          >
            Get In Contact With Us
            <i className="ri-arrow-right-line"></i>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
