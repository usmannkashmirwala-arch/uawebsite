import HeroNavbar from "@/components/feature/HeroNavbar";
import Footer from "@/components/feature/Footer";
import { Link } from "react-router-dom";

const values = [
  {
    icon: "ri-group-line",
    title: "Small Groups Only",
    desc: "We cap every tour at 12 people. No crowded buses, no rushed itineraries. Just a tight-knit group of like-minded travellers.",
  },
  {
    icon: "ri-star-line",
    title: "Niche Destinations",
    desc: "We go where most agencies don't. Carefully researched journeys to places that most travellers never find.",
  },
  {
    icon: "ri-shield-check-line",
    title: "Everything Included",
    desc: "Flights, hotels, transfers, experiences, all arranged and confirmed before you leave. No surprises.",
  },
  {
    icon: "ri-heart-line",
    title: "Community of Travellers",
    desc: "Our tours attract experienced, curious travellers. You'll leave with new friends who share your passion for the world.",
  },
];

const tours = [
  {
    title: "Tomorrowland Packages",
    subtitle: "Belgium · Annual Music Festival",
    desc: "The world's greatest music festival. We handle flights, hotels near the venue, festival tickets, and transfers, so you just show up and experience it.",
    tag: "Limited Spots",
    tagColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    image: "https://storage.readdy-site.link/project_files/79967ff0-018e-4818-aac4-172f0e8c5494/a9a10ef5-03c3-4fb7-9e48-d272bf652c5e_Home-Global-Tours-Service-Image-.jpg?v=615e7b2b34d9cf93b6ec670fb4a1ec0c",
    link: "/tomorrowland",
    cta: "View Tomorrowland Packages",
  },
  {
    title: "Full Moon Festival",
    subtitle: "Koh Phangan, Thailand · Monthly",
    desc: "The legendary Full Moon Party on Koh Phangan. We arrange the full Thailand experience, Bangkok, islands, and the festival itself.",
    tag: "Filling Fast",
    tagColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    image: "https://readdy.ai/api/search-image?query=Full%20Moon%20Party%20Koh%20Phangan%20Thailand%20beach%20night%20festival%20fire%20dancers%20neon%20lights%20ocean%20tropical%20island%20celebration%20vibrant%20atmosphere&width=800&height=600&seq=fullmoon1&orientation=landscape",
    link: "/full-moon-festival",
    cta: "View Full Moon Packages",
  },
];

export default function GroupToursPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero + Navbar combined */}
      <section className="relative w-full min-h-[90vh] flex flex-col overflow-hidden">
        <img
          src="https://readdy.ai/api/search-image?query=small%20group%20of%20travellers%20exploring%20ancient%20ruins%20dramatic%20landscape%20adventure%20niche%20destination%20cinematic%20golden%20hour%20atmospheric%20moody%20premium%20travel&width=1600&height=900&seq=tourshero1&orientation=landscape"
          alt="Group Tours"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/65" />

        <HeroNavbar />

        <div className="relative z-10 flex-1 flex flex-col justify-end pb-24 px-8 md:px-16 lg:px-24 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-white/60" />
            <span className="text-white/70 text-xs font-medium tracking-[0.2em] uppercase">Group Tours</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 max-w-3xl tracking-tight">
            Tours Beyond<br />The Obvious.
          </h1>
          <p className="text-white/65 text-base md:text-lg mb-10 max-w-lg font-light leading-relaxed">
            We create tours for people who are done with the obvious. No crowded itineraries. No tourist traps. Just carefully researched journeys to places that most travellers never find.
          </p>
          <a
            href="https://tally.so/r/9qZjB4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/60 text-white font-semibold text-sm tracking-wide hover:bg-white/10 hover:border-white transition-all whitespace-nowrap cursor-pointer w-fit"
          >
            Explore Our Tours
            <i className="ri-arrow-right-line"></i>
          </a>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-3">Our Philosophy</p>
              <h2 className="text-4xl md:text-5xl font-black text-[#0f1c19] leading-tight">
                Why Our Tours<br />Are Different
              </h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              We want to build a community of experienced travellers who seek the finest experiences, not just another holiday.
            </p>
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

      {/* Tour Cards */}
      <section className="py-24 bg-[#f7f5f2]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-3">Current Tours</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#0f1c19] leading-tight">
              Join Us On Our<br />Next Journey
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {tours.map((tour) => (
              <div key={tour.title} className="group relative overflow-hidden cursor-pointer">
                <div className="w-full h-[420px] overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute top-5 left-5">
                  <span className={`px-3 py-1 text-[10px] font-semibold uppercase tracking-widest border ${tour.tagColor}`}>
                    {tour.tag}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-white/50 text-[10px] font-semibold uppercase tracking-widest mb-2">{tour.subtitle}</p>
                  <h3 className="text-white font-black text-3xl mb-3">{tour.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm">{tour.desc}</p>
                  <Link
                    to={tour.link}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0f1c19] font-semibold text-sm tracking-wide hover:bg-white/90 transition-all whitespace-nowrap cursor-pointer"
                  >
                    {tour.cta}
                    <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0f1c19]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-4">Don&apos;t See a Tour?</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">We Can Build One For You</h2>
          <p className="text-white/45 text-base mb-10 max-w-md mx-auto leading-relaxed">
            Have a destination in mind? A festival you want to attend? A group of friends ready to go? Tell us and we'll make it happen.
          </p>
          <a
            href="https://tally.so/r/9qZjB4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-[#0f1c19] font-semibold text-sm tracking-wide hover:bg-white/90 transition-all whitespace-nowrap cursor-pointer"
          >
            Enquire About a Custom Tour
            <i className="ri-arrow-right-line"></i>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
