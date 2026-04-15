import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="py-24 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="relative overflow-hidden">
          <div className="w-full h-[420px] md:h-[500px]">
            <img
              src="https://readdy.ai/api/search-image?query=aerial%20view%20tropical%20beach%20paradise%20turquoise%20water%20white%20sand%20palm%20trees%20dramatic%20sunset%20golden%20hour%20cinematic%20wide%20angle%20stunning&width=1400&height=500&seq=cta1&orientation=landscape"
              alt="Plan your adventure"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50 mb-4">Ready to Explore?</p>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 max-w-xl">
              Explore the World with UA Travels
            </h2>
            <p className="text-white/55 text-base mb-10 max-w-md leading-relaxed">
              Discover new destinations and exclusive offers. Your next adventure is one conversation away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://tally.so/r/9qZjB4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-[#0f1c19] font-semibold text-sm tracking-wide transition-all whitespace-nowrap cursor-pointer hover:bg-white/90"
              >
                Explore Your Options
                <i className="ri-arrow-right-line"></i>
              </a>
              <Link
                to="/customised-packages"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/40 text-white font-semibold text-sm tracking-wide hover:border-white hover:bg-white/10 transition-all whitespace-nowrap cursor-pointer"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
