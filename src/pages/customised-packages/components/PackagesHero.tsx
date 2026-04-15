import { useEffect, useState } from "react";
import HeroNavbar from "@/components/feature/HeroNavbar";

export default function PackagesHero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col overflow-hidden">
      {/* Hero Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://static.readdy.ai/image/ab3e1b6ace2898e0dfaefcf807841ab1/22421e9f1c7e25c24b8ad66eb44fd2a3.jpeg)`,
          transform: `translateY(${scrollY * 0.25}px)`,
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/75" />

      <HeroNavbar />

      {/* Content — left-aligned, bottom */}
      <div className="relative z-10 flex-1 flex flex-col justify-end w-full max-w-7xl mx-auto px-6 md:px-10 pb-16">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-8 h-px bg-white/50" />
          <span className="text-white/60 text-[11px] font-medium tracking-[0.2em] uppercase">Tailored for You</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.0] mb-5 tracking-tight max-w-3xl">
          Travel Packages<br />
          <span className="text-white/60">Built Around You</span>
        </h1>
        <p className="text-white/55 text-base md:text-lg max-w-xl mb-8 leading-relaxed font-light">
          Complete travel experiences tailored to your personality, pace, and interests, using professional airline systems and 30+ years of expertise.
        </p>
        <a
          href="https://tally.so/r/9qZjB4"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-white/60 text-white font-semibold px-8 py-3.5 text-sm tracking-wide transition-all duration-200 whitespace-nowrap cursor-pointer hover:bg-white/10 hover:border-white w-fit"
        >
          Get Your Package Quote
          <i className="ri-arrow-right-line"></i>
        </a>
      </div>
    </section>
  );
}
