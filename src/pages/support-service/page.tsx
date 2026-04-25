import HeroNavbar from "@/components/feature/HeroNavbar";
import Footer from "@/components/feature/Footer";

const scenarios = [
  {
    icon: "ri-flight-land-line",
    title: "Missed Connection",
    desc: "Your connecting flight was cancelled. We rebook you on the next available option and handle the airline on your behalf while you're still at the airport.",
  },
  {
    icon: "ri-hotel-line",
    title: "Hotel Issue",
    desc: "Your room isn't what was booked. We call the hotel directly, escalate if needed, and find an alternative if the situation can't be resolved.",
  },
  {
    icon: "ri-passport-line",
    title: "Visa Problem Abroad",
    desc: "An unexpected entry issue at the border. We advise immediately on your options and connect you with the right resources.",
  },
  {
    icon: "ri-hospital-line",
    title: "Medical Emergency",
    desc: "You or a travel companion needs urgent medical attention. We coordinate with your travel insurance and help navigate local healthcare.",
  },
  {
    icon: "ri-luggage-cart-line",
    title: "Lost Luggage",
    desc: "Your bags didn't arrive. We file the claim with the airline on your behalf and track the resolution so you don't have to.",
  },
  {
    icon: "ri-calendar-close-line",
    title: "Trip Disruption",
    desc: "A natural event, strike, or political situation affects your plans. We assess the situation and advise on the safest course of action.",
  },
];

const channels = [
  { icon: "ri-whatsapp-line", label: "WhatsApp", desc: "Fastest response. Message us anytime." },
  { icon: "ri-phone-line", label: "Phone Call", desc: "Direct line to your travel advisor." },
  { icon: "ri-mail-line", label: "Email", desc: "For detailed queries and documentation." },
];

export default function SupportServicePage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero + Navbar combined */}
      <section className="relative w-full min-h-[90vh] flex flex-col overflow-hidden">
        <img
          src="https://static.readdy.ai/image/ab3e1b6ace2898e0dfaefcf807841ab1/2ec7b643aac345e59b7c0c58a9b83316.jpeg"
          alt="24/7 Support Service"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/65" />

        <HeroNavbar />

        <div className="relative z-10 flex-1 flex flex-col justify-end pb-24 px-8 md:px-16 lg:px-24 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-white/60" />
            <span className="text-white/70 text-xs font-medium tracking-[0.2em] uppercase">24/7 Support</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 max-w-3xl tracking-tight">
            An Experienced Advisor<br />Wherever You Are.
          </h1>
          <p className="text-white/65 text-base md:text-lg mb-10 max-w-lg font-light leading-relaxed">
            While online portals sell tickets, we stay with you. Our travel advisors are available around the clock. Someone who knows your trip, understands your situation, and can act on your behalf immediately.
          </p>
          <a
            href="https://wa.me/923338286879"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/60 text-white font-semibold text-sm tracking-wide hover:bg-white/10 hover:border-white transition-all whitespace-nowrap cursor-pointer w-fit"
          >
            Contact Us Now
            <i className="ri-arrow-right-line"></i>
          </a>
        </div>
      </section>

      {/* The Difference */}
      <section className="py-24 bg-[#0f1c19]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-3">The Difference</p>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
                Real Humans.<br />Not Chatbots.
              </h2>
              <p className="text-white/55 text-sm leading-relaxed mb-6">
                When something goes wrong at 2am in a foreign country, you don't want to navigate an automated phone system or wait 48 hours for an email response. You want to speak to someone who knows your booking, understands the situation, and can take action immediately.
              </p>
              <p className="text-white/55 text-sm leading-relaxed">
                That's what we provide. Every client has direct access to their travel advisor, not a call centre, not a ticketing system. A real person who booked your trip and knows every detail of it.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-px bg-white/10">
              {channels.map((c) => (
                <div key={c.label} className="bg-[#0f1c19] p-6 flex items-center gap-5">
                  <div className="w-12 h-12 flex items-center justify-center border border-white/15 flex-shrink-0">
                    <i className={`${c.icon} text-xl text-white/60`}></i>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm mb-1">{c.label}</h3>
                    <p className="text-white/40 text-xs">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-3">When You Need Us</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#0f1c19] leading-tight">
              We Handle the<br />Unexpected
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100">
            {scenarios.map((s) => (
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

      {/* Stats */}
      <section className="py-16 bg-[#f7f5f2]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-gray-200">
            {[
              { value: "24/7", label: "Availability" },
              { value: "&lt;15 min", label: "Avg Response Time" },
              { value: "30+", label: "Years Experience" },
              { value: "100%", label: "Client Dedication" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center lg:items-start lg:px-10 first:lg:pl-0 last:lg:pr-0">
                <p className="text-3xl font-black text-[#0f1c19] tracking-tight" dangerouslySetInnerHTML={{ __html: s.value }} />
                <p className="text-gray-400 text-xs mt-1 tracking-wide uppercase font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-4">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#0f1c19] mb-6">We&apos;re Here When You Need Us</h2>
          <p className="text-gray-400 text-base mb-10 max-w-md mx-auto leading-relaxed">
            Planning a trip or already travelling? Reach out and speak to a real advisor who can help.
          </p>
          <a
            href="https://wa.me/923338286879"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 bg-[#0f1c19] text-white font-semibold text-sm tracking-wide hover:bg-[#1a2e2a] transition-all whitespace-nowrap cursor-pointer"
          >
            Contact Your Advisor
            <i className="ri-arrow-right-line"></i>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
