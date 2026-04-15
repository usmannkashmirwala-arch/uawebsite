import HeroNavbar from "@/components/feature/HeroNavbar";
import Footer from "@/components/feature/Footer";

const fullMadnessIncludes = [
  "Tomorrowland Full Madness Ticket",
  "Direct Return Flights (KHI/LHE)",
  "Central Bangkok Hotel with Breakfast (8th - 10th)",
  "Central Pattaya Hotel with Breakfast (10th - 15th)",
  "Refundable",
];

const infiniteMadnessIncludes = [
  "Higher Chance of Securing Tomorrowland Full Madness Ticket",
  "Tomorrowland Party Shuttles Daily to and from Festival",
  "Tomorrowland Souvenir Bag",
  "Direct Return Flights (KHI/LHE)",
  "Central Bangkok Hotel with Breakfast (8th - 10th)",
  "(Premium) Central Pattaya Hotel with Breakfast (10th - 15th)",
  "Refundable",
];

const journey = [
  {
    date: "Dec 8–10",
    location: "Bangkok",
    desc: "Arrive, settle in, and dive headfirst into one of Asia's most electric cities. Street food, skylines, and the beginning of something unforgettable.",
  },
  {
    date: "Dec 10–14",
    location: "Pattaya",
    desc: "Festival mode ON. Four days in the heart of the action. Tomorrowland days, hotel vibes, and nights you'll be telling stories about for years.",
  },
  {
    date: "Dec 15",
    location: "Fly Home",
    desc: "Direct return flights from KHI/LHE. Pack the memories, leave nothing else behind.",
  },
];

