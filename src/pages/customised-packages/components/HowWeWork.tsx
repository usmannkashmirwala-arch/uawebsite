export default function HowWeWork() {
  return (
    <section className="py-20 bg-[#f7f5f2]">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-3">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#0f1c19] leading-tight">How We Build Your Package</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          <div>
            <p className="text-gray-500 leading-relaxed mb-5 text-sm">
              We use <strong className="text-[#0f1c19]">Sabre airline systems</strong> — the same professional routing software used by airlines and corporate travel managers — giving us access to fare classes and routing combinations that consumer platforms simply don't show.
            </p>
            <p className="text-gray-500 leading-relaxed text-sm">
              Every package starts with a conversation. We learn where you want to go, your budget, who you're travelling with, and what matters most. Then we build something that fits.
            </p>
          </div>
          <div>
            <ul className="space-y-3">
              {[
                "Destination-specific hotel partner relationships",
                "Visa document guidance and application review",
                "Day-by-day itinerary structured to flow naturally",
                "Eliminates the 16% foreign transaction fee",
                "24/7 support throughout your journey",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-600 text-sm">
                  <span className="w-4 h-4 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="ri-check-line text-[#0f1c19] text-xs font-bold"></i>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Why Expertise Matters */}
        <div className="bg-[#0f1c19] p-8 md:p-12 text-white">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/35 mb-3">30+ Years of Experience</p>
          <h3 className="text-2xl font-black mb-4">Why Expertise Matters</h3>
          <p className="text-white/50 leading-relaxed mb-4 text-sm">
            Three decades of experience means we know which Rome experiences suit culture lovers versus shoppers, which Bangkok neighbourhoods have authentic street food, which Dubai activities engage teenagers, and which Paris museums are worth visiting.
          </p>
          <p className="text-white/50 leading-relaxed mb-8 text-sm">
            We make <strong className="text-white/80">personality-based recommendations</strong>. Tell us you're a foodie, an adventure seeker, a history enthusiast, or someone who prefers relaxation — and we recommend accordingly.
          </p>
          <a
            href="https://tally.so/r/9qZjB4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#0f1c19] font-semibold px-6 py-3 text-sm tracking-wide transition-all duration-200 whitespace-nowrap cursor-pointer hover:bg-white/90"
          >
            Ask Us About Complete Travel Packages
            <i className="ri-arrow-right-line"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
