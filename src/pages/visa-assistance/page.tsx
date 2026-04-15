import Footer from "@/components/feature/Footer";
import HeroNavbar from "@/components/feature/HeroNavbar";

const visaTypes = [
  {
    country: "Schengen (Europe)",
    flag: "🇪🇺",
    desc: "26 European countries on one visa. We guide you through the documentation, financial requirements, and embassy-specific nuances.",
    difficulty: "Moderate",
  },
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    desc: "UK Standard Visitor Visa with full documentation support. We know what the Home Office looks for.",
    difficulty: "Moderate",
  },
  {
    country: "United States",
    flag: "🇺🇸",
    desc: "B1/B2 Tourist & Business Visa. We prepare your DS-160, interview prep, and complete documentation package.",
    difficulty: "Complex",
  },
  {
    country: "Japan",
    flag: "🇯🇵",
    desc: "Japan Tourist Visa with full itinerary and hotel booking support. One of the most rewarding visas to obtain.",
    difficulty: "Moderate",
  },
  {
    country: "Thailand",
    flag: "🇹🇭",
    desc: "Visa on arrival and e-visa guidance. Simple process with the right preparation.",
    difficulty: "Easy",
  },
  {
    country: "Turkey",
    flag: "🇹🇷",
    desc: "E-visa and sticker visa options. We advise on the best route based on your travel history.",
    difficulty: "Easy",
  },
  {
    country: "Canada",
    flag: "🇨🇦",
    desc: "Temporary Resident Visa with biometrics. We handle the full application and advise on strengthening your profile.",
    difficulty: "Complex",
  },
  {
    country: "Australia",
    flag: "🇦🇺",
    desc: "Visitor Visa (subclass 600) with complete documentation and financial evidence preparation.",
    difficulty: "Moderate",
  },
];

const services = [
  {
    icon: "ri-passport-line",
    title: "Passport Strength Analysis",
    desc: "We assess your passport strength and travel history to advise on the most achievable visa strategy for your goals.",
  },
  {
    icon: "ri-file-list-3-line",
    title: "Document Checklist",
    desc: "A complete, personalised checklist based on your profile, covering employment, finances, travel history, and destination.",
  },
  {
    icon: "ri-bank-line",
    title: "Financial Evidence Guidance",
    desc: "We advise on exactly how to present your bank statements and financial documents to meet embassy requirements.",
  },
  {
    icon: "ri-map-2-line",
    title: "Itinerary Preparation",
    desc: "We prepare a detailed travel itinerary and hotel booking confirmations that satisfy embassy requirements.",
  },
  {
    icon: "ri-chat-check-line",
    title: "Interview Preparation",
    desc: "For US and UK visas, we prepare you for the consular interview with likely questions and strong answers.",
  },
  {
    icon: "ri-refresh-line",
    title: "Reapplication Strategy",
    desc: "If you've been refused before, we analyse the refusal and build a stronger application for your next attempt.",
  },
];

export default function VisaAssistancePage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero + Navbar combined */}
      <section className="relative w-full min-h-[90vh] flex flex-col overflow-hidden">
        {/* Background image */}
        <img
          src="https://static.readdy.ai/image/ab3e1b6ace2898e0dfaefcf807841ab1/b170816a52f40b8bdcf955983f11a5d8.jpeg"
          alt="Visa Assistance"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />

        {/* Navbar inside hero */}
        <HeroNavbar />

        {/* Hero content */}
        <div className="relative z-10 flex-1 flex flex-col justify-end pb-24 px-8 md:px-16 lg:px-24 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-white/60" />
            <span className="text-white/70 text-xs font-medium tracking-[0.2em] uppercase">Visa Assistance</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 max-w-3xl tracking-tight">
            Profile-Specific<br />Visa Guidance.
          </h1>
          <p className="text-white/65 text-base md:text-lg mb-10 max-w-lg font-light leading-relaxed">
            Visa rules change constantly. We guide you based on your passport strength, travel history, and destination, so you apply with confidence, not guesswork.
          </p>
          <a
            href="https://tally.so/r/9qZjB4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/60 text-white font-semibold text-sm tracking-wide hover:bg-white/10 hover:border-white transition-all whitespace-nowrap cursor-pointer w-fit"
          >
            Get Visa Guidance
            <i className="ri-arrow-right-line"></i>
          </a>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-3">Our Services</p>
              <h2 className="text-4xl md:text-5xl font-black text-[#0f1c19] leading-tight">
                What UA Travels<br />Offers for Visas
              </h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Missing even one document can lead to delays or rejection. We make sure that doesn&apos;t happen.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100">
            {services.map((s) => (
              <div key={s.title} className="bg-white p-8">
                <div className="w-10 h-10 flex items-center justify-center mb-5">
                  <i className={`${s.icon} text-2xl text-[#0f1c19]`}></i>
                </div>
                <h3 className="text-[#0f1c19] font-bold text-base mb-3">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-24 bg-[#f7f5f2]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-3">Destinations We Cover</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#0f1c19] leading-tight">
              130+ Destinations
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
            {visaTypes.map((v) => (
              <div key={v.country} className="bg-white p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{v.flag}</span>
                  <span className={`px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest ${
                    v.difficulty === "Easy" ? "bg-emerald-50 text-emerald-600" :
                    v.difficulty === "Moderate" ? "bg-amber-50 text-amber-600" :
                    "bg-red-50 text-red-600"
                  }`}>
                    {v.difficulty}
                  </span>
                </div>
                <h3 className="text-[#0f1c19] font-bold text-sm mb-2">{v.country}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="py-16 bg-[#0f1c19]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-white/20">
              <i className="ri-information-line text-white/60 text-xl"></i>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-3">Important Note</h3>
              <p className="text-white/50 text-sm leading-relaxed max-w-2xl">
                UA Travels provides visa documentation guidance and application support. We do not guarantee visa approval; that decision rests solely with the respective embassy or consulate. Our role is to ensure your application is as strong as possible based on your individual profile and travel history.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-4">Start Your Application</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#0f1c19] mb-6">Apply With Confidence</h2>
          <p className="text-gray-400 text-base mb-10 max-w-md mx-auto leading-relaxed">
            Tell us your destination and passport and we&apos;ll advise on the exact requirements for your profile.
          </p>
          <a
            href="https://tally.so/r/9qZjB4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 bg-[#0f1c19] text-white font-semibold text-sm tracking-wide hover:bg-[#1a2e2a] transition-all whitespace-nowrap cursor-pointer"
          >
            Get Visa Assistance
            <i className="ri-arrow-right-line"></i>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
