const steps = [
  {
    num: "01",
    title: "Share Your Travel Plans",
    desc: "Tell us where you want to go, your dates, budget, and travel style. We listen carefully.",
    icon: "ri-chat-smile-2-line",
  },
  {
    num: "02",
    title: "We Do The Hard Work",
    desc: "We research flights, hotels, visas, and itineraries, building options tailored specifically for you.",
    icon: "ri-search-eye-line",
  },
  {
    num: "03",
    title: "You Choose & We Handle Everything",
    desc: "Review your personalised options, pick what fits best, and we handle everything from booking to landing.",
    icon: "ri-checkbox-circle-line",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-3">Simple Process</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#0f1c19] leading-tight">
              How It Works
            </h2>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Three simple steps; we take care of everything in between.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {steps.map((step, idx) => (
            <div key={step.num} className="flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[11px] font-semibold text-gray-300 tracking-widest">{step.num}</span>
                <div className="flex-1 h-px bg-gray-100" />
              </div>
              <div className="w-10 h-10 flex items-center justify-center mb-5">
                <i className={`${step.icon} text-2xl text-[#0f1c19]`}></i>
              </div>
              <h3 className="text-[#0f1c19] font-bold text-lg mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-10 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <p className="text-gray-400 text-sm max-w-md">
            Ready to start? Fill out a quick form and we'll get back to you within 24 hours.
          </p>
          <a
            href="https://tally.so/r/9qZjB4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0f1c19] hover:bg-[#1a2e2a] text-white font-semibold text-sm tracking-wide transition-all whitespace-nowrap cursor-pointer"
          >
            Start Planning My Trip
            <i className="ri-arrow-right-line"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