export default function TomorrowlandPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative w-full min-h-[90vh] flex flex-col overflow-hidden">
        <img
          src="https://cdn.durable.co/covers/avsxWRxxZbhuPEDlGQE9ap5egdTaTedWmi2WvXVBMZoAjuJsS4AptSEo8so4Zc0n.jpg"
          alt="Tomorrowland Thailand"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/30 to-black/75" />
        <HeroNavbar />
        <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center pb-16 px-6 max-w-5xl mx-auto w-full">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#b8a98a] mb-5">
            BANGKOK &rarr; PATTAYA &rarr; TOMORROWLAND
          </p>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-5 tracking-tight">
            The Tomorrowland<br />Experience
          </h1>
          <p className="text-white/70 text-lg md:text-xl font-light tracking-wide mb-10">
            8th &ndash; 15th December
          </p>
          <a
            href="#packages"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/60 text-white font-semibold text-sm tracking-wide hover:bg-white/10 hover:border-white transition-all whitespace-nowrap cursor-pointer"
          >
            View Packages
            <i className="ri-arrow-down-line"></i>
          </a>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#b8a98a] mb-4">Choose Your Experience</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#0f1c19] leading-tight">Our Packages</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

            {/* Full Madness */}
            <div className="border border-gray-200 p-8 flex flex-col gap-6">
              <div>
                <h3 className="text-[#0f1c19] font-black text-2xl mb-2">Full Madness Package</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Step into the madness and experience Tomorrowland in Thailand with everything taken care of.</p>
              </div>
              <hr className="border-gray-100" />
              <div>
                <p className="text-[11px] uppercase tracking-widest text-gray-400 mb-1">Price per package</p>
                <p className="text-4xl font-black text-[#0f1c19]">PKR 470,000</p>
                <p className="text-xs text-[#b8a98a] font-semibold mt-1 uppercase tracking-widest">Deadline: 24th February</p>
              </div>
              <a
                href="https://tally.so/r/9qZjB4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0f1c19] text-white font-semibold text-sm tracking-wide hover:bg-[#1a2e2a] transition-all whitespace-nowrap cursor-pointer"
              >
                Register Now
                <i className="ri-arrow-right-line"></i>
              </a>
              <hr className="border-gray-100" />
              <ul className="flex flex-col gap-3">
                {fullMadnessIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="ri-check-line text-[#b8a98a] text-base"></i>
                    </div>
                    <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Infinite Madness */}
            <div className="border border-[#0f1c19] p-8 flex flex-col gap-6 relative">
              <div className="absolute top-0 right-0 bg-[#0f1c19] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5">
                Best Experience
              </div>
              <div>
                <h3 className="text-[#0f1c19] font-black text-2xl mb-2">Infinite Madness Package</h3>
                <p className="text-gray-500 text-sm leading-relaxed">This is Tomorrowland without limits and with the people of tomorrow.</p>
              </div>
              <hr className="border-gray-100" />
              <div>
                <p className="text-[11px] uppercase tracking-widest text-gray-400 mb-1">Price per package</p>
                <p className="text-4xl font-black text-[#0f1c19]">PKR 770,000</p>
                <p className="text-xs text-[#b8a98a] font-semibold mt-1 uppercase tracking-widest">Deadline: 4th March</p>
              </div>
              <a
                href="https://tally.so/r/9qZjB4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#b8a98a] text-[#0f1c19] font-semibold text-sm tracking-wide hover:bg-[#a89878] transition-all whitespace-nowrap cursor-pointer"
              >
                Register Now
                <i className="ri-arrow-right-line"></i>
              </a>
              <hr className="border-gray-100" />
              <ul className="flex flex-col gap-3">
                {infiniteMadnessIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="ri-check-line text-[#b8a98a] text-base"></i>
                    </div>
                    <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-24 bg-[#f7f5f2]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#b8a98a] mb-4">Day by Day</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#0f1c19] leading-tight">The Journey</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200">
            {journey.map((step, i) => (
              <div key={step.date} className="bg-white p-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#b8a98a] mb-2">Step {i + 1}</p>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">{step.date}</p>
                <h3 className="text-[#0f1c19] font-black text-xl mb-4">{step.location}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Payment Works */}
      <section className="py-24 bg-[#0f1c19]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#b8a98a] mb-4">Transparent &amp; Fair</p>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-8">How Payment Works</h2>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center border border-white/20 flex-shrink-0 mt-0.5">
                    <span className="text-white/60 text-xs font-bold">01</span>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">We only take <strong className="text-white">50% upfront</strong>. Once your Tomorrowland ticket is secured, we collect the remaining 50%.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center border border-white/20 flex-shrink-0 mt-0.5">
                    <span className="text-white/60 text-xs font-bold">02</span>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">If we&apos;re unable to get your ticket, we <strong className="text-white">refund 100%</strong> of your payment.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center border border-white/20 flex-shrink-0 mt-0.5">
                    <span className="text-white/60 text-xs font-bold">03</span>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">The advance is required because without it, we&apos;d carry all the risk if you change your mind after we&apos;ve already committed to purchasing your ticket.</p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 p-8">
              <div className="w-10 h-10 flex items-center justify-center mb-5">
                <i className="ri-group-line text-2xl text-[#b8a98a]"></i>
              </div>
              <h3 className="text-white font-black text-xl mb-4">Group of 4 or More?</h3>
              <p className="text-white/55 text-sm leading-relaxed mb-6">
                Contact us and we&apos;ll arrange all transportation and put together a custom package to make things easy for you.
              </p>
              <a
                href="https://tally.so/r/9qZjB4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white text-sm font-semibold hover:bg-white/10 hover:border-white transition-all whitespace-nowrap cursor-pointer"
              >
                Contact Us
                <i className="ri-arrow-right-line"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sign-off */}
      <section className="py-12 bg-[#f7f5f2] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <p className="text-gray-500 text-sm leading-relaxed">
            Have fun, and <strong className="text-[#0f1c19]">NEVER STOP EXPLORING.</strong>
          </p>
          <p className="text-gray-400 text-sm mt-1">— UA Travels &amp; Tours</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
