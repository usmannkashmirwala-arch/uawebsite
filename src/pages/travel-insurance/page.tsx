import HeroNavbar from "@/components/feature/HeroNavbar";
import Footer from "@/components/feature/Footer";

const coverageItems = [
  { icon: "ri-hospital-line", title: "Medical Emergencies", desc: "Coverage up to $100,000 for emergency medical treatment, hospitalisation, and evacuation abroad." },
  { icon: "ri-flight-land-line", title: "Trip Cancellation", desc: "Reimbursement for non-refundable costs if you need to cancel due to illness, family emergency, or covered events." },
  { icon: "ri-luggage-cart-line", title: "Lost Baggage", desc: "Compensation for lost, stolen, or damaged luggage and personal belongings during your trip." },
  { icon: "ri-time-line", title: "Flight Delays", desc: "Daily allowance for accommodation and meals if your flight is delayed beyond a specified threshold." },
  { icon: "ri-shield-cross-line", title: "Personal Liability", desc: "Protection if you accidentally cause injury or property damage to a third party while travelling." },
  { icon: "ri-heart-pulse-line", title: "Emergency Repatriation", desc: "Full coverage for emergency medical repatriation back to Pakistan if required." },
];

const countries = [
  { name: "Schengen Area", requirement: "Mandatory", minCoverage: "$30,000" },
  { name: "United Kingdom", requirement: "Strongly Advised", minCoverage: "$50,000" },
  { name: "United States", requirement: "Strongly Advised", minCoverage: "$100,000" },
  { name: "Australia", requirement: "Mandatory for Visa", minCoverage: "$50,000" },
  { name: "Canada", requirement: "Mandatory for Visa", minCoverage: "$50,000" },
  { name: "Japan", requirement: "Strongly Advised", minCoverage: "$30,000" },
  { name: "UAE", requirement: "Advised", minCoverage: "$25,000" },
  { name: "Thailand", requirement: "Advised", minCoverage: "$25,000" },
];

export default function TravelInsurancePage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero + Navbar combined */}
      <section className="relative w-full min-h-[90vh] flex flex-col overflow-hidden">
        <img
          src="https://static.readdy.ai/image/ab3e1b6ace2898e0dfaefcf807841ab1/6186dbc29fb8fd3da7eebf948bdc66b4.jpeg"
          alt="Travel Insurance"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/65" />

        <HeroNavbar />

        <div className="relative z-10 flex-1 flex flex-col justify-end pb-24 px-8 md:px-16 lg:px-24 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-white/60" />
            <span className="text-white/70 text-xs font-medium tracking-[0.2em] uppercase">Travel Insurance</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 max-w-3xl tracking-tight">
            Mandatory for Many.<br />Essential for All.
          </h1>
          <p className="text-white/65 text-base md:text-lg mb-10 max-w-lg font-light leading-relaxed">
            Many travellers only realise they need travel insurance at the last minute, often paying far more at the airport. We arrange embassy-recognised coverage quickly, correctly, and before it becomes a problem.
          </p>
          <a
            href="https://tally.so/r/9qZjB4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/60 text-white font-semibold text-sm tracking-wide hover:bg-white/10 hover:border-white transition-all whitespace-nowrap cursor-pointer w-fit"
          >
            Get Your Insurance Quote
            <i className="ri-arrow-right-line"></i>
          </a>
        </div>
      </section>

      {/* Why Through Us */}
      <section className="py-16 bg-[#0f1c19]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
            {[
              { icon: "ri-shield-check-line", title: "Embassy Recognised", desc: "Our insurance policies are accepted by Schengen embassies, UK Home Office, and other consulates worldwide." },
              { icon: "ri-money-dollar-circle-line", title: "Competitive Rates", desc: "Direct provider relationships mean we can offer better rates than what you'd find buying independently." },
              { icon: "ri-speed-line", title: "Fast Issuance", desc: "We can issue your policy within hours, even if your visa appointment is tomorrow." },
            ].map((item) => (
              <div key={item.title} className="bg-[#0f1c19] p-8">
                <div className="w-10 h-10 flex items-center justify-center mb-5">
                  <i className={`${item.icon} text-2xl text-white/60`}></i>
                </div>
                <h3 className="text-white font-bold text-base mb-3">{item.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-3">What&apos;s Covered</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#0f1c19] leading-tight">
              Comprehensive Coverage
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100">
            {coverageItems.map((item) => (
              <div key={item.title} className="bg-white p-8">
                <div className="w-10 h-10 flex items-center justify-center mb-5">
                  <i className={`${item.icon} text-2xl text-[#0f1c19]`}></i>
                </div>
                <h3 className="text-[#0f1c19] font-bold text-base mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Country Requirements */}
      <section className="py-24 bg-[#f7f5f2]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-3">By Destination</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#0f1c19] leading-tight">
              Insurance Requirements<br />by Country
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
            {countries.map((c) => (
              <div key={c.name} className="bg-white p-6">
                <h3 className="text-[#0f1c19] font-bold text-sm mb-3">{c.name}</h3>
                <div className="flex flex-col gap-2">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-0.5">Requirement</p>
                    <span className={`text-xs font-semibold ${
                      c.requirement === "Mandatory" || c.requirement === "Mandatory for Visa" ? "text-red-500" :
                      c.requirement === "Strongly Advised" ? "text-amber-500" : "text-emerald-600"
                    }`}>{c.requirement}</span>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-0.5">Min Coverage</p>
                    <span className="text-xs font-semibold text-[#0f1c19]">{c.minCoverage}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-4">Don&apos;t Travel Unprotected</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#0f1c19] mb-6">Get Covered Before You Go</h2>
          <p className="text-gray-400 text-base mb-10 max-w-md mx-auto leading-relaxed">
            Tell us your destination and travel dates and we'll arrange the right policy for your trip.
          </p>
          <a
            href="https://tally.so/r/9qZjB4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 bg-[#0f1c19] text-white font-semibold text-sm tracking-wide hover:bg-[#1a2e2a] transition-all whitespace-nowrap cursor-pointer"
          >
            Get Insurance Quote
            <i className="ri-arrow-right-line"></i>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
