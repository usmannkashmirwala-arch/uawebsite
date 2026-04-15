import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    image: "https://readdy.ai/api/search-image?query=dramatic%20aerial%20view%20Santorini%20Greece%20white%20buildings%20blue%20domes%20cliffside%20turquoise%20sea%20golden%20sunset%20vibrant%20colors%20stunning%20panoramic&width=1600&height=900&seq=hero1&orientation=landscape",
    location: "Santorini, Greece",
    tagline: "Travel The World With Us",
    sub: "We make international travel economical, transparent, and stress free.",
  },
  {
    id: 2,
    image: "https://readdy.ai/api/search-image?query=Bali%20Indonesia%20lush%20tropical%20jungle%20waterfall%20rice%20terraces%20ancient%20temple%20dramatic%20misty%20mountains%20vibrant%20green%20paradise%20exotic&width=1600&height=900&seq=hero2&orientation=landscape",
    location: "Bali, Indonesia",
    tagline: "Lose Yourself in Paradise",
    sub: "Expert planned itineraries built around your personality, pace, and interests.",
  },
  {
    id: 3,
    image: "https://readdy.ai/api/search-image?query=Kenya%20Africa%20safari%20savanna%20golden%20hour%20elephants%20lions%20dramatic%20orange%20sunset%20vast%20plains%20wildlife%20adventure%20cinematic&width=1600&height=900&seq=hero3&orientation=landscape",
    location: "Masai Mara, Kenya",
    tagline: "The Wild Calls Your Name",
    sub: "Small-group tours to niche destinations, curated experiences with like-minded travellers.",
  },
  {
    id: 4,
    image: "https://readdy.ai/api/search-image?query=Machu%20Picchu%20Peru%20ancient%20Inca%20ruins%20dramatic%20mountain%20peaks%20misty%20clouds%20lush%20green%20terraces%20mystical%20atmosphere%20adventure&width=1600&height=900&seq=hero4&orientation=landscape",
    location: "Machu Picchu, Peru",
    tagline: "Conquer the Impossible",
    sub: "30+ years of expertise. Your adventure starts with one conversation.",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback((idx: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 400);
  }, [animating]);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5500);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative w-full h-screen min-h-[640px] overflow-hidden">
      {/* Background Images */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          <img
            src={s.image}
            alt={s.location}
            className="w-full h-full object-cover object-top"
          />
        </div>
      ))}

      {/* Overlay — subtle, not heavy */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/65" />

      {/* Content — left-aligned like the reference */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-24 px-8 md:px-16 lg:px-24 max-w-7xl mx-auto w-full">
        <div className={`transition-all duration-600 ${animating ? "opacity-0 translate-y-6" : "opacity-100 translate-y-0"}`}>
          {/* Location tag */}
          <div className="flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-white/60" />
            <span className="text-white/70 text-xs font-medium tracking-[0.2em] uppercase">{slide.location}</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.0] mb-6 max-w-3xl tracking-tight">
            {slide.tagline}
          </h1>
          <p className="text-white/65 text-base md:text-lg mb-10 max-w-lg font-light leading-relaxed">{slide.sub}</p>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a
              href="https://tally.so/r/9qZjB4"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 border border-white/60 text-white font-semibold text-sm tracking-wide transition-all duration-200 whitespace-nowrap cursor-pointer hover:bg-white/10 hover:border-white"
            >
              Plan My Trip Now
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3.5 border border-white/50 text-white font-semibold text-sm tracking-wide hover:border-white hover:bg-white/10 transition-all duration-200 whitespace-nowrap cursor-pointer"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>

      {/* Slide counter — bottom right */}
      <div className="absolute bottom-10 right-8 md:right-16 z-10 flex items-center gap-4">
        <span className="text-white/50 text-xs tracking-widest font-light">
          {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                i === current ? "w-6 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/35 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Arrow Controls */}
      <button
        onClick={() => goTo((current - 1 + slides.length) % slides.length)}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center border border-white/30 text-white hover:bg-white/15 transition-all cursor-pointer"
        aria-label="Previous slide"
      >
        <i className="ri-arrow-left-s-line text-xl"></i>
      </button>
      <button
        onClick={() => goTo((current + 1) % slides.length)}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center border border-white/30 text-white hover:bg-white/15 transition-all cursor-pointer"
        aria-label="Next slide"
      >
        <i className="ri-arrow-right-s-line text-xl"></i>
      </button>
    </section>
  );
}
