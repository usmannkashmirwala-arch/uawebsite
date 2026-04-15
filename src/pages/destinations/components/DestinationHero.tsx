export default function DestinationHero() {
  return (
    <section className="relative h-[420px] md:h-[520px] overflow-hidden">
      <img
        src="https://readdy.ai/api/search-image?query=world%20map%20travel%20destinations%20globe%20adventure%20aerial%20view%20dramatic%20clouds%20continents%20vibrant%20colors%20cinematic%20wide%20angle&width=1600&height=520&seq=desthero&orientation=landscape"
        alt="Destinations hero"
        className="w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <span className="text-orange-400 text-sm font-bold uppercase tracking-widest mb-4">Discover the World</span>
        <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4">
          Explore Our Destinations
        </h1>
        <p className="text-white/80 text-lg max-w-xl">
          From tropical paradises to ancient wonders — find your perfect destination and start planning your dream trip.
        </p>
      </div>
    </section>
  );
}
