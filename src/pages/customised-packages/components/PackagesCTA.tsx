export default function PackagesCTA() {
  return (
    <section
      className="relative py-24 flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(https://static.readdy.ai/image/ab3e1b6ace2898e0dfaefcf807841ab1/448799fb6d3fd5551f6bd34c41cfd412.jpeg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#0f1c19]/88" />
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/35 mb-4">Ready to Explore?</p>
        <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
          Ready to Plan Your Perfect Trip?
        </h2>
        <p className="text-white/45 text-base mb-10 leading-relaxed">
          Tell us where you want to go — we'll handle everything from there.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://tally.so/r/9qZjB4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#0f1c19] font-semibold px-8 py-3.5 text-sm tracking-wide transition-all whitespace-nowrap cursor-pointer hover:bg-white/90"
          >
            Get Your Package Quote
            <i className="ri-arrow-right-line"></i>
          </a>
          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/25 text-white/70 font-semibold px-8 py-3.5 text-sm tracking-wide hover:border-white/50 hover:text-white transition-all whitespace-nowrap cursor-pointer"
          >
            <i className="ri-whatsapp-line"></i>
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
