import HeroNavbar from "@/components/feature/HeroNavbar";
import Footer from "@/components/feature/Footer";

const packageIncludes = [
  "Direct Return Flights (KHI/LHE)",
  "Direct flight from Bangkok to Phuket",
  "5 Star Hotels/Resorts in Bangkok, Koh Samui and Phuket",
  "Daily Breakfast Included",
  "Bangkok Sunset Dinner Cruise Included",
  "Koh Samui Jungle Safari By JEEP With Lunch Included",
  "Phi Phi Island Adventure Day Tour with Lunch from Phuket Included",
  "All Transfers Included",
  "Visa Included",
];

const journey = [
  {
    date: "May 27th",
    location: "Bangkok",
    desc: "Land at Suvarnabhumi International Airport at 6am. Get picked up from the airport, have a filling breakfast before check-in, then get ready for a sunset cruise at the Chao Phraya River at 7pm.",
  },
  {
    date: "May 28th–30th",
    location: "Bangkok (Free Days)",
    desc: "Be your own boss, roam around as you please. Explore the city at your own pace.",
  },
  {
    date: "May 30th",
    location: "Bangkok → Koh Samui",
    desc: "Fly from Bangkok to Phuket and use ferry transport to reach the island of Koh Samui.",
  },
  {
    date: "May 30th – June 2nd",
    location: "Koh Samui, Full Moon",
    desc: "Full Moon mode ON. Fire shows, neon lights, beach vibes, and nights you'll be telling stories about for years.",
  },
  {
    date: "June 2nd",
    location: "Koh Samui Jungle Safari",
    desc: "Go for the famous Jungle Safari by JEEP on Koh Samui island. Lunch included.",
  },
  {
    date: "June 3rd–5th",
    location: "Phuket",
    desc: "Sun, beaches, and the best of Thailand's island life. On June 5th, take a day trip to the renowned Phi Phi Island, with snorkelling and scuba diving at your convenience.",
  },
  {
    date: "June 6th",
    location: "Fly Home",
    desc: "Return flights from KHI/LHE. Pack the memories, leave nothing else behind.",
  },
];

export default function FullMoonFestivalPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative w-full min-h-[90vh] flex flex-col overflow-hidden">
        <img
          src="https://cdn.durable.co/covers/15SjAWAJecqGzbm9msq6APwBcnkwQ8evtaNo9U8PnemQ2QI9L7DttVozmGYlX4Rd.jpg"
          alt="Thailand Full Moon Festival"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/30 to-black/75" />
        <HeroNavbar />
        <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center pb-16 px-6 max-w-5xl mx-auto w-full">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#b8a98a] mb-5">
            BANGKOK &rarr; KOH SAMUI &rarr; PHUKET
          </p>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-5 tracking-tight uppercase">
            Thailand Full Moon<br />Festival
          </h1>
          <p className="text-white/70 text-lg md:text-xl font-light tracking-wide mb-10">
            26th May &ndash; 6th June
          </p>
          <a
            href="#package"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/60 text-white font-semibold text-sm tracking-wide hover:bg-white/10 hover:border-white transition-all whitespace-nowrap cursor-pointer"
          >
            View Package
            <i className="ri-arrow-down-line"></i>
          </a>
        </div>
      </section>

      {/* Limited spots banner */}
      <div className="bg-[#0f1c19] py-4">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-center gap-3">
          <i className="ri-group-line text-[#b8a98a] text-base"></i>
          <p className="text-white/80 text-sm font-medium tracking-wide">
            <strong className="text-white">Limited to 8–10 guests only</strong> for the best experience.
          </p>
        </div>
      </div>

      {/* Package */}
      <section id="package" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#b8a98a] mb-4">One Complete Package</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#0f1c19] leading-tight">Thailand Full Moon Package</h2>
            <p className="text-gray-400 text-sm mt-4 max-w-md mx-auto">Experience one of the world&apos;s most iconic beach events.</p>
          </div>

          <div className="max-w-2xl mx-auto border border-[#0f1c19] p-10 flex flex-col gap-8">
            <div>
              <p className="text-[11px] uppercase tracking-widest text-gray-400 mb-1">Price per package</p>
              <p className="text-5xl font-black text-[#0f1c19]">PKR 499,000</p>
            </div>
            <a
              href="https://wa.me/message/S2FTRUXB6BO4F1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0f1c19] text-white font-semibold text-sm tracking-wide hover:bg-[#1a2e2a] transition-all whitespace-nowrap cursor-pointer w-full"
            >
              Talk To Us
              <i className="ri-arrow-right-line"></i>
            </a>
            <hr className="border-gray-100" />
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#b8a98a] mb-5">Everything Included</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {packageIncludes.map((item) => (
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
          <div className="flex flex-col gap-px bg-gray-200">
            {journey.map((step, i) => (
              <div key={step.date} className="bg-white p-8 flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0 md:w-48">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#b8a98a] mb-1">Day {i + 1}</p>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">{step.date}</p>
                </div>
                <div className="flex-1">
                  <h3 className="text-[#0f1c19] font-black text-lg mb-2">{step.location}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sign-off */}
      <section className="py-12 bg-[#f7f5f2] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <p className="text-gray-500 text-sm leading-relaxed">
            Have fun, and <strong className="text-[#0f1c19]">NEVER STOP EXPLORING.</strong>
          </p>
          <p className="text-gray-400 text-sm mt-1">UA Travels &amp; Tours</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
